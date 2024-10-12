import axios from "axios";

export const login = async (loginDetail: { email: string, password: string }) => {
  try {
    const loginResult: Response = await axios.post("/sign_in", loginDetail);
    if (loginResult.headers.has("x-session-token")) {
      sessionStorage.setItem("sessionToken", loginResult.headers.get("x-session-token") || "");
    }
    return loginResult;
  }
  catch (e) {
    if (axios.isAxiosError(e)) {
      throw e?.response?.data || { error: [e.message] }
    } else {
      throw { error: [(e as Error).message] }
    }
  }
}

export const register = async (registerDetail: { email: string, password: string, fullName: string }) => {
  try {
    const result = await axios.post("/sign_up", registerDetail);
    return result;
  }
  catch (e) {
    if (axios.isAxiosError(e)) {
      throw e?.response?.data
    } else {
      throw { error: [(e as Error).message] }
    }
  }
}
