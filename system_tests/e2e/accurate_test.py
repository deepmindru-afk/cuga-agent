import unittest

from system_tests.e2e.base_test import BaseTestServerStream


class TestServerStreamRegular(BaseTestServerStream):
    """
    Test class for FastAPI server's streaming endpoint in REGULAR mode.
    """

    # Regular mode - either remove the environment variable or set to default
    test_env_vars = {"DYNACONF_FEATURES__CUGA_MODE": "accurate"}  # This will remove the variable

    async def test_get_top_account_by_revenue_stream_regular(self):
        """
        Tests the /stream endpoint with the query 'get top account by revenue' in regular mode.
        """
        query = "get top account by revenue"
        print(f"\n=== Running REGULAR mode test for query: '{query}' ===")

        # Use the helper function to run the task
        all_events = await self.run_task(query)

        # Use common assertion logic
        self._assert_answer_event(all_events, expected_keywords=["account", "revenue"])

    async def test_another_query_accurate(self):
        """
        Example of another test in fast mode.
        """
        query = "list my accounts"
        print(f"\n=== Running FAST mode test for query: '{query}' ===")

        # Use the helper function to run the task
        all_events = await self.run_task(query)

        # Use common assertion logic
        self._assert_answer_event(all_events, expected_keywords=["account", "100"])


if __name__ == "__main__":
    # You can run specific test classes like this:
    # python -m unittest TestServerStreamFast
    # python -m unittest TestServerStreamRegular
    # Or run all tests:
    unittest.main()
