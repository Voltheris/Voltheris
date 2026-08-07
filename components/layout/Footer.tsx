"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";
import { socialLinks } from "@/content/social";
import { company } from "@/content/company";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-charcoal pt-section-y text-ivory">
      <div className="container-shell">
        <Link href="/" className="inline-flex items-center gap-4">
          <Image src="/logo.png" alt="" aria-hidden="true" width={56} height={56} className="h-14 w-14 rounded-full" />
          <span className="font-display text-display-l text-ivory">Voltheris</span>
        </Link>
        <p className="mt-4 max-w-prose text-body text-ivory/60">
          AI systems for lead generation, qualification, CRM, and
          scheduling. Built for businesses ready to scale intelligently.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-ivory/10 pt-10 sm:grid-cols-4">
          <div>
            <p className="font-mono text-caption uppercase tracking-[0.1em] text-ivory/40">
              Site
            </p>
            <ul className="mt-4 space-y-3">
              {navItems.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-s text-ivory/75 transition-colors duration-300 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-caption uppercase tracking-[0.1em] text-ivory/40">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {navItems.slice(3).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-s text-ivory/75 transition-colors duration-300 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-caption uppercase tracking-[0.1em] text-ivory/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-body-s text-ivory/75">
              <li>{company.email}</li>
              <li>{company.phone}</li>
              <li>{company.addressLines[company.addressLines.length - 1]}</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-caption uppercase tracking-[0.1em] text-ivory/40">
              Follow
            </p>
            <ul className="mt-4 flex gap-4">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="-m-2 inline-flex p-2 text-lg text-ivory/60 transition-colors duration-300 hover:text-gold"
                  >
                    <Icon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 py-8 text-caption text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Voltheris. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ivory/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ivory/70">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-ivory/70">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
