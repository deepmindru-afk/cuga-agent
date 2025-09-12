import json
from typing import Any

from langchain_core.language_models import BaseChatModel
from langchain_core.messages import AIMessage, BaseMessage

from cuga.backend.cuga_graph.nodes.api.code_agent.model import CodeAgentOutput
from cuga.backend.cuga_graph.nodes.shared.base_agent import BaseAgent
from cuga.backend.cuga_graph.nodes.api.tasks.summarize_code import summarize_steps
from cuga.backend.cuga_graph.state.agent_state import AgentState
from cuga.backend.llm.models import LLMManager
from cuga.backend.llm.utils.helpers import load_one_prompt
from cuga.config import settings
from cuga.backend.cuga_graph.nodes.api.code_agent.code_act_agent import create_codeact
from cuga.backend.tools_env.code_sandbox.sandbox import run_code
from langgraph.checkpoint.memory import MemorySaver
from loguru import logger
from cuga.backend.cuga_graph.nodes.api.variables_manager.manager import VariablesManager
from cuga.configurations.instructions_manager import InstructionsManager

instructions_manager = InstructionsManager()
var_manager = VariablesManager()
llm_manager = LLMManager()


class CodeAgent(BaseAgent):
    def __init__(self, llm: BaseChatModel, tools: Any = None):
        super().__init__()
        self.name = "CodeAgent"
        pmt_path = (
            "./prompts/system_fast.jinja2"
            if settings.features.code_generation == "fast"
            else "./prompts/system_accurate.jinja2"
        )
        pmt = load_one_prompt(pmt_path)
        instructions = instructions_manager.get_instructions(self.name)
        pmt_text = pmt.format(instructions=instructions)
        code_act = create_codeact(
            llm,
            prompt=pmt_text,
            tools=[],
            eval_fn=run_code,
        )
        self.agent = code_act.compile(checkpointer=MemorySaver())
        self.summary_task = summarize_steps(llm_manager.get_model(settings.agent.final_answer.model))

    @staticmethod
    def output_parser(result: BaseMessage, name) -> BaseMessage:
        result.name = name
        return result

    def get_last_nonempty_line(self, text, limit=5):
        """
        Get the first non-empty JSON line from the end and return it along with the remaining text.

        Args:
            text (str): Input text to process
            limit (int): Maximum number of lines to check from the end (default: 5)

        Returns:
            tuple: (json_text, remaining_text) where:
                   - json_text: The JSON string found from the end, or empty string if none
                   - remaining_text: All text before the JSON line, or original text if no JSON found
        """
        lines = text.split("\n")

        # Iterate from the end to find first non-empty JSON line (limit iterations)
        count = 0
        for i, line in enumerate(reversed(lines)):
            if count >= limit:
                break
            count += 1

            stripped_line = line.strip()

            # Check if line has content and is valid JSON
            if stripped_line:
                try:
                    json_lines = json.loads(stripped_line)
                    # Found valid JSON - calculate the split point
                    json_line_index = len(lines) - 1 - i  # Convert reverse index to forward index

                    # Get text before the JSON line
                    remaining_lines = lines[:json_line_index]
                    remaining_text = "\n".join(remaining_lines)

                    return json_lines, remaining_text
                except (json.JSONDecodeError, ValueError):
                    # Not valid JSON, continue searching
                    continue

        # No valid JSON found, return empty JSON and original text
        return "", text

    def extract_inner_text(self, data):
        try:
            # Parse the JSON string
            return data['messages']

        except json.JSONDecodeError:
            return "Error: Invalid JSON format"
        except Exception as e:
            return f"Error: {str(e)}"

    # Example usage
    def extract_from_json_marker(self, text):
        marker = "```json"
        if marker in text:
            # Find the position of the marker
            start_pos = text.find(marker)
            # Extract everything starting from the marker
            return text[start_pos:].strip()
        return text

    async def run(self, input_variables: AgentState = None) -> AIMessage:
        context_variables = input_variables.coder_variables
        context_variables_preview = (
            var_manager.get_variables_summary(context_variables)
            if context_variables and len(context_variables) > 0
            else "N/A"
        )
        messages = [
            {
                "role": "user",
                "content": """
**Input 1:Relevant variable history**:
```text
{}
```

---

**Input 2: Plan**
{}

---

**Input 2: API Definitions**

```json
{}
```

current datetime: {}
""".format(
                    context_variables_preview,
                    self.extract_from_json_marker(input_variables.api_planner_codeagent_plan),
                    input_variables.api_shortlister_planner_filtered_apis,
                    input_variables.current_datetime,
                ),
            }
        ]
        # answer = None
        # try:
        #     answer = await self.agent.ainvoke(input={"messages": messages},stream_mode="updates",interrupt_before="sandbox")
        # except Exception as e:
        #     logger.error(answer)
        #     logger.error(e)
        #     answer = str(e)
        # logger.debug(answer)
        allowed_calls_of_llm = 1
        count_llms = 0
        async for event in self.agent.astream(
            {"messages": messages},
            stream_mode="updates",
            config={"configurable": {"thread_id": 1}},
        ):
            print(event.keys())
            logger.debug(event)
            if "call_model" in event.keys():
                code_copy = event['call_model']['messages'][0].content
                logger.debug(code_copy)
                count_llms += 1
            if "sandbox" in event.keys():
                out = event['sandbox']['messages'][0]['content']
                logger.debug(f"sandbox ouput: {out}")
                out, remaining_text = self.get_last_nonempty_line(out, limit=5)
                steps_summary = []
                if out:
                    steps_summary = [remaining_text]

                if not out:
                    out = {
                        "variable_name": "output_status",
                        "value": f"{event['sandbox']['messages'][0]['content']}",
                    }
                    logger.warning("Not json output")

                var_manager.add_variable(
                    name=out.get("variable_name"),
                    description=out.get("description", ""),
                    value=out.get("value"),
                )
                # input_variables.api_planner_history[-1].agent_output = CoderAgentHistoricalOutput(variables_summary=)
                # input_variables.variables_memory[out.get("variable_name")] =
                if allowed_calls_of_llm == count_llms:
                    if not input_variables.variables_memory:
                        input_variables.variables_memory = {}
                    final_answer = None
                    if settings.features.code_output_summary:
                        final_answer = await self.summary_task.ainvoke(
                            input={
                                "api_calling_plan": input_variables.api_planner_codeagent_plan,
                                "execution_output": remaining_text[:50000],
                                "variable_summary": var_manager.get_variables_summary(),
                            }
                        )

                    return AIMessage(
                        content=CodeAgentOutput(
                            code=code_copy,
                            summary=final_answer.content
                            if final_answer
                            else f"The output of code stored in variable {out.get("variable_name")} - {out.get("description", "")}",
                            steps_summary=steps_summary,
                            variables=out,
                            execution_output=event['sandbox']['messages'][0]['content'],
                        ).model_dump_json()
                    )
            # return AIMessage(content="No code running")
        return AIMessage(content="Failed to run")

    @staticmethod
    def create():
        return CodeAgent(
            llm=llm_manager.get_model(settings.agent.code.model),
        )
