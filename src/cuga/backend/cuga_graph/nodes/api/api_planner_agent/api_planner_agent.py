from typing import Any

from langchain_core.messages import AIMessage
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.language_models import BaseChatModel
from cuga.backend.activity_tracker.tracker import ActivityTracker
from cuga.backend.cuga_graph.nodes.api.variables_manager.manager import VariablesManager
from cuga.backend.cuga_graph.nodes.shared.base_agent import BaseAgent
from cuga.backend.cuga_graph.state.agent_state import AgentState
from cuga.backend.cuga_graph.nodes.api.api_planner_agent.prompts.load_prompt import (
    APIPlannerOutput,
)
from cuga.backend.llm.models import LLMManager
from cuga.backend.llm.utils.helpers import load_prompt_simple
from cuga.config import settings
from cuga.configurations.instructions_manager import InstructionsManager

instructions_manager = InstructionsManager()
tracker = ActivityTracker()
llm_manager = LLMManager()
var_manager = VariablesManager()


class APIPlannerAgent(BaseAgent):
    def __init__(self, prompt_template: ChatPromptTemplate, llm: BaseChatModel, tools: Any = None):
        super().__init__()
        self.name = "APIPlannerAgent"
        self.chain = BaseAgent.get_chain(prompt_template=prompt_template, llm=llm, schema=APIPlannerOutput)

    def output_parser(result: AIMessage, name) -> Any:
        result = AIMessage(content=result.content, name=name)
        return result

    async def run(self, input_variables: AgentState) -> AIMessage:
        data = input_variables.model_dump()
        data['variables_summary'] = var_manager.get_variables_summary()
        data["instructions"] = instructions_manager.get_instructions(self.name)
        res = await self.chain.ainvoke(data)
        return AIMessage(content=res.model_dump_json())

    @staticmethod
    def create():
        dyna_model = settings.agent.planner.model
        return APIPlannerAgent(
            prompt_template=load_prompt_simple(
                "./prompts/system.jinja2",
                "./prompts/user.jinja2",
                model_config=dyna_model,
            ),
            llm=llm_manager.get_model(dyna_model),
        )
