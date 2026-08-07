"use client";

import { useRef, type PointerEvent } from "react";
import { gsap } from "@/lib/gsap";

// Hard cap on how far a button can be pulled, regardless of button
// width or pointer distance from center. Without this, a wide button
// (e.g. "Book a consultation") could be pulled far enough on a mere
// edge-hover to overlap a neighboring button sitting a normal gap-4
// away — that's the exact bug this fixes, not a hypothetical one.
const MAX_OFFSET_PX = 10;

/**
 * Subtle magnetic pull toward the pointer, used on primary buttons.
 * Strength is deliberately small (0.25) — this should read as the
 * button noticing the cursor, not chasing it. Displacement is clamped
 * to MAX_OFFSET_PX regardless of how wide the button is or how far the
 * pointer sits from center — see the comment above.
 *
 * Press feedback (a small scale-down on pointer down) is handled here
 * too, via GSAP, rather than a Tailwind `active:scale-*` class — the
 * hook already drives `transform` on this element on every pointer
 * move, and an inline style always wins over a CSS class targeting the
 * same property, so a class-based press effect would be silently
 * overridden the moment the pointer moves.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.25) {
  const ref = useRef<T | null>(null);

  function onPointerMove(e: PointerEvent<T>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rawX = e.clientX - (rect.left + rect.width / 2);
    const rawY = e.clientY - (rect.top + rect.height / 2);
    const x = Math.max(-MAX_OFFSET_PX, Math.min(MAX_OFFSET_PX, rawX * strength));
    const y = Math.max(-MAX_OFFSET_PX, Math.min(MAX_OFFSET_PX, rawY * strength));
    gsap.to(el, {
      x,
      y,
      duration: 0.5,
      ease: "back.out(1.4)",
    });
  }

  function onPointerLeave() {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)" });
  }

  function onPointerDown() {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { scale: 0.96, duration: 0.15, ease: "power2.out" });
  }

  function onPointerUp() {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { scale: 1, duration: 0.4, ease: "back.out(1.4)" });
  }

  return { ref, onPointerMove, onPointerLeave, onPointerDown, onPointerUp };
}
