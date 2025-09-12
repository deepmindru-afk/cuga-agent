import os

# stdlib
from importlib import import_module
from sys import platform
from urllib.parse import urlparse
from pathlib import Path

# ---------------------------------------------------------------------------
# Package root & path helper (must be defined BEFORE first use)
# ---------------------------------------------------------------------------

# Get the package root from path_store
PACKAGE_ROOT = Path(__file__).parent.resolve()

# Define all path variables at the top (with environment variable overrides)
ENV_FILE_PATH = os.getenv("ENV_FILE_PATH") or os.path.join(PACKAGE_ROOT,"..","..", ".env")
SETTINGS_TOML_PATH = os.getenv("SETTINGS_TOML_PATH") or os.path.join(PACKAGE_ROOT, "settings.toml")
EVAL_CONFIG_TOML_PATH = os.getenv("EVAL_CONFIG_TOML_PATH") or os.path.join(PACKAGE_ROOT, "eval_config.toml")
CONFIGURATIONS_DIR = os.path.join(PACKAGE_ROOT, "configurations")
MODELS_DIR = os.path.join(CONFIGURATIONS_DIR, "models")
MODES_DIR = os.path.join(CONFIGURATIONS_DIR, "modes")


import dynaconf

# from feature_flags import FeatureFlags as flags
from dotenv import load_dotenv
from dynaconf import Dynaconf, Validator
from loguru import logger

# Try CI/CD environment variable first
env_path = os.getenv("ENV_FILE")

if not env_path:
    # Fallback when running from an installed wheel or from source
    env_path = ENV_FILE_PATH

load_dotenv(dotenv_path=env_path, override=True)

for key, value in os.environ.items():
    if key.startswith("WA_"):
        new_key = key[3:]
        os.environ[new_key] = value


app_mapping = {
    urlparse(os.getenv("WA_REDDIT")).netloc: "reddit",
    urlparse(os.getenv("WA_SHOPPING")).netloc: "shopping",
    urlparse(os.getenv("WA_SHOPPING_ADMIN")).netloc: "shopping_admin",
    urlparse(os.getenv("WA_GITLAB")).netloc: "gitlab",
    urlparse(os.getenv("WA_WIKIPEDIA")).netloc: "wikipedia",
    urlparse(os.getenv("WA_MAP")).netloc: "map",
    urlparse(os.getenv("WA_HOMEPAGE")).netloc: "homepage",
}


# Load your settings


def get_all_paths(config, parent_key=""):
    """
    Recursively traverse a nested dictionary and generate all paths with keys separated by dots.

    Args:
        nested_dict (dict): The nested dictionary to traverse.
        parent_key (str): The accumulated path of keys (used during recursion).

    Returns:
        list: A list of all paths as strings.
    """
    paths = []
    for key, value in config.items():
        current_path = f"{parent_key}.{key}" if parent_key else key
        if isinstance(value, dict):
            paths.extend(get_all_paths(value, current_path))
        else:
            paths.append(current_path)
    return paths


# Use PACKAGE_ROOT for all file paths to ensure they work regardless of where the app is started
validators = [
    Validator("eval_config.headless", default=False),
    Validator("features.local_sandbox", default=True),
    Validator("features.forced_apps", default=None),
    Validator("features.thoughts", default=True),
    Validator("features.code_generation", default="accurate"),
    Validator("features.task_decomposition", default=False),
    Validator("advanced_features.langfuse_tracing", default=False),
    Validator("advanced_features.benchmark", default="default"),
    Validator("features.chat", default=True),
    Validator("playwright_args", default=[]),
]
base_settings = Dynaconf(
    root_path=PACKAGE_ROOT,
    settings_files=[
        SETTINGS_TOML_PATH,
        ENV_FILE_PATH,
        EVAL_CONFIG_TOML_PATH,
    ],
    validators=validators,
)
logger.info("Running cuga in *{}* mode".format(base_settings.features.cuga_mode))

# Read and sanitize the model settings filename (Windows users sometimes include quotes)
default_llm = os.environ.get("AGENT_SETTING_CONFIG", "settings.openai.toml")
default_llm = default_llm.strip().strip('"').strip("'")
logger.info("loaded llm settings *{}*".format(default_llm))

# Resolve absolute config file paths
models_file_path = os.path.join(MODELS_DIR, default_llm)
modes_file_path = os.path.join(
    MODES_DIR, f"{base_settings.features.cuga_mode}.toml"
)

logger.info(f"Models config path: {models_file_path}")
logger.info(f"Mode config path:   {modes_file_path}")

# Fail fast with clear error if files are missing (helps especially on Windows)
if os.getenv("CUGA_STRICT_CONFIG", "1") == "1":
    if not os.path.isfile(models_file_path):
        raise FileNotFoundError(
            "Could not find models configuration file: "
            f"{models_file_path}. If you are on Windows and set AGENT_SETTING_CONFIG in CMD, "
            "do not include surrounding quotes."
        )
    if not os.path.isfile(modes_file_path):
        raise FileNotFoundError(f"Could not find mode configuration file: {modes_file_path}.")

settings = Dynaconf(
    root_path=PACKAGE_ROOT,
    settings_files=[
        SETTINGS_TOML_PATH,
        ENV_FILE_PATH,
        EVAL_CONFIG_TOML_PATH,
        models_file_path,
        modes_file_path,
    ],
    validators=validators,
)

# Add default enable format in each model configuration
paths = get_all_paths(settings, "")
platform_paths = [k for k in paths if "model.platform" in k]
for k in platform_paths:
    settings.validators.register(
        Validator(
            k.lower().replace("platform", "enable_format"),
            default=True
            if "watsonx" in getattr(settings, k.lower())
            or "rits" in getattr(settings, k.lower())
            or "groq" in getattr(settings, k.lower())
            else False,
        )
    )

# raises after all possible errors are evaluated
try:
    settings.validators.validate_all()
except dynaconf.ValidationError as e:
    accumulative_errors = e.details
    logger.warning(accumulative_errors)


def get_class(class_path):
    """Dynamically import and return a class by its full path."""
    module_name, class_name = class_path.rsplit(".", 1)
    module = import_module(module_name)
    return getattr(module, class_name)


# `envvar_prefix` = export envvars with `export DYNACONF_FOO=bar`.
# `settings_files` = Load these files in the order.
def get_user_data_path():
    if platform == "darwin":  # macOS
        return os.path.expanduser(os.getenv("MAC_USER_DATA_PATH", ""))
    elif platform == "win32":  # Windows
        return os.getenv("WINDOWS_USER_DATA_PATH", "")
    elif platform.startswith("linux"):  # Linux/Unix systems
        return os.path.expanduser(os.getenv("LINUX_USER_DATA_PATH", ""))
    else:
        raise Exception("Unsupported OS")


def get_app_name_from_url(curr_url):
    if not curr_url:
        return "N/A"
    parsed_url = urlparse(curr_url)
    host_with_port = f"{parsed_url.hostname}:{parsed_url.port}"
    return app_mapping.get(host_with_port, parsed_url.hostname)


if __name__ == "__main__":
    model = settings.agent.task_decomposition.model
