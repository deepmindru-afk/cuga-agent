import re
from pydantic import BaseModel
import requests
from mcp.server.fastmcp import FastMCP
from typing import Any, Dict, List, Optional
from loguru import logger
import json

from cuga.backend.tools_env.registry.config.config_loader import ServiceConfig
from cuga.backend.tools_env.registry.mcp_manager.openapi_parser import SimpleOpenAPIParser

TYPE_MAP = {
    "string": str,
    "integer": int,
    "number": float,
    "boolean": bool,
    "object": dict,
    "array": list,
}


def sanitize_tool_name(name: str) -> str:
    """Sanitize tool names to be valid Python identifiers."""
    s = name.lower()
    s = re.sub(r'[ /.\-{}:?&=%]', '_', s)
    s = re.sub(r'__+', '_', s)
    return s.strip('_') or "unnamed_tool"


def build_model(model_name: str, field_defs: dict[str, tuple[type, Any]]) -> type:
    annotations = {}
    attrs = {}

    for field_name, (field_type, default) in field_defs.items():
        annotations[field_name] = field_type
        attrs[field_name] = default

    attrs["__annotations__"] = annotations

    return type(model_name, (BaseModel,), attrs)


def extract_field_definitions(api) -> Dict[str, tuple[type, Any]]:
    """
    Collect field definitions from both parameters and request bodies,
    mapping OpenAPI types to Python types.
    """
    field_defs: Dict[str, tuple[type, Any]] = {}

    # 1) Process query and path parameters (all strings)
    if api.parameters:
        for param in api.parameters:
            if param.schema:
                base_type = TYPE_MAP.get(param.schema.type, str)
                py_type = Optional[base_type] if param.schema.nullable else base_type
            else:
                py_type = str
            default = ... if param.required else None
            field_defs[param.name] = (py_type, default)

    # 2) Process request body properties
    if api.request_body:
        for media in api.request_body.content.values():
            schema = media.schema
            if not schema or not schema.properties:
                continue

            for prop_name, prop_schema in schema.properties.items():
                base_type = TYPE_MAP.get(prop_schema.type, Any)

                if prop_schema.type == "array" and prop_schema.items:
                    item_type = TYPE_MAP.get(prop_schema.items.type, Any)
                    py_type = List[item_type]
                else:
                    py_type = base_type

                if prop_schema.nullable:
                    py_type = Optional[py_type]

                default = ... if prop_name in (schema.required or []) else None
                field_defs[prop_name] = (py_type, default)

    return field_defs


def extract_url_params(api, all_params: dict):
    """
    Extract parameters to be used in the URL (i.e. path and query parameters).
    """
    path_params = {}
    query_params = {}
    if api.parameters:
        for param in api.parameters:
            if param.name in all_params:
                if param.in_ == "query":
                    if all_params[param.name] is not None:
                        query_params[param.name] = all_params[param.name]
                elif param.in_ == "path":
                    path_params[param.name] = all_params[param.name]
    return path_params, query_params


def extract_body_params(api, all_params: dict):
    """
    Extract parameters to be included in the body payload.
    """
    body_params = {}
    # Include parameters not classified as query or path
    if api.parameters:
        for param in api.parameters:
            if param.name in all_params and param.in_ not in {"query", "path"}:
                body_params[param.name] = all_params[param.name]
    # Include request body fields
    if api.request_body:
        for media in api.request_body.content.values():
            if media.schema and media.schema.properties:
                for prop in media.schema.properties.keys():
                    if prop in all_params:
                        body_params[prop] = all_params[prop]
    return body_params


def construct_final_url(base_url: str, api, path_params: dict, query_params: dict) -> str:
    """
    Build the final URL by substituting path parameters and appending query parameters.
    """
    final_path = api.path
    for k, v in path_params.items():
        final_path = final_path.replace(f"{{{k}}}", str(v))
    final_url = base_url + final_path
    if query_params:
        from urllib.parse import urlencode

        final_url += "?" + urlencode(query_params)
    return final_url


def determine_content_type(api) -> bool:
    """
    Determine if the API expects JSON content.
    """
    if api.request_body:
        for media_type in api.request_body.content.keys():
            if media_type == "application/json":
                return True
    return False


def get_operation_override_parameters(
    schema_urls: Dict[str, ServiceConfig],
    app_name: str,
    operation_id: str,
) -> Optional[Dict]:
    """
    Get all parameters that would be dropped for a given operation_id from api_overrides.

    Args:
        operation_id: The operationId to search for
        api_overrides: List of ApiOverride configurations

    Returns:
        None if no overrides found for the operation, otherwise a list of parameter dictionaries:
        [{"param_name": "debug", "in": "query"}, {"param_name": "internal_id", "in": "body"}]
    """

    if not schema_urls[app_name].api_overrides:
        return None

    # Find the override for this operation_id
    target_override = None
    for override in schema_urls[app_name].api_overrides:
        if override.operation_id == operation_id:
            target_override = override
            break

    if not target_override:
        return None

    parameters = {}

    # Add query parameters to be dropped
    if target_override.drop_query_parameters:
        for param_name in target_override.drop_query_parameters:
            parameters[param_name] = {"in": "query"}

    # Add request body parameters to be dropped
    if target_override.drop_request_body_parameters:
        for param_name in target_override.drop_request_body_parameters:
            parameters[param_name] = {"in": "body"}

    return parameters if parameters else None


def create_handler(api, model, base_url: str, name: str, schemas: Dict[str, ServiceConfig]):
    """
    Create a handler function for an API that processes parameters,
    builds the URL, and handles the request.
    """

    def handler(params: model, headers: dict = None):
        all_params = params.dict()
        headers = headers if headers else {}

        try:
            params = get_operation_override_parameters(
                schema_urls=schemas, app_name=name, operation_id=api.operation_id
            )
            additional_query_params = {}
            additional_body_params = {}
            tokens = headers.get("_tokens", None)
            if params and tokens is not None:
                tokens = json.loads(tokens)
                file_system_token = tokens.get("file_system", None)
                if "file_system_access_token" in params.keys() and file_system_token:
                    if params["file_system_access_token"]["in"] == "query":
                        additional_query_params["file_system_access_token"] = file_system_token
                    if params["file_system_access_token"]["in"] == "body":
                        additional_body_params["file_system_access_token"] = file_system_token
            if "_tokens" in list(headers.keys()):
                del headers['_tokens']
            path_params, query_params = extract_url_params(api, all_params)
            query_params.update(additional_query_params)
            final_url = construct_final_url(base_url, api, path_params, query_params)
            body_params = extract_body_params(api, all_params)
            body_params.update(additional_body_params)
            use_json = determine_content_type(api)

            if use_json:
                response = requests.request(api.method, final_url, headers=headers, json=body_params)
            else:
                response = requests.request(api.method, final_url, headers=headers, data=body_params)

            response.raise_for_status()
            return response.text

        except Exception as e:
            logger.debug(f"Error in adapter {e}")
            error_response = {
                "status": "exception",
                "error_type": type(e).__name__,
                "message": str(e),
            }

            # Add HTTP-specific details if it's an HTTP error
            if hasattr(e, 'response') and e.response is not None:
                error_response["status_code"] = e.response.status_code
                error_response["url"] = final_url if 'final_url' in locals() else None
                error_response["method"] = api.method

                # Try to get response body for more details
                try:
                    if e.response.headers.get('content-type', '').startswith('application/json'):
                        error_response["message"] += f" {json.dumps(response.json())}"
                    else:
                        error_response["message"] += f" {e.response.text}"
                except Exception:
                    pass

            return error_response

    return handler


def new_mcp_from_custom_parser(
    base_url: str, parser: SimpleOpenAPIParser, name: str, schema_urls: Dict[str, ServiceConfig]
) -> FastMCP:
    """
    Assemble a FastMCP instance from a custom parser by dynamically creating
    tools (handlers) based on API definitions.
    """
    prefix = sanitize_tool_name(name)
    mcp = FastMCP(prefix)
    server_url = parser.get_server()
    base_url += server_url if "http" not in server_url else ""
    for api in parser.apis():
        if 'No-API-Docs' in api.description or 'Private-API' in api.description:
            continue
        if 'constant' in api.path:
            continue
        tool_name = sanitize_tool_name(f"{prefix}_{api.operation_id}")
        description = f"{api.operation_id} {api.summary} {api.description}"

        # Dynamically collect field definitions and build the InputModel
        field_defs = extract_field_definitions(api)
        InputModel = build_model(f"{tool_name}Input", field_defs)

        # Create and register the handler for this API endpoint
        handler = create_handler(api, InputModel, base_url, name, schema_urls)
        handler.__name__ = f"{tool_name}_handler"
        mcp.tool(name=tool_name, description=description)(handler)

    return mcp
