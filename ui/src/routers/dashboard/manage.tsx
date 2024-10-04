import { redirect, RouteObject } from "react-router-dom";
import { ManageHackathonEditor } from "../../pages/private/dashboard/manage/editor";
import { ManageHackathons } from "../../pages/private/dashboard/manage/hackathons";

const manageRoutes: RouteObject[] = [
  {
    path: "/dashboard/manage",
    element: <ManageHackathons />,
    action: async ({ request }: { request: Request }) => {
      console.log("in here")
      const formData = await request.formData();
      console.log(Object.fromEntries(formData));
      return redirect("/dashboard/manage");
    }

  },
  {
    path: "/dashboard/manage/:id/editor",
    element: <ManageHackathonEditor />
  }
]

export default manageRoutes