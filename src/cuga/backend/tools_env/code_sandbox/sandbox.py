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
    # Try to invoke tool first using ActivityTracker
    try:
        # Check if we're already in an async context
        try:
            import asyncio
            asyncio.get_running_loop()
            # We're in an async context, create a new thread to run the async function
            import concurrent.futures
            import threading
            
            def run_in_new_loop():
                new_loop = asyncio.new_event_loop()
                asyncio.set_event_loop(new_loop)
                try:
                    return new_loop.run_until_complete(tracker.invoke_tool(app_name, api_name, args))
                finally:
                    new_loop.close()
            
            with concurrent.futures.ThreadPoolExecutor() as executor:
                future = executor.submit(run_in_new_loop)
                result = future.result()
        except RuntimeError:
            # No running loop, safe to use asyncio.run()
            result = asyncio.run(tracker.invoke_tool(app_name, api_name, args))
        
        if not isinstance(result, dict):
            if hasattr(result, 'model_dump'):
                return result.model_dump()
            # Handle other objects with dict() conversion
            elif hasattr(result, '__dict__'):
                return result.__dict__
            # Handle dataclasses
            elif hasattr(result, '__dataclass_fields__'):
                from dataclasses import asdict
                return asdict(result)
            # For other types, try to convert to string or return as-is
            else:
                return str(result)
        return result
    except ValueError as e:
        # Only ignore ValueError with "not found" text, fall back to API call
        if "not found" in str(e):
            pass  # Silently fall back to API call
        else:
            # Re-raise other ValueErrors as they might be important
            raise e
    except Exception as e:
        # Re-raise any other exceptions as they indicate real errors
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
def call_api(app_name, api_name, args=None):
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

    # Convert payload to JSON bytes
    data = json.dumps(payload).encode('utf-8')

    # Create request object with URL, data and headers
    req = urllib.request.Request(url, data=data, headers=headers, method='POST')

    try:
        # Send request and get response
        with urllib.request.urlopen(req, timeout=30) as response:
            # Read and decode the response
            response_data = response.read().decode('utf-8')
            # Parse JSON response
            try:
                response_data = json.loads(response_data)
            except Exception as e:
                pass

            return response_data
    except urllib.error.HTTPError as e:
        # Handle HTTP errors (4XX/5XX responses)
        print(e)
        raise Exception(f"HTTP Error: {e.code} - {e.reason}")
    except urllib.error.URLError as e:
        # Handle URL errors (network issues)
        print(e)
        raise Exception(f"URL Error: {e.reason}")
        """
    )

    return preamble


class ExecutionResult:
    def __init__(self, exit_code, stdout, stderr):
        self.exit_code = exit_code
        self.stdout = stdout
        self.stderr = stderr


def run_local(code_content: str) -> ExecutionResult:
    stdout_buffer = StringIO()
    stderr_buffer = StringIO()
    exit_code = 0

    # Create a namespace that allows dynamic imports
    namespace = {
        '__builtins__': __builtins__,
        '__name__': '__main__',
        '__file__': '<string>',
        '__doc__': None,
        '__package__': None,
        '__import__': __import__,
        'importlib': importlib,
    }

    # Add all currently loaded modules to the namespace
    # This ensures that any modules already imported in the main program are available
    namespace.update(sys.modules)

    try:
        with redirect_stdout(stdout_buffer), redirect_stderr(stderr_buffer):
            # Use compile to get better error reporting
            compiled_code = compile(code_content, '<string>', 'exec')
            exec(compiled_code, namespace, namespace)
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


def run_code(code: str, _locals: dict[str, Any] = None) -> tuple[str, dict[str, Any]]:
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
    code_content = (
        get_premable(is_local=settings.features.local_sandbox, current_date=tracker.current_date)
        + "\n"
        + variables
        + "\n"
        + code
    )
    if settings.advanced_features.tracker_enabled:
        os.makedirs(python_file_dir, exist_ok=True)
        with open(file_path, 'w') as f:
            f.write(code_content)
            logger.debug(f"Wrote python file at {file_path}")

    if settings.features.local_sandbox:
        from cuga.backend.utils.code_generator import process_python_file

        result = run_local(code_content)
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
