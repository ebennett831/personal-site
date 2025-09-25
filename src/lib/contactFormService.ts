
import { saveContactForm } from "./db";
import { sendContactNotification } from "./discordWebhook";
// CloudflareEnv is ambient from worker-configuration.d.ts

export type ContactFormData = {
  Name: string;
  Email: string;
  Phone: string;
  Description: string;
};

export async function submitContactForm(
  data: ContactFormData,
  env: CloudflareEnv
): Promise<{ success: boolean; FormID?: number }> {
  const result = await saveContactForm(data, env.DB);
  await sendContactNotification(data, env.DISCORD_WEBHOOK_URL);
  return { success: true, FormID: result.FormID };
}
