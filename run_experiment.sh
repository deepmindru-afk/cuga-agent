#!/bin/bash

# CUGA Profiling Experiment Runner
# Runs fast vs balanced mode comparison and opens results in browser

set -e

echo "=== CUGA Profiling Experiment: Fast vs Balanced Mode ==="
echo "Running 3 iterations each for settings.openai.toml:test_get_top_account_by_revenue_stream"
echo

# Create experiments directory if it doesn't exist
mkdir -p experiments

# Run fast mode (3 runs)
echo "Running FAST mode (3 runs)..."
FAST_OUTPUT="experiments/fast_$(date +%Y%m%d_%H%M%S).json"
./run_profiling.sh --test-id settings.openai.toml:fast:test_get_top_account_by_revenue_stream --runs 3 --output "$FAST_OUTPUT"
echo "Fast mode results saved to: $FAST_OUTPUT"

echo

# Run balanced mode (3 runs)
echo "Running BALANCED mode (3 runs)..."
BALANCED_OUTPUT="experiments/balanced_$(date +%Y%m%d_%H%M%S).json"
./run_profiling.sh --test-id settings.openai.toml:balanced:test_get_top_account_by_revenue_stream --runs 3 --output "$BALANCED_OUTPUT"
echo "Balanced mode results saved to: $BALANCED_OUTPUT"

echo

# Generate comparison HTML
# echo "Generating comparison HTML..."
# cd ..
# uv run python update_html.py

# echo "Comparison HTML generated!"

# Start HTTP server and open browser
