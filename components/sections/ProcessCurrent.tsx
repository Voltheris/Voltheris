"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { GSAP_EASE } from "@/lib/motion";

export interface ProcessStep {
  n: string;
  title: string;
  copy: string;
}

const defaultSteps: ProcessStep[] = [
  { n: "01", title: "Capture", copy: "Every inbound signal — form, call, message — logged the instant it happens." },
  { n: "02", title: "Qualify", copy: "AI scores and screens each lead against your criteria before a human sees it." },
  { n: "03", title: "Book", copy: "Qualified prospects are guided straight to a confirmed slot on your calendar." },
  { n: "04", title: "Close", copy: "Your team steps in only for the conversation that actually needs them." },
];

// Tailwind's scanner only picks up literal class strings, so the
// column count can't be interpolated at runtime — map the handful of
// step counts we actually use to a literal class instead.
const GRID_COLS: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "sm:grid-cols-2 md:grid-cols-3",
};

interface ProcessCurrentProps {
  eyebrow?: string;
  heading?: string;
  steps?: ProcessStep[];
}

/**
 * A reusable ordered-step timeline connected by the signature Current
 * line, which draws in once (not scrubbed) the first time the section
 * scrolls into view. Numbered markers are justified here — this is
 * always a real, ordered sequence, never a set of unordered feature
 * cards. Defaults to the homepage's lead pipeline; pass `steps` to
 * reuse it for a different sequence (e.g. Services' engagement process).
 */
export function ProcessCurrent({
  eyebrow = "How it runs",
  heading = "One current, four steps, no hand-offs lost.",
  steps = defaultSteps,
}: ProcessCurrentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (!pathRef.current) return;

      if (prefersReducedMotion) {
        gsap.set(pathRef.current, { strokeDashoffset: 0 });
        return;
      }

      gsap.set(pathRef.current, { strokeDashoffset: 1 });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: GSAP_EASE.signature,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ivory py-section-y">
      <div className="container-shell">
        <p className="u-eyebrow text-center">{eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-content text-center font-display text-display-l text-ink">
          {heading}
        </h2>

        <div className="relative mt-20">
          {steps.length <= 5 && (
            <svg
              className="pointer-events-none absolute left-0 top-6 hidden w-full md:block"
              height="2"
              viewBox="0 0 1000 2"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                ref={pathRef}
                d="M20 1 H980"
                className="the-current"
                pathLength={1}
                strokeDasharray="1"
              />
            </svg>
          )}

          <ol className={`grid grid-cols-1 gap-10 md:gap-8 ${GRID_COLS[steps.length] ?? "md:grid-cols-4"}`}>
            {steps.map((step) => (
              <li
                key={step.n}
                className="relative min-w-0 border-l border-hairline pl-6 md:border-l-0 md:pl-0 md:text-center"
              >
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory font-mono text-body-s text-gold-text md:mx-auto">
                  {step.n}
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[26ch] text-body-s text-ink-soft">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
