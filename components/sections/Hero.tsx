"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";

// Fixed, hand-placed particle positions — deterministic (no Math.random
// in render) so server and client markup match. Reads as an elegant
// scatter, not noise.
const PARTICLES = [
  { x: 18, y: 22 }, { x: 82, y: 18 }, { x: 12, y: 68 }, { x: 88, y: 72 },
  { x: 30, y: 12 }, { x: 70, y: 85 }, { x: 8, y: 42 }, { x: 92, y: 46 },
  { x: 46, y: 8 }, { x: 54, y: 92 }, { x: 24, y: 88 }, { x: 76, y: 10 },
  { x: 62, y: 30 }, { x: 38, y: 78 },
];

const LINES = [
  { x1: 10, y1: 15, x2: 22, y2: 30 },
  { x1: 90, y1: 20, x2: 78, y2: 34 },
  { x1: 14, y1: 80, x2: 26, y2: 66 },
  { x1: 86, y1: 78, x2: 74, y2: 64 },
];

/**
 * The homepage hero — a pinned, scroll-scrubbed sequence.
 *
 * At rest (scroll 0): only the VOLTHERIS wordmark and its underline are
 * visible. No copy, no buttons — matches the brief's "almost silent"
 * opening. Nav is likewise invisible at the exact instant of scroll 0,
 * but becomes available after only a small scroll nudge (~6% of the
 * pin) — deliberately NOT gated behind the rest of the sequence. A
 * visitor who wants to jump straight to Pricing or Contact should
 * never have to sit through the full animation for a working nav bar.
 *
 * Scrubbed as the section stays pinned:
 *  1. The word zooms in, anchored precisely on the left edge of the
 *     "H" (measured via ref, not a guessed percentage) — this
 *     completes FULLY before anything else starts appearing, so it
 *     reads as one deliberate push-in rather than stopping partway.
 *  2. Only once that zoom is finished do particles and thin lines
 *     drift in, then back out ahead of the transition.
 *  3. In the final stretch, the (by-now huge) wordmark dissolves while
 *     the tagline, description, and CTAs cross-fade in underneath it.
 *
 * Reduced motion: skips the pin/scrub entirely and renders the final
 * revealed state immediately, including a visible nav.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const hLetterRef = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<SVGSVGElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(revealRef.current, { opacity: 1, y: 0 });
      gsap.set(scrollCueRef.current, { opacity: 0 });
      gsap.set("#site-nav", { opacity: 1, y: 0, pointerEvents: "auto" });
      return;
    }

    function setZoomOrigin() {
      const group = groupRef.current;
      const word = wordRef.current;
      const hLetter = hLetterRef.current;
      if (!group || !word || !hLetter) return;

      // Measure with the word's *final* letter-spacing already applied,
      // not its resting value. At rest, H sits with no gap before it —
      // anchoring there means the zoom just grows the H's stroke to
      // fill the frame instead of revealing the empty gap that
      // letter-spacing opens up as it animates. Measuring at the final
      // spacing captures where that gap actually ends up.
      const restingSpacing = word.style.letterSpacing;
      word.style.letterSpacing = "0.09em";
      const groupRect = group.getBoundingClientRect();
      const hRect = hLetter.getBoundingClientRect();
      word.style.letterSpacing = restingSpacing;

      // Bias a few px further left of the H's stroke so the anchor
      // sits inside the gap rather than right on the glyph's edge.
      const originX = hRect.left - groupRect.left - 8;
      gsap.set(group, { transformOrigin: `${originX}px 50%` });
    }

    setZoomOrigin();
    // next/font can still be mid-swap on first paint — re-measure once
    // the real webfont is actually active so the anchor doesn't drift.
    document.fonts?.ready?.then(() => {
      setZoomOrigin();
      ScrollTrigger.refresh();
    });

    const ctx = gsap.context(() => {
      gsap.set(underlineRef.current, { transformOrigin: "center" });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=175%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl
        // The cue disappears the instant scrolling begins.
        .to(scrollCueRef.current, { opacity: 0, duration: 0.05 }, 0)
        // Nav becomes available after a small scroll nudge — deliberately
        // NOT tied to the rest of the reveal below. A visitor who wants
        // to jump straight to Pricing or Contact should never have to
        // sit through the full animation just to get a working nav bar.
        .to("#site-nav", { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.12 }, 0.06)
        // Phase 1 (0 → 0.55): the zoom, and ONLY the zoom — letters
        // widen, the word pushes into the gap it opens up before the
        // H, the underline stretches then fades. Nothing else moves
        // yet, so this reads as one complete, deliberate push rather
        // than a partial one. Scaled up high enough that the frame
        // clears to pure background at the peak — no letter stroke
        // should still be visible once this phase ends.
        .to(wordRef.current, { letterSpacing: "0.09em", duration: 0.55 }, 0)
        .to(groupRef.current, { scale: 26, duration: 0.55 }, 0)
        .to(underlineRef.current, { scaleX: 2.2, duration: 0.4 }, 0)
        .to(underlineRef.current, { opacity: 0, duration: 0.15 }, 0.4)
        // Phase 2 (0.55 → 0.65): an explicit held beat with nothing on
        // screen but background — this is the "fully zoomed in" moment,
        // given room to actually read before anything else appears.
        // Phase 3 (0.65 → 0.95): only now do particles and the reveal
        // start appearing, cross-fading in over the (now dissolving)
        // wordmark.
        .to(".hero-particle", { opacity: 1, stagger: 0.02, duration: 0.2 }, 0.65)
        .to(".hero-particle", { opacity: 0, duration: 0.15 }, 0.88)
        // Phase 4 (0.65 → 0.95): the huge wordmark dissolves as the
        // reveal cross-fades in.
        .to(groupRef.current, { opacity: 0, duration: 0.22 }, 0.65)
        .to(revealRef.current, { opacity: 1, y: 0, duration: 0.28 }, 0.72);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-ivory px-gutter text-center"
    >
      <div
        ref={particlesRef}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle absolute h-[3px] w-[3px] rounded-full bg-gold opacity-0"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          />
        ))}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {LINES.map((l, i) => (
            <line
              key={i}
              className="hero-particle"
              x1={`${l.x1}%`}
              y1={`${l.y1}%`}
              x2={`${l.x2}%`}
              y2={`${l.y2}%`}
              stroke="#B08D57"
              strokeWidth="1"
              opacity="0"
            />
          ))}
        </svg>
      </div>

      <div ref={groupRef} className="relative z-10">
        <h1
          ref={wordRef}
          className="select-none font-display text-display-2xl leading-none tracking-tight text-ink"
        >
          VOLT<span ref={hLetterRef}>H</span>ERIS
        </h1>
        <svg
          ref={underlineRef}
          viewBox="0 0 320 6"
          className="mx-auto mt-5 h-1.5 w-56 sm:w-72"
          aria-hidden="true"
        >
          <path d="M2 3 H318" className="the-current" />
        </svg>
      </div>

      <div
        ref={revealRef}
        className="relative z-10 mt-10 max-w-content opacity-0"
        style={{ transform: "translateY(24px)" }}
      >
        <p className="u-eyebrow">Practical AI implementation, not AI hype</p>
        <p className="mx-auto mt-5 max-w-prose text-body-l text-ink-soft">
          We build AI systems that eliminate repetitive work, sharpen
          customer experience, and drive measurable revenue — for
          businesses that want results, not buzzwords.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <Button href="/contact">Book a consultation</Button>
          <Button href="/services" variant="ghost">
            Explore services
          </Button>
        </div>
      </div>

      <div
        ref={scrollCueRef}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="u-eyebrow">Scroll</span>
        <span className="h-10 w-px bg-hairline" />
      </div>
    </section>
  );
}
