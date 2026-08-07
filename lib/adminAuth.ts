import { redis } from "@/lib/redis";

export const ADMIN_SESSION_COOKIE = "admin_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

/** Creates a random session token and stores it in Redis with a 7-day expiry. */
export async function createAdminSession(): Promise<string> {
  const token = crypto.randomUUID();
  if (redis) {
    await redis.set(`admin:session:${token}`, "1", { ex: SESSION_TTL_SECONDS });
  }
  return token;
}

export async function isValidAdminSession(token: string | undefined | null): Promise<boolean> {
  if (!token || !redis) return false;
  const value = await redis.get(`admin:session:${token}`);
  return value !== null;
}

export async function destroyAdminSession(token: string | undefined | null): Promise<void> {
  if (!token || !redis) return;
  await redis.del(`admin:session:${token}`);
}
