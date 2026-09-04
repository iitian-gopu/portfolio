# Gopal Jaiswal — Portfolio

Personal portfolio of **Gopal Jaiswal** — Software Engineer @ Goldman Sachs, IIT (BHU) Varanasi '23.

Built with Next.js 16 (App Router), React 19 and TypeScript. No UI framework, no CMS — one data file drives the whole site.

## Features

- **Dark / light mode** — follows the system by default, toggle in the nav, remembered across visits, no flash on load
- **Recruiter-first hero** — current company, college and year in the first line; resume button always visible
- Rotating role headline, animated gradient orbs, cursor spotlight, scroll-progress bar
- Bento-style *About* grid with a live IST clock and a "Now" card
- Hero video: AI-generated clip of me at my desk (photo → InstantIR restore → FLUX Kontext scene → Wan 2.2 video), ping-pong looped under a soft mask
- Project cards with optional screenshot + **Watch demo** video modal; gradient artwork fallback
- Timeline for experience, education strip, grouped skill chips
- One-click *copy email* in the contact section
- SEO: Open Graph image generated at build time, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`
- Fully responsive, keyboard accessible, respects `prefers-reduced-motion`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalise

Everything lives in **`data/site.ts`** — name, links, stats, projects, experience, education, skills and the marquee. Search for `TODO` to find the items that still need your input:

| Item | Where |
| --- | --- |
| Resume | Drop `resume.pdf` into `public/` (or set `resumeUrl: ""` to hide the button) |
