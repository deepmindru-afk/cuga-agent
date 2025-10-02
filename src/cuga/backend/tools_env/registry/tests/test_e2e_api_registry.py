#!/usr/bin/env python3
"""
End-to-End tests for API Registry Server
Tests the full API Registry server including HTTP endpoints
"""

import asyncio
import os
import pytest
import pytest_asyncio
import httpx
import tempfile
import subprocess
import psutil
from cuga.config import PACKAGE_ROOT


def kill_process_on_port(port):
    """Kill any process running on the specified port"""
    try:
        for proc in psutil.process_iter(['pid', 'name']):
            try:
                # Get network connections for this process
                connections = proc.net_connections()
                for conn in connections:
                    if conn.laddr.port == port:
                        print(f"Killing process {proc.info['pid']} ({proc.info['name']}) on port {port}")
                        proc.kill()
                        proc.wait(timeout=5)
                        return True
            except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
                pass
    except Exception as e:
        print(f"Error killing process on port {port}: {e}")
    return False


# Test configurations
LEGACY_CONFIG = """# Legacy OpenAPI services
services:
  - digital_sales:
      url: https://digitalsales.19pc1vtv090u.us-east.codeengine.appdomain.cloud/openapi.json
      description: Digital Sales API for testing
"""

MCP_CONFIG = """# MCP server configuration
mcpServers:
  digital_sales_mcp:
    url: "http://127.0.0.1:8000/sse"
    description: FastMCP example server for Digital Sales API integration (SSE-based)
    type: mcp_server
"""


class TestAPIRegistryE2E:
    """End-to-End tests for API Registry Server"""

    @pytest_asyncio.fixture(scope="class")
    async def registry_server(self):
        """Start API Registry server for testing"""
        server_port = 8001
        server_process = None
        config_path = None

        try:
            # Kill any existing process on the port
            kill_process_on_port(server_port)
            await asyncio.sleep(1)

            # Create temporary config file
            with tempfile.NamedTemporaryFile(mode='w', suffix='.yaml', delete=False) as f:
                f.write(LEGACY_CONFIG)
                config_path = f.name

            # Set environment variable
            os.environ["MCP_SERVERS_FILE"] = config_path

            # Start server in background
            server_process = subprocess.Popen(
                [
                    'uv',
                    'run',
                    'python',
                    os.path.join(
                        PACKAGE_ROOT, 'backend', 'tools_env', 'registry', 'registry', 'api_registry_server.py'
                    ),
                ],
                cwd=None,
            )

            # Wait for server to start
            await asyncio.sleep(3)

            # Check if server is running
            async with httpx.AsyncClient() as client:
                for i in range(10):  # Try for 10 seconds
                    try:
                        response = await client.get(f"http://127.0.0.1:{server_port}/")
                        if response.status_code == 200:
                            break
                    except Exception:
                        pass
                    await asyncio.sleep(1)
                else:
                    raise Exception("Server failed to start")

            yield f"http://127.0.0.1:{server_port}"

        finally:
            # Cleanup - try multiple methods to ensure server is stopped
            print("Cleaning up registry server...")

            # Method 1: Terminate the subprocess if it exists
            if server_process:
                try:
                    server_process.terminate()
                    server_process.wait(timeout=5)
                except (subprocess.TimeoutExpired, ProcessLookupError):
                    if server_process.poll() is None:  # Process still running
                        server_process.kill()
                        server_process.wait()
                except Exception as e:
                    print(f"Error terminating server process: {e}")

            # Method 2: Kill any remaining process on the port
            kill_process_on_port(server_port)

            # Method 3: Wait a moment to ensure cleanup
            await asyncio.sleep(1)

            # Remove config file
            if config_path and os.path.exists(config_path):
                try:
                    os.remove(config_path)
                except Exception as e:
                    print(f"Error removing config file: {e}")

    @pytest.mark.asyncio
    async def test_root_endpoint(self, registry_server):
        """Test root endpoint"""
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{registry_server}/")
            assert response.status_code == 200
            data = response.json()
            assert "message" in data

    @pytest.mark.asyncio
    async def test_list_applications(self, registry_server):
        """Test /applications endpoint"""
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{registry_server}/applications")
            assert response.status_code == 200

            data = response.json()

            # API registry returns list of AppDefinition objects
            if isinstance(data, list):
                assert len(data) > 0
                app_names = [app.get('name', 'unknown') for app in data]
                assert "digital_sales" in app_names
            else:
                assert isinstance(data, dict)
                assert len(data) > 0
                assert "digital_sales" in data

    @pytest.mark.asyncio
    async def test_list_apis_for_application(self, registry_server):
        """Test /applications/{app_name}/apis endpoint"""
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{registry_server}/applications/digital_sales/apis")
            assert response.status_code == 200

            data = response.json()

            # API returns a dictionary of API definitions
            assert isinstance(data, dict)
            assert len(data) == 4

            # Verify API structure - data is a dict with API names as keys
            for api_name, api_info in data.items():
                assert isinstance(api_info, dict)
                assert "api_name" in api_info
                assert "description" in api_info
                assert "app_name" in api_info
                assert api_info["app_name"] == "digital_sales"

    @pytest.mark.asyncio
    async def test_list_all_apis(self, registry_server):
        """Test /apis endpoint"""
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{registry_server}/apis")
            assert response.status_code == 200

            data = response.json()

            # API returns a nested dictionary: {app_name: {api_name: api_info}}
            assert isinstance(data, dict)
            assert "digital_sales" in data

            digital_sales_apis = data["digital_sales"]
            assert isinstance(digital_sales_apis, dict)
            assert len(digital_sales_apis) >= 4  # At least 4 APIs from digital_sales

            # Verify structure of APIs
            for api_name, api_info in digital_sales_apis.items():
                assert isinstance(api_info, dict)
                assert "api_name" in api_info
                assert "description" in api_info
                assert "app_name" in api_info

    @pytest.mark.asyncio
    async def test_call_function(self, registry_server):
        """Test /functions/call endpoint"""
        async with httpx.AsyncClient(timeout=30.0) as client:
            # Call function with no parameters
            payload = {
                "app_name": "digital_sales",
                "function_name": "digital_sales_get_my_accounts_my_accounts_get",
                "args": {},
            }

            response = await client.post(f"{registry_server}/functions/call", json=payload)
            assert response.status_code == 200

            data = response.json()
            assert isinstance(data, dict)
            assert "accounts" in data
            assert "coverage_id" in data
            assert "client_status" in data

            # Verify accounts structure
            accounts = data["accounts"]
            assert isinstance(accounts, list)
            assert len(accounts) > 0

            # Check first account structure
            account = accounts[0]
            assert "name" in account
            assert "state" in account
            assert "revenue" in account

    @pytest.mark.asyncio
    async def test_call_function_with_params(self, registry_server):
        """Test calling function with parameters"""
        async with httpx.AsyncClient(timeout=30.0) as client:
            # Call function with parameters
            payload = {
                "app_name": "digital_sales",
                "function_name": "digital_sales_get_third_party_accounts_third_party_accounts_get",
                "args": {
                    "campaign_name": "Tech Transformation",
                },
            }

            response = await client.post(f"{registry_server}/functions/call", json=payload)
            assert response.status_code == 200

            data = response.json()
            assert isinstance(data, dict)
            assert "accounts" in data

    @pytest.mark.asyncio
    async def test_invalid_function_call(self, registry_server):
        """Test calling non-existent function"""
        async with httpx.AsyncClient() as client:
            payload = {"app_name": "digital_sales", "function_name": "non_existent_function", "args": {}}

            response = await client.post(f"{registry_server}/functions/call", json=payload)
            # Should return error (404 or 500)
            assert response.status_code in [404, 500]

    @pytest.mark.asyncio
    async def test_invalid_app_name(self, registry_server):
        """Test calling function on non-existent app"""
        async with httpx.AsyncClient() as client:
            payload = {"app_name": "non_existent_app", "function_name": "some_function", "args": {}}

            response = await client.post(f"{registry_server}/functions/call", json=payload)
            # Should return error (404 or 500)
            assert response.status_code in [404, 500]


async def run_e2e_tests():
    """Run E2E tests standalone"""
    print("🧪 Testing API Registry Server E2E")
    print("=" * 60)

    server_port = 8001
    server_process = None
    config_path = None

    try:
        # Kill any existing process on the port
        print("🧹 Cleaning up any existing server on port 8001...")
        kill_process_on_port(server_port)
        await asyncio.sleep(1)

        # Create temporary config file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.yaml', delete=False) as f:
            f.write(LEGACY_CONFIG)
            config_path = f.name

        # Set environment variable
        os.environ["MCP_SERVERS_FILE"] = config_path

        print(f"✅ Created temporary config: {config_path}")

        # Start server
        print("\n🚀 Starting API Registry Server...")
        server_process = subprocess.Popen(
            [
                'uv',
                'run',
                'python',
                os.path.join(
                    PACKAGE_ROOT, 'backend', 'tools_env', 'registry', 'registry', 'api_registry_server.py'
                ),
            ],
            cwd=None,
        )
        # Wait for server to start
        print("⏳ Waiting for server to start...")
        await asyncio.sleep(3)

        base_url = "http://127.0.0.1:8001"

        # Check if server is running
        async with httpx.AsyncClient() as client:
            for i in range(10):  # Try for 10 seconds
                try:
                    response = await client.get(f"{base_url}/")
                    if response.status_code == 200:
                        print("✅ Server is running!")
                        break
                except Exception:
                    pass
                await asyncio.sleep(1)
            else:
                raise Exception("❌ Server failed to start")

        # Test 1: Root endpoint
        print("\n📡 Test 1: Root Endpoint")
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{base_url}/")
            assert response.status_code == 200
            data = response.json()
            print(f"✅ Root response: {data['message']}")

        # Test 2: List applications
        print("\n📱 Test 2: List Applications")
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{base_url}/applications")
            assert response.status_code == 200
            data = response.json()

            # API registry returns list of AppDefinition objects
            if isinstance(data, list):
                app_names = [app.get('name', 'unknown') for app in data]
                print(f"✅ Found applications: {app_names}")
            else:
                print(f"✅ Found applications: {list(data.keys())}")

        # Test 3: List APIs
        print("\n🔍 Test 3: List APIs for digital_sales")
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{base_url}/applications/digital_sales/apis")
            assert response.status_code == 200
            data = response.json()
            print(f"✅ Found {len(data)} APIs")

            # Show first few APIs
            if isinstance(data, list):
                api_list = data[:3]
            else:
                # If it's a dict, get the values
                api_list = list(data.values())[:3] if isinstance(data, dict) else [data]

            for i, api in enumerate(api_list, 1):
                if isinstance(api, dict) and 'function' in api:
                    func = api['function']
                    print(f"   {i}. {func['name']}: {func['description'][:60]}...")
                else:
                    print(f"   {i}. {api}")

        # Test 4: Call function
        print("\n📞 Test 4: Call Function")
        async with httpx.AsyncClient(timeout=30.0) as client:
            payload = {
                "app_name": "digital_sales",
                "function_name": "digital_sales_get_my_accounts_my_accounts_get",
                "args": {},
            }

            response = await client.post(f"{base_url}/functions/call", json=payload)
            assert response.status_code == 200
            data = response.json()

            print("✅ Function call successful!")
            print(f"   Response keys: {list(data.keys())}")
            if 'accounts' in data:
                print(f"   Found {len(data['accounts'])} accounts")

        print("\n🎉 E2E tests completed successfully!")

    except Exception as e:
        print(f"❌ E2E test failed: {e}")
        raise
    finally:
        # Cleanup - try multiple methods to ensure server is stopped
        print("\n🧹 Cleaning up...")

        # Method 1: Terminate the subprocess if it exists
        if server_process:
            try:
                server_process.terminate()
                server_process.wait(timeout=5)
                print("✅ Server process terminated")
            except (subprocess.TimeoutExpired, ProcessLookupError):
                if server_process.poll() is None:  # Process still running
                    server_process.kill()
                    server_process.wait()
                    print("✅ Server process killed")
            except Exception as e:
                print(f"Error terminating server process: {e}")

        # Method 2: Kill any remaining process on the port
        if kill_process_on_port(server_port):
            print("✅ Killed remaining process on port")

        # Method 3: Wait a moment to ensure cleanup
        await asyncio.sleep(1)

        # Remove config file
        if config_path and os.path.exists(config_path):
            try:
                os.remove(config_path)
                print("✅ Removed temporary config file")
            except Exception as e:
                print(f"Error removing config file: {e}")

        print("✅ Cleanup completed")


if __name__ == "__main__":
    asyncio.run(run_e2e_tests())
