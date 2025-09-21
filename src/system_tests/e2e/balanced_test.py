import unittest

from system_tests.e2e.base_test import BaseTestServerStream


class TestServerStreamBalanced(BaseTestServerStream):
    """
    Test class for Cuga agent in BALANCED mode.
    """

    test_env_vars = {"DYNACONF_FEATURES__CUGA_MODE": "balanced"}

    async def test_get_top_account_by_revenue_stream_balanced(self):
        """
        Test getting the top account by revenue from my accounts.
        Ground Truth: The top account by revenue should be Gold Rush Group.
        """
        query = "get top account by revenue from my accounts"
        all_events = await self.run_task(query)
        self._assert_answer_event(all_events, expected_keywords=["Gold Rush Group"])

    async def test_list_my_accounts_balanced(self):
        """
        Test listing all my accounts and how many are there.
        Ground Truth: There should be 100 accounts.
        """
        query = "list all my accounts, how many are there?"
        all_events = await self.run_task(query)
        self._assert_answer_event(all_events, expected_keywords=["100"])

    async def test_find_vp_sales_active_high_value_accounts_balanced(self):
        """
        Test finding Vice President of Sales in Active, Tech Transformation Accounts.
        Ground Truth: The final list of contacts should contain exactly 23 people.
        """
        query = "Find Vice President of Sales from third party data accounts with client_status: Active, coverage_id: COV-001, campaign_name: 'Tech Transformation', and tell how many"
        all_events = await self.run_task(query)
        self._assert_answer_event(all_events, expected_keywords=["Vice President of Sales"])
        self._assert_answer_event(all_events, expected_keywords=["23"])


if __name__ == "__main__":
    unittest.main()
