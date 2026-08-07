import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FAQJsonLd } from "@/components/seo/FAQJsonLd";
import { contactFAQ } from "@/content/contactFAQ";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's identify where automation can create the greatest impact in your business — send a message or find our office details and social links.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <FAQJsonLd items={contactFAQ} />

      <PageHero
        eyebrow="Contact"
        heading="Let's identify where automation can create the greatest impact in your business."
        description="This isn't a sales call. It's a working session to find the highest-leverage place to start — send a message, or skip ahead and schedule a call directly."
        actions={<Button href={company.calendlyUrl}>Schedule a call</Button>}
      />

      <ContactSection />

      <FAQ eyebrow="Before you reach out" heading="Quick answers." items={contactFAQ} />
    </main>
  );
}
