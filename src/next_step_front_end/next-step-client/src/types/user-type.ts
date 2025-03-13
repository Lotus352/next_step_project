import CompanyType from "@/types/company-type.ts";
import experienceLevelType from "@/types/experience-level-type.ts";

export default interface UserType {
    id: number;
    username: string;
    email: string;
    fullName: string;
    avatarUrl: string | null;
    resumeUrl: string | null;
    status: string;
    company: CompanyType | null;
    experienceLevel: experienceLevelType | null;
}
