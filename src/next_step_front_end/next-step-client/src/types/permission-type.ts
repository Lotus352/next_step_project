import RoleType from "@/types/role-type.ts";

export default interface PermissionType {
    id: number;
    permissionName: string;
    description: string;
    assignedRoles: RoleType[];
}
