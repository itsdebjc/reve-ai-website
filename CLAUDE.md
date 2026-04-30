# Reve AI Website — Claude Code Guide

## Quick Start

```bash
cd /Users/deborahcollins/Desktop/Claude\ Cowork/reve-ai-website
npm run dev
```

Local dev server runs at `http://localhost:5173` (or next available port if 5173 is in use — check terminal for exact URL).

## Project Structure

**Tech Stack:** React 18.3.1 + TypeScript + Vite + Tailwind CSS + shadcn UI components

### Key Pages
- `/src/pages/Services.tsx` — Services detail page (full-width service cards with left borders, badges, grids)
- `/src/pages/Learning.tsx` — Learning/resources page
- `/src/pages/CaseStudies.tsx` — Case studies page

### Key Homepage Components (in `/src/components/site/`)
- `Hero.tsx` — Hero section with hero image
- `Services.tsx` — Homepage services section (two-column card layout)
- `HowWeWork.tsx` — "How We Work" section
- `Founder.tsx` — Founder/about section
- `Testimonial.tsx` — Client testimonial
- `FAQ.tsx` — FAQ accordion (collapsible questions)
- `Footer.tsx` — Footer with "your thinking → your system → your team"
- `TrustedLogos.tsx` — Client logos in a horizontal line
- `CaseStudies.tsx` — Case study cards
- `Doodles.tsx` — Decorative doodle accent components
- `Nav.tsx` — Navigation bar
- `FinalCTA.tsx` — Final call-to-action section

## Design System

### Colors (HSL variables in `/src/index.css`)
- **Background:** `0 0% 4%` (near-black)
- **Foreground:** `30 25% 96%` (warm off-white)
- **Primary (Dusty Pink):** `350 60% 82%`
- **Surface:** `0 0% 6%` (elevated)
- **Dark Warm:** `340 18% 8%` (very dark warm near-black)
- **Hairline (dividers):** `30 10% 22%`

All colors use Tailwind's HSL variable system — update in `/src/index.css` root CSS variables.

### Typography
- **Sans:** Inter (body text)
- **Serif:** Cormorant Garamond (display headings)
- **Mono:** JetBrains Mono (labels, code)

### Component Classes (in `/src/index.css`)
- `.label-eyebrow` — Small uppercase label with primary color
- `.label-mono` — Monospace label
- `.display-serif` — Large serif heading
- `.display-italic` — Italic serif accent text
- `.hairline` — Thin divider line

## SEO Optimization

### Meta Tags (Title & Description)
Every page should have a unique title and meta description. Example from Services page:

```typescript
useEffect(() => {
  document.title = "Services — Reve AI";
  const desc = "A custom AI system built for your business, or a focused session to show you exactly where to start.";
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", desc);
}, []);
```

**Pattern:** Add this `useEffect` to every page file (`/src/pages/*.tsx`)

### Open Graph Tags (Social Sharing)
Add to `index.html` `<head>` for social media previews:

```html
<meta property="og:title" content="Reve AI — Custom AI Systems for Your Business">
<meta property="og:description" content="Build AI systems tailored to your business with expert guidance and team training.">
<meta property="og:image" content="/reve-ai-logo-light.png">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Reve AI">
<meta name="twitter:description" content="Custom AI Systems for Your Business">
```

### Sitemap (for Search Engines)
Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/services</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/case-studies</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/learning</loc>
    <lastmod>2026-04-29</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Robots.txt (Crawler Control)
Create `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### SEO Checklist
- ✅ Page titles (unique per page)
- ✅ Meta descriptions (160 chars max, all pages have them)
- ✅ Open Graph tags (added to index.html for social sharing)
- ✅ Sitemap (created `/public/sitemap.xml`)
- ✅ Robots.txt (updated `/public/robots.txt` with sitemap reference)
- ✅ Mobile responsive (built-in)
- ✅ Fast loading (Vite optimized)
- ⏳ Schema markup (optional, for rich snippets)

**Completed (2026-04-30):**
- Updated `index.html` Open Graph URL and added og:image reference
- Created `public/sitemap.xml` with all 4 main pages
- Updated `public/robots.txt` with sitemap URL

**Next Steps (optional enhancements):**
1. Once live domain is active, update Open Graph URL in `index.html` from placeholder to actual domain
2. Add schema markup for rich snippets (optional but improves search appearance)
3. Submit sitemap to Google Search Console once site is live

---

## Common Changes

### Updating Services Page (`/src/pages/Services.tsx`)
Current layout:
- Two main service sections (SERVICE 01: The AI Build, SERVICE 02: AI Strategy Session)
- Each has a **left border** (`border-l-4 border-primary`)
- **Service badge** at top (e.g., "SERVICE 01 · CUSTOM BUILD · TEAM TRAINING")
- **Large faded number** positioned absolutely on the right (`text-7xl font-bold text-foreground/10`)
- **"What's Included"** or **"You Leave With"** grid sections (2x2)
- **"Right For You If"** bullet list
- **CTA buttons** at the bottom

### Homepage Services Component (`/src/components/site/Services.tsx`)
Currently displays as **two-column card grid** with:
- Rounded borders with primary color
- Numbered sections (01, 02)
- Service description and italicized tagline
- Bullet points in a list
- "Learn More" / "Start Here" links to `/services` page

### Updating Logos (`/src/components/site/TrustedLogos.tsx`)
- Logo images stored in `/src/assets/`
- Current clients: Meira, Organika, Intuition, Ma Folie, LKA
- Meira and Ma Folie use `invert brightness-200` filter to appear white
- Others use `grayscale opacity-80` for muted appearance
- Logos displayed in a single horizontal line

### Updating Footer (`/src/components/site/Footer.tsx`)
- Main text: "your thinking → your system → your team"
- Currently sized at `text-xl md:text-2xl` (reduced from `text-3xl md:text-5xl`)
- Footer links, copyright, social icons below

## Important URLs

- **Calendly (Services CTA):** `https://calendly.com/deb-xjsk/callwithdeb`
- **LinkedIn:** `https://www.linkedin.com/in/debbiecollins/`
- **TikTok:** `https://www.tiktok.com/@reve.ai`

## Browser Caching

If changes don't appear:
1. **Hard refresh:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)
2. **Clear Vite cache:** `rm -rf node_modules/.vite`
3. **Restart dev server:** Stop with Ctrl+C, then `npm run dev` again

## Deployment

**Platform:** Netlify  
**Current Status:** Deployed (pending domain nameserver update from Squarespace)

**To deploy changes:**
```bash
# Changes are auto-deployed from git when pushed to main
# (if Netlify is connected to your GitHub repo)
```

**Custom Domain Setup:**
- Update Squarespace nameservers to point to Netlify
- OR update DNS records manually

## Project Notes

- **No git repository** — manual file edits only (no git history available)
- **Image assets:** Store in `/src/assets/` and import at top of component files
- **Responsive design:** Use `md:` breakpoint for tablet/desktop changes
- **Icons:** Using Lucide React (`lucide-react` package) — check their docs for available icons
- **Accordion component:** Already integrated (shadcn UI) — used for FAQ section

## Previous Changes Made

- Reverted homepage Services component back to two-column card layout (with rounded borders, not left-border design)
- Updated Services page with service badges
- Reduced footer text size for less "chunky" appearance
- Added HowWeWork background color (bg-dark-warm) — revert if needed
- Migrated logos and removed white background boxes
- Added custom dark-warm color to design system

---

**Last updated:** 2026-04-28  
**Created for:** Deborah Collins (Reve AI)
