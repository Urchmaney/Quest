import axios from "axios";
import { ActionFunctionArgs } from "react-router-dom";

export const DashboardAction =  async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData), request, params);
  const hackathon = {
    title: formData.get("hackathonName"),
    description: formData.get("hackathonDescription")
  }
  try {
    const hackathonResult: Response = await axios.post("/hackathons", hackathon);
    return hackathonResult
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return e?.response?.data || { error: [e.message] }
    } else {
      return { error: [(e as Error).message] }
    }
  }
}