import PostedBy from "@/types/post-py.ts";
import Skill from "@/types/skill.ts";
import ExperienceLevel from "@/types/experience-level.ts";
import Salary from "@/types/salary.ts";
import Industry from "@/types/industry.ts";

export default interface JobDetail {
    jobId: number;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    location: string;
    employmentType: string;
    workType: string;
    jobUrl: string;
    remoteAllowed: boolean;
    status: string;
    isDeleted: boolean;
    isFeature: boolean | null;
    expiryDate: string;
    createdAt: string;
    updatedAt: string;
    interviewProcess: number;
    postedBy: PostedBy;
    skills: Skill[];
    experienceLevels: ExperienceLevel[];
    salary: Salary;
    industry: Industry;
}