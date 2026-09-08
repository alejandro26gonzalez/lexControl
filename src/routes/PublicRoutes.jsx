import React from "react"

import PublicLayout from "../layouts/public/PublicLayout"

const Home = React.lazy(() => import("../pages/public/home/Home"));
const About = React.lazy(() => import("../pages/public/about/About"));
const Specialties = React.lazy(() => import("../pages/public/specialties/Specialties"));
const Team = React.lazy(() => import("../pages/public/team/Team"));
const Resources = React.lazy(() => import("../pages/public/resources/Resources"));
const Contact = React.lazy(() => import("../pages/public/contact/Contact"));

const PublicRoutes =[
    {
        element: <PublicLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/specialties',
                element: <Specialties />,
            },
            {
                path: '/team',
                element: <Team />,
            },
            {
                path: '/resources',
                element: <Resources />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            
        ]
    }
];

export default PublicRoutes;