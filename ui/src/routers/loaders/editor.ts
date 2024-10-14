import { LoaderFunctionArgs } from "react-router-dom";
import { hackathonMarkdown } from "../../services/api/hackathon";

export const editorLoader = async ({ params }: LoaderFunctionArgs): Promise<any> => {
  try {
    return hackathonMarkdown(Number(params["id"]))
  } catch(e) {
    return e
  }
}