import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";

/**
 * Display face — editorial, soft-contrast serif with optical sizing.
 * Reserved for headlines (H1–H3) and the hero wordmark. Never used for
 * body copy or UI chrome.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

/**
 * Body face — warm geometric sans. Carries paragraphs, nav, buttons,
 * form fields — everything that isn't a headline or a data label.
 */
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Utility face — eyebrows, stat figures, timestamps, form hints.
 * Always uppercase and letter-spaced when used for labels; used at
 * native case for numerals (stats, dates).
 */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = `${fraunces.variable} ${manrope.variable} ${plexMono.variable}`;
