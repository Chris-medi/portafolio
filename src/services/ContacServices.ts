import type { ContactForm, ContactResponse } from "@interfaces/global.ts";

const URL = "https://formsubmit.co/45941d49d1f50cadaabc88c24b258401";

export async function sendForm(data: ContactForm): Promise<ContactResponse> {
  return fetch(URL, {
    method: "POST",
    body: data,
  });
}
