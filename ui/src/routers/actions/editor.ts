import { ActionFunctionArgs } from "react-router-dom";
import { saveHackathonMarkdown } from "../../services/api";

export const editorAction =  async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const markdown = formData.get("markdown")?.toString() || "";
  try {
    const result: Response = await saveHackathonMarkdown(Number(params["id"]), markdown)
    return result
  } catch (e) {
    return e
  }
}