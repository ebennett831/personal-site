// Black box service for Cloudflare Turnstile validation
// Only exposes validateToken(token, secret)

export async function validateToken(token: string, secret: string): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`
  });
  const data = (await res.json()) as { success?: boolean };
  return !!data.success;
}
