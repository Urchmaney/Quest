import { RouteObject } from "react-router-dom";
import { Home } from "../pages/home";
import { PublicLayout } from "../pages/layouts/public-layout";
import { Login, Register, Hackathons, HackathonDetail, ManageHackathons, ManageHackathonEditor, ErrorPage } from "../pages";
import { PrivateLayout } from "../pages/layouts/private-layout";
import { OwnedhackathonsLoader, editorLoader, hackathonsLoader } from "./loaders";
import { dashboardAction, manageHackathonAction, loginAction, registerAction, editorAction } from "./actions";
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
    action: dashboardAction,
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
        action: manageHackathonAction
      },
      {
        path: "manage/:id/editor",
        element: <ManageHackathonEditor />,
        loader: editorLoader,
        action: editorAction
      }
    ]
  }
]
