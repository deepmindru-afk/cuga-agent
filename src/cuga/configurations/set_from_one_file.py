from pydantic import BaseModel
import re


class MarkdownSections(BaseModel):
    plan: str = ""
    answer: str = ""
    personal_information: str = ""


def parse_markdown_sections(text: str) -> MarkdownSections:
    """
    Parses markdown text looking for exact "## Plan" and "## Answer" sections.
    All other sections are ignored. Missing sections get empty strings.

    Args:
        text: Markdown text with sections like "## Plan" and "## Answer"

    Returns:
        MarkdownSections model with plan and answer content (empty if not found)
    """
    result_data = {"plan": "", "answer": "", "personal_information": ""}

    # Search for exact "## Plan" section

    plan_pattern = r'^## Plan\s*$\n(.*?)(?=^## |\Z)'
    plan_match = re.search(plan_pattern, text, flags=re.MULTILINE | re.DOTALL)
    if plan_match:
        result_data["plan"] = plan_match.group(1).strip()

    plan_pattern = r'^## Personal Information\s*$\n(.*?)(?=^## |\Z)'
    plan_match = re.search(plan_pattern, text, flags=re.MULTILINE | re.DOTALL)
    if plan_match:
        result_data["personal_information"] = plan_match.group(1).strip()

    # Search for exact "## Answer" section
    answer_pattern = r'^## Answer\s*$\n(.*?)(?=^## |\Z)'
    answer_match = re.search(answer_pattern, text, flags=re.MULTILINE | re.DOTALL)
    if answer_match:
        result_data["answer"] = answer_match.group(1).strip()

    return MarkdownSections(**result_data)
