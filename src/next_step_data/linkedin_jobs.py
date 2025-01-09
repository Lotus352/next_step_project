import csv
from linkedin_api import Linkedin
from dotenv import load_dotenv
import os
from datetime import datetime, timezone
import numpy as np  # For handling missing data

# Load environment variables
load_dotenv()

# Login to LinkedIn
email = os.getenv("LINKEDIN_EMAIL")
password = os.getenv("LINKEDIN_PASSWORD")
api = Linkedin(email, password)

location = "Vietnam"
limit = 200

# Experience levels mapping
experience_mapping = {
    "1": "Internship",
    "2": "Entry Level",
    "3": "Associate",
    "4": "Mid-Senior Level",
    "5": "Director",
    "6": "Executive",
}

# Prepare the CSV file
csv_file = "linkedin_jobs.csv"
fieldnames = [
    "Job ID", "Title", "Poster ID", "Company ID",
    "Location", "Job State", "Workplace Type", "Application URL",
    "Listed At", "Skills", "Job Description", "Description Attributes", "Experience Level"
]

# Create a dictionary to track processed Job IDs and their experience levels
processed_jobs = {}

# Open CSV file for writing
with open(csv_file, mode="w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()

    # Search jobs for each experience level
    for exp_level, exp_name in experience_mapping.items():
        job_search_results = api.search_jobs(
            keywords="", location=location, limit=limit, experience=[exp_level]
        )

        for job in job_search_results:
            # Extract Job ID
            job_id = job.get("trackingUrn", np.nan).split(":")[-1] if job.get("trackingUrn") else np.nan

            # Skip if Job ID is invalid
            if job_id is np.nan:
                continue

            # Check if Job ID has already been processed
            if job_id in processed_jobs:
                # If this experience level is already recorded, skip
                if exp_name in processed_jobs[job_id]["Experience Level"]:
                    continue
                # Otherwise, add this experience level to the existing entry
                processed_jobs[job_id]["Experience Level"].append(exp_name)
                continue

            # Fetch job details
            job_details = api.get_job(job_id) if job_id else {}

            title = job_details.get("title", np.nan)
            poster_id = job.get("posterId", np.nan)
            job_state = job_details.get("jobState", np.nan)
            location = job_details.get("formattedLocation", np.nan)

            # Extract company ID
            company_id = job_details.get("companyDetails", {}).get(
                "com.linkedin.voyager.deco.jobs.web.shared.WebCompactJobPostingCompany", {}
            ).get("company", np.nan).split(":")[-1] if job_details.get("companyDetails") else np.nan

            workplace_types = job_details.get("workplaceTypes", [])
            workplace_type = job_details.get("workplaceTypesResolutionResults", {}).get(
                workplace_types[0], {}).get("localizedName", np.nan) if workplace_types else np.nan

            application_url = job_details.get("applyMethod", {}).get(
                "com.linkedin.voyager.jobs.OffsiteApply", {}
            ).get("companyApplyUrl", np.nan)

            listed_at_timestamp = job_details.get("listedAt", np.nan)
            listed_at = (
                datetime.fromtimestamp(listed_at_timestamp / 1000, tz=timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
                if listed_at_timestamp is not np.nan else np.nan
            )

            job_description = job_details.get("description", {}).get("text", np.nan)
            description_attributes = job_details.get("description", {}).get("attributes", [])

            # Process description attributes into a readable format
            attributes_text = "; ".join(
                [
                    f"{attr.get('type', {}).keys()} (start: {attr.get('start')}, length: {attr.get('length')})"
                    for attr in description_attributes
                ]
            ) if description_attributes else np.nan

            # Fetch skills
            try:
                job_skills = api.get_job_skills(job_id)
                skill_match_statuses = job_skills.get("skillMatchStatuses", [])
                skills = [status.get("skill", {}).get("name", np.nan) for status in skill_match_statuses]
                skills = ", ".join([str(skill) for skill in skills])
            except Exception as e:
                skills = f"Error fetching skills: {e}"

            # Add to processed jobs
            processed_jobs[job_id] = {
                "Job ID": job_id,
                "Title": title,
                "Poster ID": poster_id,
                "Company ID": company_id,
                "Location": location,
                "Job State": job_state,
                "Workplace Type": workplace_type,
                "Application URL": application_url,
                "Listed At": listed_at,
                "Skills": skills,
                "Job Description": job_description,
                "Description Attributes": attributes_text,
                "Experience Level": [exp_name],
            }

    # Write all processed jobs to CSV
    for job in processed_jobs.values():
        job["Experience Level"] = ", ".join(filter(None, job["Experience Level"]))  # Convert list to string
        writer.writerow(job)

print(f"Job data by experience levels has been saved to {csv_file}.")
