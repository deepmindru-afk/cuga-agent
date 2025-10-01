#!/usr/bin/env python3
"""
Azure LLM Playground

Simple script to test Azure OpenAI integration using llm_manager.
Tests both with TOML configuration and manual settings.

Usage:
    uv run python playground_azure.py

Environment Variables Required:
    AZURE_OPENAI_API_KEY - Your Azure OpenAI API key
    AZURE_OPENAI_ENDPOINT - Your Azure OpenAI endpoint (optional if in TOML)
"""

import os
import sys
import asyncio
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent / "src"))

from cuga.backend.llm.models import LLMManager
from cuga.config import settings
from loguru import logger


def test_azure_with_toml():
    """Test Azure LLM using settings from settings.azure.toml"""
    print("\n" + "="*60)
    print("TEST 1: Using settings.azure.toml configuration")
    print("="*60)
    
    try:
        # Initialize LLM manager
        llm_manager = LLMManager()
        
        # Get model settings from settings.azure.toml
        print(f"\nModel settings from TOML:")
        print(f"  Platform: {settings.agent.chat.model.platform}")
        print(f"  Model: {settings.agent.chat.model.model_name}")
        print(f"  API Version: {settings.agent.chat.model.api_version}")
        print(f"  Temperature: {settings.agent.chat.model.temperature}")
        print(f"  Max Tokens: {settings.agent.chat.model.max_tokens}")
        
        # Create model instance
        print("\nCreating Azure LLM instance...")
        model = llm_manager.get_model(settings.agent.chat.model.model_dump())
        print(f"✓ Model created: {type(model).__name__}")
        print(f"  Deployment: {model.deployment_name if hasattr(model, 'deployment_name') else 'N/A'}")
        print(f"  Model: {model.model_name if hasattr(model, 'model_name') else 'N/A'}")
        
        # Test with a simple prompt
        print("\nTesting with a simple prompt...")
        response = model.invoke("Say 'Hello from Azure!' in a creative way.")
        print(f"\n✓ Response received:")
        print(f"  {response.content[:200]}...")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_azure_with_manual_settings():
    """Test Azure LLM using manual settings dictionary"""
    print("\n" + "="*60)
    print("TEST 2: Using manual settings dictionary")
    print("="*60)
    
    try:
        # Check for required environment variables
        if not os.getenv("AZURE_OPENAI_API_KEY"):
            print("\n⚠️  Warning: AZURE_OPENAI_API_KEY not set")
            print("   Skipping manual settings test")
            return None
        
        # Initialize LLM manager
        llm_manager = LLMManager()
        
        # Manual configuration
        manual_settings = {
            "platform": "azure",
            "model_name": "gpt-4o",
            "api_version": "2024-08-06",
            "temperature": 0.7,
            "max_tokens": 1000
        }
        
        print(f"\nManual settings:")
        for key, value in manual_settings.items():
            print(f"  {key}: {value}")
        
        # Create model instance
        print("\nCreating Azure LLM instance...")
        model = llm_manager.get_model(manual_settings)
        print(f"✓ Model created: {type(model).__name__}")
        
        # Test with a simple prompt
        print("\nTesting with a simple prompt...")
        response = model.invoke("Tell me a fun fact about AI in one sentence.")
        print(f"\n✓ Response received:")
        print(f"  {response.content}")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_azure_streaming():
    """Test Azure LLM with streaming"""
    print("\n" + "="*60)
    print("TEST 3: Testing streaming responses")
    print("="*60)
    
    try:
        llm_manager = LLMManager()
        model = llm_manager.get_model(settings.agent.chat.model.model_dump())
        
        print("\nStreaming response:")
        print("-" * 40)
        
        for chunk in model.stream("Count from 1 to 5 and explain why each number is important."):
            print(chunk.content, end='', flush=True)
        
        print("\n" + "-" * 40)
        print("✓ Streaming completed")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False


async def test_azure_async():
    """Test Azure LLM with async invocation"""
    print("\n" + "="*60)
    print("TEST 4: Testing async invocation")
    print("="*60)
    
    try:
        llm_manager = LLMManager()
        model = llm_manager.get_model(settings.agent.planner.model)
        
        print("\nSending async request...")
        response = await model.ainvoke("What is the capital of France? Answer in one word.")
        
        print(f"✓ Async response received:")
        print(f"  {response.content}")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False


def print_environment_info():
    """Print environment information"""
    print("\n" + "="*60)
    print("ENVIRONMENT INFORMATION")
    print("="*60)
    
    env_vars = {
        "AZURE_OPENAI_API_KEY": "Set" if os.getenv("AZURE_OPENAI_API_KEY") else "Not set",
        "AZURE_OPENAI_ENDPOINT": os.getenv("AZURE_OPENAI_ENDPOINT", "Not set"),
        "MODEL_NAME": os.getenv("MODEL_NAME", "Not set"),
        "AGENT_SETTING_CONFIG": os.getenv("AGENT_SETTING_CONFIG", "Not set (using default)")
    }
    
    for key, value in env_vars.items():
        if key == "AZURE_OPENAI_API_KEY" and value == "Set":
            masked_value = os.getenv(key)
            print(f"  {key}: {masked_value[:8]}...{masked_value[-4:] if len(masked_value) > 12 else ''}")
        else:
            print(f"  {key}: {value}")


def main():
    """Main test runner"""
    print("\n" + "🚀 " + "="*56)
    print("Azure LLM Playground - Testing Azure OpenAI Integration")
    print("="*60)
    
    # Print environment info
    print_environment_info()
    
    # Check for Azure credentials
    if not os.getenv("AZURE_OPENAI_API_KEY"):
        print("\n❌ ERROR: AZURE_OPENAI_API_KEY environment variable is not set")
        print("\nPlease set it:")
        print("  export AZURE_OPENAI_API_KEY='your-api-key'")
        print("\nOptionally set:")
        print("  export AZURE_OPENAI_ENDPOINT='your-endpoint-url'")
        sys.exit(1)
    
    # # Run tests
    results = {}
    
    # # Test 1: TOML configuration
    # results['toml'] = test_azure_with_toml()
    
    # # Test 2: Manual settings
    # results['manual'] = test_azure_with_manual_settings()
    
    # # Test 3: Streaming
    # results['streaming'] = test_azure_streaming()
    
    # Test 4: Async
    results['async'] = asyncio.run(test_azure_async())
    
    # Summary
    # print("\n" + "="*60)
    # print("TEST SUMMARY")
    # print("="*60)
    
    # test_names = {
    #     'toml': 'TOML Configuration',
    #     'manual': 'Manual Settings',
    #     'streaming': 'Streaming',
    #     'async': 'Async Invocation'
    # }
    
    # for key, name in test_names.items():
    #     result = results.get(key)
    #     if result is True:
    #         status = "✓ PASSED"
    #     elif result is False:
    #         status = "❌ FAILED"
    #     else:
    #         status = "⊘ SKIPPED"
    #     print(f"  {name:25s} {status}")
    
    # total_tests = sum(1 for r in results.values() if r is not None)
    # passed_tests = sum(1 for r in results.values() if r is True)
    
    # print(f"\n  Passed: {passed_tests}/{total_tests}")
    
    # if passed_tests == total_tests:
    #     print("\n🎉 All tests passed!")
    #     return 0
    # else:
    #     print(f"\n⚠️  {total_tests - passed_tests} test(s) failed")
    #     return 1


if __name__ == "__main__":
    try:
        exit_code = main()
        sys.exit(exit_code)
    except KeyboardInterrupt:
        print("\n\n⚠️  Interrupted by user")
        sys.exit(130)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
