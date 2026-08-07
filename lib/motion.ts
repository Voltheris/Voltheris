import type { Variants, Transition } from "framer-motion";

/**
 * Shared motion language for Voltheris.
 *
 * Two curves cover the entire site:
 *  - `signature` — used for reveals, page/section transitions, and the
 *    Current line drawing itself in. Slow to start, decisive finish.
 *  - `magnetic`  — used only for hover/press micro-interactions on
 *    buttons and cards. A soft overshoot, never bouncy.
 *
 * Mirrors the `signature` / `magnetic` keys in tailwind.config.ts so
 * CSS transitions and JS-driven animation always agree.
 */
export const EASE = {
  signature: [0.16, 1, 0.3, 1] as const, // expo-out
  magnetic: [0.34, 1.56, 0.64, 1] as const, // soft spring
};

// Same curves as CSS strings, for GSAP (which wants a string or a
// registered ease, not an array).
export const GSAP_EASE = {
  signature: "expo.out",
  magnetic: "back.out(1.4)",
};

export const DURATION = {
  fast: 0.4,
  base: 0.6,
  slow: 0.9,
  cinematic: 1.2,
};

const revealTransition: Transition = {
  duration: DURATION.slow,
  ease: EASE.signature,
};

/** Standard content reveal: fade + rise, used for most section entrances. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

/** For headline text — slightly larger displacement, slower settle. */
export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.signature },
  },
};

/** Stagger wrapper for groups of children (cards, list items, nav). */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Simple opacity-only fade, for backgrounds/overlays where movement would distract. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.base, ease: EASE.signature } },
};
