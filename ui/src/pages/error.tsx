import { Navigate } from "react-router-dom";

const isLoggedIn = (): boolean => {
  return !!sessionStorage.getItem("sessionToken")
}

export const ErrorPage = () => {
  const isAuthenticated = isLoggedIn();
  return (
    <div>
       {isAuthenticated ?  <h1> Error Page</h1> : <Navigate to="/login" /> }
    </div>
  )
}