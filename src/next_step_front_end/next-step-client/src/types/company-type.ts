import IndustryType from "@/types/industry-type.ts";

export default interface CompanyType {
    companyId: number;
    name: string;
    description: string;
    state: string | null;
    country: string;
    zipCode: string | null;
    address: string | null;
    companyUrl: string;
    logoUrl: string;
    isDeleted: boolean;
    founded: boolean;
    specialities: string[];
    countEmployees: number;
    industries: IndustryType[];

    countJobOpening: number;
    countReview: number;
    averageRating: number;
}