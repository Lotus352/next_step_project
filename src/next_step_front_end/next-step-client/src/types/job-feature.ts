import Skill from "@/types/skill.ts";
import Salary from "@/types/salary.ts";

export default interface JobFeature {
    jobId: number;
    title: string;
    shortDescription: string;
    location: string;
    employmentType: string;
    companyName: string;
    companyLogo: string ;
    skills: Skill[];
    salary: Salary;
    createdAt: string;
    isFavorite: boolean;
}