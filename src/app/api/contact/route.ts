import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request: Request) {
  const context = await getCloudflareContext({ async: true });
  const db = context.env.DB;
    type ContactFormData = {
      Name: string;
      Email: string;
      Phone: string;
      Description: string;
    };
    const data = await request.json() as ContactFormData;

  // Validate input
  const { Name, Email, Phone, Description } = data;
  if (!Name || !Email || !Phone || !Description) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Insert into D1
  const stmt = db.prepare(
    `INSERT INTO ContactForm (Name, Email, Phone, Description) VALUES (?, ?, ?, ?)`
  );
  const result = await stmt.bind(Name, Email, Phone, Description).run();

  return new Response(JSON.stringify({ success: true, FormID: result.meta?.last_row_id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
