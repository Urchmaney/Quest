import { NavLink, Outlet } from "react-router-dom"
import notificationSvg from "../../assets/notification.svg";
import closeSvg from "../../assets/close.svg";
import { useState } from "react";

export const PrivateLayout = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    return (
        <div>
            <nav className="bg-primary pt-3 pb-7">
                <div className="text-white container mx-auto flex justify-between items-center">
                    <div className="flex gap-9 items-center text-xl">
                        <NavLink to={"/dashboard/hackathons"} className={({ isActive }) => isActive ? "border-b-2 border-secondary" : ""}>
                            <span className="inline-block  py-2 cursor-pointer hover:text-white">
                                Hackathons
                            </span>
                        </NavLink>

                        <NavLink to={"/dashboard/manage"} className={({ isActive }) => isActive ? "border-b-2 border-secondary" : ""}>
                            <span className="inline-block py-2 cursor-pointer hover:text-white">
                                Manage
                            </span>
                        </NavLink>

                    </div>
                    <div className="flex items-center gap-8">
                        <span>
                            <a className="underline" href="#">History</a>
                        </span>
                        <div>
                            <img src={notificationSvg} />
                        </div>
                        <div>
                            <div className="w-[45px] h-[45px] bg-secondary rounded-md cursor-pointer" onClick={() => setSideBarOpen(true)}>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <SideLayout closeFn={() => setSideBarOpen(false)} isOpen={sideBarOpen} />
            <Outlet />
        </div>
    )
}

const SideLayout = ({ closeFn, isOpen }: { closeFn: () => void, isOpen: boolean }) => {
    return (
        <div className={`h-screen bg-lightgray fixed top-0 min-w-[512px] z-10 ${isOpen ? 'right-0' : '-right-full'} duration-700 ease-in-out`}>
            <div className="p-3 flex justify-end">
                <button className="bg-transparent" onClick={closeFn}><img src={closeSvg} /></button>
            </div>

        </div>
    )
}