"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { fadeUpLarge, fadeUp, staggerContainer } from "@/lib/motion";

interface PageHeroProps {
  eyebrow: string;
  heading: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
}

/**
 * The inner-page counterpart to the homepage's cinematic Hero — no
 * pin/scrub sequence, but it borrows the same signature underline
 * (drawn once with GSAP on mount) so every page opens with the same
 * gesture. Sits directly under the fixed nav (`pt-32` on mobile,
 * `pt-40` from `sm` up, matching the nav's own clearance needs).
 */
export function PageHero({ eyebrow, heading, description, actions }: PageHeroProps) {
  const lineRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(lineRef.current, { strokeDashoffset: 0 });
        return;
      }
      gsap.set(lineRef.current, { strokeDashoffset: 1 });
      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        duration: 1.1,
        delay: 0.2,
        ease: "expo.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-ivory pb-section-y-tight pt-32 sm:pt-40">
      <div className="container-content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08)}
        >
          <motion.p variants={fadeUp} className="u-eyebrow">
            {eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUpLarge}
            className="mt-4 max-w-content font-display text-display-xl text-ink"
          >
            {heading}
          </motion.h1>

          <svg viewBox="0 0 200 6" className="mt-6 h-1.5 w-36" aria-hidden="true">
            <path d="M2 3 H198" className="the-current" ref={lineRef} pathLength={1} strokeDasharray="1" />
          </svg>

          <motion.p variants={fadeUp} className="mt-6 max-w-prose text-body-l text-ink-soft">
            {description}
          </motion.p>

          {actions && (
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-5">
              {actions}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
