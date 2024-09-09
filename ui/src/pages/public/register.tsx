import { useState } from "react";
import { Link } from "react-router-dom";
import lampPng from "../../assets/lamp.png";
import paswordEyeSvg from "../../assets/password-eye.svg";
import closePasswordEyeSvg from "../../assets/close-password-eye.svg";

export const Register = () => {

    const [showPwd, setShowPwd] = useState(false);
    return (
        <main className="h-[calc(100vh-90px)] flex flex-col justify-center">
            <div className="flex justify-between flex-wrap">
                <div className="flex w-1/2 justify-center items-center">
                    <img src={lampPng} />
                </div>
                <div className="w-1/2 flex flex-col bg-white rounded-md px-8 py-14 min-h-[calc(100vh-200px)] justify-between">
                    <div className="flex flex-col  gap-10">
                        <div className="flex flex-col gap-5">
                            <div>
                                <h3 className="text-5xl text-center font-bold">
                                    Register
                                </h3>
                            </div>

                            <div>
                                <p className="w-3/5 mx-auto text-center text-xl font-semibold text-[#575757]">
                                    Hey welcome, input your details to create an your account.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-7">
                            <div>
                                <input type="text" className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Username" />
                            </div>
                            <div className="relative">
                                <input type={showPwd ? "text" : "password"} className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Password" />
                                <img className="absolute right-3 top-6 cursor-pointer" src={showPwd ? closePasswordEyeSvg : paswordEyeSvg} onClick={() => setShowPwd(!showPwd)} />
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-6 h-6 bg-primary accent-primary" />
                                <span className="text-gray font-semibold">
                                    Accept <span className="text-black underline inline-block"><Link to={"/"}>Privacy Policy</Link></span>
                                </span>
                            </div>
                            <div>
                                <input type="submit" className="w-full px-5 h-16 rounded-md outline-none text-xl bg-primary text-white" value={"Register"} />
                            </div>
                        </div>

                    </div>



                    <div>
                        <div>
                            <p className="text-gray font-semibold text-xl text-center">
                                Already have an account? <span className="text-black underline inline-block pl-4"><Link to={"/login"}>Login</Link></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )

}