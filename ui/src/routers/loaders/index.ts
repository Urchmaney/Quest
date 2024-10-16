
import { LoaderFunctionArgs } from "react-router-dom";
import { allHackathons, getHackathon, hackathonMarkdown, ownedHackathons } from "../../services/api/hackathon";
import { Hackathon } from "../../interfaces/hackathon";

export const editorLoader = async ({ params }: LoaderFunctionArgs): Promise<any> => {
  try {
    return hackathonMarkdown(Number(params["id"]))
  } catch(e) {
    return e
  }
}

export const hackathonsLoader = async ({ request }: LoaderFunctionArgs): Promise<Hackathon[]> => {
  const category = (new URL(request.url).searchParams.get('category') || "all") as "all" | "active" | "history";
  return allHackathons(category);
}

export const OwnedhackathonsLoader = async (): Promise<Hackathon[]> => {
  try {
    return ownedHackathons();
  } catch (e) {
    return [];
  }
}

export const hackathonLoader = async ({ params }: LoaderFunctionArgs): Promise<Hackathon | null> => {
  try {
    return getHackathon(Number(params["id"]));
  } catch (e) {
    return null;
  }
}

export const hackathonUILoader = async ({ params }: LoaderFunctionArgs): Promise<string> => {
  try {
    return hackathonMarkdown(Number(params["id"]));
  } catch (e) {
    return "";
  }
}