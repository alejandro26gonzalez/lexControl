export function getDashboardRoute(user) {
    const role = user?.roles?.[0];

    switch (role) {
        case "CLIENT":
            return "/portal/client";

        case "COLLABORATOR":
            return "/portal/collaborator";

        case "ADMIN":
            return "/portal/admin";

        default:
            return "/portal/login";
    }
}