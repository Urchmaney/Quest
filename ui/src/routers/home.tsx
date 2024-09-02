import { RouteObject } from "react-router-dom";

const homeRoutes : RouteObject[] = [
    {
        path: "/",
        element: "<h1> Home </h1>",
        errorElement: "<h1>Error Page</h1>",
    }
]
export default homeRoutes;