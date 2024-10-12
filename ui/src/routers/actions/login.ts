import { redirect } from "react-router-dom";
import { login } from "../../services/api";

export const loginAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  try {
    const loginResult: Response = await login({
      email: formData.get("email")?.toString() || "",
      password: formData.get("password")?.toString() || ""
    })

    if (loginResult.headers.has("x-session-token")) {
      sessionStorage.setItem("sessionToken", loginResult.headers.get("x-session-token") || "");
    }
    return redirect("/dashboard/hackathons");
  }
  catch (e) {
    return e
  }
}

