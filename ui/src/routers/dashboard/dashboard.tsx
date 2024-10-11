import { ActionFunctionArgs, RouteObject } from "react-router-dom";
import { PrivateLayout } from "../../pages/private/layout";
import hackathons from "./hackathons";
import manage from "./manage";
import axios from "axios";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "dashboard",
    element: <PrivateLayout />,
    action: async ({ request, params }: ActionFunctionArgs) => {
      const formData = await request.formData();
      console.log(Object.fromEntries(formData), request, params);
      const hackathon = {
        title: formData.get("hackathonName"),
        description: formData.get("hackathonDescription")
      }
      try {
        const hackathonResult: Response = await axios.post("/hackathons", hackathon);
        return hackathonResult
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return e?.response?.data || { error: [e.message] }
        } else {
          return { error: [(e as Error).message] }
        }
      }
    },
    children: [
      ...hackathons, ...manage
    ]
  }
]
