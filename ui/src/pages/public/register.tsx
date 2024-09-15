import { useState } from "react";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import lampPng from "../../assets/lamp.png";
import paswordEyeSvg from "../../assets/password-eye.svg";
import closePasswordEyeSvg from "../../assets/close-password-eye.svg";
import axios from "axios";

export const registerAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const registration = Object.fromEntries(formData);
  try {
    await axios.post("/sign_up", registration);
    return redirect("/login");
  }
  catch(e) {
    if (axios.isAxiosError(e))  {
      return e?.response?.data
    } else {
      return { error: [(e as Error).message] }
    }
  }
}

export const Register = () => {
  const error: { [key: string]: string[] }= useActionData() as { [key: string]: string[] } || {};
  const [showPwd, setShowPwd] = useState(false);
  // const [error, setError] = useState<{ [key: string]: string[] }>({});
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
                  {!!error["email"]?.length && <div className="text-secondary">
                    <ul className="list-inside list-disc">{error["email"].map((e, i) => (<li key={`email-error-${i}`}>{e}</li>))}</ul></div>
                  }
                  <input name="email" type="text" className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Email" required />
                </div>
                <div>
                  {!!error["password"]?.length && <div className="text-secondary">
                    <ul className="list-inside list-disc">{error["password"].map((e, i) => (<li key={`password-error-${i}`}>{e}</li>))}</ul></div>
                  }
                  <div className="relative">
                    <input name="password" type={showPwd ? "text" : "password"} className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Password" required />
                    <img className="absolute right-3 top-6 cursor-pointer" src={showPwd ? closePasswordEyeSvg : paswordEyeSvg} onClick={() => setShowPwd(!showPwd)} />
                  </div>

                </div>

                <div>
                  {!!error["password_confirmation"]?.length && <div className="text-secondary">
                    <ul className="list-inside list-disc">{error["password_confirmation"].map((e, i) => (<li key={`password-confirmation-error-${i}`}>{e}</li>))}</ul></div>
                  }
                  <div className="relative">
                    <input name="password_confirmation" type={showPwd ? "text" : "password"} className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Confirm Password" required />
                    <img className="absolute right-3 top-6 cursor-pointer" src={showPwd ? closePasswordEyeSvg : paswordEyeSvg} onClick={() => setShowPwd(!showPwd)} />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-6 h-6 bg-primary accent-primary" />
                  <span className="text-gray font-semibold">
                    Accept <span className="text-black underline inline-block"><Link to={"/"}>Privacy Policy</Link></span>
                  </span>
                </div>
                <div>
                  <input type="submit" className="w-full px-5 h-16 rounded-md outline-none text-xl bg-primary text-white cursor-pointer" value={"Register"} />
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
          </Form>
        </div>

      </div>
    </main>
  )

}