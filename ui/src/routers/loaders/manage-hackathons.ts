import axios from "axios";
import { Hackathon } from "../../interfaces/hackathon";

export const OwnedhackathonsLoader = async (): Promise<Hackathon[]> => {
  try {
    const response = await axios.get(`/hackathons/owned`);
    return response.data;
  } catch (e) {
    return [];
  }
}