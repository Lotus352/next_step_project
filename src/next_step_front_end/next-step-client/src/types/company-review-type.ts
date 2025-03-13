import CompanyType from "@/types/company-type.ts";
import UserType from "@/types/user-type.ts";

export default interface CompanyReviewType {
    reviewId: number;
    company: CompanyType;
    user: UserType;
    rating: number;
    reviewText: string;
    createdAt: string;
}
