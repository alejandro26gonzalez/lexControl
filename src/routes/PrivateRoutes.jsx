import React from "react";

import PrivateLayout from "../layouts/private/PrivateLayout";

import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";
import RequireRole from "./guards/RequireRole";

const Login = React.lazy(() => import("../pages/private/login/Login"));
const Register = React.lazy(() => import("../pages/private/registration/Registry"));
const RecoverPass = React.lazy(() => import ("../pages/private/recover/RecoverPass"));
const ClientDash = React.lazy(() => import("../pages/private/dash/clients/ClientDash"));
const CollabDash = React.lazy(() => import("../pages/private/dash/collaborators/CollabDash"));
const AdminDash = React.lazy(() => import("../pages/private/dash/admin/AdminDash"));

const PrivateRoutes = [
    {
        element: <PrivateLayout />,
        children: [
            {
                element: <RequireGuest />,
                children: [
                    {
                        path: "/portal/login",
                        element: <Login />
                    },
                    {
                        path: "/portal/register",
                        element: <Register />
                    },
                    {
                        path: "/portal/forgot-password",
                        element: <RecoverPass />
                    }
                ]
            },
            {
                element: <RequireAuth />,
                children: [
                    {
                        element: (
                            <RequireRole 
                            allowedRoles={["CLIENT"]}
                            />
                        ),
                        children: [
                            {
                                path: "/portal/client/dash",
                            element: <ClientDash />
                            }
                        ]
                    },
                    {
                        element: (
                            <RequireRole 
                            allowedRoles={["COLLABORATOR"]}
                            />
                        ),
                        children: [
                            {
                                path: "/portal/collaborator/dash",
                                element: <CollabDash />
                            }
                        ]
                    },
                    {
                        element: (
                            <RequireRole 
                            allowedRoles={["ADMIN"]}
                            />
                        ),
                        children: [
                            {
                                path: "/portal/admin/dash",
                                element: <AdminDash />
                            }
                        ]
                    }
                ]
            },
        ]
    }
];
export default PrivateRoutes;