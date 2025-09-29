#!/usr/bin/env python3
"""
Digital Sales Task Profiler

This script profiles the digital sales test tasks with different configurations and models,
extracting performance metrics and LLM call information from Langfuse.

Usage:
    python profile_digital_sales_tasks.py [--configs CONFIG1,CONFIG2] [--runs N] [--output FILE]
"""

import asyncio
import json
import os
import sys
import time
import argparse
from datetime import datetime
from typing import Dict, List, Any, Optional
import subprocess
import httpx
from dataclasses import dataclass, asdict

# Add the src directory to the path so we can import the test modules
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from system_tests.e2e.digital_sales_test_helpers import DigitalSalesTestHelpers
from system_tests.e2e.base_test import BaseTestServerStream


@dataclass
class TestResult:
    """Data class to store test execution results"""
    config: str
    mode: str
    task_name: str
    success: bool
    execution_time: float
    trace_id: Optional[str] = None
    error_message: Optional[str] = None
    langfuse_data: Optional[Dict[str, Any]] = None


@dataclass
class LangfuseMetrics:
    """Data class to store extracted Langfuse metrics"""
    trace_id: str
    total_llm_calls: int
    total_tokens: int
    total_cost: float
    node_timings: Dict[str, float]
    llm_call_details: List[Dict[str, Any]]
    total_generation_time: float  # Total time spent on all GENERATION events
    generation_timings: List[Dict[str, Any]]  # Sorted list of generations by time spent
    full_execution_time: float  # Full execution time from trace


class DigitalSalesProfiler:
    """Main profiler class for digital sales tasks"""
    
    def __init__(self, langfuse_public_key: str, langfuse_secret_key: str, langfuse_host: str = "https://cloud.langfuse.com"):
        self.langfuse_public_key = langfuse_public_key
        self.langfuse_secret_key = langfuse_secret_key
        self.langfuse_host = langfuse_host
        self.results: List[TestResult] = []
        self.helpers = DigitalSalesTestHelpers()
        
        # Available configurations
        self.configs = [
            "settings.openai.toml",
            "settings.azure.toml", 
            "settings.watsonx.toml"
        ]
        
        # Available modes
        self.modes = ["fast", "balanced", "accurate"]
        
        # Test tasks from digital_sales_test_helpers.py
        self.test_tasks = [
            "test_get_top_account_by_revenue_stream",
            "test_list_my_accounts", 
            "test_find_vp_sales_active_high_value_accounts"
        ]

    async def run_single_test(self, config: str, mode: str, task_name: str) -> TestResult:
        """Run a single test with specific configuration and mode"""
        print(f"\n--- Running {task_name} with {config} in {mode} mode ---")
        
        start_time = time.time()
        success = False
        error_message = None
        trace_id = None
        
        try:
            # Create a test instance with the specific configuration
            test_instance = self._create_test_instance(config, mode)
            
            # Set up the test environment
            await test_instance.asyncSetUp()
            
            # Run the specific test task
            task_method = getattr(self.helpers, task_name)
            await task_method(test_instance, mode)
            
            success = True
            trace_id = self._extract_trace_id_from_logs(test_instance.test_log_dir)
            print(f"Trace ID: {trace_id}")
            
            # Assert that trace ID is found, if not stop the step
            assert trace_id is not None, f"Trace ID not found for {task_name} with {config} in {mode} mode"
            
        except Exception as e:
            error_message = str(e)
            print(f"❌ Test failed: {error_message}")
            
        finally:
            # Clean up
            try:
                if 'test_instance' in locals():
                    await test_instance.asyncTearDown()
            except Exception as e:
                print(f"Warning: Error during cleanup: {e}")
        
        execution_time = time.time() - start_time
        
        result = TestResult(
            config=config,
            mode=mode,
            task_name=task_name,
            success=success,
            execution_time=execution_time,
            trace_id=trace_id,
            error_message=error_message
        )
        
        # Extract Langfuse data if trace_id is available
        if trace_id:
            result.langfuse_data = await self._extract_langfuse_data(trace_id)
        
        return result

    def _create_test_instance(self, config: str, mode: str) -> BaseTestServerStream:
        """Create a test instance with specific configuration"""
        class TestInstance(BaseTestServerStream):
            test_env_vars = {
                "AGENT_SETTING_CONFIG": config,
                "DYNACONF_FEATURES__CUGA_MODE": mode,
                "DYNACONF_ADVANCED_FEATURES__LANGFUSE_TRACING": "true"
            }
        
        return TestInstance()

    def _extract_trace_id_from_logs(self, log_dir: str) -> Optional[str]:
        """Extract trace ID from log files"""
        try:
            demo_log_path = os.path.join(log_dir, "demo_server.log")
            if os.path.exists(demo_log_path):
                with open(demo_log_path, 'r') as f:
                    content = f.read()
                    # Look for trace ID patterns in the logs
                    # Match "Langfuse Trace ID: {trace_id}" format
                    import re
                    trace_patterns = [
                        r'Langfuse Trace ID:\s*([a-f0-9-]+)',  # Primary pattern
                        r'Initial Langfuse Trace ID:\s*([a-f0-9-]+)',  # Initial pattern
                        r'trace[_-]?id["\']?\s*[:=]\s*["\']?([a-f0-9-]+)["\']?',  # Generic pattern
                    ]
                    
                    for i, pattern in enumerate(trace_patterns):
                        match = re.search(pattern, content, re.IGNORECASE)
                        if match:
                            print(f"Found trace ID using pattern {i+1}: {match.group(1)}")
                            return match.group(1)
                    
                    # Debug: Show what we found in the logs
                    print(f"Debug: No trace ID found in {demo_log_path}")
                    print(f"Debug: Log file size: {len(content)} characters")
                    
                    # Look for any lines containing "langfuse" or "trace" for debugging
                    lines = content.split('\n')
                    langfuse_lines = [line for line in lines if 'langfuse' in line.lower() or 'trace' in line.lower()]
                    if langfuse_lines:
                        print(f"Debug: Found {len(langfuse_lines)} lines containing 'langfuse' or 'trace':")
                        for line in langfuse_lines[:5]:  # Show first 5 lines
                            print(f"  {line.strip()}")
                    else:
                        print("Debug: No lines containing 'langfuse' or 'trace' found")
            else:
                print(f"Debug: Log file does not exist: {demo_log_path}")
        except Exception as e:
            print(f"Warning: Could not extract trace ID: {e}")
        return None

    def _find_generation_events_recursive(self, data: Any, generations: List[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        """Recursively find all GENERATION events in Langfuse data"""
        if generations is None:
            generations = []
        
        if isinstance(data, dict):
            # Check if this is a GENERATION event
            if data.get('type') == 'GENERATION':
                generations.append(data)
            
            # Recursively search all values in the dictionary
            for value in data.values():
                self._find_generation_events_recursive(value, generations)
        elif isinstance(data, list):
            # Recursively search all items in the list
            for item in data:
                self._find_generation_events_recursive(item, generations)
        
        return generations

    async def _extract_langfuse_data(self, trace_id: str) -> Optional[Dict[str, Any]]:
        """Extract data from Langfuse API"""
        try:
            auth = (self.langfuse_public_key, self.langfuse_secret_key)
            url = f"{self.langfuse_host}/api/public/traces/{trace_id}"
            
            async with httpx.AsyncClient() as client:
                response = await client.get(url, auth=auth)
                response.raise_for_status()
                return response.json()
                
        except Exception as e:
            print(f"Warning: Could not fetch Langfuse data for trace {trace_id}: {e}")
            return None

    def _parse_langfuse_metrics(self, langfuse_data: Dict[str, Any]) -> LangfuseMetrics:
        """Parse Langfuse data to extract useful metrics"""
        if not langfuse_data:
            return None
            
        # Extract basic trace information
        trace_id = langfuse_data.get('id', 'unknown')
        
        # Find all GENERATION events recursively
        all_generations = self._find_generation_events_recursive(langfuse_data)
        
        # Count LLM calls and extract details
        llm_calls = []
        total_tokens = 0
        total_cost = 0.0
        total_generation_time = 0.0
        
        # Process all GENERATION events
        for gen in all_generations:
            # Prefer explicit duration; if missing/zero, compute from timestamps
            duration = gen.get('duration', 0) or 0
            if (not duration) and gen.get('startTime') and gen.get('endTime'):
                try:
                    from datetime import datetime
                    start_time_dt = datetime.fromisoformat(gen['startTime'].replace('Z', '+00:00'))
                    end_time_dt = datetime.fromisoformat(gen['endTime'].replace('Z', '+00:00'))
                    duration = int((end_time_dt - start_time_dt).total_seconds() * 1000)
                except Exception:
                    duration = 0

            total_generation_time += duration
            
            llm_calls.append({
                'model': gen.get('model', 'unknown'),
                'tokens': gen.get('usage', {}).get('total', 0),
                'cost': gen.get('usage', {}).get('totalCost', 0.0),
                'duration': duration,
                'langgraph_node': gen.get('metadata', {}).get('langgraph_node', 'unknown'),
                'start_time': gen.get('startTime', ''),
                'end_time': gen.get('endTime', ''),
                'id': gen.get('id', '')
            })
            total_tokens += gen.get('usage', {}).get('total', 0)
            total_cost += gen.get('usage', {}).get('totalCost', 0.0)
        
        # Create generation timings sorted by duration (longest first)
        generation_timings = []
        for gen in all_generations:
            # Recompute duration the same way to ensure consistency
            duration = gen.get('duration', 0) or 0
            if (not duration) and gen.get('startTime') and gen.get('endTime'):
                try:
                    from datetime import datetime
                    start_time_dt = datetime.fromisoformat(gen['startTime'].replace('Z', '+00:00'))
                    end_time_dt = datetime.fromisoformat(gen['endTime'].replace('Z', '+00:00'))
                    duration = int((end_time_dt - start_time_dt).total_seconds() * 1000)
                except Exception:
                    duration = 0

            langgraph_node = gen.get('metadata', {}).get('langgraph_node', 'unknown')
            generation_timings.append({
                'langgraph_node': langgraph_node,
                'duration': duration,
                'duration_seconds': duration / 1000 if duration else 0.0,  # Convert to seconds
                'model': gen.get('model', 'unknown'),
                'tokens': gen.get('usage', {}).get('total', 0),
                'cost': gen.get('usage', {}).get('totalCost', 0.0),
                'start_time': gen.get('startTime', ''),
                'end_time': gen.get('endTime', ''),
                'id': gen.get('id', '')
            })
        
        # Sort by duration (longest first)
        generation_timings.sort(key=lambda x: x['duration'], reverse=True)
        
        # Extract node timings
        node_timings = {}
        spans = langfuse_data.get('spans', [])
        for span in spans:
            name = span.get('name', 'unknown')
            duration = span.get('duration', 0)
            if duration > 0:
                node_timings[name] = duration / 1000  # Convert to seconds
        
        # Calculate full execution time as the UNION of all observation intervals (no double counting overlaps)
        # Build intervals from observations' startTime/endTime and merge them
        full_execution_time = 0.0
        try:
            from datetime import datetime
            observations = langfuse_data.get('observations', []) or []
            intervals = []
            for obs in observations:
                start_ts = obs.get('startTime')
                end_ts = obs.get('endTime')
                if not start_ts or not end_ts:
                    continue
                try:
                    start_dt = datetime.fromisoformat(str(start_ts).replace('Z', '+00:00'))
                    end_dt = datetime.fromisoformat(str(end_ts).replace('Z', '+00:00'))
                    if end_dt <= start_dt:
                        continue
                    intervals.append((start_dt.timestamp(), end_dt.timestamp()))
                except Exception:
                    continue

            if intervals:
                intervals.sort(key=lambda x: x[0])
                merged = []
                cur_start, cur_end = intervals[0]
                for s, e in intervals[1:]:
                    if s <= cur_end:
                        if e > cur_end:
                            cur_end = e
                    else:
                        merged.append((cur_start, cur_end))
                        cur_start, cur_end = s, e
                merged.append((cur_start, cur_end))

                for s, e in merged:
                    full_execution_time += (e - s)

            # Fallbacks if no intervals merged
            if full_execution_time == 0.0:
                latency = langfuse_data.get('latency')
                if isinstance(latency, (int, float)) and latency > 0:
                    full_execution_time = float(latency)
                elif 'startTime' in langfuse_data and 'endTime' in langfuse_data:
                    try:
                        start_time = datetime.fromisoformat(langfuse_data['startTime'].replace('Z', '+00:00'))
                        end_time = datetime.fromisoformat(langfuse_data['endTime'].replace('Z', '+00:00'))
                        full_execution_time = (end_time - start_time).total_seconds()
                    except Exception as e:
                        print(f"Warning: Could not parse execution time: {e}")
                        full_execution_time = langfuse_data.get('duration', 0) / 1000.0
        except Exception as e:
            print(f"Warning: Failed to compute full_execution_time from observations: {e}")
            latency = langfuse_data.get('latency')
            if isinstance(latency, (int, float)) and latency > 0:
                full_execution_time = float(latency)
            else:
                full_execution_time = langfuse_data.get('duration', 0) / 1000.0
        
        return LangfuseMetrics(
            trace_id=trace_id,
            total_llm_calls=len(llm_calls),
            total_tokens=total_tokens,
            total_cost=total_cost,
            node_timings=node_timings,
            llm_call_details=llm_calls,
            total_generation_time=total_generation_time / 1000,  # Convert to seconds
            generation_timings=generation_timings,
            full_execution_time=full_execution_time
        )

    async def run_profiling(self, configs: List[str] = None, modes: List[str] = None, 
                          tasks: List[str] = None, runs_per_config: int = 1, 
                          test_id: str = None) -> List[TestResult]:
        """Run profiling for specified configurations, modes, and tasks"""
        
        # Handle single test ID
        if test_id:
            try:
                config, mode, task = test_id.split(':')
                if config not in self.configs:
                    raise ValueError(f"Invalid config '{config}'. Available: {', '.join(self.configs)}")
                if mode not in self.modes:
                    raise ValueError(f"Invalid mode '{mode}'. Available: {', '.join(self.modes)}")
                if task not in self.test_tasks:
                    raise ValueError(f"Invalid task '{task}'. Available: {', '.join(self.test_tasks)}")
                
                print(f"Running single test: {config} | {mode} | {task}")
                print(f"Total runs: {runs_per_config}")
                
                all_results = []
                for run in range(runs_per_config):
                    print(f"\n{'='*60}")
                    print(f"Config: {config} | Mode: {mode} | Task: {task} | Run: {run + 1}/{runs_per_config}")
                    print(f"{'='*60}")
                    
                    result = await self.run_single_test(config, mode, task)
                    all_results.append(result)
                    
                    # Print result summary
                    status = "✅ SUCCESS" if result.success else "❌ FAILED"
                    print(f"Result: {status} | Time: {result.execution_time:.2f}s")
                    if result.trace_id:
                        print(f"Trace ID: {result.trace_id}")
                    if result.error_message:
                        print(f"Error: {result.error_message}")
                
                self.results = all_results
                return all_results
                
            except ValueError as e:
                print(f"Error parsing test ID '{test_id}': {e}")
                print(f"Expected format: config:mode:task")
                print(f"Example: settings.openai.toml:fast:test_get_top_account_by_revenue_stream")
                sys.exit(1)
        
        # Handle multiple tests
        if configs is None:
            configs = self.configs
        if modes is None:
            modes = self.modes
        if tasks is None:
            tasks = self.test_tasks
        
        print(f"Starting profiling with {len(configs)} configs, {len(modes)} modes, {len(tasks)} tasks")
        print(f"Total test combinations: {len(configs) * len(modes) * len(tasks) * runs_per_config}")
        
        all_results = []
        
        for config in configs:
            for mode in modes:
                for task in tasks:
                    for run in range(runs_per_config):
                        print(f"\n{'='*60}")
                        print(f"Config: {config} | Mode: {mode} | Task: {task} | Run: {run + 1}/{runs_per_config}")
                        print(f"{'='*60}")
                        
                        result = await self.run_single_test(config, mode, task)
                        all_results.append(result)
                        
                        # Print result summary
                        status = "✅ SUCCESS" if result.success else "❌ FAILED"
                        print(f"Result: {status} | Time: {result.execution_time:.2f}s")
                        if result.trace_id:
                            print(f"Trace ID: {result.trace_id}")
                        if result.error_message:
                            print(f"Error: {result.error_message}")
        
        self.results = all_results
        return all_results

    def list_available_tests(self) -> List[str]:
        """List all available test combinations"""
        test_ids = []
        for config in self.configs:
            for mode in self.modes:
                for task in self.test_tasks:
                    test_ids.append(f"{config}:{mode}:{task}")
        return test_ids

    def generate_report(self, output_file: str = None) -> Dict[str, Any]:
        """Generate a comprehensive report from the profiling results"""
        
        if not self.results:
            print("No results to report")
            return {}
        
        # Basic statistics
        total_tests = len(self.results)
        successful_tests = sum(1 for r in self.results if r.success)
        failed_tests = total_tests - successful_tests
        
        # Group results by configuration
        config_stats = {}
        for result in self.results:
            key = f"{result.config}_{result.mode}"
            if key not in config_stats:
                config_stats[key] = {
                    'total': 0,
                    'successful': 0,
                    'failed': 0,
                    'avg_time': 0,
                    'total_time': 0
                }
            
            config_stats[key]['total'] += 1
            if result.success:
                config_stats[key]['successful'] += 1
            else:
                config_stats[key]['failed'] += 1
            config_stats[key]['total_time'] += result.execution_time
        
        # Calculate averages
        for stats in config_stats.values():
            stats['avg_time'] = stats['total_time'] / stats['total']
            stats['success_rate'] = stats['successful'] / stats['total'] * 100
        
        # Parse Langfuse metrics for successful tests
        langfuse_metrics = []
        for result in self.results:
            if result.success and result.langfuse_data:
                metrics = self._parse_langfuse_metrics(result.langfuse_data)
                if metrics:
                    langfuse_metrics.append({
                        'config': result.config,
                        'mode': result.mode,
                        'task': result.task_name,
                        'trace_id': metrics.trace_id,
                        'llm_calls': metrics.total_llm_calls,
                        'total_tokens': metrics.total_tokens,
                        'total_cost': metrics.total_cost,
                        'node_timings': metrics.node_timings,
                        'total_generation_time': metrics.total_generation_time,
                        'generation_timings': metrics.generation_timings,
                        # Use computed union of observation intervals (no double-counting overlaps)
                        'full_execution_time': metrics.full_execution_time
                    })
        
        # Generate report
        report = {
            'summary': {
                'total_tests': total_tests,
                'successful_tests': successful_tests,
                'failed_tests': failed_tests,
                'success_rate': successful_tests / total_tests * 100,
                'timestamp': datetime.now().isoformat()
            },
            'config_stats': config_stats,
            'langfuse_metrics': langfuse_metrics,
            'detailed_results': [asdict(r) for r in self.results]
        }
        
        # Save to file if specified
        if output_file:
            with open(output_file, 'w') as f:
                json.dump(report, f, indent=2, default=str)
            print(f"Report saved to: {output_file}")
        
        # Print summary
        print(f"\n{'='*60}")
        print("PROFILING REPORT SUMMARY")
        print(f"{'='*60}")
        print(f"Total tests: {total_tests}")
        print(f"Successful: {successful_tests} ({successful_tests/total_tests*100:.1f}%)")
        print(f"Failed: {failed_tests} ({failed_tests/total_tests*100:.1f}%)")

        # Group results by configuration for success rates only
        print(f"\nConfiguration Success Rates:")
        for config, stats in config_stats.items():
            print(f"  {config}: {stats['successful']}/{stats['total']} ({stats['success_rate']:.1f}%)")

        if langfuse_metrics:
            print(f"\nLangfuse Metrics (for {len(langfuse_metrics)} successful tests):")
            total_llm_calls = sum(m['llm_calls'] for m in langfuse_metrics)
            total_tokens = sum(m['total_tokens'] for m in langfuse_metrics)
            total_cost = sum(m['total_cost'] for m in langfuse_metrics)
            total_generation_time = sum(m['total_generation_time'] for m in langfuse_metrics)

            # Calculate robust average of full_execution_time (filter out zeros and handle edge cases)
            execution_times = [m['full_execution_time'] for m in langfuse_metrics if m['full_execution_time'] > 0]
            if execution_times:
                avg_execution_time = sum(execution_times) / len(execution_times)
                min_execution_time = min(execution_times)
                max_execution_time = max(execution_times)
            else:
                avg_execution_time = min_execution_time = max_execution_time = 0.0

            print(f"  Total LLM calls: {total_llm_calls}")
            print(f"  Total tokens: {total_tokens}")
            print(f"  Total cost: ${total_cost:.4f}")
            print(f"  Total generation time: {total_generation_time:.2f}s")
            print(f"  Average execution time (Langfuse): {avg_execution_time:.2f}s")
            print(f"  Execution time range: {min_execution_time:.2f}s - {max_execution_time:.2f}s")
            
            # Show top 5 slowest generations across all tests
            all_generations = []
            for m in langfuse_metrics:
                for gen in m['generation_timings']:
                    gen['test_info'] = f"{m['config']} | {m['mode']} | {m['task']}"
                    all_generations.append(gen)
            
            if all_generations:
                all_generations.sort(key=lambda x: x['duration'], reverse=True)
                print(f"\n  Top 5 slowest generations:")
                for i, gen in enumerate(all_generations[:5], 1):
                    print(f"    {i}. {gen['langgraph_node']} - {gen['duration_seconds']:.2f}s ({gen['test_info']})")
        
        return report


async def main():
    """Main function"""
    parser = argparse.ArgumentParser(description='Profile digital sales tasks with different configurations')
    parser.add_argument('--configs', type=str, help='Comma-separated list of configs to test')
    parser.add_argument('--modes', type=str, help='Comma-separated list of modes to test')
    parser.add_argument('--tasks', type=str, help='Comma-separated list of tasks to test')
    parser.add_argument('--runs', type=int, default=1, help='Number of runs per configuration')
    parser.add_argument('--output', type=str, help='Output file for the report')
    parser.add_argument('--test-id', type=str, help='Run only a specific test by ID (format: config:mode:task)')
    parser.add_argument('--list-tests', action='store_true', help='List all available test IDs and exit')
    
    args = parser.parse_args()
    
    # Handle list-tests option
    if args.list_tests:
        profiler = DigitalSalesProfiler("dummy", "dummy")  # Dummy credentials for listing
        test_ids = profiler.list_available_tests()
        print("Available test IDs:")
        print("=" * 50)
        for i, test_id in enumerate(test_ids, 1):
            print(f"{i:2d}. {test_id}")
        print(f"\nTotal: {len(test_ids)} test combinations")
        print("\nUsage examples:")
        print(f"  python profile_digital_sales_tasks.py --test-id {test_ids[0] if test_ids else 'config:mode:task'}")
        print(f"  ./run_profiling.sh --test-id {test_ids[0] if test_ids else 'config:mode:task'}")
        sys.exit(0)
    
    # Get Langfuse credentials from environment
    langfuse_public_key = os.getenv('LANGFUSE_PUBLIC_KEY')
    langfuse_secret_key = os.getenv('LANGFUSE_SECRET_KEY')
    langfuse_host = os.getenv('LANGFUSE_HOST', 'https://cloud.langfuse.com')
    
    if not langfuse_public_key or not langfuse_secret_key:
        print("Error: LANGFUSE_PUBLIC_KEY and LANGFUSE_SECRET_KEY environment variables are required")
        sys.exit(1)
    
    # Parse arguments
    configs = args.configs.split(',') if args.configs else None
    modes = args.modes.split(',') if args.modes else None
    tasks = args.tasks.split(',') if args.tasks else None
    
    # Create profiler
    profiler = DigitalSalesProfiler(langfuse_public_key, langfuse_secret_key, langfuse_host)
    
    # Run profiling
    results = await profiler.run_profiling(
        configs=configs,
        modes=modes, 
        tasks=tasks,
        runs_per_config=args.runs,
        test_id=args.test_id
    )
    
    # Generate report
    report = profiler.generate_report(args.output)
    
    print(f"\nProfiling completed! Check the results above.")
    if args.output:
        print(f"Detailed report saved to: {args.output}")


if __name__ == "__main__":
    asyncio.run(main())
