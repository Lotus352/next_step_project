import UserType from "@/types/user-type.ts";

export default interface OauthLoginType {
    id: number;
    user: UserType;
    provider: string;
    providerUserId: string;
}
