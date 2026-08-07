"use client";

import { motion } from "framer-motion";
import { TbRoute, TbSettingsAutomation, TbShieldCheck, TbCpu, TbHeadset } from "react-icons/tb";
import { fadeUp, staggerContainer } from "@/lib/motion";

/**
 * Every claim here is traceable to real content elsewhere on the site
 * (content/industries.ts, content/faq.ts, content/services.ts) rather
 * than invented — this is deliberately a trust section built from
 * true, specific statements instead of vague superlatives or
 * fabricated numbers.
 */
const signals = [
  {
    icon: TbRoute,
    title: "Industries served",
    description: "Real estate, law, healthcare, construction, finance, marketing, and enterprise operations.",
  },
  {
    icon: TbSettingsAutomation,
    title: "Enterprise-grade tools",
    description: "Built on HubSpot, Salesforce, Pipedrive, and GoHighLevel — not a fragile in-house stack.",
  },
  {
    icon: TbShieldCheck,
    title: "Secure implementation",
    description: "Every qualification decision is logged and explainable. Data encrypted in transit and at rest.",
  },
  {
    icon: TbCpu,
    title: "Custom-built systems",
    description: "No off-the-shelf bundles — every workflow is scoped to how your business actually runs.",
  },
  {
    icon: TbHeadset,
    title: "End-to-end support",
    description: "We stay past launch. Weekly optimization reviews are standard, not an upsell.",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-sand py-section-y-tight">
      <div className="container-shell">
        <motion.div
          className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.08)}
        >
          {signals.map((signal) => (
            <motion.div key={signal.title} variants={fadeUp} className="min-w-0">
              <signal.icon className="text-xl text-gold-text" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl text-ink">{signal.title}</h3>
              <p className="mt-2 max-w-[28ch] text-body-s text-ink-soft">{signal.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
