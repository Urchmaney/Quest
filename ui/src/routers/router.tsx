import { RouteObject } from "react-router-dom";
import { Home } from "../pages/home";
import { PublicLayout } from "../pages/layouts/public-layout";
import { Login, Register, Hackathons, HackathonDetail, ManageHackathons, ManageHackathonEditor, ErrorPage } from "../pages";
import { PrivateLayout } from "../pages/layouts/private-layout";
import { OwnedhackathonsLoader, hackathonsLoader } from "./loaders";
import { DashboardAction, ManageHackathonAction, loginAction, registerAction } from "./actions";

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <PublicLayout />,
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
    path: "dashboard",
    element: <PrivateLayout />,
    errorElement: <ErrorPage />,
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
