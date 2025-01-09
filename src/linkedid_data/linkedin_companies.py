import csv
from linkedin_api import Linkedin
from dotenv import load_dotenv
import os
import numpy as np  # For handling missing data

# Load environment variables
load_dotenv()

# Login to LinkedIn
email = os.getenv("LINKEDIN_EMAIL")
password = os.getenv("LINKEDIN_PASSWORD")
api = Linkedin(email, password)

# Input and output CSV files
input_csv_file = "linkedin_jobs.csv"
output_csv_file = "linkedin_companies.csv"

# Prepare the output CSV file
fieldnames = [
    "Company ID", "Industries", "Website", "Staff Count", "Logo URL",
    "Locations", "Description", "Founded Year", "Company Type", "Phone", "Name"
]

# Create a set to track unique Company IDs
unique_company_ids = set()

# Read Company IDs from linkedin_jobs.csv
with open(input_csv_file, mode="r", encoding="utf-8") as infile:
    reader = csv.DictReader(infile)
    for row in reader:
        company_id = row.get("Company ID", np.nan)
        if company_id and company_id != np.nan:
            unique_company_ids.add(company_id)

# Open output CSV file for writing
with open(output_csv_file, mode="w", newline="", encoding="utf-8") as outfile:
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    writer.writeheader()

    for company_id in unique_company_ids:
        try:
            # Fetch company details using LinkedIn API
            company_details = api.get_company(company_id)

            # Extract relevant information
            industries = ", ".join(
                [industry.get("localizedName", np.nan) for industry in company_details.get("companyIndustries", [])]
            ) if company_details.get("companyIndustries") else np.nan

            website = company_details.get("callToAction", {}).get("url", np.nan)
            staff_count = company_details.get("staffCount", np.nan)

            logo_url = company_details.get("logo", {}).get("image", {}).get(
                "com.linkedin.common.VectorImage", {}).get("artifacts", [])[0].get("fileIdentifyingUrlPathSegment", np.nan)
            logo_root = company_details.get("logo", {}).get("image", {}).get(
                "com.linkedin.common.VectorImage", {}).get("rootUrl", "")
            full_logo_url = f"{logo_root}{logo_url}" if logo_url != np.nan else np.nan

            locations = "; ".join(
                [
                    f"{loc.get('line1', '')}, {loc.get('city', '')}, {loc.get('country', '')}"
                    for loc in company_details.get("confirmedLocations", [])
                ]
            ) if company_details.get("confirmedLocations") else np.nan

            description = company_details.get("description", np.nan)
            founded_year = company_details.get("foundedOn", {}).get("year", np.nan)

            company_type = company_details.get("companyType", {}).get("localizedName", np.nan)
            phone = company_details.get("phone", {}).get("number", np.nan)
            name = company_details.get("name", np.nan)

            # Write data to CSV
            writer.writerow({
                "Company ID": company_id,
                "Industries": industries,
                "Website": website,
                "Staff Count": staff_count,
                "Logo URL": full_logo_url,
                "Locations": locations,
                "Description": description,
                "Founded Year": founded_year,
                "Company Type": company_type,
                "Phone": phone,
                "Name": name,
            })

            print(f"Successfully fetched data for Company ID: {company_id}")

        except Exception as e:
            print(f"Error fetching data for Company ID: {company_id} - {e}")

print(f"Company data has been saved to {output_csv_file}.")
