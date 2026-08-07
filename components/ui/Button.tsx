"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "onDark";
  className?: string;
}

const variants = {
  primary: "bg-ink text-ivory hover:bg-gold hover:text-ivory",
  ghost: "border border-hairline text-ink hover:border-gold hover:text-gold-text",
  onDark: "bg-gold text-charcoal hover:bg-gold-bright",
};

/**
 * The site's single button primitive. Magnetic pull is applied via
 * useMagnetic on every variant — this is the one micro-interaction the
 * brief calls "magnetic buttons," so it lives in one place rather than
 * being reimplemented per CTA.
 *
 * Also fires a best-effort click-tracking beacon (see app/api/track) —
 * sendBeacon rather than fetch specifically because it's designed to
 * survive the page unloading immediately after, which is exactly what
 * happens when a click triggers navigation.
 */
export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const magnetic = useMagnetic<HTMLAnchorElement>(0.2);
  const isExternal = /^https?:\/\//.test(href);

  function handleClick() {
    if (typeof navigator === "undefined" || !navigator.sendBeacon) return;
    const label = typeof children === "string" ? children : href;
    const payload = new Blob([JSON.stringify({ label })], { type: "application/json" });
    navigator.sendBeacon("/api/track", payload);
  }

  return (
    <Link
      href={href}
      ref={magnetic.ref}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      onPointerDown={magnetic.onPointerDown}
      onPointerUp={magnetic.onPointerUp}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded px-7 py-3.5 font-mono text-eyebrow uppercase tracking-[0.1em] transition-colors duration-300 ease-signature",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
