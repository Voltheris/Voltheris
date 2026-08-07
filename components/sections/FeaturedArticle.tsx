"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import type { Article } from "@/content/articles";
import { fadeUp, fadeUpLarge, staggerContainer } from "@/lib/motion";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <section className="bg-sand py-section-y">
      <div className="container-content">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={staggerContainer(0.08)}
        >
          <motion.p variants={fadeUp} className="u-eyebrow">
            Featured — {article.category}
          </motion.p>

          <motion.h2
            variants={fadeUpLarge}
            className="mt-5 max-w-content font-display text-display-l text-ink"
          >
            {article.title}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 max-w-prose text-body-l text-ink-soft">
            {article.excerpt}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-6 border-t border-hairline pt-6"
          >
            <p className="font-mono text-caption uppercase tracking-[0.1em] text-ink-faint">
              {article.author} · {formatDate(article.publishedAt)} · {article.readingTime}
            </p>
            <Link
              href={`/insights/${article.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-eyebrow uppercase tracking-[0.1em] text-gold-text"
            >
              Read the article
              <TbArrowUpRight className="text-base transition-transform duration-300 ease-signature group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
