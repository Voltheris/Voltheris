import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, destroyAdminSession } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST() {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  await destroyAdminSession(token);

  const response = NextResponse.json({ ok: true });
  response.cookies.delete(ADMIN_SESSION_COOKIE);
  return response;
}
