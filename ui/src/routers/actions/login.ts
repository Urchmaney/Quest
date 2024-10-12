import axios from "axios";
import { redirect } from "react-router-dom";

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

