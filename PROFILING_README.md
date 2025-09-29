# Digital Sales Task Profiling

This directory contains tools for profiling the digital sales test tasks with different configurations and models, extracting performance metrics and LLM call information from Langfuse.

## Files

- `profile_digital_sales_tasks.py` - Main Python profiling script
- `run_profiling.sh` - Shell script wrapper for easier usage
- `PROFILING_README.md` - This documentation file

## Prerequisites

1. **Langfuse Setup**: Ensure Langfuse is configured and running
2. **Environment Variables**: Set the required Langfuse credentials
3. **Dependencies**: All required Python packages should be installed via `uv sync`

## Required Environment Variables

```bash
# Required
LANGFUSE_PUBLIC_KEY=pk-your-public-key-here
LANGFUSE_SECRET_KEY=sk-your-secret-key-here

# Optional
LANGFUSE_HOST=https://cloud.langfuse.com  # Default value
```

## Usage

### Quick Start

```bash
# List all available test combinations
./run_profiling.sh --list-tests

# Run with default settings (all configs, modes, and tasks)
./run_profiling.sh

# Run a specific test by ID
./run_profiling.sh --test-id settings.openai.toml:fast:test_get_top_account_by_revenue_stream

# Run with specific configurations
./run_profiling.sh --configs settings.openai.toml,settings.azure.toml

# Run with specific modes
./run_profiling.sh --modes fast,balanced

# Run multiple times per configuration
./run_profiling.sh --runs 3

# Specify custom output file
./run_profiling.sh --output my_profiling_report.json
```

### Advanced Usage

```bash
# Run the Python script directly with full control
uv run python profile_digital_sales_tasks.py \
    --configs settings.openai.toml,settings.azure.toml \
    --modes fast,balanced,accurate \
    --tasks test_get_top_account_by_revenue_stream,test_list_my_accounts \
    --runs 2 \
    --output detailed_report.json
```

## Available Configurations

- `settings.openai.toml` - OpenAI GPT models
- `settings.azure.toml` - Azure OpenAI service
- `settings.watsonx.toml` - IBM WatsonX models

## Available Modes

- `fast` - Fast execution mode
- `balanced` - Balanced execution mode  
- `accurate` - Accurate execution mode

## Available Tasks

- `test_get_top_account_by_revenue_stream` - Get top account by revenue
- `test_list_my_accounts` - List all accounts and count
- `test_find_vp_sales_active_high_value_accounts` - Find VP of Sales contacts

## Test IDs

Each test combination has a unique ID in the format: `config:mode:task`

**Examples:**
- `settings.openai.toml:fast:test_get_top_account_by_revenue_stream`
- `settings.azure.toml:balanced:test_list_my_accounts`
- `settings.watsonx.toml:accurate:test_find_vp_sales_active_high_value_accounts`

**List all available test IDs:**
```bash
./run_profiling.sh --list-tests
# or
uv run python profile_digital_sales_tasks.py --list-tests
```

## Output

The profiler generates a comprehensive JSON report containing:

- **Summary Statistics**: Total tests, success rate, execution times
- **Configuration Statistics**: Performance metrics per configuration/mode combination
- **Langfuse Metrics**: LLM calls, token usage, costs, node timings
- **Detailed Results**: Complete test execution details

### Example Report Structure

```json
{
  "summary": {
    "total_tests": 9,
    "successful_tests": 8,
    "failed_tests": 1,
    "success_rate": 88.9,
    "timestamp": "2024-01-15T10:30:00"
  },
  "config_stats": {
    "settings.openai.toml_fast": {
      "total": 3,
      "successful": 3,
      "failed": 0,
      "avg_time": 45.2,
      "success_rate": 100.0
    }
  },
  "langfuse_metrics": [
    {
      "config": "settings.openai.toml",
      "mode": "fast",
      "task": "test_get_top_account_by_revenue_stream",
      "trace_id": "abc123",
      "llm_calls": 5,
      "total_tokens": 1250,
      "total_cost": 0.0125,
      "node_timings": {
        "planner": 2.1,
        "chat": 1.8,
        "final_answer": 0.9
      }
    }
  ]
}
```

## Troubleshooting

### Common Issues

1. **Langfuse Connection Error**: Verify your API keys and host URL
2. **Test Failures**: Check that all required services are running
3. **Port Conflicts**: The script automatically kills existing processes on ports 8000, 8001, 8005

### Debug Mode

To see detailed execution logs, you can modify the test instances to enable verbose logging:

```python
# In the profiler script, add this to the test instance creation
test_instance.test_env_vars["CUGA_LOGGING_LEVEL"] = "DEBUG"
```

## Customization

### Adding New Configurations

1. Create a new TOML file in `src/cuga/configurations/models/`
2. Add the configuration name to the `configs` list in `profile_digital_sales_tasks.py`

### Adding New Test Tasks

1. Add the task method to `digital_sales_test_helpers.py`
2. Add the task name to the `test_tasks` list in `profile_digital_sales_tasks.py`

### Modifying Langfuse Data Extraction

The `_parse_langfuse_metrics` method can be customized to extract additional metrics from the Langfuse trace data based on your specific needs.
