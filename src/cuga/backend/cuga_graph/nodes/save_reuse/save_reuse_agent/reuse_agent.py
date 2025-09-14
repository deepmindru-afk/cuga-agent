from pathlib import Path
from typing import Any
import os

from langchain_core.messages import AIMessage
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.language_models import BaseChatModel

from cuga.backend.activity_tracker.tracker import ActivityTracker
from cuga.backend.cuga_graph.nodes.api.variables_manager.manager import VariablesManager
from cuga.backend.cuga_graph.nodes.shared.base_agent import BaseAgent
from cuga.backend.cuga_graph.state.agent_state import AgentState

from cuga.backend.cuga_graph.nodes.save_reuse.save_reuse_agent.utils.export_mcp import process_text_file
from cuga.backend.cuga_graph.nodes.save_reuse.save_reuse_agent.utils.save_reuse import consolidate_flow
from cuga.backend.llm.models import LLMManager
from cuga.backend.llm.utils.helpers import load_prompt_simple
from cuga.config import settings, PACKAGE_ROOT
import re

tracker = ActivityTracker()
llm_manager = LLMManager()
var_manager = VariablesManager()


def ensure_file_exists(file_path):
    """Ensure the file and its parent directories exist."""
    file_path = Path(file_path)

    # Create parent directories if they don't exist
    file_path.parent.mkdir(parents=True, exist_ok=True)

    # # Create empty file if it doesn't exist
    # if not file_path.exists():
    #     file_path.touch()

    return file_path


class ReuseAgent(BaseAgent):
    def __init__(self, prompt_template: ChatPromptTemplate, llm: BaseChatModel, tools: Any = None):
        super().__init__()
        self.name = "ReuseAgent"
        self.chain = BaseAgent.get_chain(prompt_template=prompt_template, llm=llm, wx_json_mode="no_format")
        self.vischain = BaseAgent.get_chain(
            prompt_template=load_prompt_simple(
                "./prompts/explainbility.jinja2",
                "./prompts/explainbility_user.jinja2",
            ),
            llm=llm,
            wx_json_mode="no_format",
        )

    def output_parser(self, result: AIMessage, name) -> Any:
        result = AIMessage(content=result.content, name=name)
        return result

    def get_text_after_last_backticks(self, text):
        last_backticks_pos = text.rfind("```")
        if last_backticks_pos == -1:
            return ""  # No backticks found
        return text[last_backticks_pos:]

    def save_html_to_file(self, html_content, filename):
        """
        Save HTML content to a file.

        Args:
            html_content (str): The HTML content to save
            filename (str): The path/name of the file to save to
        """
        with open(filename, 'w', encoding='utf-8') as file:
            file.write(html_content)
        print(f"HTML content saved to {filename}")

    async def run(self, input_variables: AgentState, additional_utterance="") -> AIMessage:
        res = await consolidate_flow(self.chain, input_variables.input + additional_utterance)
        pattern = r'```python\s*\n(.*?)\n```'
        matches = re.findall(pattern, res.content, re.DOTALL)
        res_html = await self.vischain.ainvoke(input={"code": matches[0]})
        pattern = r'```html\s*\n(.*?)\n```'
        matches = re.findall(pattern, res_html.content, re.DOTALL)
        self.save_html_to_file(
            matches[0], os.path.join(PACKAGE_ROOT, "backend", "server", "flows", "flow.html")
        )
        output_path = Path(
            os.path.join(PACKAGE_ROOT, "backend", "tools_env", "registry", "mcp_servers", "saved_flows.py")
        )
        ensure_file_exists(output_path)
        # success = process_text_file(input_text=res.content, output_file=output_path)
        process_text_file(input_text=res.content, output_file=output_path)
        return AIMessage(
            content="Flow Generalized successfully\n" + self.get_text_after_last_backticks(res.content)
        )

    @staticmethod
    def create():
        dyna_model = settings.agent.planner.model
        pmt = load_prompt_simple(
            "./prompts/save_reuse.jinja2",
            "./prompts/save_reuse_user.jinja2",
        )
        return ReuseAgent(
            prompt_template=pmt,
            llm=llm_manager.get_model(dyna_model),
        )
