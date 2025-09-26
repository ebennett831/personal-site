
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { submitContactForm, ContactFormData } from "@/lib/contactFormService";

export async function POST(request: Request) {
  const context = await getCloudflareContext({ async: true });
  const env = context.env;
  const body = await request.json() as { token: string } & ContactFormData;
  const { token, Name, Email, Phone, Description } = body;

  // Validate input
  if (!Name || !Email || !Phone || !Description) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Validate Turnstile token
  if (!token || typeof token !== "string") {
    return new Response("Missing CAPTCHA token", { status: 400 });
  }
  // Black box validation
  const { validateToken } = await import("@/lib/turnstileService");
  const secret = (env as { TURNSTILE_SECRET_KEY: string }).TURNSTILE_SECRET_KEY;
  const isValid = await validateToken(token, secret);
  if (!isValid) {
    return new Response("Invalid CAPTCHA", { status: 403 });
  }

  const result = await submitContactForm({ Name, Email, Phone, Description }, env);

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
