# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at localhost:4321
npm run build    # static build → dist/
npm run preview  # serve dist/ locally
```

Deploy is automatic: push to `main` → Vercel picks it up. No manual deploy step needed.

## Architecture

Single-page Astro static site (`output: 'static'`). One entry point: `src/pages/index.astro` imports every section component in order.

**Data → Component flow:**  
Content lives in `src/data/` as typed TypeScript exports. Components import and map over it — no props drilling through pages.

- `src/data/menu.ts` → `Menu.astro` + `MenuCard.astro`
- `src/data/events.ts` → `Events.astro`
- `src/data/eventTypes.ts` → `EventTypes.astro`

**Styles:**  
- `src/styles/global.css` — CSS custom properties (design tokens), global utilities (`.container`, `.btn`, `.glitch-text`, `.reveal`, `.float`, `.section-heading`). **Always use tokens, never hardcoded colors.**
- `src/styles/typography.css` — type scale
- Each `.astro` component has its own `<style>` block (scoped by Astro)

**Layout.astro** does three things: injects Google Fonts (Climate Crisis + Quicksand), sets meta, and runs the scroll-reveal IntersectionObserver that adds `.visible` to `.reveal` elements.

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

Decoration assets (PNG illustrations) live in `public/elements/`. Founder portraits are `public/dzejdzej.png` and `public/kasik.png`.

## Tone

Czech, informal, with humor. First-person plural ("rozjíždíme", "objíždíme"). No corporate language. Exaggeration is welcome.
