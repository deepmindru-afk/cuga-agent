from typing import Dict, Optional, List, Any
from pydantic import BaseModel
from cuga.backend.utils.consts import ServiceType
from cuga.backend.utils.file_utils import read_yaml_file


class Auth(BaseModel):
    type: str
    value: Optional[str] = None


class ApiOverride(BaseModel):
    """Configuration for API override"""

    operation_id: str
    description: Optional[str] = None
    drop_request_body_parameters: Optional[List[str]] = None  # Parameters to drop from request body schema
    drop_query_parameters: Optional[List[str]] = None  # Query parameters to drop from operation


class ServiceConfig(BaseModel):
    url: Optional[str] = None
    command: Optional[str] = None
    args: Optional[List[str]] = None
    type: str = ServiceType.OPENAPI  # type of the service
    name: Optional[str] = None
    description: Optional[str] = None
    auth: Optional[Any] = None  # Auth type not defined in the snippet
    include: Optional[List[str]] = None  # List of operationIds to include
    api_overrides: Optional[List[ApiOverride]] = None  # List of API overrides
    tools: Optional[List[str]] = (
        None  # list of tools for a specific service - needed in case we get each tool separately
    )


class Service(BaseModel):
    service: Dict[str, ServiceConfig]


class MCPConfig(BaseModel):
    """Standard MCP configuration format"""

    mcpServers: Dict[str, ServiceConfig]


def load_service_configs(yaml_path: str) -> Dict[str, ServiceConfig]:
    """
    Load service configurations from a YAML file into Pydantic models.
    Supports both legacy format (list of services) and standard MCP format (mcpServers).

    Args:
        yaml_path: Path to the YAML configuration file

    Returns:
        Dictionary of service configuration objects
    """
    try:
        data = read_yaml_file(yaml_path)
        services = {}

        if isinstance(data, dict):
            # Handle new structure with both 'services' and 'mcpServers' keys
            if 'services' in data:
                # Legacy services under 'services' key
                for item in data['services']:
                    for service_name, config in item.items():
                        service_config = _create_service_config(service_name, config)
                        services[service_name] = service_config

            if 'mcpServers' in data:
                # Standard MCP format
                mcp_servers = data['mcpServers']
                for service_name, config in mcp_servers.items():
                    service_config = _create_service_config(service_name, config)
                    services[service_name] = service_config
        elif isinstance(data, list):
            # Pure legacy format (list at root)
            for item in data:
                for service_name, config in item.items():
                    service_config = _create_service_config(service_name, config)
                    services[service_name] = service_config

        return services
    except Exception as e:
        print(f"Error loading service configurations: {e}")
        return {}


def _create_service_config(service_name: str, config: dict) -> ServiceConfig:
    """Helper function to create ServiceConfig from config dictionary"""
    # Create ServiceConfig with optional auth
    auth_cfg = config.get('auth')
    auth = None
    if auth_cfg:
        auth = Auth(type=auth_cfg['type'], value=auth_cfg.get('value'))

    # Auto-detect service type if not explicitly specified
    service_type = config.get('type')
    if not service_type:
        if config.get('command'):
            # If service has a command, it's an MCP server
            service_type = ServiceType.MCP_SERVER
        elif config.get('tools'):
            # If service has tools list, it's a TRM service
            service_type = ServiceType.TRM
        else:
            # Default to OpenAPI if it has a URL
            service_type = ServiceType.OPENAPI

    service_config = ServiceConfig(
        name=service_name,
        description=config.get('description'),
        url=config.get('url'),
        command=config.get('command'),
        args=config.get('args'),
        auth=auth,
        include=config.get('include'),
        type=service_type,
        tools=config.get('tools'),
    )

    if 'api_overrides' in config:
        api_overrides = [ApiOverride(**override) for override in config['api_overrides']]
        service_config.api_overrides = api_overrides

    return service_config


# # Example usage
# if __name__ == "__main__":
#     services = load_service_configs("services.yaml")
#     for service in services:
#         for name, config in service.items():
#             print(f"Service: {name}")
#             print(f"  URL: {config.url}")
#             if config.auth:
#                 print(f"  Auth Type: {config.auth.type}")
#             print()
