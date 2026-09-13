# Veridian Care Home

Marketing website for Veridian Care Home, a senior care home in Edmonton, Alberta. Built as a warm, premium-feeling informational site: Home, Mission, and Vision pages today, with Services, About, and Contact planned.

## Tech Stack

- **React 19** — functional components and hooks only, no class components
- **Vite** — build tool and dev server
- **React Router** — page routing, with animated route transitions
- **Tailwind CSS v4** — styling, theme tokens defined in `src/index.css`
- **Framer Motion** — scroll reveals, hover/tilt interactions, page transitions

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (defaults to `http://localhost:5173`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Type-check and produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally, to sanity-check it before deploying |
| `npm run lint` | Run Oxlint against the codebase |

## Project Structure

```
src/
  assets/photos/     Photo files, imported by src/data/photos.js
  components/        Shared UI pieces (Button, PhotoFrame, Reveal, TiltCard, AccordionItem,
                     CookieNotice, ObfuscatedEmail, icons)
  data/photos.js      Single source of truth for every image on the site
  lib/consent.js      Tiny localStorage consent store + useConsent hook (gates the map embed)
  layouts/MainLayout.jsx   Header, nav, and footer shared across all pages
  pages/              One file per route (Home, Mission, Vision, Privacy, NotFound)
  index.css           Design tokens (colors, fonts) and global styles
public/
  favicon.svg, icons.svg, og-image.jpg
  apple-touch-icon.svg   iOS home-screen icon (full-bleed sage square)
  site.webmanifest    PWA / add-to-home-screen metadata
  robots.txt, sitemap.xml   Search-engine directives (list new routes in sitemap.xml)
index.html             Document head: fonts, meta tags, structured data
vercel.json            www -> apex redirect + SPA rewrite (deploys on Vercel)
```

## Domain & hosting (Vercel)

- **Canonical domain is the apex `https://veridiancarehome.inc/`** (no `www`). It is
  hard-coded in `index.html` (canonical, Open Graph, JSON-LD), `sitemap.xml`, and `robots.txt`.
- In the Vercel project's **Domains** settings, add both `veridiancarehome.inc` and
  `www.veridiancarehome.inc`, and set `www` to redirect to the apex. `vercel.json` also
  carries a host-based 301 as a backstop.
- `vercel.json` `rewrites` map each known React Router route (`/mission`, `/vision`,
  `/privacy`) to `index.html` so a hard refresh or deep link survives. It's an explicit
  list rather than a catch-all so an unknown path (typo, dead link) gets a real HTTP 404
  from Vercel instead of a "soft 404" (a 200 with the homepage's content), which search
  engines penalize. Add new routes to this list as they're added to `App.jsx`.

## Privacy & cookies

The site sets only one essential `localStorage` value (the map-consent choice) and runs no
analytics. The Google Maps footer embed is withheld until the visitor opts in via the
`CookieNotice` banner. `/privacy` holds a plain-language draft policy that **must be reviewed
by legal counsel** before launch, especially if a contact form is added.

## Design System

- **Color palette** — `sage` (primary green), `clay` (warm terracotta accent), a restrained `gold` accent used only for hairline details (underlines, small icons, never fills), and `cream`/`surface` neutrals. All defined as CSS variables in `src/index.css`, so Tailwind classes like `bg-sage-700` or `text-gold-400` work automatically.
- **Typography** — Inter for body text, Cormorant Garamond for headings, loaded via Google Fonts in `index.html`.

## Before This Goes Live

A few things are intentionally left as drafts and need review before launch:

- **Photos** — every image in `src/assets/photos/` is a stock placeholder (see the comment banner at the top of `src/data/photos.js` for exactly what each one should be replaced with). Overwrite the file in place, keeping the same filename, and no code changes are needed.
- **Social preview image** — `public/og-image.jpg` is also a placeholder; swap it for a real, polished image before sharing links publicly.
- **Domain** — the production domain `https://veridiancarehome.inc/` is wired through
  `index.html`, `sitemap.xml`, `robots.txt`, and `vercel.json`. Add both domains in Vercel
  and point `www` at the apex.
- **Apple touch icon** — `public/apple-touch-icon.svg` is an SVG. iOS home-screen icons are
  most reliable as a 180x180 PNG; export one from the SVG and swap the `<link>` if needed.
- **Privacy policy** — `/privacy` is a plain-language draft and needs legal review.
- **Copy** — all written copy (hero text, mission/vision statements, FAQ answers, the pull quote in the "Our Promise" section) is draft content and should be reviewed and edited in your own words before publishing.
- **Contact details** — phone, email, and address appear in `src/layouts/MainLayout.jsx` (footer) and `src/pages/Home.jsx` (FAQ). Double check both are current.
