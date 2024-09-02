import { createBrowserRouter } from "react-router-dom";
import dashboard from "./dashboard";
import home from "./home";

export default createBrowserRouter([
  ...home, ...dashboard
])