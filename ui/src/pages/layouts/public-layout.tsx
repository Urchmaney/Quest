import { Link, Outlet } from "react-router-dom";
import logoPng from "../assets/logo.png";

export const PublicLayout = () => {
  return (
    <div className="w-full min-h-full bg-lightgray">
      <div className="max-w-container mx-auto">
        <div className="container mx-auto pb-4 min-h-screen flex flex-col justify-between">
          <header className="flex justify-between py-5 px-2">
            <Link to={`/`} className="hover:text-black">
              <div className="flex items-center gap-1">
                <img src={logoPng} className="" />
                <p className="font-semibold text-lg">UEST</p>
              </div>
            </Link>

            <div className="flex gap-5 items-center">
              <button className="bg-transparent underline text-base" type="button"><Link className="text-base font-semibold" to={`/login`}>Login</Link></button>
              <button className="bg-primary text-white px-8 py-2 text-base rounded-sm" type="button"><Link className="hover:text-white" to={`/register`}>Register</Link></button>
            </div>
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  )
}