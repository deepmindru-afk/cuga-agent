import json
import requests  # Ensure requests is imported if you run the example

# Assuming sanitize_tool_name is available in your environment as specified.
# If not, you might need to provide a mock or actual implementation for this script to run.
try:
    from cuga.backend.tools_env.registry.mcp_manager.adapter import sanitize_tool_name
except ImportError:
    print("Warning: sanitize_tool_name not found. Using a placeholder.")

    def sanitize_tool_name(name):
        # Placeholder implementation
        return name.replace("/", "_").replace("{", "").replace("}", "").replace(":", "_")


class OpenAPITransformer:
    """
    Transforms an OpenAPI schema into a more human-readable JSON structure.
    """

    def __init__(self, openapi_schema, filter_patterns=None):
        """
        Initializes the transformer with an OpenAPI schema.

        :param openapi_schema: A dictionary representing the OpenAPI schema,
                               or a JSON string of the schema.
        """
        if isinstance(openapi_schema, str):
            try:
                self.openapi_schema = json.loads(openapi_schema)
            except json.JSONDecodeError as e:
                raise ValueError(f"Invalid JSON string provided for openapi_schema: {e}")
        elif isinstance(openapi_schema, dict):
            self.openapi_schema = openapi_schema
        else:
            raise ValueError("openapi_schema must be a JSON string or a dictionary")

        if not isinstance(self.openapi_schema.get('paths'), dict):
            # Basic validation for a somewhat valid OpenAPI structure
            print(
                "Warning: 'paths' object not found or not a dictionary in the OpenAPI schema. Output might be empty."
            )

        self.app_name = self._get_app_name()
        self.filter_patterns = (
            filter_patterns if filter_patterns is not None else ["No-API-Docs", "Private-API"]
        )

    def _resolve_ref(self, ref_obj):
        """
        Resolves a JSON reference string (e.g., '#/components/schemas/User')
        within the OpenAPI document.

        :param ref_obj: A dictionary that might be a reference (e.g., {'$ref': '#/...'}),
                        or an already resolved object.
        :return: The resolved schema object.
        """
        current_obj = ref_obj
        visited_refs = set()  # To avoid infinite loops in case of circular $refs

        while isinstance(current_obj, dict) and '$ref' in current_obj:
            ref_path_str = current_obj['$ref']
            if ref_path_str in visited_refs:
                return {"type": "circular_ref", "ref": ref_path_str, "error": "Circular reference detected"}
            visited_refs.add(ref_path_str)

            if not ref_path_str.startswith('#/'):
                return {
                    "type": "unresolved_external_ref",
                    "ref": ref_path_str,
                    "error": "External references are not supported.",
                }

            ref_path_parts = ref_path_str.split('/')[1:]  # Remove '#'

            resolved_component = self.openapi_schema
            try:
                for part in ref_path_parts:
                    resolved_component = resolved_component[part]
                current_obj = resolved_component
            except (KeyError, TypeError) as e:
                return {
                    "type": "unresolved_ref",
                    "ref": ref_path_str,
                    "error": f"Path part not found during resolution: {e}",
                }
        return current_obj

    def _get_app_name(self):
        """
        Determines the application name from the OpenAPI schema.
        """
        if 'x-app-name' in self.openapi_schema:
            return self.openapi_schema['x-app-name']
        info = self.openapi_schema.get('info', {})
        if 'x-app-name' in info:
            return info['x-app-name']
        title = info.get('title')
        if title:
            common_suffixes = [" API", " Service", " Application"]
            for suffix in common_suffixes:
                if title.endswith(suffix):
                    return title[: -len(suffix)].strip()
            return title.strip()
        tags = self.openapi_schema.get('tags')
        if (
            tags
            and isinstance(tags, list)
            and len(tags) > 0
            and isinstance(tags[0], dict)
            and 'name' in tags[0]
        ):
            return tags[0]['name']
        return "unknown_app"

    def _get_schema_type_and_enum(self, schema_obj):
        """
        Extracts the type and enum values from a schema, handling anyOf/oneOf patterns.

        :param schema_obj: The resolved schema object
        :return: tuple of (type_string, enum_values_list_or_none)
        """
        if not isinstance(schema_obj, dict):
            return "unknown", None

        # Check for direct enum first (this takes priority)
        if 'enum' in schema_obj and isinstance(schema_obj['enum'], list):
            # If there's an enum, try to get the type, but enum values are what we care about
            schema_type = schema_obj.get('type', 'string')  # Default to string for enums
            return schema_type, schema_obj['enum']

        # Direct type and enum
        if 'type' in schema_obj:
            enum_values = schema_obj.get('enum')
            return schema_obj['type'], enum_values

        # Handle anyOf/oneOf patterns
        for key in ['anyOf', 'oneOf']:
            if key in schema_obj and isinstance(schema_obj[key], list):
                # Look for the first non-null type with potential enum
                for sub_schema in schema_obj[key]:
                    if isinstance(sub_schema, dict):
                        sub_type = sub_schema.get('type')
                        if sub_type and sub_type != 'null':
                            enum_values = sub_schema.get('enum')
                            return sub_type, enum_values

        # Handle allOf (less common for parameters but possible)
        if 'allOf' in schema_obj and isinstance(schema_obj['allOf'], list):
            for sub_schema in schema_obj['allOf']:
                if isinstance(sub_schema, dict) and 'type' in sub_schema:
                    enum_values = sub_schema.get('enum')
                    return sub_schema['type'], enum_values

        return "object", None

    def _format_constraints(self, schema_obj_ref):
        """
        Formats validation keywords from a schema object into readable strings.
        """
        resolved_schema = self._resolve_ref(schema_obj_ref)
        if not isinstance(resolved_schema, dict):
            return []

        constraints = []

        # Get type and enum from the schema (handling anyOf/oneOf)
        schema_type, enum_values = self._get_schema_type_and_enum(resolved_schema)

        # Handle enum constraints first (most important)
        if enum_values and isinstance(enum_values, list):
            enum_values_str = ", ".join(map(str, enum_values))
            constraints.append(f"must be one of: [{enum_values_str}]")

        # Handle direct enum in resolved_schema (fallback)
        elif 'enum' in resolved_schema and isinstance(resolved_schema['enum'], list):
            enum_values_str = ", ".join(map(str, resolved_schema['enum']))
            constraints.append(f"must be one of: [{enum_values_str}]")

        # String constraints
        if schema_type == 'string' or resolved_schema.get('type') == 'string':
            if 'minLength' in resolved_schema:
                constraints.append(f"length >= {resolved_schema['minLength']}")
            if 'maxLength' in resolved_schema:
                constraints.append(f"length <= {resolved_schema['maxLength']}")
            if 'pattern' in resolved_schema:
                constraints.append(f"matches pattern: {resolved_schema['pattern']}")
            if 'format' in resolved_schema:
                constraints.append(f"format: {resolved_schema['format']}")

        # Number/integer constraints
        if schema_type in ['number', 'integer'] or resolved_schema.get('type') in ['number', 'integer']:
            if 'minimum' in resolved_schema:
                op = ">=" if not resolved_schema.get('exclusiveMinimum', False) else ">"
                constraints.append(f"{op} {resolved_schema['minimum']}")
            if 'maximum' in resolved_schema:
                op = "<=" if not resolved_schema.get('exclusiveMaximum', False) else "<"
                constraints.append(f"{op} {resolved_schema['maximum']}")
            if 'multipleOf' in resolved_schema:
                constraints.append(f"multiple of {resolved_schema['multipleOf']}")

        # Array constraints
        if schema_type == 'array' or resolved_schema.get('type') == 'array':
            if 'minItems' in resolved_schema:
                constraints.append(f"min items: {resolved_schema['minItems']}")
            if 'maxItems' in resolved_schema:
                constraints.append(f"max items: {resolved_schema['maxItems']}")
            if resolved_schema.get('uniqueItems', False):
                constraints.append("items must be unique")

        return constraints

    def _get_property_representation(self, prop_schema_ref):
        """
        Gets the representation (type or example) for a single property schema.
        If the property is an array of objects, it shows the schema of one object item.

        :param prop_schema_ref: A reference to a property's schema or an inline schema.
        :return: A string, number, boolean, list, or dict representing the property.
        """
        resolved_prop_schema = self._resolve_ref(prop_schema_ref)
        if not isinstance(resolved_prop_schema, dict):
            return "unknown_schema_format"

        # If the property itself has an example, use that.
        if 'example' in resolved_prop_schema:
            return resolved_prop_schema['example']

        # Use the enhanced method to get type information
        prop_type, enum_values = self._get_schema_type_and_enum(resolved_prop_schema)

        if prop_type == 'array':
            items_schema_ref = resolved_prop_schema.get('items', {})
            # Resolve the schema of the items within the array
            resolved_items_schema = self._resolve_ref(items_schema_ref)

            if not isinstance(resolved_items_schema, dict):
                return ["unknown_item_schema_format"]  # Represent as a list with an error string

            # If items are objects with properties, expand them using _simplify_response_schema_properties
            if resolved_items_schema.get('type') == 'object' and 'properties' in resolved_items_schema:
                item_representation = self._simplify_response_schema_properties(resolved_items_schema)
                # Return as a list containing the schema of one item
                return [item_representation]
            # If items themselves have an example, use that for the item representation
            elif 'example' in resolved_items_schema:
                # Represent as an array with one example item
                return [resolved_items_schema['example']]
            # For other item types (primitives, nested arrays, objects without properties shown here),
            # recursively call _get_property_representation for the item.
            else:
                item_representation = self._get_property_representation(resolved_items_schema)
                # Represent as a list containing the item's representation
                return [item_representation]

        elif prop_type == 'object' or (prop_type == "unknown" and 'properties' in resolved_prop_schema):
            # For objects with properties, expand them to show their structure
            if 'properties' in resolved_prop_schema:
                return self._simplify_response_schema_properties(resolved_prop_schema)
            else:
                return "object"

        # For primitive types with enum values, show the actual enum values instead of just the type
        if enum_values and isinstance(enum_values, list):
            return enum_values

        # For primitive types (string, number, integer, boolean) or if type is not specified
        return prop_type if prop_type != "unknown" else "unknown_type"

    def _simplify_response_schema_properties(self, schema_obj_ref):
        """
        Simplifies a response schema (or any schema) into a dictionary of
        property_name: representation, or a single representation if not an object.

        :param schema_obj_ref: Reference to the schema to simplify.
        :return: A dictionary of simplified properties, or a single representation string/value.
        """
        resolved_schema = self._resolve_ref(schema_obj_ref)
        if not isinstance(resolved_schema, dict):
            return "error_resolving_schema"

        # Check if it's an object with properties (either explicitly typed as object or has properties)
        if (
            resolved_schema.get('type') == 'object' or 'properties' in resolved_schema
        ) and 'properties' in resolved_schema:
            simplified_props = {}
            for prop_name, prop_schema_val_ref in resolved_schema['properties'].items():
                simplified_props[prop_name] = self._get_property_representation(prop_schema_val_ref)
            return simplified_props
        else:
            # Not an object with properties, or properties are missing.
            # Return its basic representation (e.g., "string", ["item_type"], an example value).
            return self._get_property_representation(resolved_schema)

    def _extract_parameters(self, operation_obj, path_item_obj):
        """
        Extracts and formats parameters from an operation.
        """
        processed_params = []
        consolidated_params_dict = {}

        for param_container in path_item_obj.get('parameters', []):
            param_obj = self._resolve_ref(param_container)
            if isinstance(param_obj, dict) and 'name' in param_obj and 'in' in param_obj:
                consolidated_params_dict[(param_obj['name'], param_obj['in'])] = param_obj
        for param_container in operation_obj.get('parameters', []):
            param_obj = self._resolve_ref(param_container)
            if isinstance(param_obj, dict) and 'name' in param_obj and 'in' in param_obj:
                consolidated_params_dict[(param_obj['name'], param_obj['in'])] = param_obj

        for param_obj_val in consolidated_params_dict.values():
            param_schema_ref = param_obj_val.get('schema', {})
            resolved_param_schema = self._resolve_ref(param_schema_ref)
            if not isinstance(resolved_param_schema, dict):
                continue

            # Use the enhanced method to get type and enum information
            param_type, enum_values = self._get_schema_type_and_enum(resolved_param_schema)

            processed_params.append(
                {
                    "name": param_obj_val.get('name'),
                    "type": param_type,
                    "required": param_obj_val.get('required', False),
                    "description": param_obj_val.get('description', ''),
                    "default": resolved_param_schema.get('default'),
                    "constraints": self._format_constraints(resolved_param_schema),
                }
            )

        request_body_container = operation_obj.get('requestBody')
        if request_body_container:
            request_body = self._resolve_ref(request_body_container)
            if isinstance(request_body, dict):
                json_content = request_body.get('content', {}).get('application/json')
                if (
                    not json_content
                    and isinstance(request_body.get('content'), dict)
                    and request_body['content']
                ):
                    first_content_key = next(iter(request_body['content']), None)
                    if first_content_key:
                        json_content = request_body['content'][first_content_key]

                if json_content and isinstance(json_content.get('schema'), dict):
                    body_schema_ref = json_content['schema']
                    resolved_body_schema = self._resolve_ref(body_schema_ref)
                    if (
                        isinstance(resolved_body_schema, dict)
                        and resolved_body_schema.get('type') == 'object'
                        and isinstance(resolved_body_schema.get('properties'), dict)
                    ):
                        required_body_fields = resolved_body_schema.get('required', [])
                        for prop_name, prop_schema_ref_val in resolved_body_schema['properties'].items():
                            resolved_prop_schema = self._resolve_ref(prop_schema_ref_val)
                            if not isinstance(resolved_prop_schema, dict):
                                continue

                            # Use the enhanced method for request body properties too
                            prop_type, enum_values = self._get_schema_type_and_enum(resolved_prop_schema)

                            processed_params.append(
                                {
                                    "name": prop_name,
                                    "type": prop_type,
                                    "required": prop_name in required_body_fields,
                                    "description": resolved_prop_schema.get('description', ''),
                                    "default": resolved_prop_schema.get('default'),
                                    "constraints": self._format_constraints(resolved_prop_schema),
                                }
                            )
        return processed_params

    def _extract_response_schemas(self, responses_obj):
        """
        Extracts and simplifies success and failure response schemas.
        """
        output_responses = {}
        success_schema_data = None
        failure_schema_data = None

        if not isinstance(responses_obj, dict):
            return output_responses

        for code, resp_obj_ref in responses_obj.items():
            resp_obj = self._resolve_ref(resp_obj_ref)
            if not isinstance(resp_obj, dict):
                continue
            content = resp_obj.get('content', {})
            schema_to_simplify = None
            if isinstance(content.get('application/json'), dict) and 'schema' in content['application/json']:
                schema_to_simplify = content['application/json']['schema']
            elif content:
                for media_type_obj in content.values():
                    if isinstance(media_type_obj, dict) and 'schema' in media_type_obj:
                        schema_to_simplify = media_type_obj['schema']
                        break
            if not schema_to_simplify:
                continue

            simplified_data = self._simplify_response_schema_properties(schema_to_simplify)
            if not isinstance(simplified_data, dict) and not isinstance(
                simplified_data, list
            ):  # Check for list too now
                if simplified_data is not None:
                    simplified_data = {"value": simplified_data}
                else:
                    simplified_data = {}

            str_code = str(code)
            is_success = str_code.startswith('2')
            is_failure = str_code.startswith('4') or str_code.startswith('5') or str_code.lower() == 'default'

            if is_success and not success_schema_data:
                success_schema_data = simplified_data
            elif is_failure and not failure_schema_data:
                failure_schema_data = simplified_data

        if success_schema_data:
            output_responses['success'] = success_schema_data
        if failure_schema_data:
            output_responses['failure'] = failure_schema_data
        return output_responses

    def _extract_operation_details(self, path_str, method_str, op_obj, path_item_obj):
        """
        Extracts all details for a single API operation.
        """
        api_name = op_obj.get(
            'operationId',
            f"{method_str.lower()}_{path_str.replace('/', '_').replace('{', '').replace('}', '')}",
        )
        # Ensure app_name is part of the sanitized name if that's the desired convention
        sanitized_api_name = sanitize_tool_name(f"{self.app_name}_{api_name}")

        description = op_obj.get('description', op_obj.get('summary', ''))
        parameters = self._extract_parameters(op_obj, path_item_obj)
        response_schemas = self._extract_response_schemas(op_obj.get('responses', {}))
        canary_string = op_obj.get('x-canary-string', op_obj.get('x-custom-canary'))

        operation_details = {
            "app_name": self.app_name,
            "secure": "security" in op_obj,
            "api_name": sanitized_api_name,  # Use the sanitized name
            "path": path_str,
            "method": method_str.upper(),
            "description": description,
            "parameters": parameters,
            "response_schemas": response_schemas,
            "canary_string": canary_string,
        }
        return sanitized_api_name, operation_details  # Return sanitized name for dict key

    def _should_filter_api(self, description):
        """
        Determines if an API should be filtered out based on its description.

        :param description: The API description string
        :return: True if the API should be filtered out, False otherwise
        """
        if not description or not self.filter_patterns:
            return False

        description_lower = description.lower()
        return any(pattern.lower() in description_lower for pattern in self.filter_patterns)

    def transform(self):
        """
        Transforms the loaded OpenAPI schema into the desired readable format.
        """
        output = {}
        paths = self.openapi_schema.get('paths', {})
        if not isinstance(paths, dict):
            print("Warning: 'paths' is not a dictionary in the OpenAPI schema. Cannot transform.")
            return output

        for path_str, path_item_obj_ref in paths.items():
            path_item_obj = self._resolve_ref(path_item_obj_ref)
            if not isinstance(path_item_obj, dict):
                continue

            valid_methods = ["get", "put", "post", "delete", "options", "head", "patch", "trace"]
            for method_str, op_obj_ref in path_item_obj.items():
                if method_str.lower() not in valid_methods:
                    continue
                op_obj = self._resolve_ref(op_obj_ref)
                if not isinstance(op_obj, dict):
                    continue

                description = op_obj.get('description', '')
                if self._should_filter_api(description):
                    continue

                api_name_key, operation_details = self._extract_operation_details(
                    path_str, method_str, op_obj, path_item_obj
                )
                if api_name_key in output:
                    print(
                        f"Warning: Duplicate api_name_key '{api_name_key}' detected. Overwriting previous entry. "
                        "Ensure operationIds combined with app_name result in unique keys or generation logic is robust."
                    )
                output[api_name_key] = operation_details
        return output


# --- Main execution / example usage ---
# This part remains largely the same for testing purposes.
# You'll need 'requests' and a running OpenAPI server for the example URL.


def get_json_from_url(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        json_data = response.json()
        return json_data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data from {url}: {e}")
        return None
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {url}: {e}")
        return None


if __name__ == '__main__':
    # Example Usage:
    # Replace this with your actual OpenAPI schema dictionary or JSON string
    sample_openapi_schema = get_json_from_url("http://localhost:9000/file_system/openapi.json")

    transformer = OpenAPITransformer(sample_openapi_schema)
    readable_json_dict = transformer.transform()

    # Print the transformed JSON
    print(json.dumps(readable_json_dict, indent=4))
