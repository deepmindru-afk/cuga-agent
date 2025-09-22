from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
import uvicorn

# Campaign configurations
CAMPAIGN_HIGH_VALUE_OUTREACH = "High Value Outreach"
CAMPAIGN_TECH_TRANSFORMATION = "Tech Transformation"

app = FastAPI(
    title="Digital Sales Skills API",
    description="An API for managing sales accounts, contacts, and campaigns.",
    version="1.0.0",
)

# --- Pydantic Models ---


class Account(BaseModel):
    id: str
    name: str
    state: str
    revenue: int


class JobTitle(BaseModel):
    title: str


class Contact(BaseModel):
    id: str
    name: str
    email: str
    account_id: str
    job_title: str


class MyAccountsOutput(BaseModel):
    accounts: List[Account]
    coverage_id: str
    client_status: str


class AccountsOutput(BaseModel):
    accounts: List[Account]
    campaign_name: str


class JobTitlesOutput(BaseModel):
    job_titles: List[JobTitle]


class ContactsOutput(BaseModel):
    contacts: List[Contact]


class GetContactsRequest(BaseModel):
    job_titles: List[JobTitle]
    accounts: List[Account]


# --- Sample Data ---

# A static list of 100 accounts for consistent testing
accounts_list = [
    ("Apex Industries", "NY", 1200000),
    ("Starlight Corp", "FL", 300000),
    ("Phoenix Holdings", "CA", 9500000),
    ("Meridian Enterprises", "IL", 750000),
    ("Zenith Group", "TX", 4500000),
    ("Silverline Systems", "WA", 6800000),
    ("Frontier Tech", "CO", 2100000),
    ("Evergreen LLC", "OR", 900000),
    ("Innovate Inc.", "CA", 5500000),
    ("Data Flow Inc.", "TX", 7100000),
    ("Cloud Sphere LLC", "WA", 4300000),
    ("Net Weavers Corp", "NY", 2200000),
    ("Info Stream Tech", "CA", 8900000),
    ("Global Reach Inc.", "FL", 1500000),
    ("Terra Firm Ltd.", "CO", 3200000),
    ("Blue Ocean Co.", "CA", 6200000),
    ("Red River LLC", "TX", 500000),
    ("Golden Gate Group", "CA", 9800000),
    ("Keystone Industries", "PA", 3400000),
    ("Sunbeam Systems", "FL", 1800000),
    ("Crystal Clear Co.", "AZ", 2900000),
    ("Summit Strategies", "CO", 5300000),
    ("North Star Ent.", "MN", 4100000),
    ("Alpha Wave Tech", "WA", 7600000),
    ("Omega Solutions", "TX", 8300000),
    ("Delta Force Inc.", "GA", 2700000),
    ("Gamma Ray Group", "IL", 6400000),
    ("Echo Labs", "CA", 4900000),
    ("Bravo Corp", "NY", 1100000),
    ("Momentum Machines", "MI", 3800000),
    ("Velocity Ventures", "TX", 5900000),
    ("Pinnacle Partners", "IL", 7200000),
    ("Horizon Holdings", "FL", 2400000),
    ("Catalyst Creations", "CA", 8800000),
    ("Synergy Systems", "TX", 6700000),
    ("Vanguard Vision", "NY", 3300000),
    ("Triton Tech", "WA", 5100000),
    ("Orion Operations", "CO", 2600000),
    ("Helios Holdings", "FL", 400000),
    ("Titan Industries", "MI", 4800000),
    ("Matrix Methods", "IL", 7900000),
    ("Vertex Ventures", "CA", 9200000),
    ("Nexus Networks", "TX", 6100000),
    ("Spectrum Solutions", "NY", 1700000),
    ("Polaris Projects", "MN", 3600000),
    ("Quasar Queries", "AZ", 2300000),
    ("Stellar Systems", "WA", 5800000),
    ("Nebula Networks", "OR", 850000),
    ("Andromeda Inc.", "CA", 9700000),
    ("Cosmos Creations", "TX", 7400000),
    ("Galaxy Group", "FL", 1300000),
    ("Supernova Systems", "NY", 3000000),
    ("Blackhole Co.", "IL", 6900000),
    ("Rocket Corp", "FL", 2000000),
    ("Comet Co.", "CO", 1400000),
    ("Meteorite Methods", "AZ", 950000),
    ("Asteroid Ventures", "TX", 3700000),
    ("Planet Partners", "CA", 8100000),
    ("Starship Systems", "WA", 5600000),
    ("Warp Drive Inc.", "NY", 4200000),
    ("Teleport Tech", "CA", 7700000),
    ("Time Travel Co.", "IL", 6300000),
    ("Future Forward", "TX", 9000000),
    ("Next Gen Group", "WA", 4700000),
    ("Legacy Labs", "NY", 800000),
    ("Tradition Tech", "PA", 2500000),
    ("Old School Systems", "OH", 1900000),
    ("Heritage Holdings", "GA", 3100000),
    ("Pioneer Partners", "OR", 700000),
    ("Settler Solutions", "CO", 1600000),
    ("Homestead Inc.", "MN", 4400000),
    ("Frontier Flow", "TX", 5200000),
    ("Wild West Web", "AZ", 600000),
    ("Gold Rush Group", "CA", 9999999),
    ("Silicon Valley Co.", "CA", 9400000),
    ("Route 66 Systems", "IL", 3900000),
    ("Big Apple Biz", "NY", 8600000),
    ("Lone Star Logic", "TX", 9300000),
    ("Sunshine State Co.", "FL", 2800000),
    ("Windy City Web", "IL", 6600000),
    ("Badger State Biz", "WI", 3500000),
    ("Wolverine Web", "MI", 4600000),
    ("Buckeye Biz", "OH", 2000000),
    ("Empire State Ent.", "NY", 8400000),
    ("Golden State Group", "CA", 9600000),
    ("Evergreen Ent.", "WA", 5400000),
    ("Centennial Co.", "CO", 2200000),
    ("Beaver State Biz", "OR", 1000000),
    ("Grand Canyon Group", "AZ", 1200000),
    ("Silver State Systems", "NV", 1800000),
    ("Beehive Biz", "UT", 1500000),
    ("Gem State Group", "ID", 1100000),
    ("Big Sky Biz", "MT", 900000),
    ("Equality State Ent.", "WY", 700000),
    ("Cornhusker Co.", "NE", 1400000),
    ("Sunflower State", "KS", 1300000),
    ("Sooner State", "OK", 1700000),
    ("Show Me Systems", "MO", 2100000),
    ("Hawkeye Holdings", "IA", 1900000),
    ("North Star Inc.", "MN", 2300000),
]

SAMPLE_ACCOUNTS: Dict[str, Account] = {
    f"acc_{i}": Account(id=f"acc_{i}", name=name, state=state, revenue=rev)
    for i, (name, state, rev) in enumerate(accounts_list, start=1)
}

SAMPLE_JOB_TITLES: List[JobTitle] = [
    JobTitle(title="Chief Executive Officer"),
    JobTitle(title="Chief Technology Officer"),
    JobTitle(title="Chief Financial Officer"),
    JobTitle(title="Vice President of Sales"),
    JobTitle(title="Director of Marketing"),
    JobTitle(title="Sales Manager"),
    JobTitle(title="Product Manager"),
    JobTitle(title="Account Executive"),
]

# Generate deterministic contacts linked to accounts (2-3 contacts per account = ~250 total)
first_names = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Helen", "Ian", "Julia"]
last_names = [
    "Johnson",
    "Williams",
    "Davis",
    "Miller",
    "Garcia",
    "Rodriguez",
    "Wilson",
    "Martinez",
    "Anderson",
    "Taylor",
]
job_titles_list = [jt.title for jt in SAMPLE_JOB_TITLES]

# Distribution pattern: ensure each account gets contacts from different job categories
job_patterns = [
    ["Chief Executive Officer", "Chief Financial Officer"],  # Executive level
    ["Vice President of Sales", "Director of Marketing"],  # Senior management
    ["Sales Manager", "Product Manager"],  # Mid-level
    ["Account Executive", "Chief Technology Officer"],  # Individual contributors
]

contacts_list = []
contact_index = 1

for acc_id in range(1, 101):  # For each of the 100 accounts
    account_id = f"acc_{acc_id}"
    account = SAMPLE_ACCOUNTS[account_id]
    account_name_part = account.name.split(' ')[0].lower().replace('.', '')

    # Determine how many contacts for this account (2 or 3, alternating)
    num_contacts = 2 if acc_id % 2 == 0 else 3

    # Get job titles for this account based on pattern
    pattern_index = (acc_id - 1) % len(job_patterns)
    account_job_titles = job_patterns[pattern_index]

    for contact_num in range(num_contacts):
        # Deterministic name generation based on account and contact number
        first_name_idx = (acc_id + contact_num) % len(first_names)
        last_name_idx = (acc_id * contact_num + contact_num) % len(last_names)

        first_name = first_names[first_name_idx]
        last_name = last_names[last_name_idx]
        name = f"{first_name} {last_name}"

        # Email generation
        email = f"{first_name.lower()}.{last_name[0].lower()}@{account_name_part}.com"

        # Job title assignment (cycle through available titles for this account)
        job_title = account_job_titles[contact_num % len(account_job_titles)]

        contacts_list.append((f"con_{contact_index}", name, email, account_id, job_title))
        contact_index += 1

SAMPLE_CONTACTS: Dict[str, Contact] = {
    cid: Contact(id=cid, name=cname, email=cemail, account_id=cacc_id, job_title=cjob_title)
    for cid, cname, cemail, cacc_id, cjob_title in contacts_list
}


# --- API Endpoints ---
@app.get("/getMyAccounts", response_model=MyAccountsOutput, summary="Get My Territory Accounts")
async def get_my_accounts():
    """
    Retrieves the list of accounts assigned to the current user's territory.
    """
    return MyAccountsOutput(
        accounts=list(SAMPLE_ACCOUNTS.values()),
        coverage_id="COV-001",
        client_status="Active",
    )


@app.get("/getAccountsTPP", response_model=AccountsOutput, summary="Get Accounts by Campaign Criteria")
async def get_accounts_tpp(client_status: str, coverage_id: str, campaign_name: str):
    """
    Retrieve accounts from the Third-Party Provider (TPP) based on client status,
    coverage ID, and a specific campaign name.
    """
    # This logic simulates filtering based on TPP criteria.
    # For this example, "Active" status returns high-revenue accounts,
    # and "Inactive" returns low-revenue accounts.
    if client_status.lower() == "active":
        filtered_accounts = [acc for acc in SAMPLE_ACCOUNTS.values() if acc.revenue > 1000000]
    else:
        filtered_accounts = [acc for acc in SAMPLE_ACCOUNTS.values() if acc.revenue <= 1000000]

    return AccountsOutput(accounts=filtered_accounts, campaign_name=campaign_name)


@app.post("/getJobRoles", response_model=JobTitlesOutput, summary="Get Job Roles for a Campaign")
async def get_job_roles(campaign_name: str):
    """
    Get a list of relevant job roles based on a product or campaign name.
    """
    # Return specific roles based on campaign type
    if campaign_name == CAMPAIGN_TECH_TRANSFORMATION:
        return JobTitlesOutput(
            job_titles=[
                JobTitle(title="Chief Technology Officer"),
                JobTitle(title="Vice President of Sales"),
                JobTitle(title="Product Manager"),
            ]
        )
    elif campaign_name == CAMPAIGN_HIGH_VALUE_OUTREACH:
        return JobTitlesOutput(
            job_titles=[
                JobTitle(title="Chief Executive Officer"),
                JobTitle(title="Sales Manager"),
                JobTitle(title="Account Executive"),
            ]
        )
    else:
        return JobTitlesOutput(job_titles=SAMPLE_JOB_TITLES)


@app.post("/getContacts", response_model=ContactsOutput, summary="Get Contacts from Accounts")
async def get_contacts(request: GetContactsRequest):
    """
    Get contacts from a third-party data provider (e.g., ZoomInfo)
    for a given list of accounts and job titles.
    """
    requested_account_ids = {acc.id for acc in request.accounts}
    requested_job_titles = {jt.title for jt in request.job_titles}

    # Filter contacts based on the provided accounts and job titles
    found_contacts = [
        contact
        for contact in SAMPLE_CONTACTS.values()
        if contact.account_id in requested_account_ids and contact.job_title in requested_job_titles
    ]

    return ContactsOutput(contacts=found_contacts)


@app.post("/filterContacts", response_model=ContactsOutput, summary="Filter Contacts by Seniority")
async def filter_contacts(contacts_output: ContactsOutput):
    """
    Filters a list of contacts to identify senior-level decision-makers,
    simulating a filtering step in a sales automation tool (e.g., Salesloft).
    """
    senior_titles = {"chief", "director", "vice president", "vp"}
    filtered_contacts = [
        contact
        for contact in contacts_output.contacts
        if any(keyword in contact.job_title.lower() for keyword in senior_titles)
    ]
    return ContactsOutput(contacts=filtered_contacts)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
