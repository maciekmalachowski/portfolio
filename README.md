<h1 align="center">Portfolio — Maciej Małachowski</h1>

<p align="center"><b>AI Engineer · Agentic AI Developer</b></p>
<p align="center">➡ <a href="https://maciekmalachowski.pl">maciekmalachowski.pl</a> ⬅</p>

A fast, static portfolio built with **Astro** and **Tailwind CSS v4**. Dark,
minimal, fully bilingual (English at `/`, Polish at `/pl/`).

## Stack

| Area | Choice |
| --- | --- |
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`), dark theme |
| i18n | Localized routes — `/` (EN) and `/pl/` (PL) |
| Fonts | Inter + JetBrains Mono |
| Icons | Inline SVG (no icon-font dependency) |

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # → dist/  (static, deploy anywhere)
npm run preview    # serve the production build locally
```

## Structure

```
public/            CV (PDF) + favicon — served as-is
src/
  layouts/Base.astro          <head>, SEO/OG, fonts, scroll-reveal
  components/                 Nav, Hero, Experience, Projects, Skills, About, Contact, Footer, …
  data/                       Content: site, experience, projects, skills, education (EN + PL)
  i18n/ui.ts                  Short UI strings (EN + PL)
  pages/index.astro           EN route
  pages/pl/index.astro        PL route
  styles/global.css           Design tokens + base styles
```

## Editing content

All content is data-driven — edit the files in `src/data/` and `src/i18n/ui.ts`;
both languages live side by side. No markup changes needed to update text,
projects, or experience.

## Deploy

`npm run build` emits a static `dist/` that works on any static host
(Vercel, Netlify, GitHub Pages, or plain file hosting).
