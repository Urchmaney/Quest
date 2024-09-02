import { RouteObject } from "react-router-dom";
import { PrivateLayout } from "../../pages/private/layout";
import hackathons from "./hackathons";
import manage from "./manage";

export const dashboardRoutes : RouteObject[] = [
    {
        path: "/dashboard",
        element: <PrivateLayout />,
        children: [
            ...hackathons, ...manage
        ]
    }
]
