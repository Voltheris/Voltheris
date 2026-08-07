import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const runtime = "edge";

/**
 * Fired via navigator.sendBeacon from Button.tsx on every click —
 * sendBeacon (rather than fetch) is what's used here specifically
 * because it's designed to survive the page unloading immediately
 * after, which is exactly what happens when a click triggers
 * navigation. Always returns 200 so a tracking failure never surfaces
 * as an error to the user — this is best-effort analytics, not
 * something that should ever block or break a real interaction.
 */
export async function POST(request: Request) {
  if (!redis) return NextResponse.json({ ok: false });

  let label = "unknown";
  try {
    const body = await request.json();
    if (typeof body?.label === "string" && body.label.length > 0) {
      label = body.label.slice(0, 100);
    }
  } catch {
    // sendBeacon bodies can arrive oddly formatted in some browsers —
    // fall through to the "unknown" bucket rather than erroring.
  }

  try {
    await Promise.all([redis.incr(`clicks:${label}`), redis.incr("clicks:total")]);
  } catch {
    // best-effort — never fail the request over this
  }

  return NextResponse.json({ ok: true });
}
