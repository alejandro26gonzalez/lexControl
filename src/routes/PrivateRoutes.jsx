import React from "react";

import PrivateLayout from "../layouts/private/PrivateLayout";

import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";
import RequireRole from "./guards/RequireRole";

const Login = React.lazy(() => import("../pages/private/login/Login"));
const Register = React.lazy(() => import("../pages/private/registration/Registry"));
const RecoverPass = React.lazy(() => import ("../pages/private/recover/RecoverPass"));
const AppShell = React.lazy(() => import("../pages/private/layout/AppShell/AppShell"));

// modulos de admin
const UsuariosAdmin = React.lazy(() => import("../components/modules/admin/UsersManagement"));
const AdminHome = React.lazy(() => import("../modules/admin/home/AdminHome"));

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
                                path: "/portal/admin",
                                element: (
                                    <RequireRole 
                                    allowedRoles={["ADMIN"]}
                                    />
                                ),
                                children: [
                                    {
                                        index: true,
                                        element: <AdminHome />
                                    },
                                    {
                                        path: "users",
                                        element: <UsuariosAdmin />
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
        ]
    }
];
export default PrivateRoutes;