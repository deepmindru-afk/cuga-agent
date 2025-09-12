from typing import List, Dict, Optional, Any
from pydantic import BaseModel
import json
import yaml


class Server(BaseModel):
    url: Optional[str] = ""
    description: Optional[str] = ""


class APIInfo(BaseModel):
    title: Optional[str] = ""
    version: Optional[str] = ""
    description: Optional[str] = ""


class Schema(BaseModel):
    type: Optional[str] = ""
    format: Optional[str] = ""
    description: Optional[str] = ""
    default: Optional[Any] = None
    enum: Optional[List[Any]] = []
    properties: Optional[Dict[str, "Schema"]] = {}
    items: Optional["Schema"] = None
    required: Optional[List[str]] = []
    ref: Optional[str] = ""
    nullable: Optional[bool] = False


Schema.update_forward_refs()


class Parameter(BaseModel):
    name: Optional[str] = ""
    in_: Optional[str] = ""
    required: Optional[bool] = False
    description: Optional[str] = ""
    schema: Optional[Schema] = None


class MediaType(BaseModel):
    schema: Optional[Schema] = None


class RequestBody(BaseModel):
    required: Optional[bool] = False
    content: Optional[Dict[str, MediaType]] = {}


class Response(BaseModel):
    description: Optional[str] = ""
    content: Optional[Dict[str, MediaType]] = {}


class APIEndpoint(BaseModel):
    path: Optional[str] = ""
    method: Optional[str] = ""
    summary: Optional[str] = ""
    description: Optional[str] = ""
    operation_id: Optional[str] = ""
    parameters: Optional[List[Parameter]] = []
    request_body: Optional[RequestBody] = None
    responses: Optional[Dict[str, Response]] = {}


def is_http_method(method):
    return method.lower() in ["get", "post", "put", "delete", "options", "head", "patch", "trace"]


class SimpleOpenAPIParser:
    def __init__(self, document):
        self.document = document

    @staticmethod
    def from_json(data):
        try:
            doc = json.loads(data)
        except Exception as e:
            raise ValueError("Invalid JSON") from e
        return SimpleOpenAPIParser(doc)

    @staticmethod
    def from_yaml(data):
        try:
            yaml_obj = yaml.safe_load(data)
            json_data = json.dumps(yaml_obj)
            return SimpleOpenAPIParser.from_json(json_data)
        except Exception as e:
            raise ValueError("Invalid YAML") from e

    def servers(self):
        result = []
        for item in self.document.get("servers", []):
            url = item.get("url", "")
            desc = item.get("description", "")
            result.append(Server(url=url, description=desc))
        return result

    def info(self):
        info_data = self.document.get("info", {})
        return APIInfo(
            title=info_data.get("title", ""),
            version=info_data.get("version", ""),
            description=info_data.get("description", ""),
        )

    def apis(self):
        result = []
        paths = self.document.get("paths", {})
        for path, methods in paths.items():
            for method, op_data in methods.items():
                if not is_http_method(method):
                    continue
                endpoint = APIEndpoint()
                endpoint.path = path
                endpoint.method = method.upper()
                endpoint.summary = op_data.get("summary", "")
                endpoint.description = op_data.get("description", "")
                endpoint.operation_id = op_data.get("operationId", "")
                endpoint.parameters = self._parse_parameters(op_data.get("parameters", []))
                endpoint.request_body = self._parse_request_body(op_data.get("requestBody", {}))
                endpoint.responses = self._parse_responses(op_data.get("responses", {}))
                result.append(endpoint)
        return result

    def get_server(self):
        if not self.document or 'servers' not in self.document or len(self.document['servers']) < 1:
            return ''
        return self.document['servers'][0]['url']

    def _resolve_ref(self, ref: str) -> dict:
        """Resolve a $ref like '#/components/schemas/User' to its actual schema dict."""
        parts = ref.lstrip("#/").split("/")
        data = self.document
        for part in parts:
            data = data.get(part)
            if data is None:
                raise ValueError(f"Could not resolve $ref: {ref}")
        return data

    def _parse_parameters(self, param_list):
        result = []
        for item in param_list:
            p = Parameter()
            p.name = item.get("name", "")
            p.in_ = item.get("in", "")
            p.required = item.get("required", False)
            p.description = item.get("description", "")
            if "schema" in item:
                p.schema = self._parse_schema(item["schema"])
            result.append(p)
        return result

    def _parse_request_body(self, rb_data):
        if not rb_data:
            return None
        rb = RequestBody()
        rb.required = rb_data.get("required", False)
        for media_type, media_data in rb_data.get("content", {}).items():
            media = MediaType()
            if "schema" in media_data:
                media.schema = self._parse_schema(media_data["schema"])
            rb.content[media_type] = media
        return rb

    def _parse_responses(self, resp_data):
        result = {}
        for code, response in resp_data.items():
            r = Response()
            r.description = response.get("description", "")
            for media_type, media_data in response.get("content", {}).items():
                media = MediaType()
                if "schema" in media_data:
                    media.schema = self._parse_schema(media_data["schema"])
                r.content[media_type] = media
            result[code] = r
        return result

    def _parse_schema(self, schema_data):
        if not schema_data:
            return None

        # Handle $ref
        if "$ref" in schema_data:
            ref = schema_data["$ref"]
            resolved = self._resolve_ref(ref)
            return self._parse_schema(resolved)

        schema = Schema()

        for key in ["anyOf", "oneOf", "allOf"]:
            if key in schema_data:
                # Set nullable if 'null' is in the mix
                for sub_schema in schema_data[key]:
                    if sub_schema.get("type") == "null":
                        schema.nullable = True
                    else:
                        sub = self._parse_schema(sub_schema)
                        # flatten into main schema (first non-null wins)
                        if not schema.type:
                            schema.type = sub.type
                            schema.format = sub.format
                            schema.description = sub.description
                            schema.default = sub.default
                            schema.enum = sub.enum
                            schema.properties = sub.properties
                            schema.items = sub.items
                            schema.required = sub.required
                return schema

        schema.type = schema_data.get("type", "")
        schema.format = schema_data.get("format", "")
        schema.description = schema_data.get("description", "")
        schema.default = schema_data.get("default")
        schema.enum = schema_data.get("enum", [])
        schema.required = schema_data.get("required", [])

        if "properties" in schema_data:
            schema.properties = {k: self._parse_schema(v) for k, v in schema_data["properties"].items()}

        if "items" in schema_data:
            schema.items = self._parse_schema(schema_data["items"])

        return schema
