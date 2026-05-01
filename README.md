# Maxx Engage — Agency Portfolio

Production-grade portfolio website for Maxx Engage, a 3-person Lagos-based web development studio.

**Stack:** Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion, Radix UI, next-themes.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` in the project root:

```env
# Required for the contact form to send emails (Resend)
# Get your key at https://resend.com
RESEND_API_KEY=re_your_key_here

# Production URL — used for sitemap, robots.txt, and OG metadata
NEXT_PUBLIC_SITE_URL=https://maxxengage.vercel.app
```

Without `RESEND_API_KEY`, submissions are logged to the console in development and return success.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import in Vercel dashboard
3. Add `RESEND_API_KEY` and `NEXT_PUBLIC_SITE_URL` to Vercel environment variables
4. Deploy — Vercel auto-detects Next.js

## Where to add real logos

Drop files into `public/logos/`:

- `maxx-engage-dark.png` — purple + white (shown on dark mode)
- `maxx-engage-light.png` — purple + black (shown on light mode)

These paths are already wired into `Header.tsx` and `Footer.tsx`.

## Where to add real project screenshots

1. Add images to `public/projects/[slug]/cover.jpg` (1600×900px, 16:9 ratio)
2. Add an `image` field to each project in `lib/data/projects.ts`
3. Replace the gradient placeholder div in `components/shared/ProjectCard.tsx` with `<Image src={project.image} fill alt={...} />`

## Add the OG image

Generate a 1200×630px PNG → `public/og-image.png`. Case study OG images are auto-generated via `/api/og`.

## Routes

| Path | Description |
| ---- | ----------- |
| `/` | Homepage — all sections |
| `/work` | Gallery with URL-persistent filters |
| `/work/[slug]` | Case study — Thesis Desk, Wearables, Fàdè, etc. |
| `/services` | Services + pricing |
| `/team` | Team overview |
| `/team/[id]` | Individual profile — tunde, olaoluwa, abass |
| `/contact` | Contact form |
| `/blog` | Blog index (placeholder) |
| `/press-kit` | Brand assets (hidden from robots) |
| `/api/contact` | Form handler with Resend + rate limiting |
| `/api/og` | Dynamic OG image generator |

## Features implemented

- Custom cursor with spring physics (desktop, `pointer: fine` only)
- Command palette (⌘K / Ctrl+K)
- Konami code easter egg (↑↑↓↓←→←→BA → purple confetti)
- Scroll progress bar
- Loading screen (first visit per session, `sessionStorage`)
- Dark/light toggle — dark default, `localStorage` persistent
- Contact form: Zod validation, rate limiting (1/IP/min), Resend integration
- Dynamic OG images for case studies (`@vercel/og`)
- Sitemap + robots.txt
- JSON-LD Organization schema
- Fully keyboard navigable + WCAG focus rings
- `prefers-reduced-motion` respected throughout
- Print stylesheet
- Press kit page (`/press-kit`)
