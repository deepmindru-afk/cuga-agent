import json
from typing import Literal

from langgraph.graph.state import CompiledStateGraph

from cuga.backend.activity_tracker.tracker import ActivityTracker, Step
from cuga.backend.cuga_graph.nodes.api.variables_manager.manager import VariablesManager
from cuga.backend.cuga_graph.nodes.api.api_planner_agent.api_planner_agent import APIPlannerAgent
from cuga.backend.cuga_graph.nodes.api.api_planner_agent.prompts.load_prompt import (
    APIPlannerOutput,
    ActionName,
    APIPlannerInput,
)
from cuga.backend.cuga_graph.nodes.api.shortlister_agent.shortlister_agent import ShortlisterAgent
from cuga.backend.cuga_graph.nodes.shared.base_agent import create_partial
from cuga.backend.cuga_graph.nodes.shared.base_node import BaseNode
from cuga.backend.cuga_graph.state.agent_state import AgentState, SubTaskHistory
from langgraph.types import Command
from cuga.backend.cuga_graph.state.api_planner_history import HistoricalAction
from loguru import logger

from langgraph.prebuilt import create_react_agent
from langchain_core.tools import tool

from cuga.backend.llm.models import LLMManager
from cuga.backend.llm.utils.helpers import load_one_prompt
from cuga.config import settings
from cuga.configurations.instructions_manager import InstructionsManager

instructions_manager = InstructionsManager()
var_manager = VariablesManager()
tracker = ActivityTracker()
llm_manager = LLMManager()


@tool
def think(thought: str):
    """
    Use this tool to reflect and reason strategically.
    :param thought:
    :return:
    """
    return thought


class ApiPlanner(BaseNode):
    def __init__(self, router_agent: APIPlannerAgent):
        super().__init__()
        self.name = router_agent.name
        pmt_path = "reflection/prompts/system.jinja2"
        pmt = load_one_prompt(pmt_path)
        instructions = instructions_manager.get_instructions("api_reflection")
        pmt_text = pmt.format(instructions=instructions)
        self.guidance = create_react_agent(
            model=llm_manager.get_model(settings.agent.planner.model),
            tools=[think],
            prompt=pmt_text,
        )
        self.agent = router_agent
        self.node = create_partial(
            ApiPlanner.node_handler,
            agent=self.agent,
            strategic_agent=self.guidance,
            name=self.name,
        )

    @staticmethod
    def collect_history(state: AgentState, action: str, step: APIPlannerInput):
        obj = HistoricalAction(action_taken=action, input_to_agent=step, agent_output=None)
        state.api_planner_history.append(obj)

    @staticmethod
    async def node_handler(
        state: AgentState, agent: APIPlannerAgent, strategic_agent: CompiledStateGraph, name: str
    ) -> Command[Literal['APICodePlannerAgent', 'ShortlisterAgent', 'PlanControllerAgent']]:
        # First time visit
        if (
            state.api_last_step
            and state.api_last_step == ActionName.CODER_AGENT
            and settings.features.code_output_reflection
        ):
            res_2 = await strategic_agent.ainvoke(
                {
                    "messages": [
                        {
                            "role": "user",
                            "content": f"Variables history: {var_manager.get_variables_summary(last_n=5)}\n\ntask: {state.sub_task}\nHere's the history of actions/steps:\n\n{state.api_planner_history}\n\nUser information ( User already logged in ): {state.pi}\n\nCurrent datetime: {tracker.current_date}",
                        }
                    ]
                }
            )
            summary = res_2['messages'][-1].content
            state.guidance = summary
            tracker.collect_step(step=Step(name=name, data=summary))
            logger.debug(f"Guidance:\n{summary}")

        res = await agent.run(state)
        state.guidance = None
        state.messages.append(res)
        res = APIPlannerOutput(**json.loads(res.content))
        tracker.collect_step(step=Step(name=name, data=res.model_dump_json()))
        logger.debug("api_planner output:\n {}".format(res.model_dump_json(indent=4)))

        if res.action == ActionName.CODER_AGENT:
            state.api_last_step = ActionName.CODER_AGENT
            logger.debug("Current task is: code")
            state.coder_task = res.action_input_coder_agent.task_description
            state.coder_variables = res.action_input_coder_agent.context_variables_from_history
            state.coder_relevant_apis = res.action_input_coder_agent.relevant_apis
            state.api_shortlister_planner_filtered_apis = json.dumps(
                ShortlisterAgent.filter_by_api_names(
                    state.api_shortlister_all_filtered_apis,
                    [api.api_name for api in res.action_input_coder_agent.relevant_apis],
                ),
                indent=2,
            )

            ApiPlanner.collect_history(
                state=state, action=res.action.value, step=res.action_input_coder_agent
            )

            return Command(update=state.model_dump(), goto="APICodePlannerAgent")

        if res.action == ActionName.API_FILTERING_AGENT:
            state.api_last_step = ActionName.API_FILTERING_AGENT
            logger.debug("Current task is: shortlisting")
            ApiPlanner.collect_history(
                state=state, action=res.action.value, step=res.action_input_shortlisting_agent
            )

            state.shortlister_relevant_apps = [res.action_input_shortlisting_agent.app_name]
            state.shortlister_query = f"**Input task**: {res.action_input_shortlisting_agent.task_description}\n\nTask context:{state.sub_task}"
            logger.debug(state.model_dump())
            return Command(update=state.model_dump(), goto="ShortlisterAgent")

        if res.action == ActionName.CONCLUDE_TASK:
            state.api_last_step = ActionName.CONCLUDE_TASK
            state.guidance = None
            logger.debug("Current task is: conclude")
            ApiPlanner.collect_history(
                state=state, action=res.action.value, step=res.action_input_conclude_task
            )
            state.stm_all_history.append(
                SubTaskHistory(
                    sub_task=state.format_subtask(),
                    steps=[],
                    final_answer=res.action_input_conclude_task.final_response,
                )
            )
            state.last_planner_answer = res.action_input_conclude_task.final_response
            state.sender = "APIPlannerAgent"
            return Command(update=state.model_dump(), goto="PlanControllerAgent")

        return Command(update=state.model_dump(), goto="ApiCodePlannerAgent")

        # state.api_planner_codeagent_filtered_schemas_plan = res.content
        # return state
