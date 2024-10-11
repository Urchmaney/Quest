import { redirect, RouteObject } from "react-router-dom";
import { ManageHackathonEditor } from "../../pages/private/dashboard/manage/editor";
import { ManageHackathons, OwnedhackathonsLoader } from "../../pages/private/dashboard/manage/hackathons";


const manageRoutes: RouteObject[] = [
  {
    path: "manage",
    element: <ManageHackathons />,
    loader: OwnedhackathonsLoader,
    action: async ({ request }: { request: Request }) => {
      const formData = await request.formData();
      console.log(Object.fromEntries(formData));
      return redirect("/dashboard/manage");
    }
  },
  {
    path: "manage/:id/editor",
    element: <ManageHackathonEditor />
  }
]

export default manageRoutes