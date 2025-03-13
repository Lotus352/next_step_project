import PostedBy from "@/types/post-py-type.ts";
import SkillType from "@/types/skill-type.ts";
import ExperienceLevelType from "@/types/experience-level-type.ts";
import SalaryType from "@/types/salary-type.ts";
import IndustryType from "@/types/industry-type.ts";

export default interface JobDetailType {
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
    skills: SkillType[];
    experienceLevels: ExperienceLevelType[];
    salary: SalaryType;
    industry: IndustryType;
}