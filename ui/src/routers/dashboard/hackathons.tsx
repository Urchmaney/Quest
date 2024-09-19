import { RouteObject } from "react-router-dom";
import { HackathonDetail } from "../../pages/private/dashboard/hackathon/hackathon-detail";
import { Hackathons, hackathonsLoader } from "../../pages/private/dashboard/hackathon/hackathons";

const hackathonsRouters : RouteObject[] =  [
    {
        path: "/dashboard/hackathons",
        element: <Hackathons />,
        loader: hackathonsLoader
        
    },
    {
        path: "/dashboard/hackathons/:id",
        element: <HackathonDetail />
    }
]

export default hackathonsRouters;