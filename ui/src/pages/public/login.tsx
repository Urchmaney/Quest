import { Link } from "react-router-dom";
import lampPng from "../../assets/lamp.png";
import paswordEyeSvg from "../../assets/password-eye.svg";
import closePasswordEyeSvg from "../../assets/close-password-eye.svg";
import { useState } from "react";
export const Login = () => {
    const [showPwd, setShowPwd] = useState(false);
    return (
        <main className="pt-20 h-[calc(100vh-90px)] flex flex-col justify-center">
            <div className="flex justify-between flex-wrap">
                <div className="flex w-1/2 justify-center items-center">
                    <img src={lampPng} />
                </div>
                <div className="w-1/2 flex flex-col bg-white rounded-md px-8 py-14 min-h-[calc(100vh-400px)] justify-between">

                    <div className="flex flex-col  gap-10">
                        <div className="flex flex-col gap-5">
                            <div>
                                <h3 className="text-5xl text-center font-bold">
                                    Login
                                </h3>
                            </div>

                            <div>
                                <p className="w-3/5 mx-auto text-center text-xl font-semibold text-[#575757]">
                                    Hey, enter your details to login in to your account.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-7">
                            <div>
                                <input type="text" className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Email / Username" />
                            </div>
                            <div className="relative">
                                <input type={showPwd ? "text" : "password"} className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Password" />
                                <img className="absolute right-3 top-6 cursor-pointer" src={showPwd ? closePasswordEyeSvg : paswordEyeSvg} onClick={() => setShowPwd(!showPwd)} />
                            </div>
                            <div>
                                <span className="text-gray font-semibold">
                                    Don’t remember your password? <span className="text-black underline inline-block pl-4"><Link to={"/"}>Forget Password</Link></span>
                                </span>
                            </div>
                            <div>
                                <input type="submit" className="w-full px-5 h-16 rounded-md outline-none text-xl bg-primary text-white" value={"Login"} />
                            </div>
                        </div>
                    </div>



                    <div>
                        <div>
                            <p className="text-gray font-semibold text-xl text-center">
                                Don’t have an account? <span className="text-black underline inline-block pl-4"><Link to={"/register"}>Register</Link></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}