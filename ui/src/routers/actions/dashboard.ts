import { ActionFunctionArgs } from "react-router-dom";
import { createHackathon } from "../../services/api";

export const dashboardAction =  async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  try {
    const hackathonResult: Response = await createHackathon({
      title: formData.get("hackathonName")?.toString() || "",
      description: formData.get("hackathonDescription")?.toString() || ""
    })
    return hackathonResult
  } catch (e) {
    return e
  }
}