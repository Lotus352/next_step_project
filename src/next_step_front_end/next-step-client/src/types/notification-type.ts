import UserType from "@/types/user-type.ts";
import JobDetailType from "@/types/job-detail-type.ts";

export default interface NotificationType {
    notificationId: number;
    user: UserType;
    job: JobDetailType;
    message: string;
    status: string;
    createdAt: string;
    readAt?: string;
}
