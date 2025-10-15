#!/usr/bin/env python3
"""
Simple test for sandbox async handling

Tests that the sandbox code can handle async calls both:
1. From outside an event loop
2. From within a running event loop (the fixed bug)
"""

import asyncio
import concurrent.futures
import pytest


# Simulate the sandbox invocation code
def simulate_sandbox_tool_call():
    """Simulates what happens inside the sandbox"""

    # Mock tracker for testing
    class MockTracker:
        async def invoke_tool(self, app_name, api_name, args):
            await asyncio.sleep(0.1)  # Simulate async work
            return {"app": app_name, "api": api_name, "result": f"Called {app_name}.{api_name} with {args}"}

    tracker = MockTracker()
    app_name = "test_app"
    api_name = "test_api"
    args = {"key": "value"}

    # This is the code that runs in the sandbox (from structured_tools_invocation)
    try:
        # Check if we're already in an async context
        try:
            asyncio.get_running_loop()
            # We're in an async context, create a new thread to run the async function

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

        return result
    except Exception as e:
        return {"error": str(e)}


def test_without_event_loop():
    """Test calling from outside an event loop (normal case)"""
    result = simulate_sandbox_tool_call()

    assert isinstance(result, dict), "Result should be a dictionary"
    assert "result" in result or "error" in result, "Result should contain 'result' or 'error' key"

    if "error" in result:
        pytest.fail(f"Tool call failed: {result['error']}")


@pytest.mark.asyncio
async def test_with_event_loop():
    """Test calling from within an event loop (the bug we fixed)"""
    # This should NOT raise "asyncio.run() cannot be called from a running event loop"
    result = simulate_sandbox_tool_call()

    assert isinstance(result, dict), "Result should be a dictionary"
    assert "result" in result or "error" in result, "Result should contain 'result' or 'error' key"

    if "error" in result:
        pytest.fail(f"Tool call failed: {result['error']}")


@pytest.mark.asyncio
async def test_concurrent_calls():
    """Test multiple concurrent calls from within an event loop"""
    # Run multiple calls concurrently
    tasks = [asyncio.create_task(asyncio.to_thread(simulate_sandbox_tool_call)) for _ in range(3)]
    results = await asyncio.gather(*tasks)

    assert len(results) == 3, "Should complete 3 concurrent calls"
    assert all(isinstance(r, dict) for r in results), "All results should be dictionaries"

    for result in results:
        assert "result" in result or "error" in result, "Each result should have 'result' or 'error' key"
        if "error" in result:
            pytest.fail(f"One of the concurrent calls failed: {result['error']}")
