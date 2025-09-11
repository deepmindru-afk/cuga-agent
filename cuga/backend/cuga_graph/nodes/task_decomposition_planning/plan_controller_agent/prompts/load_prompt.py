from typing import List, Literal
from langchain_core.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field


class PlanControllerOutput(BaseModel):
    thoughts: List[str] = Field(..., description="Your thoughts")
    subtasks_progress: List[Literal['completed', 'not-started', 'in-progress']] = Field(
        ..., description="Subtasks progress"
    )
    next_subtask: str = Field(..., description="next subtask description")
    next_subtask_type: Literal['api', 'web'] = Field(..., description="next subtask type")
    next_subtask_app: str = Field(..., description="next subtask app")
    conclude_task: bool = Field(..., description="Should the original task be concluded?")
    conclude_final_answer: str = Field(..., description="Final answer in case final task is concluded")


parser = PydanticOutputParser(pydantic_object=PlanControllerOutput)
