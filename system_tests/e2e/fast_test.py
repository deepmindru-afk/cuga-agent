import unittest

from system_tests.e2e.base_test import BaseTestServerStream


class TestServerStreamFast(BaseTestServerStream):
    """
    Test class for FastAPI server's streaming endpoint in FAST mode.
    """

    test_env_vars = {"DYNACONF_FEATURES__CUGA_MODE": "fast"}

    async def test_get_top_account_by_revenue_stream_fast(self):
        """
        Tests the /stream endpoint with the query 'get top account by revenue' in fast mode.
        """
        query = "get top account by revenue"
        print(f"\n=== Running FAST mode test for query: '{query}' ===")

        # Use the helper function to run the task
        all_events = await self.run_task(query)

        # Use common assertion logic
        self._assert_answer_event(all_events, expected_keywords=["account", "revenue"])

    async def test_another_query_fast(self):
        """
        Example of another test in fast mode.
        """
        query = "list my accounts"
        print(f"\n=== Running FAST mode test for query: '{query}' ===")

        # Use the helper function to run the task
        all_events = await self.run_task(query)

        # Use common assertion logic
        self._assert_answer_event(all_events, expected_keywords=["account", "Tech Innovations Ltd"])


if __name__ == "__main__":
    # You can run specific test classes like this:
    # python -m unittest TestServerStreamFast
    # python -m unittest TestServerStreamRegular
    # Or run all tests:
    unittest.main()
