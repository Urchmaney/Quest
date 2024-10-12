import { redirect } from "react-router-dom";
import { register } from "../../services/api/auth";

export const registerAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  try {
    await register({
      email: formData.get("email")?.toString() || "",
      password: formData.get("password")?.toString() || "",
      fullName: formData.get("")?.toString() || ""
    });
    return redirect("/login");
  }
  catch (e) {
   return e
  }
}
