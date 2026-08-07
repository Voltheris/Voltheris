"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpLarge } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  eyebrowClassName?: string;
  className?: string;
}

/**
 * The eyebrow + headline (+ optional description) pattern repeated at
 * the top of nearly every section site-wide. Centralized here so
 * spacing, type, and the reveal animation stay identical everywhere
 * instead of being hand-copied per section.
 */
export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  eyebrowClassName,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(align === "center" && "mx-auto text-center", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={fadeUpLarge}
    >
      <p className={cn("u-eyebrow", eyebrowClassName)}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 font-display text-display-l text-ink",
          align === "center" ? "mx-auto max-w-content" : "max-w-content"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-body-l text-ink-soft",
            align === "center" ? "mx-auto max-w-prose" : "max-w-prose"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
