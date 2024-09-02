import { ManageHackathonEditor } from "../../pages/private/dashboard/manage/editor";
import { ManageHackathons } from "../../pages/private/dashboard/manage/hackathons";

export default [
    {
        path: "/dashboard/manage",
        element: <ManageHackathons />
    },
    {
        path: "/dashboard/manage/:id/editor",
        element: <ManageHackathonEditor />
    }
]