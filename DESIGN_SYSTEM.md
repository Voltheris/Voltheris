# Voltheris — Design System

## Brand thesis

Voltheris sells trust, not novelty. The company automates the parts of a
business a client is most nervous about handing off — leads, CRM, booked
appointments — so the site has to feel like it belongs to an operation
precise enough to be trusted with that. "Quiet luxury," per the brief:
restraint reads as competence.

## Color

| Token | Hex | Role |
|---|---|---|
| `ivory` | `#F7F3EA` | Primary background |
| `sand` | `#EDE7D8` | Secondary section background (alternates with ivory) |
| `hairline` | `#DAD2BF` | 1px rules, dividers, input borders |
| `ink` | `#211F1C` | Primary text — warm charcoal, never pure black |
| `ink-soft` | `#57534A` | Secondary text, captions (6.9:1 on ivory) |
| `ink-faint` | `#6B675C` | Tertiary text, placeholders (5.1:1 on ivory, 4.6:1 on sand) |
| `charcoal` | `#17140F` | Deep sections — footer, dark CTA bands |
| `gold` | `#B08D57` | Primary accent — fills, borders, and text **on charcoal only** (5.9:1) |
| `gold-bright` | `#C9A05C` | Accent hover / active |
| `gold-dim` | `#C2934F` | Muted accent for eyebrows on charcoal (6.6:1) |
| `gold-text` | `#7A5F3C` | Gold TEXT/icons **on ivory or sand** (5.4:1 / 4.8:1) — see note below |

**Accessibility note:** the brand's gold (`#B08D57`) only clears WCAG AA
(4.5:1 for normal text) against `charcoal` — on `ivory` or `sand` it
measures 2.5–2.8:1, which fails even the relaxed 3:1 large-text
threshold. `gold-text` (`#7A5F3C`) is the required substitute anywhere
gold renders as actual text or a meaningful icon on a light background;
`gold` itself stays reserved for fills, borders, decorative strokes (the
Current line), and text on charcoal, where its contrast is already
fine. `ink-faint` and `gold-dim` were both corrected during the
design-polish pass for the same reason — the original values measured
3.0–4.0:1, just under the AA line.

**Rule:** gold appears on at most one element per viewport — a rule, an
underline, a single stat, a button. It never fills a background larger
than a button or badge. If a section feels like it needs more gold, the
fix is more whitespace, not more gold.

### Why this isn't the generic AI-cream template

The default AI-generated "premium" palette right now is warm cream
(~`#F4F1EA`) paired with a terracotta/clay accent — closer to `#D97757`.
Voltheris shares the cream *background* because the brief explicitly
asked for ivory, but the accent is a muted antique **gold** (`#B08D57`),
cooler and more metallic than terracotta, and it's used as a functional
signal (see "The Current," below) rather than a decorative highlight.
The palette also adds a true deep-charcoal register (`#17140F`) for
footer/CTA bands, which the generic template doesn't reach for.

## Type

Three roles, three faces:

| Role | Face | Used for |
|---|---|---|
| Display | **Fraunces** (optical sizing, weights 300–600, has a true italic) | Hero wordmark, all headlines (H1–H3) |
| Body | **Manrope** (400/500/600/700) | Paragraphs, nav, buttons, forms |
| Utility | **IBM Plex Mono** (400/500) | Eyebrows, stat figures, timestamps, form hints |

Fraunces was chosen over a default serif pairing because its optical-size
axis lets the same face stay crisp and editorial at hero scale (9rem)
and still read comfortably at H3 scale, without swapping families.
Manrope was chosen over Inter specifically to avoid the second most
common AI-generated default — it's a touch warmer and more geometric,
which suits "quiet luxury" better than a neutral grotesque.

### Type scale

Fluid, `clamp()`-based, named by role rather than t-shirt size so usage
stays intentional (`text-display-2xl`, not `text-9xl`):

```
display-2xl   clamp(3.5rem, …, 9rem)     hero wordmark only
display-xl    clamp(2.75rem, …, 6rem)    rare — major section openers
display-l     clamp(2.25rem, …, 4rem)    standard section headline
display-m     clamp(1.75rem, …, 2.5rem)  subheads, card titles
body-l        1.25rem / 1.7              intro paragraphs
body          1.0625rem / 1.7            default paragraph
body-s        0.9375rem / 1.6            dense UI copy
eyebrow       0.8125rem, tracked 0.14em  section labels (mono)
caption       0.75rem, tracked 0.06em    fine print, timestamps
```

## Layout

- Outer bound: `max-w-shell` (1440px). Reading column: `max-w-content`
  (1120px). Long-form (Insights articles): `max-w-prose` (760px).
- Sections alternate `bg-ivory` / `bg-sand` for rhythm without needing
  cards or shadows to separate content.
- Dividers are 1px `hairline` rules, not drop shadows or heavy borders.
- Corners stay near-sharp (`rounded` = 4px) everywhere. `rounded-card`
  (10px) is reserved specifically for portfolio and testimonial cards —
  a deliberate, limited exception, not a global default.
- Vertical rhythm uses the fluid `section-y` spacing token (5rem → 10rem)
  so section padding scales with viewport instead of jumping at
  breakpoints.

```
Section anatomy (repeats down the page):
┌───────────────────────────────────────────┐
│  eyebrow (mono, gold-adjacent ink-soft)     │
│  Display headline                           │
│  optional supporting line (body-l)           │
│                                               │
│  [content: grid / cards / diagram]           │
└───────────────────────────────────────────┘
```

Numbered markers (01 / 02 / 03) are used **only** where the content is
a real, ordered sequence — the workflow-automation process on the
Services page, the founding timeline on About. They are not applied to
things like service cards or testimonials, which have no true order.

## Motion

Two eases cover the whole site (mirrored in `tailwind.config.ts` and
`lib/motion.ts` so CSS, Framer Motion, and GSAP all agree):

- **`signature`** — `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out). Used for
  content reveals, section/page transitions, and the Current line
  drawing itself in. Slow start, decisive finish — reads as confidence,
  not eagerness.
- **`magnetic`** — `cubic-bezier(0.34, 1.56, 0.64, 1)` (soft spring).
  Used *only* for hover/press micro-interactions on buttons and cards.

Durations: 0.4s (fast/hover), 0.6s (base reveal), 0.9s (slow reveal),
1.2s (cinematic — hero sequence only).

`prefers-reduced-motion: reduce` disables Lenis smooth-scroll and clamps
all animation/transition durations to near-zero globally (`globals.css`).
This isn't optional polish — it's load-bearing for the a11y floor.

## Signature element — "The Current"

A single hairline gold stroke (`.the-current` in `globals.css`, 1.5px,
`stroke-linecap: round`) that does one job everywhere it appears:
**shows a connection, not a decoration.**

- In the hero, it's the underline beneath VOLTHERIS that the brief asks
  to "begin to move" on scroll.
- Site-wide, it reappears as the connective thread between process
  steps, timeline nodes on the About page, and the nodes of workflow
  diagrams on Services/Solutions.
- It animates with the `signature` ease, drawing on scroll-into-view via
  `stroke-dasharray`/`stroke-dashoffset`, and pulses gently
  (`animate-current-pulse`) when idle and in view.

This is the one place the brand's name ("Volt-heris") is allowed to be
literal — a current running through the business — without tipping into
circuit-board or neon-wire clichés. It's built once as a CSS utility +
motion pattern, not redrawn bespoke per section, which is what keeps it
reading as a signature rather than a decoration repeated four different
ways.

## Self-critique (per the brief's three default traps)

1. *Warm-cream-background + serif-display + clay-accent template* —
   shares the cream and serif, deliberately diverges on accent color
   (cooler metallic gold vs. terracotta) and gives the accent a single
   functional role (the Current) rather than scattering it as generic
   highlight color.
2. *Near-black + neon accent template* — not used as the primary
   register; charcoal appears only for footer/CTA bands, and gold never
   goes neon-bright or saturated.
3. *Broadsheet / zero-radius newspaper template* — borrows hairline
   rules for dividers (they suit "quiet luxury"), but rejects the
   template's dense multi-column newspaper layout in favor of generous
   single/two-column whitespace, and keeps a soft display serif instead
   of the broadsheet's condensed grotesque.

## Component conventions

- Never hardcode a hex value or `font-family` in a component — reference
  a Tailwind token (`bg-sand`, `font-display`, `text-ink-soft`, …).
- Never introduce a new easing curve or duration outside `lib/motion.ts`
  / the `signature`/`magnetic` Tailwind timing functions.
- Gold usage is a design review item: if a PR adds a new gold-filled
  element, it should be justified against the "one accent per viewport"
  rule above.
- New card-style components default to `rounded` (4px); reach for
  `rounded-card` only for portfolio/testimonial cards, matching the
  reserved-exception rule above.
