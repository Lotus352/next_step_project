import SkillType from "@/types/skill-type.ts";
import SalaryType from "@/types/salary-type.ts";

export default interface JobType {
  jobId: number;
  title: string;
  shortDescription: string;
  location: string;
  employmentType: string;
  companyName: string;
  companyLogo: string;
  skills: SkillType[];
  salary: SalaryType;
  createdAt: string;
  isFavorite: boolean;
}
