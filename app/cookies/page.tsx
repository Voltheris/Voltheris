import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Voltheris uses cookies on getvoltheris.com.",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

/**
 * Written to match the numbered-section structure of the real
 * Privacy Policy and Terms of Service (both provided directly, not
 * placeholder). Unlike those two, this one was NOT provided as a
 * finished document — it's drafted here to be accurate to what the
 * site actually does technically, cross-checked against the real
 * codebase rather than written generically:
 *   - middleware.ts counts page views server-side, keyed by path, with
 *     no cookie or client-side identifier involved at all.
 *   - The only cookie the site sets is `admin_session` (httpOnly,
 *     see lib/adminAuth.ts) — and only for whoever logs into /admin.
 *     A member of the public browsing the site never receives it.
 * Same caveat as the other two pages: have an attorney review this
 * before treating it as final, especially if analytics or marketing
 * tooling is added later (that would need this policy updated).
 */
export default function CookiesPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Cookie Policy" lastUpdated="August 6, 2026">
      <LegalSection heading="1. What Cookies Are">
        <p>
          Cookies are small text files placed on your device when you
          visit a website. They&rsquo;re commonly used to keep you
          signed in, remember preferences, or track behavior across
          visits for analytics or advertising.
        </p>
      </LegalSection>

      <LegalSection heading="2. Cookies This Site Uses">
        <p>
          getvoltheris.com sets exactly one cookie, and only for
          administrators — not for members of the public browsing the
          site:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <span className="text-ink">admin_session</span> — a
            strictly necessary, httpOnly session cookie set only when
            someone signs in to the site&rsquo;s internal admin
            dashboard. It cannot be read by JavaScript, isn&rsquo;t
            used for tracking, and expires automatically after 7 days
            or on sign-out.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. What This Site Does Not Use">
        <p>
          getvoltheris.com does not use marketing, advertising, or
          third-party analytics cookies. Page-view counts shown in our
          internal dashboard are recorded server-side by page path,
          with no cookie, device fingerprint, or other identifier tied
          to your browser. If that changes — for example, if analytics
          or marketing tooling is added in the future — this policy
          will be updated to describe what&rsquo;s collected and how
          to opt out before that tooling goes live.
        </p>
      </LegalSection>

      <LegalSection heading="4. Managing Cookies">
        <p>
          You can control or delete cookies through your browser
          settings at any time. Since this site does not rely on
          cookies for anything public-facing, blocking cookies
          entirely will not affect your ability to browse the site or
          submit the contact form.
        </p>
      </LegalSection>

      <LegalSection heading="5. Changes to This Policy">
        <p>
          We may update this Policy if the cookies this site uses
          change. The &ldquo;Last Updated&rdquo; date above reflects
          the most recent revision.
        </p>
      </LegalSection>

      <LegalSection heading="6. Contact Us">
        <p>Questions about this Policy can be directed to:</p>
        <p className="not-italic">
          Voltheris
          <br />
          {company.addressLines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
          <a href={`mailto:${company.email}`} className="text-gold-text underline">
            {company.email}
          </a>
          <br />
          <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="text-gold-text underline">
            {company.phone}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
