import axios from "axios";
import { redirect } from "react-router-dom";

export const registerAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const registration = Object.fromEntries(formData);
  try {
    await axios.post("/sign_up", registration);
    return redirect("/login");
  }
  catch (e) {
    if (axios.isAxiosError(e)) {
      return e?.response?.data
    } else {
      return { error: [(e as Error).message] }
    }
  }
}
