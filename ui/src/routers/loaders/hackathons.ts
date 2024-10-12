import { LoaderFunctionArgs } from "react-router-dom";
import { Hackathon } from "../../interfaces/hackathon";
import { allHackathons } from "../../services/api/hackathon";

export const hackathonsLoader = async ({ request }: LoaderFunctionArgs): Promise<Hackathon[]> => {
  const category = (new URL(request.url).searchParams.get('category') || "all") as "all" | "active" | "history";
  return allHackathons(category);
}