import React from "react";

import PrivateLayout from "../layouts/private/PrivateLayout";

import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";
import RequireRole from "./guards/RequireRole";

const Login = React.lazy(() => import("../pages/private/login/Login"));
const Register = React.lazy(() => import("../pages/private/registration/Registry"));
const RecoverPass = React.lazy(() => import ("../pages/private/recover/RecoverPass"));
const AppShell = React.lazy(() => import("../pages/private/layout/AppShell/AppShell"));

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
                        element: <AppShell />,
                        children: [
                            {
                                path: "/portal/client/dash",
                                element: (
                                    <RequireRole 
                                    allowedRoles={["CLIENT"]}
                                    />
                                )
                            },
                            {
                                path: "/portal/collaborator/dash",
                                element: (
                                    <RequireRole 
                                    allowedRoles={["COLLABORATOR"]}
                                    />
                                )
                            },
                            {
                                path: "/portal/admin/dash",
                                element: (
                                    <RequireRole 
                                    allowedRoles={["ADMIN"]}
                                    />
                                )
                            }
                        ]
                    },
                ]
            },
        ]
    }
];
export default PrivateRoutes;