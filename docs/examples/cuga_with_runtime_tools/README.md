# CUGA Tool Integration Examples

This directory demonstrates **three types of tool integrations** that CUGA supports, showcasing how to connect different tool types to create powerful AI agents.

## 🎯 **Goal of This Example**

This example shows how CUGA can seamlessly integrate multiple tool types in a single workflow. The `main.py` demonstrates a complex task that uses:

1. **OpenAPI Tools** - Access external REST APIs (Digital Sales)
2. **MCP Tools** - File system operations via Model Context Protocol
3. **LangChain Tools** - Python functions for email operations

**Example Task**: *"Get top account by revenue from digital sales, send an email to the account owner, and save it to filesystem"*

## 🔧 **Three Types of Tools in `mcp_servers.yaml`**

### 1. **OpenAPI Tools** (Direct API Integration)
```yaml
services:
  - digital_sales:
      url: https://digitalsales.19pc1vtv090u.us-east.codeengine.appdomain.cloud/openapi.json
      description: Digital Sales Skills API for territory accounts and client information
```
- **Purpose**: Connect to REST APIs via OpenAPI specifications
- **Use Case**: External services, existing APIs, third-party integrations
- **Example**: Digital Sales API for account management

### 2. **MCP Tools** (Model Context Protocol)
```yaml
mcpServers:
    filesystem:
        command: "npx"
        args: ["-y", "@modelcontextprotocol/server-filesystem", "./cuga_workspace"]
        description: "Standard file system operations for workspace management"
```
- **Purpose**: Complex protocols and standardized tool interfaces
- **Use Case**: File systems, databases, specialized protocols
- **Example**: File system operations for saving documents

### 3. **LangChain Tools** (Python Functions)
Defined in `langchain_example_tool.py`:
```python
# Gmail tools loaded at runtime
read_tool = StructuredTool.from_function(read_emails)
send_tool = StructuredTool.from_function(send_email)
tools = [read_tool, send_tool]
```
- **Purpose**: Python functions as tools, runtime tools, rapid prototyping
- **Use Case**: Custom logic, data processing.
- **Example**: Gmail email operations with dummy data

## 🚀 **Working Example in `main.py`**

The main application demonstrates all three tool types working together:

```python
# Task combines all three tool types
task = "Get top account by revenue from my accounts in digital sales, then send an email to the account owner, and save it to to file in my filesystem under cuga_workspace/email_sent.md"

# 1. Uses Digital Sales API (OpenAPI) to get account data
# 2. Uses Gmail tools (LangChain) to send email
# 3. Uses filesystem (MCP) to save the email content
```

## 📋 **Prerequisites**

- Python 3.12+
- [uv](https://docs.astral.sh/uv/) package manager
- Node.js (for MCP filesystem server)

## 🛠️ **Setup Instructions**

### 1. **Install Dependencies**



Navigate to this example
```bash
cd docs/examples/cuga_with_runtime_tools
```

Create and activate a new virtual environment
```bash
uv venv --python=3.12 && source .venv/bin/activate
```

Install dependencies
```bash
uv sync
```

Create a local .env or copy the main .env file
```bash
cp ../../../.env .env
``` 

### 2. **Start MCP Registry** (for OpenAPI and MCP tools)
```bash
export MCP_SERVERS_FILE=./mcp_servers.yaml
uv run registry
```

### 3. **Run the Complete Example**
In a second terminal, activate the same virtual environment
```bash
source .venv/bin/activate
```

Run the example

```bash
uv run main.py
```

### 4. **Kill Registry Process** (if needed)
- **macOS/Linux:**
  ```bash
  lsof -ti:8001 | xargs kill -9
  ```
- **Windows:**
  ```bash
  netstat -ano | findstr :8001
  taskkill /PID <PID> /F
  ```

## 📁 **File Structure**

```
docs/examples/cuga_with_runtime_tools/
├── main.py                    # Main example showing all tool types
├── langchain_example_tool.py  # LangChain Gmail tools (dummy data)
├── fast_mcp_example.py       # MCP server example
├── mcp_servers.yaml          # Configuration for OpenAPI & MCP tools
├── cuga_workspace/           # Workspace for file operations
│   └── email_sent.md         # Example output file
└── README.md                 # This file
```

## 🔍 **What Happens When You Run `main.py`**

1. **Initialize CUGA Agent** with all three tool types
2. **Load OpenAPI tools** from Digital Sales API via MCP registry
3. **Load MCP tools** for filesystem operations
4. **Load LangChain tools** for Gmail operations (runtime)
5. **Execute complex task** that orchestrates all tool types:
   - Query Digital Sales API for top revenue account
   - Generate and send email using Gmail tools
   - Save email content to filesystem using MCP tools

## 🎯 **Key Benefits Demonstrated**

- **Flexibility**: Mix different tool types in one workflow
- **Scalability**: Add new tools without code changes
- **Reusability**: Tools can be used across different tasks
- **Integration**: Seamless communication between tool types

This example showcases CUGA's powerful ability to create unified AI workflows that span multiple systems and protocols.
