import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Voltheris website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

/**
 * Real content, provided directly — not the generic placeholder this
 * page used to have. The source document included an internal note:
 * "Still pending: final attorney sign-off before this goes live." That
 * note is intentionally not rendered here (the document itself said to
 * remove it before publishing), but it's real and worth acting on
 * before this page goes live for real visitors.
 */
export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" lastUpdated="August 6, 2026">
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access
          to and use of getvoltheris.com (the &ldquo;Site&rdquo;), operated
          by Voltheris (&ldquo;Voltheris,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using
          the Site, you agree to be bound by these Terms. If you do not
          agree, please do not use the Site.
        </p>
      </LegalSection>

      <LegalSection heading="2. Description of Services">
        <p>
          Voltheris provides AI-enabled business automation consulting
          and implementation services, including lead qualification,
          CRM automation, appointment booking, customer support
          automation, workflow automation, and related services (the
          &ldquo;Services&rdquo;). Use of the Site alone does not create
          a client relationship; our Services are governed by a
          separate signed agreement.
        </p>
      </LegalSection>

      <LegalSection heading="3. Use of the Site">
        <p>
          You agree to use the Site only for lawful purposes and in
          accordance with these Terms. You may not attempt to interfere
          with the security or proper functioning of the Site.
        </p>
      </LegalSection>

      <LegalSection heading="4. Intellectual Property">
        <p>
          The Site and its content — including text, graphics, logos,
          templates, prompt libraries, automation frameworks, and
          software — are owned by Voltheris or its licensors and are
          protected by intellectual property laws. Except as expressly
          permitted, you may not copy, reproduce, distribute, or create
          derivative works from Site content without our prior written
          consent.
        </p>
      </LegalSection>

      <LegalSection heading="5. User Submissions">
        <p>
          Information you submit through our contact forms, onboarding
          questionnaires, or similar tools is used in accordance with
          our{" "}
          <Link href="/privacy" className="text-gold-text underline">
            Privacy Policy
          </Link>{" "}
          to respond to your inquiry and provide our Services.
        </p>
      </LegalSection>

      <LegalSection heading="6. No Professional Advice; AI Disclaimer">
        <p>
          Voltheris provides business automation implementation services
          — not legal, accounting, medical, financial, investment, or
          other regulated professional advice. Artificial intelligence
          tools can produce inaccurate, incomplete, or outdated outputs.
          Any AI-generated content referenced on the Site or provided as
          part of our Services is provided &ldquo;as is,&rdquo; and you
          are responsible for independently verifying outputs before
          relying on them for any material decision.
        </p>
      </LegalSection>

      <LegalSection heading="7. Third-Party Links and Integrations">
        <p>
          The Site may reference or link to third-party platforms,
          including tools such as Make.com, HubSpot, Google Workspace,
          Calendly, OpenAI, Anthropic, Twilio, Stripe, Slack, Microsoft
          365, Zapier, Airtable, and Notion. Voltheris does not control
          and is not responsible for third-party platforms, their
          availability, or their content.
        </p>
      </LegalSection>

      <LegalSection heading="8. Disclaimers">
        <p>
          The Site and its content are provided &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; without warranties of any kind,
          whether express or implied, including warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement. Voltheris does not guarantee that the Site
          will be uninterrupted, error-free, or secure.
        </p>
      </LegalSection>

      <LegalSection heading="9. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Voltheris will not be
          liable for any indirect, incidental, special, consequential,
          or punitive damages arising out of or related to your use of
          the Site.
        </p>
      </LegalSection>

      <LegalSection heading="10. Indemnification">
        <p>
          You agree to indemnify and hold harmless Voltheris and its
          members, employees, and contractors from claims arising out
          of your misuse of the Site or violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="11. Governing Law and Venue">
        <p>
          These Terms are governed by the laws of the Commonwealth of
          Virginia, without regard to conflict-of-laws principles. Any
          dispute will be resolved exclusively in the state or federal
          courts located in Hampton, Virginia, and you consent to
          jurisdiction and venue there.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes to These Terms">
        <p>
          We may revise these Terms from time to time. Continued use of
          the Site after changes are posted constitutes acceptance of
          the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contact">
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
