import { ContactFormData } from "./contactFormService";

export async function sendContactNotification(data: ContactFormData, webhookUrl: string): Promise<void> {
  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `New contact form submission:\nName: ${data.Name}\nEmail: ${data.Email}\nPhone: ${data.Phone}\nDescription: ${data.Description}`
    }),
  });
}
