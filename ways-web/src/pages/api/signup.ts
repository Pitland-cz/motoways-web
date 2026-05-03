import type { APIRoute } from 'astro';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_BIKE_TYPES = new Set(['touring', 'sport', 'enduro', 'naked', 'scooter', 'other']);

// Simple per-invocation rate limiter.
// Serverless cold starts reset state — replace with Vercel KV for production.
const ipLog = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const WINDOW_MS = 60_000;
  const MAX_PER_WINDOW = 3;

  const entry = ipLog.get(ip);
  if (!entry || entry.resetAt < now) {
    ipLog.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_PER_WINDOW) return false;
  entry.count++;
  return true;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = clientAddress ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return json({ ok: false, error: 'rate_limited' }, 429);
  }

  let body: FormData;
  try {
    body = await request.formData();
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  const email = (body.get('email') as string | null)?.trim() ?? '';
  const bikeType = (body.get('bikeType') as string | null) ?? '';
  const city = (body.get('city') as string | null)?.trim().slice(0, 100) ?? '';
  const gdpr = body.get('gdpr') === 'on';
  const locale = (body.get('locale') as string | null) ?? 'cs';

  if (!EMAIL_RE.test(email) || !VALID_BIKE_TYPES.has(bikeType) || city.length < 1 || !gdpr) {
    return json({ ok: false, error: 'validation' }, 400);
  }

  // TODO: persist to database (PostgreSQL via pitland-backend or Vercel Postgres)
  console.log('[ways-beta-signup]', JSON.stringify({
    email,
    bikeType,
    city,
    locale,
    ip,
    at: new Date().toISOString(),
  }));

  return json({ ok: true });
};
