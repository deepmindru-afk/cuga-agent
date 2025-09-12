#!/usr/bin/env bash

echo "Starting unit tests with uv..."

# Run the tests
echo "Running pytest tests..."
uv run pytest ./src/cuga/backend/tools_env/registry/tests/
TEST_EXIT_CODE=$?

echo "Tests completed with exit code: $TEST_EXIT_CODE"
exit $TEST_EXIT_CODE