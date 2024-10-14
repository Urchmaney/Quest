import axios from "axios";
import { Hackathon } from "../../interfaces/hackathon";

export const allHackathons : (category: "all" | "active"| "history") => Promise<Hackathon[]> = async (category = "all") => {
  const response = await axios.get(`/hackathons?category=${category}`);
  return response.data
}

export const ownedHackathons : () => Promise<Hackathon[]> = async () => {
  const response = await axios.get(`/hackathons/owned`);
  return response.data;
}

export const createHackathon : (hackathon: { title: string, description: string }) => Promise<Response> = async(hackathon) => {
  try {
    const hackathonResult: Response = await axios.post("/hackathons", hackathon);
    return hackathonResult
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e?.response?.data || { error: [e.message] }
    } else {
      throw { error: [(e as Error).message] }
    }
  }
}

export const hackathonMarkdown : (id: number) => Promise<string> = async (id) => {
  try {
    const result = await axios.get(`/hackathons/${id}/markdown`);
    return result.data
  } catch(e) {
    if (axios.isAxiosError(e)) {
      throw e?.response?.data || { error: [e.message] }
    } else {
      throw { error: [(e as Error).message] }
    }
  }
}

export const saveHackathonMarkdown : (id: number, markdown: string) => Promise<Response> = async (id, markdown) => {
  try {
    const markdownResult: Response = await axios.post(`/hackathons/${id}/markdown`, { markdown });
    return markdownResult;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e?.response?.data || { error: [e.message] }
    } else {
      throw { error: [(e as Error).message] }
    }
  }
}
