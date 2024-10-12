import { LoaderFunctionArgs } from "react-router-dom";
import { Hackathon } from "../../interfaces/hackathon";
import axios from "axios";

export const hackathonsLoader = async ({ request }: LoaderFunctionArgs): Promise<Hackathon[]> => {
  const category = new URL(request.url).searchParams.get('category') || "all";
  const response = await axios.get(`/hackathons?category=${category}`);
  return response.data;
}