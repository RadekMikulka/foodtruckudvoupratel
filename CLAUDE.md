# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at localhost:4321
npm run build    # static build → dist/
npm run preview  # serve dist/ locally
```

Deploy is automatic: push to `main` → Vercel picks it up. No manual deploy step needed.

There is no test suite and no `npm test` script. `playwright` is a devDependency used only for ad hoc, throwaway screenshot scripts (start `npm run dev`, drive a headless browser, screenshot, delete the script) to visually verify changes — not for automated tests.

## Architecture

Single-page Astro static site (`output: 'static'`). One entry point: `src/pages/index.astro` renders every section component in a fixed order: `Nav` → `Hero` → `About` → `Menu` → `Events` → `EventTypes` → `Contact` (which also contains the `<footer>`).

**Data → Component flow:**  
Content lives in `src/data/` as typed TypeScript exports. Components import and map over it — no props drilling through pages.

- `src/data/menu.ts` → `Menu.astro` + `MenuCard.astro`
- `src/data/events.ts` → `Events.astro`
- `src/data/eventTypes.ts` → `EventTypes.astro`

`Nav`, `Hero`, `About`, and `Contact` have no backing data file — their copy (founder bios, contact info, footer text) is hardcoded directly in the component markup. Edit the `.astro` file directly for those.

**Styles:**  
- `src/styles/global.css` — CSS custom properties (design tokens), global utilities (`.container`, `.btn`, `.glitch-text`, `.reveal`, `.float`, `.section-heading`). **Always use tokens, never hardcoded colors.**
- `src/styles/typography.css` — type scale
- Each `.astro` component has its own `<style>` block (scoped by Astro)

**Layout.astro** handles all page-level concerns: Google Fonts (Climate Crisis + Quicksand), full SEO head (canonical link, Open Graph, Twitter Card, `FoodEstablishment` JSON-LD structured data), favicon/apple-touch-icon links, and the scroll-reveal IntersectionObserver that adds `.visible` to `.reveal` elements. Canonical/OG URLs are built from `Astro.site`, which is set in `astro.config.mjs` (`site: 'https://www.udvoupratel.fun'`) — don't remove that or the URLs break.

## Key patterns

**2-line headings** — Menu items, events, and event types all have `nameLine1`/`nameLine2` fields in their data types. Rendered as two `<span>` blocks inside a flex-column container. When adding new items, always split the name.

**Glitch text** — Use `<span class="glitch-text" data-text="TEXT">TEXT</span>`. The `data-text` attribute must match the inner text exactly; it drives the `::before`/`::after` pseudo-elements.

**Scroll reveal** — Add `class="reveal"` to any element. Use `style="--delay: 0.1s"` for staggered reveals within a list. No JS needed in the component.

**Decorative floats** — `class="float"` (4s) or `class="float-slow"` (6s). Both respect `prefers-reduced-motion`.

**Buttons** — Always use `.btn`. The variant classes `.btn-pink` and `.btn-teal` are aliases (same visual) kept for semantic clarity.

**Menu grid layout** — Burritos and Nachos use `.menu-grid--2plus1` (two cards side by side, third full-width). Quesadillas uses the default auto-fit grid. Set via class in `Menu.astro` based on `category.id`.

## Design system

Fonts: **Climate Crisis** (headings, uppercase) · **Quicksand** (body, 400–700)

| Token | Value | Use |
|---|---|---|
| `--color-teal` | `#00B4B4` | Primary accent, borders, hover |
| `--color-pink` | `#FF2D7E` | CTA buttons, emphasis |
| `--color-cream` | `#F5F0DC` | Heading text, light surfaces |
| `--color-dark` | `#1A0A2E` | Backgrounds (deep purple-black) |
| `--color-yellow` | `#FFD93D` | Illustrations, decorative |
| `--color-orange` | `#FF6B35` | Eyebrow labels, secondary accent |

Heading `text-shadow` for chromatic aberration: `1px -1px 0 var(--color-teal), -1px 1px 0 var(--color-pink)`.

Decoration assets (PNG illustrations) live in `public/elements/`. Team portraits are `public/team-{name}.webp`, referenced from `About.astro`. Two tiers: the 4 core founders (`kasik`, `ferenc`, `martas`, `misa`) get a full `.about-founder` medailonek (role, name, title, bio) — each has a `.about-founder--{name}` modifier class mapping them to an accent color (teal/pink/orange/yellow), follow that pattern if the founder lineup changes. Everyone else is an "All Stars Team" `.about-friend` — photo + name only, no bio, name always pink, listed alphabetically by first name.

## SEO & social assets

`public/favicon.png`, `public/apple-touch-icon.png`, and `public/og-image.png` are all generated from `public/logo.png`, not hand-drawn — there's no build step for this. If the logo changes, regenerate all three (Pillow/PIL one-liners work fine: resize for favicon/apple-touch-icon, composite onto the `--color-dark` background with the site's radial teal/pink glow for the OG image at 1200×630). `public/robots.txt` and `public/sitemap.xml` are static, hand-written files (single-page site, so the sitemap lists just the one URL) — no `@astrojs/sitemap` integration.

## Team photo pipeline

Team portrait source images (dropped in ad hoc, not committed — see `.gitignore`) come in at inconsistent canvas sizes, with the illustrated badge itself sometimes physically smaller within its own canvas (not just extra padding — one source image genuinely had a smaller badge), and sometimes with a white background instead of transparency. Before dropping a new one into `public/`: flood-fill the white background to transparent seeding from every pixel along all four edges, not just the 4 corners (`PIL.ImageDraw.floodfill`, thresh ~18) — the badge's scalloped border can touch the canvas edge between the corners while the corners themselves are already transparent, so corner-only seeding misses those white gaps. Crop to the badge's alpha bounding box, then scale every portrait so the *badge content* is the same width (not just the canvas — canvas-only normalization was tried once and still produced a visibly smaller badge for one team member), then pad to a square canvas and export as `.webp`. Watch for isolated white leaks fully enclosed by the badge artwork (e.g. between an arm and the border) that no edge-seeded flood fill can reach — check big AI-art photos for these individually (component sizes/aspect ratios via `scipy.ndimage.label`, excluding small near-square blobs which are usually legitimate shirt buttons) and clear them with a targeted color-threshold pass.

## Tone

Czech, informal, with humor. First-person plural ("rozjíždíme", "objíždíme"). No corporate language. Exaggeration is welcome.
