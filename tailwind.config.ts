import type { Config } from "tailwindcss";

/**
 * Voltheris design tokens.
 * See /DESIGN_SYSTEM.md for the rationale behind every value here.
 * Nothing below is arbitrary — treat this file as the single source of truth
 * for color, type, spacing and motion. Do not hardcode hex values or
 * font-families in components; reference these tokens instead.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EA", // primary background — warm cream, not paper-white
        sand: "#EDE7D8", // secondary section background, alternates with ivory
        hairline: "#DAD2BF", // 1px rules, dividers, input borders
        ink: {
          DEFAULT: "#211F1C", // primary text — warm charcoal, never pure black
          soft: "#57534A", // secondary text / captions
          faint: "#6B675C", // tertiary text / placeholders — AA-compliant on ivory and sand (was too light at #8A8478)
        },
        charcoal: {
          DEFAULT: "#17140F", // deep sections — footer, dark CTA bands
          soft: "#231F19",
        },
        gold: {
          DEFAULT: "#B08D57", // primary accent — muted antique gold, used sparingly
          bright: "#C9A05C", // hover / active state of the accent
          dim: "#C2934F", // muted accent for eyebrows on charcoal — 6.6:1 (was #8C7148 at 4.0:1, failing AA for small text — it was darker than DEFAULT, which cuts contrast against a dark background rather than adding it)
          text: "#7A5F3C", // AA-compliant (5.4:1 on ivory, 4.8:1 on sand) — use for gold TEXT/icons on light backgrounds; the brighter DEFAULT gold only clears AA on charcoal (5.9:1), not on ivory/sand (2.8:1)
        },
      },
      fontFamily: {
        // Editorial display serif — headlines only, set large, used with restraint
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        // Body copy and UI text — warm geometric sans, not a default grotesque
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Eyebrows, stats, nav meta, form labels — always uppercase + tracked
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Fluid, clamp-based type scale. Named by role, not by t-shirt size,
        // so usage stays intentional.
        "display-2xl": ["clamp(3.5rem, 3.1rem + 6vw, 9rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.75rem, 2.3rem + 4.5vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-l": ["clamp(2.25rem, 1.9rem + 2.8vw, 4rem)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
        "display-m": ["clamp(1.75rem, 1.55rem + 1.4vw, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        "body-l": ["1.25rem", { lineHeight: "1.7" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        "body-s": ["0.9375rem", { lineHeight: "1.6" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.06em" }],
      },
      spacing: {
        // Section rhythm — used for vertical padding of major page sections.
        // Tightened from the original 5–10rem scale, which read as too
        // spacious — this keeps the fluid clamp() but pulls both ends in.
        "section-y": "clamp(3.5rem, 3rem + 3.5vw, 6.5rem)",
        "section-y-tight": "clamp(2.5rem, 2rem + 2vw, 4rem)",
        gutter: "clamp(1.5rem, 1rem + 2vw, 4rem)",
      },
      maxWidth: {
        shell: "1440px", // outer page bound
        content: "1120px", // reading / copy column
        prose: "760px", // long-form text column (Insights articles)
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px", // default UI radius — quiet, near-sharp
        md: "6px",
        card: "10px", // reserved for portfolio + testimonial cards only
        full: "9999px",
      },
      transitionTimingFunction: {
        // Shared easing curves — mirrored as raw cubic-bezier strings in
        // lib/motion.ts for GSAP, which cannot read Tailwind config.
        signature: "cubic-bezier(0.16, 1, 0.3, 1)", // expo-out — reveals, page transitions
        magnetic: "cubic-bezier(0.34, 1.56, 0.64, 1)", // soft spring — buttons, hover states
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        900: "900ms",
        1200: "1200ms",
      },
      keyframes: {
        "current-flow": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "current-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "current-pulse": "current-pulse 3.2s ease-in-out infinite",
      },
      backgroundImage: {
        // Reserved for the rare moments gold needs depth (e.g. large CTA band).
        // Not used as a default card treatment — see DESIGN_SYSTEM.md.
        "gold-sheen": "linear-gradient(115deg, #B08D57 0%, #E4CD9B 45%, #B08D57 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
