"use client";

import { useRef, type PointerEvent } from "react";
import { gsap } from "@/lib/gsap";

/**
 * A restrained 3D tilt toward the pointer — used on case study cards
 * for an "immersive" hover without tipping into gimmicky territory.
 * Keep `strength` low (default 6deg); this should read as the card
 * gently acknowledging the cursor, not a showroom flip effect.
 */
export function useTilt<T extends HTMLElement = HTMLElement>(strength = 6) {
  const ref = useRef<T | null>(null);

  function onPointerMove(e: PointerEvent<T>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, {
      rotateX: -py * strength,
      rotateY: px * strength,
      transformPerspective: 800,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  function onPointerLeave() {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
  }

  return { ref, onPointerMove, onPointerLeave };
}
