"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Wraps the app in a single Lenis instance, driven by the GSAP ticker
 * rather than its own requestAnimationFrame loop. This is required for
 * the hero's pinned ScrollTrigger timeline (and every other
 * scroll-triggered animation) to stay perfectly in sync with the
 * smoothed scroll position — running two independent rAF loops causes
 * visible lag between what the user feels and what GSAP measures.
 *
 * Respects prefers-reduced-motion by leaving native scroll untouched;
 * ScrollTrigger-based components must check the same media query and
 * fall back to a static, fully-visible state (see Hero.tsx).
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Bug fix: Lenis owns the scroll position independently of the
  // browser, so it never knew to reset on a Next.js route change.
  // Navigating away while scrolled down (e.g. clicking a CTA in the
  // footer) landed the new page at that same low scroll offset —
  // visually, at the bottom of the page you'd just navigated to,
  // instead of the top. Force an immediate (non-smooth) reset to top
  // on every route change.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
