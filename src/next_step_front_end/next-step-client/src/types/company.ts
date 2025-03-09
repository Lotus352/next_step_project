import Industry from "@/types/industry.ts";

export default interface Company {
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
    industries: Industry[];
}