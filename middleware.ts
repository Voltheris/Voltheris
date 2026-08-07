import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { redis } from "@/lib/redis";

const ADMIN_SESSION_COOKIE = "admin_session";

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // --- Guard everything under /admin except the login page itself ---
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    const valid = token && redis ? await redis.get(`admin:session:${token}`) : null;
    if (!valid) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return NextResponse.next();
  }

  // --- Lightweight, best-effort pageview counting ---
  // event.waitUntil lets this write happen after the response has
  // already been sent — a page load should never wait on an
  // analytics write. Skips admin/api routes and anything that looks
  // like a static file request (favicon, images, etc.).
  if (
    redis &&
    request.method === "GET" &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/admin") &&
    !/\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    event.waitUntil(
      Promise.all([redis.incr("views:total"), redis.incr(`views:${pathname}`)]).then(
        () => {},
        () => {}
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
