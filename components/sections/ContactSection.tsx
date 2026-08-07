"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/ui/ContactInfo";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ContactSection() {
  return (
    <section className="bg-ivory pb-section-y">
      <div className="container-shell">
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.12)}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-card border border-hairline bg-sand p-8 sm:p-10"
          >
            <p className="u-eyebrow">Send a message</p>
            <h2 className="mt-3 font-display text-display-m text-ink">
              Tell us what’s going on.
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ContactInfo />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
