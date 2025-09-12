#!/usr/bin/env bash

echo "Starting unit tests with uv..."

# Check for all_test flag
if [ "$1" = "e2e_tests" ]; then
    rm ./src/cuga/backend/tools_env/registry/mcp_servers/saved_flows.py
    echo "Running all tests (registry + e2e system tests)..."
    uv run pytest ./src/system_tests/e2e/ -v
else
    echo "Running registry tests..."
    uv run pytest ./src/cuga/backend/tools_env/registry/tests/
fi

TEST_EXIT_CODE=$?

echo "Tests completed with exit code: $TEST_EXIT_CODE"
exit $TEST_EXIT_CODE