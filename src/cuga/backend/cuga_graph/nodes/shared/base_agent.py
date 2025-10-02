# agents/base_agent.py
import functools
import json
from typing import Literal

from loguru import logger
from abc import ABC

# from langchain_openai.chat_models import AzureChatOpenAI
try:
    from langchain_google_genai import ChatGoogleGenerativeAI
except ImportError:
    logger.warning("Langchain Google GenAI not installed, using OpenAI instead")
    ChatGoogleGenerativeAI = None

try:
    from langchain_groq import ChatGroq
except ImportError:
    ChatGroq = None
    logger.warning("Langchain Groq not installed, using OpenAI instead")

from langchain_ibm.chat_models import ChatWatsonx
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_core.language_models import BaseChatModel
from langchain_core.output_parsers import PydanticOutputParser

from loguru import logger

from cuga.backend.cuga_graph.nodes.api.api_planner_agent.prompts.load_prompt import (
    APIPlannerOutput,
    APIPlannerOutputLite,
    APIPlannerOutputWX,
)


def create_partial(func, **kwargs):
    partial_func = functools.partial(func, **kwargs)

    @functools.wraps(func)
    async def wrapper(*args, **kwargs):
        return await partial_func(*args, **kwargs)

    return wrapper


class BaseAgent(ABC):
    def __init__(self):
        pass

    @staticmethod
    def get_format_instructions(parser: PydanticOutputParser) -> str:
        """Return the format instructions for the JSON output.

        Returns:
            The format instructions for the JSON output.
        """
        # Copy schema to avoid altering original Pydantic schema.
        schema = dict(parser.pydantic_object.model_json_schema().items())

        # Remove extraneous fields.
        reduced_schema = schema
        if "title" in reduced_schema:
            del reduced_schema["title"]
        if "type" in reduced_schema:
            del reduced_schema["type"]
        # Ensure json in context is well-formed with double quotes.
        schema_str = json.dumps(reduced_schema, ensure_ascii=False)
        _FORMAT = """
Make sure to return ONLY an instance of JSON, NOT the schema itself. Do not add any additional information.
JSON schema:
{schema}
"""
        return _FORMAT.format(schema=schema_str)

    @staticmethod
    def get_chain(
        prompt_template: ChatPromptTemplate,
        llm: BaseChatModel,
        schema=None,
        wx_json_mode: Literal[
            'function_calling', 'json_mode', 'no_format', 'response_format'
        ] = 'response_format',
    ):
        if wx_json_mode == "no_format":
            return prompt_template | llm
        # if "rits" in llm.model_name:
        #     logger.debug("Rits model")
        #     parser = PydanticOutputParser(pydantic_object=schema)
        #     return prompt_template | llm.bind(extra_body={"guided_json": schema.model_json_schema()}) | parser
        if isinstance(llm, ChatWatsonx):
            logger.debug("Loading LLM for watsonx")
            model_id = llm.model_id
            if "gpt" not in model_id and (schema == APIPlannerOutput or schema == APIPlannerOutputLite):
                logger.debug("Switched to watsonx schema... for APIPlannerOutput")
                schema = APIPlannerOutputWX
            parser = PydanticOutputParser(pydantic_object=schema)
            if wx_json_mode == "response_format":
                chain = prompt_template | llm.with_structured_output(schema, method='json_schema')
            elif wx_json_mode == "function_calling" or wx_json_mode == "json_mode":
                chain = prompt_template | llm.with_structured_output(schema, method=wx_json_mode)
            else:
                chain = prompt_template | llm | parser

            chain = chain.with_retry(stop_after_attempt=3)
            return chain
        elif isinstance(llm, ChatOpenAI) and any(x in llm.model_name for x in ["GCP", "Claude"]):
            logger.debug("Getting model for Claude")
            # parser = PydanticOutputParser(pydantic_object=schema)
            return prompt_template | llm
        elif isinstance(llm, ChatOpenAI) or (ChatGroq is not None and isinstance(llm, ChatGroq)):
            logger.debug("Getting model for openai interface")
            chain = prompt_template | llm.with_structured_output(schema, method="json_schema")
            chain = chain.with_retry(stop_after_attempt=3)
            return chain
        else:
            logger.debug("Getting model for azure")
            return prompt_template | llm.with_structured_output(schema, method="json_schema")
