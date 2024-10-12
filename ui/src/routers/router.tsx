import { RouteObject } from "react-router-dom";
import { Home } from "../pages/home";
import { PublicLayout } from "../pages/layouts/public-layout";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { PrivateLayout } from "../pages/layouts/private-layout";
import { Hackathons } from "../pages/hackathons";
import { HackathonDetail } from "../pages/hackathon-detail";
import { ManageHackathons } from "../pages/manage-hackathons";
import { ManageHackathonEditor } from "../pages/editor";
import { OwnedhackathonsLoader, hackathonsLoader } from "./loaders";
import { DashboardAction, ManageHackathonAction, loginAction, registerAction } from "./actions";

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: "<h1>Error Page</h1>",
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateLayout />,
    action: DashboardAction,
    children: [
      {
        path: "hackathons",
        element: <Hackathons />,
        loader: hackathonsLoader

      },
      {
        path: "hackathons/:id",
        element: <HackathonDetail />
      },
      {
        path: "manage",
        element: <ManageHackathons />,
        loader: OwnedhackathonsLoader,
        action: ManageHackathonAction
      },
      {
        path: "manage/:id/editor",
        element: <ManageHackathonEditor />
      }
    ]
  }
]
