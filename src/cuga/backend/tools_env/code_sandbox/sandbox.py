import os
from contextlib import redirect_stdout, redirect_stderr
from io import StringIO
from typing import Any
from urllib.parse import quote

from cuga.backend.cuga_graph.nodes.api.variables_manager.manager import VariablesManager
from cuga.backend.activity_tracker.tracker import ActivityTracker
from cuga.backend.utils.id_utils import mask_with_timestamp


import sys
import importlib

from datetime import datetime
from loguru import logger
from cuga.config import settings, LOGGING_DIR
import docker


tracker = ActivityTracker()
var_manager = VariablesManager()


def time_timestamp():
    now = datetime.now()
    ms = now.microsecond // 1000
    return f"{now:%H-%M-%S}-{ms:03d}"


try:
    from llm_sandbox import SandboxSession

    logger.info("Successfully imported SandboxSession from llm_sandbox")
except ImportError as e:
    if settings.features.local_sandbox:
        logger.info("Skipping import of SandboxSession from llm_sandbox because local_sandbox is enabled")
        pass
    else:
        logger.error(f"Failed to import SandboxSession from llm_sandbox: {e}")
        raise
except Exception as e:
    logger.error(f"Unexpected error while importing SandboxSession: {e}")
    raise


# Structured tools imports and invocation code - only used when local_sandbox is False
structured_tools_import = "from cuga.backend.activity_tracker.tracker import ActivityTracker"

structured_tools_init = "# Initialize tracker\ntracker = ActivityTracker()"

structured_tools_invocation = """
    try:
        result = await tracker.invoke_tool(app_name, api_name, args)
        
        if not isinstance(result, dict):
            if hasattr(result, 'model_dump'):
                return result.model_dump()
            elif hasattr(result, '__dict__'):
                return result.__dict__
            elif hasattr(result, '__dataclass_fields__'):
                from dataclasses import asdict
                return asdict(result)
            else:
                return str(result)
        return result
    except ValueError as e:
        if "not found" in str(e):
            pass
        else:
            raise e
    except Exception as e:
        raise e
"""


def get_premable(is_local=False, current_date=None):
    registry_host = (
        f"http://host.docker.internal:{str(settings.server_ports.registry)}/functions/call?trajectory_path={quote(tracker.get_current_trajectory_path())}"
        if not is_local
        else f"http://localhost:{str(settings.server_ports.registry)}/functions/call?trajectory_path={quote(tracker.get_current_trajectory_path())}"
    )

    # Check if structured tools should be enabled
    if settings.features.local_sandbox and tracker.tools is not None and len(tracker.tools) > 0:
        tool_import_code = structured_tools_import
        tool_init_code = structured_tools_init
        tool_invocation_code = structured_tools_invocation
    else:
        logger.warning("Structured tools not enabled")
        tool_import_code = ""
        tool_init_code = ""
        tool_invocation_code = ""

    preamble = (
        """
import json
from time import sleep
import urllib.request
import urllib.error
import datetime
import asyncio
import concurrent.futures
"""
        + tool_import_code
        + """

"""
        + tool_init_code
        + """

"""
        + (
            f"""
class MyDateTime(datetime.datetime):
    @classmethod
    def now(cls, tz=None):
        return cls.fromisoformat('{current_date}')

datetime.datetime = MyDateTime

"""
            if current_date
            else ""
        )
        + """
async def call_api(app_name, api_name, args=None):
    if args is None:
        args = {}
"""
        + tool_invocation_code
        + """

    url = \""""
        + registry_host
        + """\"
    headers = {
        "accept": "application/json",
        "Content-Type": "application/json"
    }
    payload = {
        "function_name": api_name,
        "app_name": app_name,
        "args": args
    }

    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers=headers, method='POST')

    loop = asyncio.get_event_loop()
    
    def _sync_call():
        try:
            with urllib.request.urlopen(req, timeout=30) as response:
                response_data = response.read().decode('utf-8')
                try:
                    response_data = json.loads(response_data)
                except Exception as e:
                    pass
                return response_data
        except urllib.error.HTTPError as e:
            print(e)
            raise Exception(f"HTTP Error: {e.code} - {e.reason}")
        except urllib.error.URLError as e:
            print(e)
            raise Exception(f"URL Error: {e.reason}")
    
    return await loop.run_in_executor(None, _sync_call)
        """
    )

    return preamble


class ExecutionResult:
    def __init__(self, exit_code, stdout, stderr):
        self.exit_code = exit_code
        self.stdout = stdout
        self.stderr = stderr


async def run_local(code_content: str) -> ExecutionResult:
    stdout_buffer = StringIO()
    stderr_buffer = StringIO()
    exit_code = 0

    import asyncio
    import concurrent.futures

    # Create a namespace that allows dynamic imports
    namespace = {
        '__builtins__': __builtins__,
        '__name__': '__main__',
        '__file__': '<string>',
        '__doc__': None,
        '__package__': None,
        '__import__': __import__,
        'importlib': importlib,
        'asyncio': asyncio,
        'concurrent': concurrent,
    }

    # Add all currently loaded modules to the namespace
    # This ensures that any modules already imported in the main program are available
    namespace.update(sys.modules)

    try:
        with redirect_stdout(stdout_buffer), redirect_stderr(stderr_buffer):
            # Use compile to get better error reporting
            compiled_code = compile(code_content, '<string>', 'exec')
            exec(compiled_code, namespace, namespace)

            # Now get the wrapper function from namespace and await it
            if '__cuga_async_wrapper__' in namespace and asyncio.iscoroutinefunction(
                namespace['__cuga_async_wrapper__']
            ):
                await namespace['__cuga_async_wrapper__']()
    except SystemExit as e:
        # Handle exit() and quit() calls gracefully
        exit_code = e.code if e.code is not None else 0
        if e.code is not None and e.code != 0:
            stderr_buffer.write(f"SystemExit: {e.code}")
    except Exception as e:
        exit_code = 1
        stderr_buffer.write(str(e))

    return ExecutionResult(
        exit_code=exit_code, stdout=stdout_buffer.getvalue(), stderr=stderr_buffer.getvalue()
    )


async def run_code(code: str, _locals: dict[str, Any] = None) -> tuple[str, dict[str, Any]]:
    """
    Run code in a sandboxed environment.
    :param lang: The language of the code.
    :param code: The code to run.
    :param libraries: The libraries to use, it is optional.
    :return: The output of the code.
    """
    variables = var_manager.get_variables_formatted()
    python_file_dir = f"./code/{tracker.experiment_folder}/{tracker.task_id}"
    os.makedirs(python_file_dir, exist_ok=True)
    python_file_dir = os.path.join(LOGGING_DIR, python_file_dir)
    file_path = python_file_dir + "/" + f"{mask_with_timestamp(tracker.task_id)}.py"

    wrapped_code = f"""async def __cuga_async_wrapper__():
{chr(10).join('    ' + line for line in code.split(chr(10)))}
"""

    code_content = (
        get_premable(is_local=settings.features.local_sandbox, current_date=tracker.current_date)
        + "\n"
        + variables
        + "\n"
        + wrapped_code
    )
    if settings.advanced_features.tracker_enabled:
        os.makedirs(python_file_dir, exist_ok=True)
        with open(file_path, 'w') as f:
            f.write(code_content)
            logger.debug(f"Wrote python file at {file_path}")

    if settings.features.local_sandbox:
        from cuga.backend.utils.code_generator import process_python_file

        result = await run_local(code_content)
        if settings.advanced_features.benchmark == "appworld":
            process_python_file(file_path, tracker.task_id)
        return result.stdout if result.exit_code == 0 else result.stderr, {}
    else:
        # Check for Podman socket first, fall back to Docker/Rancher Desktop
        podman_socket = f"/run/user/{os.getuid()}/podman/podman.sock"
        docker_socket = os.path.expanduser("~/.rd/docker.sock")

        if os.path.exists(podman_socket):
            socket_path = podman_socket
        elif os.path.exists(docker_socket):
            socket_path = docker_socket
        else:
            # Try default Docker socket as last resort
            socket_path = "/var/run/docker.sock"
        docker_client = docker.DockerClient(base_url=f"unix://{socket_path}")
        with SandboxSession(
            client=docker_client,
            image="python:3.12-slim",
            keep_template=False,
            commit_container=False,
            lang="python",
            verbose=True,
        ) as session:
            result = session.run(code_content)
            logger.debug(session.config)
            if settings.advanced_features.benchmark == "appworld":
                from evaluation.code_generator import process_python_file

                process_python_file(file_path, tracker.task_id)
            return result.stdout if result.exit_code == 0 else result.stderr, {}
