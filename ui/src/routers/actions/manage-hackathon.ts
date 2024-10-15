import { deleteHackathon } from "../../services/api/hackathon";

export const manageHackathonAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const id = formData.get("id");
  try {
    switch (request.method) {
      case "DELETE":
        await deleteHackathon(Number(id))
        return { ok: true }
      default:
    }
    return {
      ok: 200
    }
  } catch (e) {

  }
}
