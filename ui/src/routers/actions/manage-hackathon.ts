import { redirect } from "react-router-dom";

export const manageHackathonAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData));
  return redirect("/dashboard/manage");
}