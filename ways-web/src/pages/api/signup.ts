import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_BIKE_TYPES = new Set(['touring', 'sport', 'enduro', 'naked', 'scooter', 'other']);

// Lazily initialised Supabase client — reused across warm serverless invocations.
let _supabase: ReturnType<typeof createClient> | null = null;
function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return null;
  if (!_supabase) {
    _supabase = createClient(url, key, { auth: { persistSession: false } });
  }
  return _supabase;
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

  const supabase = getSupabase();
  const row = { email, bike_type: bikeType, city, locale, ip, at: new Date().toISOString() };

  if (supabase) {
    const { error } = await supabase
      .from('ways_beta_signups')
      .upsert({ email, bike_type: bikeType, city, locale }, { onConflict: 'email', ignoreDuplicates: true });

    if (error) {
      // Table may not exist yet — log and continue so user sees success
      console.error('[ways-beta-signup] supabase error (fallback to log):', error.message, JSON.stringify(row));
    }
  } else {
    console.log('[ways-beta-signup] no DB:', JSON.stringify(row));
  }

  return json({ ok: true });
};
