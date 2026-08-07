import { Redis } from "@upstash/redis";

/**
 * Backs three things: contact-form submission storage, page-view
 * counts, and CTA click counts — everything the /admin dashboard
 * reads. Requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
 * (see .env.example). Works on both Node and Edge runtimes since it
 * talks over plain HTTPS — no persistent connection to manage.
 */
export const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

/** True once Redis env vars are actually set — every caller should check this and degrade gracefully rather than throw. */
export const isRedisConfigured = redis !== null;
