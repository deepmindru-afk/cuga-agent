import threading
from datetime import date
from typing import Dict, Any
import hashlib
import json
import os
from langchain_openai import ChatOpenAI, AzureChatOpenAI
from langchain_ibm import ChatWatsonx
from langchain_core.runnables import ConfigurableField
from ibm_watsonx_ai.metanames import GenTextParamsMetaNames
from cuga.config import settings
from loguru import logger


class LLMManager:
    """Singleton class to manage LLM instances based on agent name and settings"""

    _instance = None
    _lock = threading.Lock()

    def __new__(cls):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
                    cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if not self._initialized:
            self._models: Dict[str, Any] = {}
            self._initialized = True

    def convert_dates_to_strings(self, obj):
        if isinstance(obj, dict):
            return {k: self.convert_dates_to_strings(v) for k, v in obj.items()}
        elif isinstance(obj, list):
            return [self.convert_dates_to_strings(item) for item in obj]
        elif isinstance(obj, date):
            return obj.isoformat()
        else:
            return obj

    def _create_cache_key(self, model_settings: Dict[str, Any]) -> str:
        """Create a unique cache key from model settings"""
        # Sort settings to ensure consistent hashing
        d = self.convert_dates_to_strings(model_settings.to_dict())
        keys_to_delete = [key for key in d if "prompt" in key]

        for key in keys_to_delete:
            del d[key]

        settings_str = json.dumps(d, sort_keys=True)
        return hashlib.md5(settings_str.encode()).hexdigest()

    def _create_llm_instance(self, model_settings: Dict[str, Any]):
        """Create LLM instance based on platform and settings"""
        platform = model_settings.get('platform')
        model_name = model_settings.get('model_name')
        temperature = model_settings.get('temperature', 0.7)
        max_tokens = model_settings.get('max_tokens', 1000)

        if platform == "azure":
            api_version = str(model_settings.get('api_version'))
            if model_name == "o3":
                llm = AzureChatOpenAI(
                    model_version=api_version,
                    timeout=61,
                    api_version="2025-04-01-preview",
                    azure_deployment=model_name + "-" + api_version,
                    model_name=model_name,
                    max_completion_tokens=max_tokens,
                )
            else:
                llm = AzureChatOpenAI(
                    model_version=api_version,
                    timeout=61,
                    azure_deployment=model_name + "-" + api_version,
                    model_name=model_name,
                    temperature=temperature,
                    max_tokens=max_tokens,
                ).configurable_fields(
                    temperature=ConfigurableField(
                        id="llm_temperature",
                        name="LLM Temperature",
                        description="The temperature of the LLM",
                    )
                )
        elif platform == "openai":
            if model_settings.get('url') is not None:
                if model_settings.get("apikey_name", None) is not None:
                    llm = ChatOpenAI(
                        model_name=model_name,
                        timeout=61,
                        temperature=temperature,
                        openai_api_key=os.environ.get(model_settings.get('apikey_name')),
                        openai_api_base=model_settings.get('url'),
                    )
                else:
                    llm = ChatOpenAI(
                        model_name=model_name,
                        temperature=temperature,
                        timeout=61,
                        max_tokens=max_tokens,
                        openai_api_base=model_settings.get('url'),
                    )
            else:
                llm = ChatOpenAI(model_name=model_name, temperature=temperature, max_tokens=max_tokens)
        elif platform == "groq":
            llm = ChatOpenAI(
                api_key=os.environ["GROQ_API_KEY"],
                base_url="https://api.groq.com/openai/v1",
                max_tokens=max_tokens,
                top_p=0.95,
                model=model_name,
                temperature=temperature,
                seed=42,
            )
        elif platform == "watsonx":
            llm = ChatWatsonx(
                model_id=model_name,
                temperature=temperature,
                max_tokens=max_tokens,
                project_id=os.environ['WATSONX_PROJECT_ID'],
            )
        elif platform == "rits":
            llm = ChatOpenAI(
                api_key=os.environ.get(model_settings.get('apikey_name')),
                base_url=model_settings.get('url'),
                max_tokens=max_tokens,
                model=model_name,
                temperature=temperature,
                seed=42,
            )
        elif platform == "rits-restricted":
            llm = ChatOpenAI(
                api_key=os.environ["RITS_API_KEY_RESTRICT"],
                base_url="http://nocodeui.sl.cloud9.ibm.com:4001",
                max_tokens=max_tokens,
                model=model_name,
                top_p=0.95,
                temperature=temperature,
                seed=42,
            )
        else:
            raise ValueError(f"Unsupported platform: {platform}")

        return llm

    def get_model(self, model_settings: Dict[str, Any]):
        """Get or create LLM instance for the given model settings"""
        cache_key = self._create_cache_key(model_settings)

        if cache_key in self._models:
            logger.debug(
                f"Returning existing model for settings: {model_settings.get('platform', 'unknown')}/{model_settings.get('model_name', 'unknown')}"
            )
            return self._models[cache_key]

        # Create new model instance
        logger.debug(
            f"Creating new model for settings: {model_settings.get('platform', 'unknown')}/{model_settings.get('model_name', 'unknown')}"
        )
        model = self._create_llm_instance(model_settings)
        self._models[cache_key] = model

        return model


# Example usage
if __name__ == "__main__":
    llm_manager = LLMManager()

    # Test 1: Azure model

    model1 = llm_manager.get_model(settings.agent.planner.model)
    model2 = llm_manager.get_model(settings.agent.planner.model)  # Should return cached

    logger.debug(f"Same Azure instance: {model1 is model2}")  # True

    # Test 2: OpenAI model

    model3 = llm_manager.get_model(settings.agent.code.model)

    logger.debug(f"Different instance for OpenAI: {model1 is model3}")  # False

    manager2 = LLMManager()
    logger.debug(f"Singleton working: {llm_manager is manager2}")  # True
