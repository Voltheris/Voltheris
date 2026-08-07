/**
 * ⚠️ PLACEHOLDER CONTENT — these point at the generic root domains
 * (linkedin.com, x.com, instagram.com), not real Voltheris profiles.
 * Replace with actual profile URLs before launch, or remove any
 * platform Voltheris doesn't actually use.
 */
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "TbBrandLinkedin" },
  { label: "X", href: "https://x.com", icon: "TbBrandX" },
  { label: "Instagram", href: "https://instagram.com", icon: "TbBrandInstagram" },
];
