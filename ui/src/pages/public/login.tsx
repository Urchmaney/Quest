import { Form, Link, redirect, useActionData, useNavigation } from "react-router-dom";
import lampPng from "../../assets/lamp.png";
import paswordEyeSvg from "../../assets/password-eye.svg";
import closePasswordEyeSvg from "../../assets/close-password-eye.svg";
import { useState } from "react";
import axios from "axios";
import { Loader } from "../../assets/loader";

export const loginAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const logins = Object.fromEntries(formData);
  try {
    const loginResult: Response = await axios.post("/sign_in", logins);
    if (loginResult.headers.has("x-session-token")) {
      sessionStorage.setItem("sessionToken", loginResult.headers.get("x-session-token") || "");
    }
    return redirect("/dashboard/hackathons");
  }
  catch (e) {
    if (axios.isAxiosError(e)) {
      return e?.response?.data || { error: [e.message] }
    } else {
      return { error: [(e as Error).message] }
    }
  }
}



export const Login = () => {
  const error: { [key: string]: string[] } = useActionData() as { [key: string]: string[] } || {};
  const navigation = useNavigation();

  const [showPwd, setShowPwd] = useState(false);
  return (
    <main className="grow flex flex-col justify-center">
      <div className="flex justify-between flex-wrap">
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img src={lampPng} />
        </div>
        <div className="w-4/5 md:w-1/2 flex flex-col bg-white rounded-md px-8 py-14 min-h-[calc(100vh-200px)] justify-between mx-auto">
          <Form method="post">
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
                {!!error["error"]?.length && <div className="text-secondary">
                  <ul className="list-inside list-disc">{error["error"].map((e, i) => (<li key={`email-error-${i}`}>{e}</li>))}</ul></div>
                }
                <div>
                  <input name="email" type="text" className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Email" required />
                </div>
                <div className="relative">
                  <input name="password" type={showPwd ? "text" : "password"} className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Password" required />
                  <img className="absolute right-3 top-6 cursor-pointer" src={showPwd ? closePasswordEyeSvg : paswordEyeSvg} onClick={() => setShowPwd(!showPwd)} />
                </div>
                <div>
                  <span className="text-gray font-semibold">
                    Don’t remember your password? <span className="text-black underline inline-block pl-4"><Link to={"/"}>Forget Password</Link></span>
                  </span>
                </div>
                <div>
                  <button type="submit" className="w-full text-center px-5 h-16 rounded-md outline-none text-xl bg-primary text-white cursor-pointer flex justify-center items-center"> {navigation.state === "submitting" ? <Loader size={50} /> : <span>Login</span>}</button>
                </div>
              </div>
            </div>
          </Form>

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