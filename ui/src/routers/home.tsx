import { RouteObject } from "react-router-dom";
import { Home } from "../pages/public/home";
import { PublicLayout } from "../pages/public/layout";
import { Login, loginAction } from "../pages/public/login";
import { Register, registerAction } from "../pages/public/register";

const homeRoutes : RouteObject[] = [
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: "<h1>Error Page</h1>",
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />,
                action: loginAction
            },
            {
                path: "/register",
                element: <Register />,
                action: registerAction
            }
        ]
    }
]
export default homeRoutes;