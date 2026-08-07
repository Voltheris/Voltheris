import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { LegalSection } from "@/components/ui/LegalSection";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Voltheris collects, uses, discloses, and protects information when you visit getvoltheris.com.",
  alternates: { canonical: "/privacy" },
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
export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" lastUpdated="August 6, 2026">
      <LegalSection heading="1. Introduction">
        <p>
          This Privacy Policy explains how Voltheris (&ldquo;Voltheris,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
          uses, discloses, and protects information when you visit
          getvoltheris.com (the &ldquo;Site&rdquo;) or otherwise interact
          with us. By using the Site, you agree to the practices described
          in this Policy.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Contact information, such as your name, business name, email address, phone number, and website</li>
          <li>Business information, such as business size, industry, and project details</li>
          <li>Automation and technical requirements you share with us</li>
          <li>Meeting and scheduling information submitted through our booking tools</li>
          <li>Communications you send us, including messages submitted through our contact and onboarding forms</li>
          <li>Technical and usage information, including IP address, browser and device information, and analytics data</li>
          <li>
            Cookies and similar tracking technologies (see our{" "}
            <Link href="/cookies" className="text-gold-text underline">
              Cookie Policy
            </Link>
            )
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Respond to inquiries and requests</li>
          <li>Schedule and manage consultations</li>
          <li>Prepare proposals and statements of work</li>
          <li>Onboard and provide services to clients</li>
          <li>Communicate with prospective and current clients</li>
          <li>Improve and maintain the Site and our services</li>
          <li>Comply with legal obligations</li>
          <li>Maintain security and prevent fraud</li>
          <li>Analyze Site performance and usage trends</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Cookies and Tracking Technologies">
        <p>
          The Site uses cookies and similar technologies to operate,
          secure, and improve the Site and to understand how visitors
          use it. For details on the categories of cookies we use and
          how to manage your preferences, see our{" "}
          <Link href="/cookies" className="text-gold-text underline">
            Cookie Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="5. How We Share Information">
        <p>We do not sell personal information. We may share information with:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Service providers who support our operations — for example, our
            scheduling, email delivery, data storage, and analytics
            providers — under confidentiality and data protection
            obligations
          </li>
          <li>Professional advisors, such as attorneys and accountants, where necessary</li>
          <li>Regulators or authorities where required by law</li>
          <li>A successor entity in connection with a merger, acquisition, or sale of assets</li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Data Retention">
        <p>
          We retain personal information for as long as reasonably
          necessary to fulfill the purposes described in this Policy,
          comply with our legal obligations, resolve disputes, and
          enforce our agreements, after which it is deleted or
          anonymized.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights and Choices">
        <p>
          Depending on where you live, you may have rights to access,
          correct, delete, or restrict our use of your personal
          information, or to object to certain processing. To exercise
          these rights, contact us using the information below and we
          will respond in accordance with applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="8. Data Security">
        <p>
          We use commercially reasonable administrative, technical, and
          physical safeguards designed to protect information from
          unauthorized access, use, or disclosure. No method of
          transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="9. Children&rsquo;s Privacy">
        <p>
          The Site is intended for business use and is not directed to
          individuals under the age of 18. We do not knowingly collect
          personal information from children.
        </p>
      </LegalSection>

      <LegalSection heading="10. International Users">
        <p>
          If you access the Site from outside the United States, your
          information may be transferred to, stored, and processed in
          the United States.
        </p>
      </LegalSection>

      <LegalSection heading="11. Third-Party Links and Services">
        <p>
          The Site may link to or integrate with third-party platforms,
          such as scheduling, payment, or communication tools. We are
          not responsible for the privacy practices of third parties,
          and we encourage you to review their policies directly.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes to This Policy">
        <p>
          We may update this Policy from time to time. The &ldquo;Last
          Updated&rdquo; date above reflects the most recent revision.
          We will reflect material changes on this page.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contact Us">
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
