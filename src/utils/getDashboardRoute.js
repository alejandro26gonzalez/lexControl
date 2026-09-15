export function getDashboardRoute (user) {
    const role = user?.roles?.[0];

    switch (role){
        case "CLIENT":
            return "/portal/client/dash";
        case "COLLABORATOR":
            return "/portal/collaborator/dash";
        case "ADMIN":
            return "/portal/admin/dash";
        default:
            return "/portal/login";
    };
};