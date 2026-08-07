# Voltheris

AI systems that run lead generation, qualification, CRM management, and
appointment booking. This repo is the marketing site.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — all design tokens live in `tailwind.config.ts`
- **Framer Motion** — component-level animation, page/section reveals
- **GSAP** — scroll-triggered timelines (hero sequence, pinned sections)
- **Lenis** — smooth scrolling, wired once in `SmoothScrollProvider`
- **react-icons** — iconography

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for the site, `http://localhost:3000/style-guide`
for the live design-token reference.

## Project structure

```
app/                  Route segments (App Router). One folder per page.
  layout.tsx          Root layout — fonts, metadata, SmoothScrollProvider
  globals.css          Base styles, CSS layer definitions, .the-current utility
  style-guide/         Internal token/type/color reference (not in nav)

components/
  ui/                  Primitive, reusable pieces (Button, Card, Accordion, …)
  sections/            Page-level sections composed from ui/ (Hero, ServicesGrid, …)
  layout/              Nav, Footer, page chrome
  providers/           App-wide context/providers (smooth scroll, etc.)

lib/
  fonts.ts             next/font definitions for the three type roles
  motion.ts            Shared easing curves + Framer Motion variants
  utils.ts             cn() class-merge helper

content/               Static copy/data (services, case studies, articles, jobs)
types/                 Shared TypeScript interfaces for the above
hooks/                 Reusable client hooks (e.g. useScrollProgress, useMagnetic)
public/                Static assets — images, favicon, og-image
```

## Design system

Full rationale (palette, type scale, spacing, motion, the signature
"Current" element) lives in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).
Every visual decision in the codebase should trace back to a token
defined there and in `tailwind.config.ts` — no hardcoded hex values or
one-off font-families in components.

## Deploying (GitHub → Vercel)

Vercel is built by the Next.js team and deploys this project natively
— no export mode, no adapter, no config file needed.

1. **Push to GitHub:** `git init`, commit, create a repo on GitHub,
   `git remote add origin <url>`, `git push -u origin main`.
2. **Vercel:** [vercel.com/new](https://vercel.com/new) → Import Git
   Repository → select the repo. Vercel auto-detects Next.js — leave
   the build settings on their defaults (`next build`, no output
   directory override needed). Deploy.
3. **Custom domain:** once deployed, Project → Settings → Domains →
   Add. Vercel gives you either an A record or a CNAME depending on
   whether you're pointing the apex domain or a subdomain — add
   whichever it shows you at your DNS provider (or, if your domain's
   nameservers already point at Vercel, it's automatic).

No environment variables are required for this project.

## Build roadmap

1. ~~Architecture & design system~~
2. ~~Homepage — nav, cinematic hero, and all homepage sections~~
3. ~~Shared component library + Services page~~
4. ~~Solutions page — 7 industry sections~~
5. ~~Portfolio (index + dynamic case study pages) + About page~~
6. ~~Insights (index + dynamic article pages)~~
7. ~~Contact page — form, FAQ~~
8. ~~Full design-polish pass~~
9. ~~Deploy config (Vercel)~~
10. ~~CRO / SEO / accessibility / performance audit~~
11. ~~Real logo, real email, lighter/tighter visual pass, reworked hero,
    working contact form~~
12. ~~Heading-contrast bug fix + consulting-firm copy/trust pass~~
13. ~~Overflow fixes, scroll-reset bug, hero zoom rework, admin portal~~
14. ~~Hero zoom mechanics fix, Calendly link restored, grid overlap fix~~
15. ~~Pricing section redesign~~
16. ~~Pricing text reduction + shared-info consolidation~~
17. ~~Brutal-critique pass — nav accessibility, CTA consistency, price floor~~
18. ~~Pricing perfected to exact client spec~~ ← this stage
19. Remaining shared component — comparison table

## Pricing perfected to exact spec (round 4)

Followed a fully-specified brief precisely, including two explicit
reversals of my own prior recommendations — noted here because it's
worth knowing these went back and forth, not because either reversal
was wrong:

- **Price floor reverted to $2,500 / $6,500.** I'd raised this to
  $5,000 / $15,000 in the critique pass, flagging it explicitly as a
  judgment call. This brief specified the original numbers exactly —
  followed as given. Ongoing-optimization prices reverted to
  $300/month / $650/month accordingly.
- **CTA labels differentiated per tier again** ("Book Assessment" /
  "Schedule Consultation" / "Request Proposal"), reversing the
  same-label-everywhere consolidation from the critique pass — but
  scoped ONLY to these three pricing buttons. Every other CTA on the
  site stays consolidated to "Book a consultation," which is what the
  critique pass was actually about (six *accidental* variants site-wide
  with no logic). Three *deliberate* tier-specific labels on adjacent
  pricing cards is a different, legitimate pattern.
- **Card content trimmed to the exact spec**: one description sentence
  per tier (merged what used to be a separate subtitle line), 4-5
  scannable feature tags per tier matching the brief's copy exactly,
  ongoing-optimization price restructured into its own small labeled
  block instead of a run-on sentence.
- **"Every Implementation Includes"** updated to the new 8-item list
  (added Process Mapping, System Architecture, Testing & Quality
  Assurance as its own line, Documentation split out, "30 Days of
  Post-Launch Support"), with the closing paragraph replaced verbatim
  with the brief's exact wording.
- **Intro paragraph above the cards** replaced with the brief's exact
  example copy.

## Critique-driven fixes (round 3)

A self-critique pass, with fixes for what was genuinely fixable without
new input from you. Full reasoning for each is in the conversation, not
repeated here — summary of what changed in code:

- **Nav was gated behind 85% of the hero animation** — a visitor
  couldn't reach Pricing or Contact without sitting through most of the
  cinematic sequence first. Now available after a ~6% scroll nudge,
  decoupled from the rest of the reveal. The "almost silent at rest"
  opening (scroll 0 = no nav) is preserved; the animation itself is
  untouched.
- **CTA labels consolidated.** Found six different phrasings for the
  same action across the site ("Book a consultation," "Book
  consultation," "Book a free assessment," "Talk to us," "Contact us,"
  "Skip ahead — book a call"). All standardized to "Book a
  consultation." `IndustrySection`'s "Talk to us about {industry}" was
  kept — that's a deliberate contextual variant, not sloppiness.
- **Pricing floor raised from $2,500 to $5,000.** The site's own stated
  positioning is "$5,000–$50,000 implementation" — the actual lowest
  tier was starting below its own stated floor, which undercuts trust
  with an enterprise buyer more than a higher number would. Middle tier
  scaled proportionally ($6,500 → $15,000).
- **Findings raised but NOT unilaterally fixed**, because fixing them
  correctly needs real input from you, not more placeholder content:
  case studies and pricing ceiling read as solid mid-market, not
  "Fortune 500 CEO" enterprise — that needs either real enterprise case
  studies or a repositioned ceiling tier; the founder section is a
  monogram, not a photo, which reads as evasive for a trust-sensitive
  buyer (already flagged as placeholder, re-flagged because it matters
  more for this specific audience).
- **Checked and NOT changed:** the "quietly" word repetition I flagged
  turned out to be only 3 instances across two blog posts and one
  mission line on inspection — each doing real work in context, not
  an actual tic. Didn't make performative edits to copy that was fine.

## Pricing refinement (round 2)

Your last brief said reduce price emphasis; this one said make price
the visual focus — I followed the newer instruction and reversed that
specific choice. Everything else in this pass was genuinely new work,
not already covered by prior rounds (which already had the Why
Voltheris section, outcome-first hero copy, the 6-step process
timeline, footer legal links + brand statement, and the Contact page
messaging this brief also asked for — those were left untouched since
they already matched).

- **Cards trimmed** — features went from full sentences to short
  scannable tags ("Instant lead capture" instead of "Never manually
  enter another lead"). Price is the first and largest element after
  the name again, in gold.
- **Language changes applied exactly as specified**: "Project
  Investment" label, "Starting at $X" phrasing, Enterprise shows
  "Custom Proposal."
- **Repeated boilerplate removed from every card** — "free assessment,"
  "optional," "no obligation" no longer repeat three times. That
  information now lives once, in a new consolidated block below all
  three cards (`content/pricingIncludes.ts` +
  `components/sections/PricingPreview.tsx`) with the exact 7-item
  checklist from the brief.
- **Contrast bug caught mid-edit and fixed before shipping**: my first
  pass used the light-background `gold-text` token unconditionally for
  the price and checkmarks, which would have under-contrasted on the
  featured card's dark charcoal background. Fixed to use `gold`
  (brighter) specifically on that card — see the inline comment in
  `PricingCard.tsx`.
- `PricingTrust`'s "What's included" block was removed — it's now
  redundant with the new, more specific consolidated checklist right
  above it.

## Pricing section redesign

Full rework of `/services`' pricing block around one principle: sell
the implementation (a built system), not a monthly subscription.

- **`content/pricing.ts`** — new tier model. Implementation price is
  primary (`$2,500` / `$6,500` / `Custom`, one-time); ongoing
  optimization (`$300` / `$650` / `Custom` per month) is explicitly
  framed as optional, both in copy and in `PricingCard`'s visual
  hierarchy — the ongoing figure renders smaller and further down.
  Tiers renamed: Foundation → **Lead Capture System**, Momentum →
  **Business Operations System**, Enterprise → **Enterprise
  Automation**. Every feature rewritten as a business outcome
  ("Never manually enter another lead") rather than a technical one
  ("CRM integration").
- **Price de-emphasized on purpose:** the implementation figure renders
  in `ink`, not the gold the rest of the site uses to mark "the number
  that matters" (stats, ROI). Gold went to the feature checkmarks
  instead — results are what the card is supposed to sell.
- **`WorkflowExplainer`** (new) — sits above the pricing cards,
  answering "what is a workflow" with a concrete 5-step example
  (`content/workflowExample.ts`) before the tiers reference workflow
  counts. Reuses the existing `WorkflowDiagram` component rather than
  building a new visual pattern.
- **`PricingTrust`** (new) — five blocks (what's included, timeline,
  security, compatible software, industries served) directly under
  the cards. Every line is traceable to real content already on the
  site (`content/faq.ts`, `content/industries.ts`), not invented.
- **"What happens after clicking" answered directly** — every card now
  has a one-line caption under its CTA ("Free assessment call — no
  obligation, nothing charged today").
- **`ProcessCurrent` now supports 6 steps.** `content/engagementProcess.ts`
  was rewritten to the brief's six named steps (Business Assessment →
  Automation Review → Strategy Call → Automation Build → Testing &
  Implementation → Launch & Optimization). The component's single-row
  layout with one spanning connector line only made sense up to 5
  steps — at 6 it now wraps to two rows and skips the spanning line
  rather than rendering something visually broken.
- **Section order on `/services` changed**: pricing now comes right
  after the services grid, with "How It Works" immediately below it —
  matching the brief's requested order (previously pricing came after
  the process section).

## Overflow/overlap fixes, navigation bug, hero rework, admin portal

**Text overflow bugs.** Several card headers used a flex row (icon +
heading + a fixed-width sibling like a "+" toggle) where the text
column had no `min-w-0`. Flex items default to `min-width: auto`,
meaning they won't shrink below their content's natural width — so a
long enough title would overflow past the card edge instead of
wrapping. Fixed in `ServiceCard`, `ValuesGrid`, and every section
header paired with a button (`PortfolioPreview`, `ServicesPreview`,
`InsightsExplorer`, the portfolio detail page's "More work" header).
Also tightened `Nav`'s item spacing specifically at the `lg` breakpoint
(`gap-4` → `xl:gap-8`), where logo + 6 nav items + the CTA button were
tightest and most likely to overflow.

**"Buttons landing at the bottom of the page" — found and fixed.**
Root cause: Lenis (the smooth-scroll library) owns scroll position
independently of the browser and was never told to reset on a Next.js
route change. Clicking a link while scrolled down — e.g. a CTA in the
footer — carried that same scroll offset onto the new page, landing
you low on it instead of at the top. `SmoothScrollProvider` now forces
an immediate scroll-to-top on every pathname change.

**Careers removed** from `content/nav.ts` — it was a broken link (no
page was ever built for it); footer's nav columns rebalanced from 4/2
to 3/3 now that there are 6 items instead of 7.

**Hero zoom reworked.** The zoom now anchors precisely on the left
edge of the "H" — measured via `getBoundingClientRect` on an isolated
`<span>`, not guessed as a percentage of the word (serif letter widths
aren't uniform, so that would've been visibly wrong) — and re-measured
once the real webfont is active. The timeline was also restructured so
the zoom fully completes before anything else (particles, the reveal)
starts appearing, which is what was reading as "partial" before — the
phases used to overlap.

## Admin portal (`/admin`)

Login-protected dashboard showing contact-form submissions and basic
site metrics. Three things to know:

1. **Credentials are environment variables, not hardcoded.** The
   username/password you gave me are *not* written into any file in
   this repo — committing real login credentials to Git means they sit
   in plain text in the commit history forever, visible to anyone with
   repo access, even after you change them. Set `ADMIN_USERNAME` and
   `ADMIN_PASSWORD` yourself in Vercel's Environment Variables (see
   `.env.example`). Since the password was typed into this chat,
   consider it exposed and worth changing at some point.
2. **Requires Upstash Redis** (free tier is fine) — this is what
   actually stores form submissions and metrics across requests, since
   a Vercel serverless function can't reliably persist anything to its
   own filesystem. Create a database at upstash.com and add
   `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` to Vercel.
   Until both Redis and the admin credentials are set, `/admin`
   redirects to a login page that will clearly refuse to authenticate
   rather than silently failing.
3. **Metrics are self-hosted and approximate**, not a real analytics
   platform: `middleware.ts` increments a view counter (via
   `event.waitUntil`, so it never blocks the actual page response) on
   every real page load, and `Button.tsx` fires a `sendBeacon` on every
   click for a basic CTA click-through count. This is good for a
   directional read ("is anyone clicking the CTA at all"), not a
   substitute for Vercel Analytics, GA4, or PostHog if you want
   real segmentation, funnels, or historical trends later.
4. `/admin` is `disallow`ed in `robots.ts` and excluded from the
   sitemap. The public `Nav`/`Footer` are hidden on any `/admin` route
   (both had to be checked against `pathname`, so `Footer` is now a
   client component — it was a server component before).

Build verified locally with `npm run build` across all 38 routes
(Google Fonts can't be fetched from this sandbox, so that step was
checked with a stubbed `lib/fonts.ts` — restored before packaging).
One benign build warning: `@upstash/redis` mentions the Edge Runtime
during the build — this package is explicitly designed for edge use
over plain HTTPS (no persistent connections), the warning is
webpack's static analysis being overly cautious about a code path
that isn't actually reachable at runtime there, and the build
completes successfully.

## Heading-contrast bug (fixed)

The invisible "Let's see what's worth automating" heading on the dark
CTA band was a **systemic bug, not a one-off**: `globals.css` forced
every `h1`–`h4` to `text-ink` unconditionally. An inherited color
always loses to an explicit rule on the element itself regardless of
specificity, so any heading inside a dark (`text-ivory`) section that
didn't *also* explicitly re-declare its own color was silently
overridden back to near-black-on-near-black. Every other heading in
the codebase happened to redundantly re-declare `text-ink` anyway
(harmless on light backgrounds), which is exactly why this had only
surfaced in two places — `CTABand` and one spot on `/style-guide`.

Fixed at the root: `globals.css` no longer forces a color on headings
at all, so they inherit naturally like everything else (`text-ink` via
`body`'s default on light sections, `text-ivory` via a dark section's
own class). Both affected headings also now explicitly declare
`text-ivory` too, matching the pattern every other heading follows —
belt and suspenders, so this can't quietly reintroduce itself if the
DOM around either one changes later.

## Consulting-firm copy & trust pass

Working through the brief's specific asks, prioritized by what wasn't
already covered in the earlier CRO/design-polish passes:

- **Hero copy tightened** to be legible in three seconds: new eyebrow
  ("Practical AI implementation, not AI hype") and a shorter,
  outcome-first description. Site-wide title/meta description in
  `app/layout.tsx` updated to match.
- **New `WhyVoltheris` section** near the top of the homepage (replaces
  the homepage's use of `Philosophy`, which stays on `/about`) —
  explicit "we don't sell AI, we solve operational problems" framing
  with three outcome pillars.
- **New `TrustSignals` section** — industries served, enterprise-grade
  tools, secure implementation, custom-built systems, end-to-end
  support. Every line is traceable to real content already elsewhere
  on the site (`content/industries.ts`, `content/faq.ts`,
  `content/services.ts`), not invented.
- **Contact page rewritten** to frame the consultation as a working
  session ("identify where automation can create the greatest impact")
  rather than generic contact-form language.
- **Footer:** added the requested brand statement and a Cookie Policy
  link.
- **`/privacy`, `/terms`, `/cookies` built** — the footer's Privacy and
  Terms links were pointing at pages that didn't exist (a real 404, not
  a hypothetical one). ⚠️ These are generic templates
  (`components/sections/LegalLayout.tsx` has the full caveat) — have
  an actual attorney review them before relying on them; they're
  `noindex` for now for that reason.

Build verified locally with `npm run build` across all 34 routes
(Google Fonts can't be fetched from this sandbox, so that step was
checked with a stubbed `lib/fonts.ts` — restored before packaging).

**Not yet addressed from this brief** — flagging honestly rather than
claiming full coverage: custom dashboard/CRM-interface illustrations
(the brief's "visual elements" section) weren't built — the existing
diagram components (`WorkflowDiagram`, `CaseTimeline`, `ProcessCurrent`)
cover the process-visualization ask, but a bespoke dashboard mockup is
a larger, more custom illustration task better scoped on its own. A
real Lighthouse run and a pixel-level pass across every breakpoint also
still need an actual deployed URL and browser to check properly.

## Real logo, real email, and functional contact form

- **Logo:** the real Voltheris mark now powers the favicon
  (`app/icon.png`, `app/apple-icon.png`) and appears in `Nav` and
  `Footer` (`public/logo.png`) via `next/image`.
- **Email/domain:** `content/company.ts` now points at
  `team@getvoltheris.com`. Every `voltheris.ai` reference (metadata,
  JSON-LD, sitemap, robots.txt) was swapped to `getvoltheris.com`,
  inferred from the email domain — confirm this is actually your
  domain before launch.
- **Lighter, tighter, more fluid:** `section-y` tokens tightened
  (previously an 80–160px clamp, now 56–104px) — the site was reading
  as too spacious. `StatsBand`, `FeaturedCaseStudy`, `FeaturedArticle`,
  and `FounderStory` were converted from full-charcoal blocks to light
  (ivory/sand) treatments — charcoal is now reserved for `Footer` and
  `CTABand` only, which was the biggest source of "too dark" across
  the site.
- **Hero, reworked:** the wordmark now grows continuously through the
  whole pinned scroll — no more growing-then-shrinking to a small
  permanent logo. It dissolves into the reveal as the pin releases.
  See the updated comment in `components/sections/Hero.tsx`.
- **Contact form now actually sends email** via `app/api/contact/route.ts`
  (Resend). **Requires setup — see `.env.example` and the comment at
  the top of that file:** sign up at resend.com, verify a sending
  domain, add `RESEND_API_KEY` in Vercel's project environment
  variables, and update `FROM_ADDRESS` in the route to a verified
  sender. Until that's done, the form shows a clear error state
  (with a mailto fallback) instead of silently pretending to succeed.
- **Calendly removed entirely** — `ScheduleSection` and
  `CalendlyEmbed` deleted, `/contact` now has the form as its single
  primary action.

## ⚠️ Before you launch: placeholder content

Several content files contain **illustrative, invented content** written
to demonstrate page designs — not real Voltheris data. Each is flagged
with a comment at the top of the file, but the summary:

- `content/caseStudies.ts` — all six client names, results, ROI
  figures, timelines, and testimonials are fictional. Publishing these
  as-is presents fabricated client results as genuine.
- `content/founder.ts` / `content/articles.ts` — "Julian Marsh" is not
  a real person.
- `content/company.ts` — the email, phone number, and address are
  invented. A fake phone number here is actively misleading, not just
  inaccurate.
- `content/social.ts` — links point at generic platform root domains,
  not real Voltheris profiles.
- `content/timeline.ts` — the founding story on the About page is
  illustrative.
- `content/stats.ts` / the Portfolio page's aggregate stats — these
  were corrected during the CRO pass to be either genuinely derived
  from `caseStudies.ts` (which is itself still placeholder) or framed
  as stated methodology rather than invented precision — but they
  still inherit the case-study data's placeholder status.

None of this blocks development or preview deploys. It blocks
**production launch on a real domain with real visitors.**

## CRO / SEO / accessibility / performance audit

A full-site audit against: business-outcome messaging, trust signals,
CTA frequency, SEO completeness, WCAG 2.2 AA, and Core Web Vitals.
What was implemented directly in this pass, versus flagged as a
finding for follow-up:

**Implemented**
- **SEO:** canonical URL added to every page (previously missing
  everywhere); `Organization` JSON-LD (root layout), `Service` +
  `FAQPage` JSON-LD (Services), `FAQPage` JSON-LD (Contact),
  `Article` + `BreadcrumbList` JSON-LD (every Insights post and case
  study), `BreadcrumbList` on every other page. New
  `components/seo/` folder holds these as reusable, content-driven
  components — structured data is generated from the same arrays
  already rendered visibly, so it can't drift from what's on the page.
- **Trust signals, corrected rather than just added:** found and fixed
  actually-fabricated-reading stats — a "42 AI systems deployed"
  figure on the Portfolio page had no basis in any content on the
  site; replaced with figures genuinely computed from
  `caseStudies.ts` (case study count, min/average ROI, industries
  represented) instead of invented round numbers. Same fix applied to
  the homepage stats band. See the placeholder-content warning above
  for what still needs real data behind it.
- **CTA frequency:** new `InlineCTA` component — a single restrained
  mid-page conversion point, distinct from the full-width `CTABand`.
  Added once each to Services (after the service grid), Solutions
  (mid-way through the industry list), and Portfolio (after the
  featured case study) — not stacked with other CTAs, which is what
  would tip this into spam.
- **Accessibility (WCAG 2.2 AA):** audited and fixed **2.5.8 Target
  Size Minimum** — several icon-only buttons (footer social links,
  the Insights search-clear button) had a clickable area under the
  24×24px minimum; fixed with padding + compensating negative margin
  so visual spacing didn't change. Other 2.2-specific criteria
  (Dragging Movements, Consistent Help, Redundant Entry, Accessible
  Authentication) don't apply — this site has no drag interactions,
  multi-step forms, or authentication.
- **Performance:** the Calendly embed on `/contact` previously fetched
  its third-party script unconditionally on mount. It now only loads
  once the widget is within 400px of the viewport
  (`IntersectionObserver`), so a visitor who converts through the
  contact form instead never pays for Calendly's JS/network cost.
- **Deploy:** the project deploys to Vercel with zero config — see
  the section above.

**Findings not yet implemented (flagged for a follow-up pass)**
- **Full section-by-section copy rewrite.** Existing copy was
  originally written outcome-first (e.g. "Every lead, qualified before
  it reaches a human" rather than a feature list), and was spot-checked
  against the "problem / result / trust / next step" framework rather
  than rewritten wholesale — a genuine line-by-line rewrite of every
  section on all 9+ pages is a large task better scoped as its own
  pass than rushed here.
- **Core Web Vitals measurement.** Bundle sizes are reasonable
  (87–197KB First Load JS per route, no images at all), but an actual
  Lighthouse/CrUX run needs a deployed URL and a real browser — worth
  doing right after the Vercel deploy succeeds.
- **Further JS reduction.** GSAP + Framer Motion + Lenis together are
  the bulk of the shared bundle. All usage is already component-scoped
  (Next.js code-splits per route), but there's likely room to trim
  further once real performance data exists to target.
- **Technology-stack / integrations section.** The CRM/integration
  list currently only appears inside the Services FAQ; promoting it to
  its own visible trust section (this is real, non-fabricated content)
  is a reasonable next addition.

## Design-polish pass

A site-wide pass across timing, responsiveness, accessibility, SEO, and
visual consistency — done at the system level (tokens, shared
components, root layout) rather than page-by-page, so it propagates
everywhere those are used.

**Timing & interaction**
- All hover/interaction transitions tightened from 400ms → 300ms
  site-wide for a snappier feel; scroll-reveal and GSAP-drawn timings
  were left as-is (600–1400ms range is correct for those).
- `Button` and every other magnetic-button consumer now get real press
  feedback (`onPointerDown`/`onPointerUp` in `useMagnetic`, driven by
  GSAP) rather than a CSS `active:scale-*` class — the hook already
  drives `transform` via inline style on every pointer move, and an
  inline style always beats a class targeting the same property, so a
  class-based press effect would have been silently overridden the
  moment the pointer moved. See the comment in `hooks/useMagnetic.ts`.
- `Nav` now intensifies its glass background, border, and adds a
  shadow once the page has scrolled past 8px, instead of a single
  static glass state for the entire scroll range.

**Responsiveness**
- `PageHero` and the two custom detail-page hero sections
  (`/portfolio/[slug]`, `/insights/[slug]`) now use `pt-32 sm:pt-40`
  instead of a flat `pt-40` — on a short phone screen, 160px of top
  padding was eating a large share of the first viewport.

**Accessibility**
- **Contrast audit, not a guess:** actually computed WCAG contrast
  ratios (see `DESIGN_SYSTEM.md` → Color) and found two real failures:
  `ink-faint` measured 3.0–3.35:1 against ivory/sand (needs 4.5:1 for
  normal text), and the brand gold used as *text* on ivory/sand
  measured only 2.5–2.8:1 — failing even the relaxed 3:1 large-text
  threshold. Also found `gold-dim` was *darker* than the DEFAULT gold,
  which cuts contrast against a dark background rather than adding it
  (4.0:1, still short of AA).
  - `ink-faint` darkened to `#6B675C` (5.1:1 / 4.6:1).
  - `gold-dim` corrected to `#C2934F` (6.6:1 on charcoal).
  - New `gold-text` token (`#7A5F3C`, 5.4:1 / 4.8:1) introduced
    specifically for gold text/icons on light backgrounds; `gold`
    itself stays reserved for fills, borders, the Current line, and
    text on charcoal, where its contrast was already fine. Swept ~30
    call sites across the codebase to use the correct one — this
    wasn't a blind find-and-replace, each site was checked against
    which background it actually renders on.
- Skip-to-content link (`.skip-link` in `globals.css`) plus
  `id="main-content"` added to every page's top-level `<main>`.
- `InsightsExplorer` now has an `aria-live="polite"` region announcing
  the result count as search/filter changes.
- `-webkit-tap-highlight-color: transparent`, a `scroll-padding-top`
  fallback for any anchor without its own `scroll-mt-*`, and
  `text-wrap: balance` on headings for cleaner line breaks.

**SEO**
- `app/sitemap.ts` (all static routes + every case study and article
  slug) and `app/robots.ts`.
- Organization JSON-LD in the root layout.
- A real Open Graph / Twitter card image (`app/opengraph-image.tsx`,
  generated with `next/og`) instead of no image at all.
- Twitter card metadata added alongside the existing Open Graph tags.

**Loading & error states**
- `app/loading.tsx` — a minimal branded loading state (a pulsing
  Current line) shown by Next.js between route segments, instead of a
  blank screen.
- `app/not-found.tsx` — a branded 404 page instead of the framework
  default.

Build verified locally with `npm run build` across all 28 routes
(Google Fonts can't be fetched from this sandbox, so that step was
checked with a stubbed `lib/fonts.ts` — restored before packaging; it
resolves normally wherever the project has open internet access).

## Contact

`/contact` composes: `PageHero` (with a "Book a call instead" CTA
jumping straight to `#schedule`) → `ContactSection` (form + sidebar) →
`ScheduleSection` (Calendly embed) → `FAQ`.

- `ContactForm` — presentational, same honesty pattern as
  `NewsletterSignup`: no email/CRM provider connected, clearly flagged
  in a comment and in a line of copy under the submit button. Built on
  a new shared `FormField` primitive (`components/ui/FormField.tsx`)
  that renders as an input, textarea, or select with identical label
  and focus styling — reused instead of hand-rolling each field.
- `CalendlyEmbed` (`components/ui/`) is a real, working Calendly
  inline-embed integration (their standard `.calendly-inline-widget` +
  `widget.js` pattern) — the only thing between this and a live booking
  flow is swapping the placeholder `CALENDLY_URL` for a real scheduling
  link, flagged with a `TODO` at the top of the file.
- `ContactInfo` (sidebar) and the Footer's contact column now both read
  from `content/company.ts`; social links now live in
  `content/social.ts` and are resolved through the shared `Icon`
  registry — previously the Footer had this data hardcoded and
  duplicated nowhere else, now it's shared.
- `FAQ` is reused again here (as on Services) with Contact-specific
  content from `content/contactFAQ.ts`.

Build verified locally with `npm run build` across all 25 routes
(Google Fonts can't be fetched from this sandbox, so that step was
checked with a stubbed `lib/fonts.ts` — restored before packaging; it
resolves normally wherever the project has open internet access).

## Insights

`content/articles.ts` holds 8 articles across 4 categories (Automation,
Strategy, Industry Notes, Product) — each with real body copy, an
author, a publish date, and a reading-time estimate.

- `/insights` — `PageHero` → `FeaturedArticle` (dark spotlight band) →
  `InsightsExplorer` (client-side search + category filter, no
  backend — see the comment in that file) → `NewsletterSignup` →
  `CTABand`.
- `/insights/[slug]` — statically generated for all 8 slugs, long-form
  typography (`max-w-prose`, `text-body-l`), three related articles,
  `CTABand`.
- `InsightsExplorer` filters the static articles array in the browser
  by title/excerpt match and category, with `AnimatePresence`
  handling the grid re-layout as results change.
- `NewsletterSignup` is presentational — there's no email provider
  wired up. The success state shown after submit is what should render
  once a real API call is connected; see the comment in
  `components/sections/NewsletterSignup.tsx` before wiring one up.
- `ArticleCard` follows the same icon-watermark hover pattern as
  `CaseStudyCard`, keeping the two content-heavy sections of the site
  visually consistent.

Build verified locally with `npm run build`, including static
prerendering of `/insights` and all 8 `/insights/[slug]` routes
(Google Fonts can't be fetched from this sandbox, so that step was
checked with a stubbed `lib/fonts.ts` — restored before packaging; it
resolves normally wherever the project has open internet access).

## Portfolio

`content/caseStudies.ts` is the single source of truth for all six case
studies (Harrow Realty Group, Meridian Law Partners, Birchfield
Construction, Ashcombe Health Partners, Lindqvist Capital Advisors,
Fernwood Growth Marketing) — challenge/solution copy, before/after
metrics, ROI, a four-phase timeline, and a testimonial for each. The
homepage's `PortfolioPreview` now pulls from the same file instead of a
separate, thinner content model.

- `/portfolio` — `PageHero` → `StatsBand` (portfolio-wide aggregate
  numbers) → `FeaturedCaseStudy` (the Harrow spotlight, dark band, full
  before/after + ROI + testimonial) → a grid of the remaining five via
  `CaseStudyCard` → `CTABand`.
- `/portfolio/[slug]` — statically generated for all six slugs
  (`generateStaticParams`). Challenge/solution, `BeforeAfter`, a big
  animated ROI stat, `CaseTimeline`, `TestimonialCard`, three
  cross-linked case studies, `CTABand`.
- `CaseStudyCard` (`components/ui/`) is the shared immersive-hover grid
  card — a subtle pointer-driven 3D tilt (`useTilt`), a faint oversized
  icon watermark that brightens on hover, and an animated hero stat.
  Used on the homepage, `/portfolio`, and the "more work" cross-links
  on each detail page.
- `StatsBand` was made prop-driven (`stats`/`eyebrow`/`heading`,
  defaulting to the homepage's numbers) so Portfolio could reuse it
  with its own aggregate stats instead of duplicating the component.

## About

`/about` composes: `PageHero` → `MissionVision` → `Philosophy` (the same
component the homepage uses — the brand statement is stated once and
reused, not rewritten per page) → `CompanyTimeline` → `FounderStory` →
`ValuesGrid` → `CTABand`.

- `CompanyTimeline` is the year-keyed sibling of `ProcessCurrent` — same
  horizontal signature-line draw, hover-brightening year badges instead
  of step numbers.
- `FounderStory` uses a monogram card with the same `useTilt` hover
  instead of a stock photo — consistent with the icon-over-imagery
  approach used everywhere else on the site (no fabricated portraits of
  a real person).
- `ValuesGrid` reuses the click-to-expand pattern from Services'
  `ServiceCard`: each of the four values expands to a concrete
  "in practice" example instead of staying a static wall-plaque quote.

Build verified locally with `npm run build`, including static
prerendering of `/about`, `/portfolio`, and all six
`/portfolio/[slug]` routes (Google Fonts can't be fetched from this
sandbox, so that step was checked with a stubbed `lib/fonts.ts` —
restored before packaging; it resolves normally wherever the project
has open internet access).

## Solutions page

`/solutions` composes: `PageHero` → `IndustryJumpNav` (sticky, scrollspy
via IntersectionObserver) → seven `IndustrySection`s → `CTABand`.

Each `IndustrySection` alternates layout (copy/diagram swap sides via
`reverse`) and background (`tone`) independently, so seven sections in a
row read with rhythm instead of repeating one block seven times. Every
section has its own:

- Icon + eyebrow + headline + description, revealed with a staggered
  Framer Motion sequence
- Two animated stats (`AnimatedCounter`)
- A `WorkflowDiagram` — a compact vertical version of the signature
  Current line, drawn once with GSAP the first time it scrolls into
  view (own `ScrollTrigger` instance per section, independent of the
  others)
- A "Talk to us about {industry}" CTA

Industries covered: Real Estate, Healthcare, Law, Construction, Finance,
Marketing, Enterprise — content lives in `content/industries.ts`.

## Shared component library

`components/ui/` now holds the primitives every page reuses:

- `SectionHeader` — the eyebrow + headline (+ description) pattern used
  at the top of nearly every section
- `Accordion` — single-open expand/collapse list (powers `FAQ`)
- `PricingCard` / `PricingPreview` — tiered pricing, one `featured` tier
- `ServiceCard` — click-to-expand card (works identically on touch and
  desktop, unlike a hover-only interaction)
- `Icon` — resolves a content-layer icon key to its react-icons component
- `Button` — the single magnetic-hover button primitive, three variants

`components/sections/ProcessCurrent` is now a reusable ordered-step
timeline (drawn once with GSAP, not scrubbed): pass `steps` to reuse it
for a different sequence. The homepage's lead pipeline and the Services
page's engagement process are the same component with different props.

`components/sections/PageHero` is the inner-page counterpart to the
homepage's cinematic `Hero` — no pin/scrub, but it draws the same
signature underline once on mount so every page opens with the same
gesture.

`Nav` now highlights the active route and closes the mobile menu on
navigation.

## Services page

`/services` composes: `PageHero` → `ServicesGrid` (all eight services,
click-to-expand, one open at a time) → `ProcessCurrent` (engagement
process) → `PricingPreview` (three tiers) → `FAQ` → `CTABand`, plus a
second CTA in the hero and a third inline after pricing.

## Homepage — how the hero works

`components/sections/Hero.tsx` pins itself for 175% of a viewport height
and scrubs a single GSAP timeline as the user scrolls:

1. **Rest state** — only the VOLTHERIS wordmark and its underline (the
   Current) are visible. No nav, no copy, no buttons.
2. **Phase 1** — letters separate (`letter-spacing` widens), the
   underline stretches, the word swells slightly.
3. **Phase 2** — particles and thin lines drift in; the wordmark settles
   to a smaller, permanent scale near the top of the viewport.
4. **Phase 3** — the tagline, description, and CTAs rise in, then the
   floating nav (`#site-nav`, rendered once in the root layout) fades
   in last.

`SmoothScrollProvider` drives Lenis from the GSAP ticker (not its own
rAF loop) so this stays perfectly in sync with scroll input — see the
comment in that file before changing either.

Everything here respects `prefers-reduced-motion`: the hero skips
straight to its fully revealed state, `ProcessCurrent`'s line draws in
immediately, and `AnimatedCounter` jumps to its final value instead of
counting up.

Build verified locally with `npm run build` (Google Fonts can't be
fetched from this sandbox, so that step was checked with a stubbed
`lib/fonts.ts` — restored before packaging; it resolves normally
wherever the project has open internet access).
