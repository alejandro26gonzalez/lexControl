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
const AdminHome = React.lazy(() => import("../components/modules/admin/home/AdminHome"));
const SitesAdmin = React.lazy(() => import("../components/modules/admin/sites/Sites"));
const CatalogsAdmin = React.lazy(() => import("../components/modules/admin/catalogs/Catalogs"));

//modulos de collaborator
const CollabHome = React.lazy(() => import("../components/modules/collaborator/home/CollabHome"));
const CollabFiles = React.lazy(() => import("../components/modules/collaborator/files/Files"));
const CollabRepo = React.lazy(() => import("../components/modules/collaborator/repo/Repo"));
const CollabAppointments = React.lazy(() => import("../components/modules/collaborator/appointments/Appointments"));

//modulos del cliente
const ClientHome = React.lazy(() => import("../components/modules/client/home/ClientHome"));
const ClientAgenda = React.lazy(() => import("../components/modules/client/agenda/Agenda"));
const ClientDocs = React.lazy(() => import("../components/modules/client/docs/Docs"));
const ClientExpedientes = React.lazy(() => import("../components/modules/client/expedientes/Expedientes"));

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
                                path: "/portal/client",
                                element: (
                                    <RequireRole 
                                    allowedRoles={["CLIENT"]}
                                    />
                                ),
                                children: [
                                    {
                                        index: true,
                                        element: <ClientHome />
                                    },
                                    {
                                        path: "files",
                                        element: <ClientExpedientes />
                                    },
                                    {
                                        path: "appointments",
                                        element: <ClientAgenda />
                                    },
                                    {
                                        path: "repo",
                                        element: <ClientDocs />
                                    }
                                ]
                            },
                            {
                                path: "/portal/collaborator",
                                element: (
                                    <RequireRole 
                                    allowedRoles={["COLLABORATOR"]}
                                    />
                                ),
                                children: [
                                    {
                                        index: true,
                                        element: <CollabHome />
                                    },
                                    {
                                        path: "files",
                                        element: <CollabFiles />
                                    },
                                    {
                                        path: "appointments",
                                        element: <CollabAppointments />
                                    },
                                    {
                                        path: "repo",
                                        element: <CollabRepo />
                                    }
                                ]
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
                                    },
                                    {
                                        path: "sites",
                                        element: <SitesAdmin />
                                    },
                                    {
                                        path: "catalogs",
                                        element: <CatalogsAdmin />
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