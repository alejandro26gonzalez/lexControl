import React from "react";

import PrivateLayout from "../layouts/private/PrivateLayout";

const Login = React.lazy(() => import("../pages/private/login/Login"));

const PrivateRoutes = [
    {
        element: <PrivateLayout />,
        children: [
            {
                path: "/portal/login",
                element: <Login />
            }
        ]
    }
];
export default PrivateRoutes;