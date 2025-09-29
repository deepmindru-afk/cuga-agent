#!/bin/bash

# Digital Sales Task Profiler Runner
# This script runs the digital sales task profiler with different configurations

set -e

# Load environment variables from .env file if it exists
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Default values
CONFIGS="settings.openai.toml,settings.azure.toml,settings.watsonx.toml"
MODES="fast,balanced,accurate"
TASKS="test_get_top_account_by_revenue_stream,test_list_my_accounts,test_find_vp_sales_active_high_value_accounts"
RUNS=1
OUTPUT="profiling_report_$(date +%Y%m%d_%H%M%S).json"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --configs)
            CONFIGS="$2"
            shift 2
            ;;
        --modes)
            MODES="$2"
            shift 2
            ;;
        --tasks)
            TASKS="$2"
            shift 2
            ;;
        --runs)
            RUNS="$2"
            shift 2
            ;;
        --output)
            OUTPUT="$2"
            shift 2
            ;;
        --test-id)
            TEST_ID="$2"
            shift 2
            ;;
        --list-tests)
            LIST_TESTS=true
            shift
            ;;
        --help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --configs CONFIGS    Comma-separated list of configs (default: $CONFIGS)"
            echo "  --modes MODES        Comma-separated list of modes (default: $MODES)"
            echo "  --tasks TASKS        Comma-separated list of tasks (default: $TASKS)"
            echo "  --runs RUNS          Number of runs per configuration (default: $RUNS)"
            echo "  --output OUTPUT      Output file for the report (default: $OUTPUT)"
            echo "  --test-id TEST_ID    Run only a specific test by ID (format: config:mode:task)"
            echo "  --list-tests         List all available test IDs and exit"
            echo "  --help               Show this help message"
            echo ""
            echo "Environment Variables Required:"
            echo "  LANGFUSE_PUBLIC_KEY  Your Langfuse public key"
            echo "  LANGFUSE_SECRET_KEY  Your Langfuse secret key"
            echo "  LANGFUSE_HOST        Langfuse host URL (optional, default: https://cloud.langfuse.com)"
            echo ""
            echo "Examples:"
            echo "  $0 --configs settings.openai.toml,settings.azure.toml --modes fast,balanced --runs 3"
            echo "  $0 --test-id settings.openai.toml:fast:test_get_top_account_by_revenue_stream --runs 5"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
done

# Check for required environment variables
if [ -z "$LANGFUSE_PUBLIC_KEY" ] || [ -z "$LANGFUSE_SECRET_KEY" ]; then
    echo "Error: LANGFUSE_PUBLIC_KEY and LANGFUSE_SECRET_KEY environment variables are required"
    echo "Please set them in your environment or .env file"
    exit 1
fi

# Kill any existing processes on the ports we'll use
echo "Cleaning up existing processes..."
lsof -ti:8000,8001,8005 | xargs kill -9 2>/dev/null || true

echo "Starting Digital Sales Task Profiler..."
echo "Configurations: $CONFIGS"
echo "Modes: $MODES"
echo "Tasks: $TASKS"
echo "Runs per config: $RUNS"
echo "Output file: $OUTPUT"
echo ""

# Handle list-tests option
if [ "$LIST_TESTS" = true ]; then
    echo "Listing available test IDs..."
    uv run python profile_digital_sales_tasks.py --list-tests
    exit 0
fi

# Run the profiler
if [ -n "$TEST_ID" ]; then
    # Run single test by ID
    echo "Running single test: $TEST_ID"
    uv run python profile_digital_sales_tasks.py \
        --test-id "$TEST_ID" \
        --runs "$RUNS" \
        --output "$OUTPUT"
else
    # Run multiple tests
    uv run python profile_digital_sales_tasks.py \
        --configs "$CONFIGS" \
        --modes "$MODES" \
        --tasks "$TASKS" \
        --runs "$RUNS" \
        --output "$OUTPUT"
fi

echo ""
echo "Profiling completed! Report saved to: $OUTPUT"
