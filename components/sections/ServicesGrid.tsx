"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ServicesGrid() {
  const [openSlug, setOpenSlug] = useState<string | null>(services[0]?.slug ?? null);

  return (
    <section className="bg-sand py-section-y">
      <div className="container-content">
        <SectionHeader
          eyebrow="The full catalog"
          heading="Eight systems. Pick where the time is going."
          description="Each one stands alone or combines into a single pipeline — most clients start with one and expand."
        />

        <motion.div
          className="mt-14 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.06)}
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={fadeUp}>
              <ServiceCard
                service={service}
                open={openSlug === service.slug}
                onToggle={() =>
                  setOpenSlug((current) => (current === service.slug ? null : service.slug))
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
