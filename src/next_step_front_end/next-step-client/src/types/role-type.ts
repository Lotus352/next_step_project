import PermissionType from "@/types/permission-type.ts";

export default interface RoleType {
    id: number;
    roleName: string;
    description: string;
    permissions: PermissionType[];
}
