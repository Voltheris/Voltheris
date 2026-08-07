import { NextResponse } from "next/server";
import { createAdminSession, ADMIN_SESSION_COOKIE, SESSION_TTL_SECONDS } from "@/lib/adminAuth";
import { isRedisConfigured } from "@/lib/redis";

export const runtime = "nodejs";

/**
 * Validates against ADMIN_USERNAME / ADMIN_PASSWORD environment
 * variables — deliberately NOT hardcoded in source. Committing real
 * login credentials directly into a Git repo means they sit in plain
 * text in the commit history forever, visible to anyone with repo
 * access, even after you change them. Set both in Vercel's project
 * Environment Variables instead (see .env.example).
 */
export async function POST(request: Request) {
  if (!isRedisConfigured) {
    return NextResponse.json(
      {
        error:
          "Admin login isn't configured yet — set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN (see .env.example).",
      },
      { status: 500 }
    );
  }

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validUsername || !validPassword) {
    return NextResponse.json(
      { error: "Admin credentials aren't configured yet — set ADMIN_USERNAME and ADMIN_PASSWORD (see .env.example)." },
      { status: 500 }
    );
  }

  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.username !== validUsername || body.password !== validPassword) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const token = await createAdminSession();

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
  return response;
}
