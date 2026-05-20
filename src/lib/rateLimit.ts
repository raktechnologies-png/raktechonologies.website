const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

interface Entry {
  count: number;
  resetAt: number;
}

// In-memory store — works per serverless instance. Sufficient for a contact form.
const store = new Map<string, Entry>();

// Prune expired entries to avoid unbounded memory growth.
function prune() {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key);
  }
}

export function rateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
} {
  prune();

  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1, retryAfterSeconds: 0 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count++;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count, retryAfterSeconds: 0 };
}

export function getIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}
