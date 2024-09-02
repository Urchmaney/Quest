import { HackathonDetail } from "../../pages/private/dashboard/hackathon/hackathon-detail";
import { Hackathons } from "../../pages/private/dashboard/hackathon/hackathons";

export default [
    {
        path: "/dashboard/hackathons",
        element: <Hackathons />
    },
    {
        path: "/dashboard/hackathons/:id",
        element: <HackathonDetail />
    }
]