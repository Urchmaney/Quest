import { RouteObject } from "react-router-dom";
import { Home } from "../pages/public/home";

const homeRoutes : RouteObject[] = [
    {
        path: "/",
        element: <Home />,
        errorElement: "<h1>Error Page</h1>",
    }
]
export default homeRoutes;