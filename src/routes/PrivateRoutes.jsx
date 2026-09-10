import React from "react";

import PrivateLayout from "../layouts/private/PrivateLayout";

const Login = React.lazy(() => import("../pages/private/login/Login"));
const Register = React.lazy(() => import("../pages/private/registration/Registry"));

const PrivateRoutes = [
    {
        element: <PrivateLayout />,
        children: [
            {
                path: "/portal/login",
                element: <Login />
            },
            {
                path: "/portal/register",
                element: <Register />
            }
        ]
    }
];
export default PrivateRoutes;