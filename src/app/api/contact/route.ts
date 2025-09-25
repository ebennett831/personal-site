
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { submitContactForm, ContactFormData } from "@/lib/contactFormService";

export async function POST(request: Request) {
  const context = await getCloudflareContext({ async: true });
  const env = context.env;
  const data = await request.json() as ContactFormData;

  // Validate input
  const { Name, Email, Phone, Description } = data;
  if (!Name || !Email || !Phone || !Description) {
    return new Response("Missing required fields", { status: 400 });
  }

  const result = await submitContactForm(data, env);

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
