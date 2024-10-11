import { RouteObject } from "react-router-dom";
import { HackathonDetail } from "../../pages/private/dashboard/hackathon/hackathon-detail";
import { Hackathons, hackathonsLoader } from "../../pages/private/dashboard/hackathon/hackathons";

const hackathonsRouters : RouteObject[] =  [
    {
        path: "hackathons",
        element: <Hackathons />,
        loader: hackathonsLoader
        
    },
    {
        path: "hackathons/:id",
        element: <HackathonDetail />
    }
]

export default hackathonsRouters;