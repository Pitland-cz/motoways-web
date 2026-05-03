import type { APIRoute } from 'astro';
import pg from 'pg';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_BIKE_TYPES = new Set(['touring', 'sport', 'enduro', 'naked', 'scooter', 'other']);

// Lazily initialised pool — reused across warm serverless invocations.
let _pool: pg.Pool | null = null;
function getPool(): pg.Pool | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!_pool) {
    _pool = new pg.Pool({
      connectionString: url,
      ssl: { rejectUnauthorized: false },
      max: 3,
      idleTimeoutMillis: 20_000,
    });
  }
  return _pool;
}

// Per-invocation rate limiter (resets on cold start).
// Replace with Vercel KV / Redis for production multi-instance safety.
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

  const email = (body.get('email') as string | null)?.trim().toLowerCase() ?? '';
  const bikeType = (body.get('bikeType') as string | null) ?? '';
  const city = (body.get('city') as string | null)?.trim().slice(0, 100) ?? '';
  const gdpr = body.get('gdpr') === 'on';
  const locale = (body.get('locale') as string | null) ?? 'cs';

  if (!EMAIL_RE.test(email) || !VALID_BIKE_TYPES.has(bikeType) || city.length < 1 || !gdpr) {
    return json({ ok: false, error: 'validation' }, 400);
  }

  const pool = getPool();
  if (pool) {
    try {
      await pool.query(
        `INSERT INTO ways_beta_signups (email, bike_type, city, locale)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (email) DO NOTHING`,
        [email, bikeType, city, locale],
      );
    } catch (err) {
      console.error('[ways-beta-signup] db error:', err);
      return json({ ok: false, error: 'server_error' }, 500);
    }
  } else {
    // DATABASE_URL not set — log only (dev / CI)
    console.log('[ways-beta-signup] no DB, logging:', JSON.stringify({ email, bikeType, city, locale, ip, at: new Date().toISOString() }));
  }

  return json({ ok: true });
};
