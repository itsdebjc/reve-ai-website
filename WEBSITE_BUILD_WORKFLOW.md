# Rev AI Website Build Workflow
**Date Started:** April 29, 2026  
**Status:** MVP Complete | In Production  
**Created with:** Claude Code

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Tools & Integration](#tools--integration)
4. [What You Downloaded From Lovable](#what-you-downloaded-from-lovable)
5. [Complete Workflow Executed](#complete-workflow-executed)
6. [SEO Optimization Details](#seo-optimization-details)
7. [GitHub to Netlify Automation](#github-to-netlify-automation)
8. [Social Profile Updates](#social-profile-updates)
9. [Content Documentation](#content-documentation)
10. [Current Status & Next Steps](#current-status--next-steps)
11. [Developer Handoff Brief](#developer-handoff-brief)

---

## Project Overview

**Project Name:** Rev AI Website  
**Purpose:** Marketing website for Reve AI (custom AI systems for founder-led service businesses)  
**Owner:** Deborah Collins  
**Location:** `/Users/deborahcollins/Desktop/Claude Cowork/Claude Cowork/reve-ai-website/`  
**Live URL:** reveai.ca (pending domain setup)  
**Repository:** https://github.com/itsdebjc/reve-ai-website

### What the Site Does
- Showcases AI system building services
- Provides case studies and learning resources
- Captures leads through Calendly booking links
- Builds thought leadership through blog content (TBD)

---

## Tech Stack

### Frontend
- **Framework:** React 18.3.1
- **Language:** TypeScript
- **Build Tool:** Vite (fast development server and production builds)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn UI (pre-built accessible components)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Routing:** React Router v6
- **State Management:** React Query (@tanstack/react-query)

### Pages & Structure
```
Home Page (/)
├── Hero Section
├── The Problem Section
├── Services Section (preview)
├── Case Studies Preview
├── Testimonials
├── FAQ
└── Footer with social links

Services Page (/services)
├── Service 01: The AI Build (detailed)
└── Service 02: AI Strategy Session (detailed)

Learning Page (/learning)
└── Blog/Resources Hub

Case Studies Page (/case-studies)
├── Case Study 01: Advisory Firm
├── Case Study 02: Boutique Agency
└── Case Study 03: B2B SaaS
```

### Components
All components located in `/src/components/site/`:
- `Nav.tsx` — Navigation bar
- `Hero.tsx` — Homepage hero
- `Problem.tsx` — Problem statement section
- `Services.tsx` — Services preview (2-column cards)
- `CaseStudies.tsx` — Case studies preview
- `Testimonial.tsx` — Client testimonial
- `FAQ.tsx` — Frequently asked questions accordion
- `Footer.tsx` — Footer with social links
- `TrustedLogos.tsx` — Client logo carousel
- `Doodles.tsx` — Decorative accent elements
- `HowWeWork.tsx` — Process section
- `Founder.tsx` — About/founder section
- `LeadMagnet.tsx` — Lead capture section
- `FinalCTA.tsx` — Final call-to-action

---

## Tools & Integration

### 1. **Lovable** (Initial Build)
- **Purpose:** Visual UI builder for React projects
- **What You Used It For:** Designed and scaffolded the initial website structure
- **Output:** Complete React + Tailwind + TypeScript project

### 2. **Claude Code** (Development & Maintenance)
- **Purpose:** AI-powered code editor and development assistant
- **What It Does:**
  - Reads and modifies code files
  - Manages Git operations
  - Implements features and optimizations
  - Creates documentation
  - Helps with debugging and improvements
- **Current Role:** Ongoing maintenance and improvements

### 3. **GitHub** (Version Control)
- **Repository:** https://github.com/itsdebjc/reve-ai-website
- **Username:** itsdebjc
- **Purpose:** 
  - Stores all code with version history
  - Enables rollback to previous versions
  - Serves as the source of truth for the codebase
  - Triggers automatic deployments
- **Authentication:** Personal Access Token (stored locally in git config)

### 4. **Netlify** (Hosting & Deployment)
- **Site Name:** idyllic-alfajores-a13662
- **Current Domain:** reveai.ca (test URL: reveai-ai-website.netlify.app)
- **Purpose:**
  - Hosts the live website
  - Auto-deploys on every GitHub push
  - Provides CDN for fast loading
  - Handles SSL/HTTPS automatically
- **Build Settings:**
  - Build Command: `npm run build`
  - Publish Directory: `dist`
  - Branch: main
- **CI/CD:** Enabled (automatic deployment on push)

### 5. **Squarespace** (Domain Management)
- **Current:** Domain registered here
- **Pending:** Nameserver update to point to Netlify OR manual DNS record update

---

## What You Downloaded From Lovable

When you exported the project from Lovable, you received:

### **Core Project Files**
```
reve-ai-website/
├── src/
│   ├── components/        # React components
│   │   └── site/         # Page-specific components
│   ├── pages/            # Full page components
│   ├── assets/           # Images and media
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles + design tokens
├── public/               # Static files
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── package.json          # Dependencies & scripts
├── vite.config.ts        # Vite build configuration
├── tailwind.config.ts    # Tailwind CSS setup
├── tsconfig.json         # TypeScript configuration
└── .eslintrc             # Code quality rules
```

### **What's Included**
✅ **React App Structure** — Full React 18 setup with TypeScript  
✅ **Tailwind CSS** — Pre-configured with custom design tokens  
✅ **shadcn UI Components** — Ready-to-use accessible components  
✅ **Design System** — Colors, typography, spacing defined in `index.css`  
✅ **All Pages & Components** — Home, Services, Learning, Case Studies  
✅ **Responsive Design** — Mobile, tablet, desktop layouts  
✅ **Development Setup** — Vite dev server configured and ready

### **What Was NOT Included (Added Later)**
- SEO optimization (meta tags, sitemap, robots.txt)
- GitHub integration
- Netlify deployment setup
- Copy documentation

---

## Complete Workflow Executed

### **Phase 1: SEO Optimization** (April 30, 2026)

**Goal:** Make the website discoverable by search engines and shareable on social media

#### Step 1: Audit Current SEO
- **Found:** 
  - ✅ Page titles already set (unique per page)
  - ✅ Meta descriptions already present (160 chars)
  - ✅ Open Graph tags in place
  - ✅ Twitter Card meta tags configured
- **Missing:**
  - ❌ Sitemap.xml
  - ❌ robots.txt sitemap reference
  - ❌ og:image meta tag

#### Step 2: Create Sitemap
**File:** `/public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://reve-ai.com/</loc>
    <lastmod>2026-04-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Plus 3 more pages: /services, /learning, /case-studies -->
</urlset>
```

**Purpose:** Tells Google which pages to crawl and index

#### Step 3: Update robots.txt
**File:** `/public/robots.txt`

Added sitemap reference:
```
Sitemap: https://reve-ai.com/sitemap.xml
```

**Purpose:** Tells search crawlers where to find all your pages

#### Step 4: Add Open Graph Image Tag
**File:** `index.html`

Added:
```html
<meta property="og:image" content="https://reve-ai.com/og-image.png" />
```

**Purpose:** When someone shares your site on social media, shows a preview image

#### Step 5: Document SEO Status
- Updated `CLAUDE.md` with SEO checklist
- Marked completed items with ✅
- Noted pending items (schema markup optional)

#### Step 6: Commit & Push
```bash
git add -A
git commit -m "Add SEO optimization: sitemap, robots.txt, updated Open Graph tags"
git push origin main
```

**Result:** All SEO changes now in GitHub and live on Netlify ✨

---

### **Phase 2: GitHub & Netlify Automation Setup** (April 30, 2026)

**Goal:** Eliminate manual file uploads. From now on, pushing to GitHub = automatic deployment.

#### Step 1: Create GitHub Personal Access Token
- Went to GitHub.com → Settings → Developer settings → Personal access tokens
- Created new token with `repo` permission
- Token securely stored in local git config

#### Step 2: Configure Git Authentication
```bash
git remote set-url origin "https://<token>@github.com/itsdebjc/reve-ai-website.git"
```
(Replace `<token>` with your personal access token)

#### Step 3: Test Push to GitHub
Pushed SEO commit successfully to `main` branch

#### Step 4: Connect Netlify to GitHub
1. Logged into Netlify
2. Opened Rev AI website project
3. Went to Site settings → Build & deploy → Deployment method
4. Clicked "Connect to Git" → Selected GitHub
5. Authorized Netlify to access GitHub
6. Selected repository: `itsdebjc/reve-ai-website`
7. Configured build settings:
   - **Branch:** main
   - **Build command:** npm run build
   - **Publish directory:** dist
8. Clicked "Deploy"

#### Result
✅ Every push to GitHub now automatically:
- Triggers a Netlify build
- Runs `npm run build`
- Deploys new files to live site
- Takes ~1-2 minutes total

**New Workflow:**
```
Local Changes → git push → GitHub → Netlify → Live Site (automatic!)
```

---

### **Phase 3: Social Profile Updates** (April 30, 2026)

**Goal:** Update footer social links to correct personal profiles

#### LinkedIn Update
- **File:** `/src/components/site/Footer.tsx`
- **Changed from:** https://www.linkedin.com/in/debbiecollins/
- **Changed to:** https://www.linkedin.com/in/debbiejcollins/
- **Committed, pushed, auto-deployed ✅**

#### TikTok Update
- **File:** `/src/components/site/Footer.tsx`
- **Changed from:** https://www.tiktok.com/@reve.ai
- **Changed to:** https://www.tiktok.com/@itsdigitaldeb
- **Committed, pushed, auto-deployed ✅**

---

### **Phase 4: Content Documentation** (April 30, 2026)

**Goal:** Create a reference document of all website copy for easy editing and sharing

#### Created: `Reve_AI_Copy_Deck.docx`

**Contents:**
1. **Title Page** — Document header with date
2. **Home Page** — All copy organized by section:
   - Meta description
   - Hero (headline, subheading, CTA)
   - The Problem section
   - Services section (both services detailed)
   - Case studies preview
   - Testimonial
   - FAQ (all questions & answers)
3. **Services Page** — Detailed service descriptions with what's included
4. **Learning Page** — Hero section copy
5. **Case Studies Page** — All 3 case studies with stats, challenges, outcomes

**Use Cases:**
- Share with designers or marketers
- Reference before making edits
- Update copy across multiple platforms
- Maintain version history of messaging

---

## SEO Optimization Details

### Meta Descriptions (Already in place)
Each page has a unique 160-character meta description:

**Home Page:**
> "Reve builds the right AI setup for your team so you can create stronger marketing, move faster, and use AI in a way that fits the work you already do."

**Services Page:**
> "A custom AI system built for your business, or a focused session to show you exactly where to start."

**Learning Page:**
> "The AI Signal: practical insights on how expert-led teams are using AI to make marketing stronger, faster, and more consistent."

**Case Studies Page:**
> "Real systems, real outcomes. See how expert-led teams use Reve to make AI a dependable part of their marketing workflow."

### Implementation
Each page component has this pattern:
```typescript
useEffect(() => {
  document.title = "Services — Reve AI";
  const desc = "Your meta description here...";
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", desc);
}, []);
```

### Open Graph Tags (Social Sharing)
In `index.html`:
```html
<meta property="og:title" content="Reve AI — Custom AI Systems for Your Business" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://reve-ai.com" />
<meta property="og:image" content="https://reve-ai.com/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
```

### Sitemap
- **File:** `/public/sitemap.xml`
- **Includes:** All 4 main pages with priority and change frequency
- **Next Step:** Submit to Google Search Console once domain is live

### robots.txt
- **File:** `/public/robots.txt`
- **Allows:** All crawlers (no pages blocked)
- **References:** Sitemap URL for Google

### Next: What Still Needs SEO Work
- ⏳ Schema markup (optional, for rich snippets)
- ⏳ Submit sitemap to Google Search Console (requires live domain)
- ⏳ Set up Google Analytics
- ⏳ Monitor search performance

---

## GitHub to Netlify Automation

### How It Works

```
You make code changes
        ↓
Run: git add, git commit, git push
        ↓
Changes push to GitHub (itsdebjc/reve-ai-website)
        ↓
GitHub webhook triggers Netlify
        ↓
Netlify runs: npm run build
        ↓
Netlify deploys dist/ folder to reveai.ca
        ↓
Live site updates automatically! ✨
```

### What This Means
- **No more manual uploads** — Everything is automatic
- **Version history** — Every change tracked in GitHub
- **Easy rollbacks** — Can revert to previous versions instantly
- **Deployment logs** — Can see exactly what happened if something breaks
- **Team collaboration** — Multiple people can work on the code safely

### The New Development Workflow

1. **Make changes locally** in Claude Code
2. **Test locally** with `npm run dev`
3. **Stage changes** with `git add`
4. **Commit with message** with `git commit -m "description"`
5. **Push to GitHub** with `git push origin main`
6. **Watch it deploy** on Netlify (automatic!)

---

## Social Profile Updates

### LinkedIn
- **Updated:** April 30, 2026
- **Old URL:** https://www.linkedin.com/in/debbiecollins/
- **New URL:** https://www.linkedin.com/in/debbiejcollins/
- **Location:** Footer component (`/src/components/site/Footer.tsx`, line 55)
- **Status:** ✅ Live on production

### TikTok
- **Updated:** April 30, 2026
- **Old URL:** https://www.tiktok.com/@reve.ai
- **New URL:** https://www.tiktok.com/@itsdigitaldeb
- **Location:** Footer component (`/src/components/site/Footer.tsx`, line 64)
- **Status:** ✅ Live on production

---

## Content Documentation

### Copy Deck Document
**File:** `Reve_AI_Copy_Deck.docx`  
**Created:** April 30, 2026  
**Location:** `/Users/deborahcollins/Desktop/Claude Cowork/Claude Cowork/reve-ai-website/`

**Structure:**
- Professional Word document
- Organized by page
- Includes all headlines, body copy, CTAs
- Meta descriptions clearly marked
- Section labels highlighted
- Easy to reference and share

**Use Cases:**
1. **Share with designers** — Reference for visual updates
2. **Share with copywriters** — Update messaging brand-wide
3. **Team reference** — Everyone knows what the website says
4. **Archive** — Keep version history of messaging
5. **Lead generation** — Extract copy for proposals, emails, etc.

**Pages Documented:**
- Home Page (hero, problem, services, testimonial, FAQ)
- Services Page (detailed service descriptions)
- Learning Page (blog hub)
- Case Studies Page (all 3 case studies)

---

## Current Status & Next Steps

### ✅ What's Complete
- [x] Website design and build (4 pages)
- [x] All components functional
- [x] Responsive design (mobile, tablet, desktop)
- [x] SEO optimization (meta, sitemap, robots.txt)
- [x] GitHub integration
- [x] Netlify auto-deployment
- [x] Social profile links updated
- [x] Copy documentation created

### ⏳ What's Pending

#### 1. **Domain Setup** (CRITICAL)
- **Status:** Squarespace has domain, Netlify has site
- **Action Needed:** Update Squarespace nameservers to point to Netlify
  - Option A: Use Netlify's nameservers
  - Option B: Update DNS records manually
- **When Done:** reveai.ca will point to live site on Netlify
- **Docs:** [Netlify Domain Setup](https://docs.netlify.com/domains-https/netlify-dns/)

#### 2. **Blog/CMS** (HIGH PRIORITY)
- **Need:** Content management system for blog posts
- **Current Blog URL:** reveai.ca/learning
- **Options:**
  - **Contentful** (Headless CMS) — Best for React integration
  - **Sanity** (Headless CMS) — Great DX, flexible
  - **Strapi** (Headless CMS) — Self-hosted option
  - **MDX** (Static) — Blog posts as React components
  - **Ghost** (Hosted) — Dedicated blogging platform
- **What Needs to Happen:**
  - Choose CMS platform
  - Set up content model for blog posts
  - Create blog post template component
  - Connect to React frontend
  - Set up blog post listing page
  - Enable SEO per post (title, meta, slug)

#### 3. **Analytics** (NICE TO HAVE)
- Set up Google Analytics
- Track page views, user behavior
- Monitor conversion on Calendly links

#### 4. **Email Capture** (NICE TO HAVE)
- Consider email list signup on blog
- Integration with email platform (Mailchimp, Klaviyo, etc.)

---

## Developer Handoff Brief

### Quick Summary
This is a **modern React website** built with Lovable, developed with Claude Code, version controlled in GitHub, and auto-deployed on Netlify.

### Repository Details
- **URL:** https://github.com/itsdebjc/reve-ai-website
- **Clone:** `git clone https://github.com/itsdebjc/reve-ai-website.git`
- **Main Branch:** All deployments come from `main`

### Local Development
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment
- **Automatic:** Every push to main branch → Netlify auto-deploys
- **Manual:** Not needed (fully automated)
- **Build Time:** ~1-2 minutes
- **Live URL:** reveai.ca (pending domain setup)

### Key Contacts
- **Site Owner:** Deborah Collins
- **Current Maintainer:** Claude Code (AI development assistant)
- **Repository Owner:** itsdebjc (GitHub username)

### What You'll Find
- **Code:** `/src` directory
- **Components:** `/src/components/site/`
- **Pages:** `/src/pages/`
- **Styling:** `index.css` (design tokens) + Tailwind CSS
- **Configuration:** `vite.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- **Documentation:** `CLAUDE.md` (design system), `WEBSITE_BUILD_WORKFLOW.md` (this file)
- **Copy Reference:** `Reve_AI_Copy_Deck.docx`

### Immediate Tasks for Developers
1. **Domain Setup** — Update Squarespace nameservers to Netlify
2. **CMS Selection** — Choose and implement blog platform
3. **Blog Integration** — Connect CMS to React frontend
4. **Blog SEO** — Ensure each post has meta, Open Graph, unique URL

### Questions?
- **Tech Questions:** Check `CLAUDE.md` in the project root
- **Copy Questions:** Reference `Reve_AI_Copy_Deck.docx`
- **Design System:** See `index.css` and `tailwind.config.ts`
- **Git Questions:** This file has detailed workflow info

---

## Remember

This workflow shows that you:
1. ✅ Started with a Lovable design
2. ✅ Set up professional version control (GitHub)
3. ✅ Automated deployments (Netlify)
4. ✅ Optimized for search engines (SEO)
5. ✅ Documented everything for your team

**This is the modern web development standard.** You're set up for success! 🚀

---

**Document created:** April 30, 2026  
**Last updated:** April 30, 2026  
**For questions:** Reference this document or check CLAUDE.md in the project root
