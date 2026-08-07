import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/content/company";
import { redis } from "@/lib/redis";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

// TODO: swap for a verified @getvoltheris.com sender once your domain
// is verified in Resend — see the setup notes below.
const FROM_ADDRESS = "Voltheris Website <onboarding@resend.dev>";

const SUBMISSIONS_KEY = "contact:submissions";
const MAX_STORED_SUBMISSIONS = 500;

/**
 * Every submission is saved to Redis first — that's the actual source
 * of truth shown in /admin — and email is sent as a courtesy
 * notification on top of it. This order matters: if email sending
 * fails or Resend isn't configured yet, the lead is still captured and
 * visible in the admin dashboard, instead of being silently lost.
 *
 * Setup:
 *   1. Redis (required to see submissions in /admin): create a
 *      database at upstash.com, add UPSTASH_REDIS_REST_URL and
 *      UPSTASH_REDIS_REST_TOKEN to Vercel's Environment Variables.
 *   2. Email (optional but recommended): sign up at resend.com,
 *      verify a sending domain, add RESEND_API_KEY to Vercel, and
 *      update FROM_ADDRESS above to a verified address.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, company: companyName, phone, interest, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  let savedToRedis = false;
  if (redis) {
    try {
      await redis.lpush(
        SUBMISSIONS_KEY,
        JSON.stringify({
          name,
          email,
          company: companyName ?? null,
          phone: phone ?? null,
          interest: interest ?? null,
          message,
          receivedAt: new Date().toISOString(),
        })
      );
      await redis.ltrim(SUBMISSIONS_KEY, 0, MAX_STORED_SUBMISSIONS - 1);
      savedToRedis = true;
    } catch (err) {
      console.error("Failed to save contact submission to Redis:", err);
    }
  }

  let emailSent = false;
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: FROM_ADDRESS,
        to: company.email,
        replyTo: email,
        subject: `New consultation inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          companyName ? `Company: ${companyName}` : null,
          phone ? `Phone: ${phone}` : null,
          interest ? `Interested in: ${interest}` : null,
          "",
          message,
        ]
          .filter((line) => line !== null)
          .join("\n"),
      });
      if (error) {
        console.error("Resend error:", error);
      } else {
        emailSent = true;
      }
    } catch (err) {
      console.error("Contact form email send failed:", err);
    }
  }

  if (!savedToRedis && !emailSent) {
    console.error(
      "Contact form received a submission but neither Redis nor Resend is configured — it was lost. See the setup comment at the top of app/api/contact/route.ts."
    );
    return NextResponse.json(
      { error: "Something went wrong on our end. Please email us directly instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
