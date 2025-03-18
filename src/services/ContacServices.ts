import type { ContactResponse } from "@interfaces/global.ts";

const FORM_SUBMIT_URL =
  "https://formsubmit.co/45941d49d1f50cadaabc88c24b258401";

export async function sendForm(data: FormData): Promise<ContactResponse> {
  const response = await fetch(FORM_SUBMIT_URL, {
    method: "POST",
    body: data,
  });
  if (!response.ok) throw Error("Error en el servidor");
  return response.json();
}
