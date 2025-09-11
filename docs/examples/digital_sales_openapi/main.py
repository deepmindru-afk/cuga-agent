from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import random
import uvicorn

app = FastAPI(title="Digital sales skills", description="Digital sales skills", version="1.0.0")


# Pydantic Models
class Account(BaseModel):
    name: str
    state: str
    revenue: int


class JobTitle(BaseModel):
    title: str


class ContactJoined(BaseModel):
    name: str
    email: str
    account_name: str
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
    contacts: List[ContactJoined]


class GetContactsRequest(BaseModel):
    job_titles: List[JobTitle]
    accounts: List[Account]


class ValidationError(BaseModel):
    loc: List[str]
    msg: str
    type: str


class HTTPValidationError(BaseModel):
    detail: List[ValidationError]


# Sample Data Generation
def generate_sample_accounts(count: int = 100) -> List[Account]:
    """Generate about 100 sample accounts"""
    company_names = [
        "TechCorp",
        "DataSys",
        "CloudNet",
        "InfoTech",
        "GlobalSoft",
        "NetWorks",
        "SysTech",
        "WebFlow",
        "DataLink",
        "CloudTech",
        "InfoSys",
        "TechFlow",
        "NetSoft",
        "SysLink",
        "WebTech",
        "DataNet",
        "CloudFlow",
        "InfoLink",
        "TechNet",
        "SysFlow",
        "WebSys",
        "DataTech",
        "CloudLink",
        "InfoFlow",
        "TechLink",
        "SysNet",
        "WebLink",
        "DataFlow",
        "CloudSys",
        "InfoNet",
    ]

    states = [
        "CA",
        "TX",
        "NY",
        "FL",
        "IL",
        "PA",
        "OH",
        "GA",
        "NC",
        "MI",
        "NJ",
        "VA",
        "WA",
        "AZ",
        "MA",
        "TN",
        "IN",
        "MO",
        "MD",
        "WI",
        "MN",
        "CO",
        "AL",
        "SC",
        "LA",
        "KY",
        "OR",
        "OK",
        "CT",
        "UT",
        "IA",
        "NV",
        "AR",
        "MS",
        "KS",
        "NM",
    ]

    accounts = []
    for i in range(count):
        company_name = f"{random.choice(company_names)} {random.randint(1, 999)}"
        accounts.append(
            Account(name=company_name, state=random.choice(states), revenue=random.randint(100000, 10000000))
        )

    return accounts


# Sample Job Titles
SAMPLE_JOB_TITLES = [
    JobTitle(title="Chief Executive Officer"),
    JobTitle(title="Chief Technology Officer"),
    JobTitle(title="Chief Financial Officer"),
    JobTitle(title="Chief Operating Officer"),
    JobTitle(title="Vice President of Sales"),
    JobTitle(title="Vice President of Marketing"),
    JobTitle(title="Director of Sales"),
    JobTitle(title="Director of Marketing"),
    JobTitle(title="Sales Manager"),
    JobTitle(title="Marketing Manager"),
    JobTitle(title="Product Manager"),
    JobTitle(title="Software Engineer"),
    JobTitle(title="Data Scientist"),
    JobTitle(title="Business Analyst"),
    JobTitle(title="Account Executive"),
    JobTitle(title="Sales Representative"),
    JobTitle(title="Marketing Specialist"),
    JobTitle(title="Customer Success Manager"),
    JobTitle(title="Technical Support Specialist"),
    JobTitle(title="Operations Manager"),
]

# Sample Contact Names
SAMPLE_NAMES = [
    "John Smith",
    "Jane Doe",
    "Bob Johnson",
    "Alice Williams",
    "Charlie Brown",
    "Diana Davis",
    "Edward Miller",
    "Fiona Wilson",
    "George Moore",
    "Helen Taylor",
    "Ian Anderson",
    "Julia Thomas",
    "Kevin Jackson",
    "Laura White",
    "Michael Harris",
    "Nancy Martin",
    "Oliver Thompson",
    "Patricia Garcia",
    "Quinn Martinez",
    "Rachel Robinson",
]

# Generate sample data
SAMPLE_ACCOUNTS = generate_sample_accounts(100)


# API Endpoints
@app.get("/getMyAccounts", response_model=MyAccountsOutput)
async def get_my_accounts():
    """Get my territory accounts"""
    # Return a subset of accounts with sample coverage info
    my_accounts = SAMPLE_ACCOUNTS[:25]  # Return 25 accounts as "my territory"

    return MyAccountsOutput(accounts=my_accounts, coverage_id="COV-001", client_status="Active")


@app.get("/getAccountsTPP", response_model=AccountsOutput)
async def get_accounts_tpp(client_status: str, coverage_id: str, campaign_name: str):
    """Retrieve accounts from TPP based on client status, coverage id and product name"""
    # Filter accounts based on parameters (simplified logic)
    filtered_accounts = []
    for account in SAMPLE_ACCOUNTS:
        if client_status.lower() == "active":
            # For demo, return accounts with revenue > 1M for "active"
            if account.revenue > 1000000:
                filtered_accounts.append(account)
        elif client_status.lower() == "inactive":
            # Return accounts with revenue < 1M for "inactive"
            if account.revenue < 1000000:
                filtered_accounts.append(account)
        else:
            filtered_accounts.append(account)

    # Limit to reasonable number
    filtered_accounts = filtered_accounts[:50]

    return AccountsOutput(accounts=filtered_accounts, campaign_name=campaign_name)


@app.post("/getJobRoles", response_model=JobTitlesOutput)
async def get_job_roles(campaign_name: str):
    """Get job roles based on product name"""
    # Return job titles based on campaign name
    if "tech" in campaign_name.lower():
        # Tech-focused job titles
        job_titles = SAMPLE_JOB_TITLES[:10]
    elif "sales" in campaign_name.lower():
        # Sales-focused job titles
        job_titles = SAMPLE_JOB_TITLES[10:15]
    else:
        # Return all job titles
        job_titles = SAMPLE_JOB_TITLES

    return JobTitlesOutput(job_titles=job_titles)


@app.post("/getContacts", response_model=ContactsOutput)
async def get_contacts(request: GetContactsRequest):
    """Get contacts from zoominfo"""
    contacts = []

    # Generate contacts based on requested accounts and job titles
    for account in request.accounts[:10]:  # Limit for demo
        for job_title in request.job_titles[:5]:  # Limit for demo
            contact_name = random.choice(SAMPLE_NAMES)
            email = f"{contact_name.lower().replace(' ', '.')}@{account.name.lower().replace(' ', '')}.com"

            contacts.append(
                ContactJoined(
                    name=contact_name, email=email, account_name=account.name, job_title=job_title.title
                )
            )

    return ContactsOutput(contacts=contacts)


@app.post("/filterContacts", response_model=ContactsOutput)
async def filter_contacts(contacts_output: ContactsOutput):
    """Filter contacts in Salesloft"""
    # Simple filtering logic - remove duplicates and filter by email domain
    seen_emails = set()
    filtered_contacts = []

    for contact in contacts_output.contacts:
        if contact.email not in seen_emails and "@" in contact.email:
            seen_emails.add(contact.email)
            # Additional filtering - only include contacts from certain job titles
            if any(
                keyword in contact.job_title.lower() for keyword in ["chief", "director", "manager", "vp"]
            ):
                filtered_contacts.append(contact)

    return ContactsOutput(contacts=filtered_contacts)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
