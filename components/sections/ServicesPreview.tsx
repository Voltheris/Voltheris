"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

const preview = services.slice(0, 4);

export function ServicesPreview() {
  return (
    <section className="bg-ivory py-section-y">
      <div className="container-shell">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="min-w-0">
            <p className="u-eyebrow">What we build</p>
            <h2 className="mt-3 max-w-content font-display text-display-l text-ink">
              Systems for every stage of the pipeline.
            </h2>
          </div>
          <Button href="/services" variant="ghost" className="shrink-0">
            All services
          </Button>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.08)}
        >
          {preview.map((service) => (
            <motion.div key={service.slug} variants={fadeUp} className="min-w-0">
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col justify-between bg-sand p-7 transition-colors duration-300 ease-signature hover:bg-ivory"
              >
                <div>
                  <Icon name={service.icon} className="text-2xl text-gold-text" />
                  <h3 className="mt-6 font-display text-xl text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-body-s text-ink-soft">
                    {service.summary}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 font-mono text-caption uppercase tracking-[0.1em] text-ink-faint transition-colors duration-300 group-hover:text-gold">
                  Learn more
                  <TbArrowUpRight className="text-base transition-transform duration-300 ease-signature group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
