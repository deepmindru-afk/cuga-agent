import json

from langchain_core.messages import AIMessage

from cuga.backend.activity_tracker.tracker import ActivityTracker
from cuga.backend.llm.models import LLMManager
import os
import glob
from loguru import logger

llm_manager = LLMManager()
tracker = ActivityTracker()


def get_python_content_from_trajectory():
    files = {}
    indx = 1
    for step in tracker.steps:
        if step.name == "CodeAgent":
            content = json.loads(step.data)
            code = content['code']
            files[f"f{indx}.py"] = code
            indx += 1
    return files


def read_python_files(file_pattern="f*.py"):
    """Read all Python files matching the pattern (f1.py, f2.py, etc.)"""
    files_content = {}

    # Get all files matching the pattern
    file_paths = sorted(glob.glob(file_pattern))

    for file_path in file_paths:
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as file:
                files_content[file_path] = file.read()
                print(f"Read {file_path}: {len(files_content[file_path])} characters")
        else:
            print(f"Warning: {file_path} not found")

    return files_content


async def consolidate_flow(chain, user_intent, file_pattern="f*.py", dynamic=True) -> AIMessage:
    """Main function to consolidate the Python flow files"""

    # Read all Python files
    print("Reading Python files...")
    if dynamic:
        files_content = get_python_content_from_trajectory()
    else:
        files_content = read_python_files(file_pattern)

    if not files_content:
        print("No files found matching the pattern!")
        return None

    # Create system prompt
    print("Creating system prompt...")
    files_section = ""
    for file_path, content in files_content.items():
        files_section += f"\n## {file_path}\n```python\n{content}\n```\n"

    print("Generating consolidated function...")

    try:
        response = await chain.ainvoke(input={"files_section": files_section, "user_intent": user_intent})
        logger.debug(f"\n{response.content}")
        return response
    except Exception as e:
        print(f"Error generating response: {e}")
        return None
