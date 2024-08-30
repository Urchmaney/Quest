import { createBrowserRouter } from "react-router-dom";
import {dashboardRoutes as dashboard} from "./dashboard";
import home from "./home";

export default createBrowserRouter([
  ...home, ...dashboard
])