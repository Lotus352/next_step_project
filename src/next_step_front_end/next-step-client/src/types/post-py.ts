import Company from "@/types/company.ts";

export default interface PostedBy {
    id: number;
    username: string;
    email: string;
    fullName: string;
    avatarUrl: string | null;
    resumeUrl: string | null;
    status: string;
    company: Company;
}