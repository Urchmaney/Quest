import { Hackathon } from "../../interfaces/hackathon";
import { ownedHackathons } from "../../services/api";

export const OwnedhackathonsLoader = async (): Promise<Hackathon[]> => {
  try {
    return ownedHackathons();
  } catch (e) {
    return [];
  }
}