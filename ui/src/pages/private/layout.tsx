import { Outlet } from "react-router-dom"
import notificationImg from "../../assets/notification.svg"

export const PrivateLayout = () => {
    return (
        <div>
            <nav className="bg-primary pt-3 pb-7">
                <div className="text-white container mx-auto flex justify-between items-center">
                    <div className="flex gap-9 items-center text-xl">
                        <span className="inline-block border-b-2 py-2 border-secondary">
                            Hackathons
                        </span>
                        <span className="inline-block py-2 border-secondary">
                            Manage
                        </span>
                    </div>
                    <div className="flex items-center gap-8">
                        <span>
                            <a className="underline" href="#">History</a>
                        </span>
                        <div>
                            <img src={notificationImg} />
                        </div>
                        <div>
                            <div className="w-[45px] h-[45px] bg-secondary rounded-md">

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}