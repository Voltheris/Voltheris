"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Floating glass nav, rendered once in the root layout.
 *
 * On the homepage it starts invisible and non-interactive (no flash of
 * nav before the cinematic hero has run) — Hero's ScrollTrigger
 * timeline reveals it by targeting `#site-nav` directly once the
 * sequence reaches its final phase. See Hero.tsx for the reveal.
 *
 * On every other route there is no hero sequence to reveal it, so it
 * renders visible immediately.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const alwaysVisible = pathname !== "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header
      id="site-nav"
      style={alwaysVisible ? undefined : { opacity: 0, pointerEvents: "none", transform: "translateY(-12px)" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-shell mt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded border px-5 py-3 backdrop-blur-md transition-all duration-300 ease-signature",
            scrolled
              ? "border-hairline bg-ivory/90 shadow-[0_8px_30px_-14px_rgba(33,31,28,0.18)]"
              : "border-hairline/70 bg-ivory/70"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Voltheris"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full"
              priority
            />
            <span className="font-display text-lg tracking-tight text-ink">Voltheris</span>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative font-mono text-caption uppercase tracking-[0.1em] transition-colors duration-300",
                    active ? "text-gold-text" : "text-ink-soft hover:text-ink"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ease-signature",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" className="px-5 py-2.5">
              Book a consultation
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={cn("h-px w-5 bg-ink transition-transform duration-300", open && "translate-y-[3.5px] rotate-45")} />
            <span className={cn("h-px w-5 bg-ink transition-transform duration-300", open && "-translate-y-[3.5px] -rotate-45")} />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded border border-hairline/70 bg-ivory/95 p-6 backdrop-blur-md lg:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "font-display text-display-m",
                    pathname === item.href ? "text-gold-text" : "text-ink"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Book a consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
