# Product Requirements Document (PRD)
### Personal Portfolio Website — Durotimi Ogunbameru

**Author:** Durotimi Ogunbameru
**Last updated:** July 21, 2026
**Status:** Draft v1.1
**Live host:** Vercel (connected to the GitHub repo `durotimiogunbameru-hue/my-portfolio`)
**Source repo:** https://github.com/durotimiogunbameru-hue/my-portfolio

---

## 1. Overview

A fast, eye-catching, and professional single-page portfolio website that positions
Durotimi Ogunbameru as a standout **Industrial Engineering** candidate for internships
and co-ops (target: Summer 2027, with interest in operations, process optimization, and
data center / infrastructure projects).

The site should feel modern and polished on first impression, communicate value within
5 seconds, and make it effortless for a recruiter to understand the candidate, see proof
of skill, and get in touch or download a résumé.

---

## 2. Goals & Success Metrics

### Primary goals
1. **Land interviews** — convert recruiter visits into contact/résumé downloads.
2. **Communicate competence fast** — clear value proposition above the fold.
3. **Look professional & memorable** — design quality that signals attention to detail.

### Success metrics
| Metric | Target |
|---|---|
| Time to first meaningful paint | < 1.5s |
| Lighthouse Performance / Accessibility / Best Practices / SEO | ≥ 95 each |
| Mobile responsive | 100% (320px → 1920px) |
| Résumé download / contact click-through | Primary conversion event |
| Bounce feel ("did I understand who this is in 5s?") | Yes |

---

## 3. Target Audience

| Persona | Needs | What they look for |
|---|---|---|
| **Recruiter / Hiring Manager** | Quick scan, credibility, contact | Role fit, skills, résumé, availability |
| **Engineering Lead** | Depth, proof of ability | Projects, technical skills, measurable impact |
| **Networking contacts** | Who is this person | Bio, values, links (LinkedIn, GitHub) |

Primary persona: **Recruiter** (optimize the site for a 30-second skim).

---

## 4. Brand & Positioning

- **Value proposition:** "Industrial Engineering student turning process data into
  measurable operational improvements."
- **Tone:** Confident, clean, professional, approachable. Not flashy for its own sake.
- **Personality keywords:** precise, reliable, safety-minded, continuous-improvement.
- **Positioning line (hero):** e.g. *"Industrial Engineer focused on process
  optimization, workflow mapping, and data-driven decisions."*

---

## 5. Information Architecture

Single-page scroll with sticky navigation. Sections in order:

1. **Hero / Header**
2. **About**
3. **Skills**
4. **Experience**
5. **Projects** (optional but recommended)
6. **Education**
7. **Contact**
8. **Footer**

---

## 6. Feature Requirements (by section)

### 6.1 Navigation Bar
- Sticky top nav, condenses on scroll.
- Links: About · Skills · Experience · Projects · Contact.
- Prominent **"Résumé"** button (downloads PDF).
- Mobile: hamburger menu.

### 6.2 Hero Section  *(the "eye-catching" moment)*
- Full-viewport or near-full-height.
- Name **Durotimi Ogunbameru** as the focal point (large, bold).
- Subtitle: "Industrial Engineering Student · Texas Tech University".
- One-line value proposition (see §4).
- Primary CTA: **"Get in touch"**; secondary CTA: **"View résumé"**.
- Visual interest: animated gradient, subtle particle/mesh background, or a tasteful
  geometric motif (engineering/blueprint feel). Keep it lightweight.
- Social icons: LinkedIn, GitHub, Email.

### 6.3 About
- 2–3 short paragraphs. Draw from cover-letter themes:
  process optimization, data-driven decision-making, safety, continuous improvement.
- A professional headshot (optional; placeholder if none yet).
- Quick "facts" chips: Location (Richmond), Availability (Summer 2027),
  Focus (Operations / Process Improvement).

### 6.4 Skills
- Grouped, scannable. Suggested groups:
  - **Engineering & Process:** Process optimization, Workflow mapping, Bottleneck
    analysis, Safety audits, Facility walkthroughs, Continuous improvement.
  - **Analytical:** Data-driven decision-making, Technical problem-solving.
  - **Tools (to confirm/expand):** Excel, [CAD], [Minitab], [Lean/Six Sigma], [Python].
  - **Professional:** Customer service, Operations management, Teamwork, Communication.
- Present as tags/pills or a subtle skill grid. Avoid fake percentage bars.

### 6.5 Experience (timeline)
- **Industrial Engineering Intern — International Energy Services Limited (IESL)**
  - Shadowed senior engineers; participated in safety audits and facility walkthroughs.
  - Mapped workflow processes and identified operational bottlenecks.
- **Front Desk Representative — Staybridge Suites® Hotels**
  - Customer service and operations management in a fast-paced environment.
- Format: vertical timeline with role, org, dates, and 2–3 bullet achievements each.
- *Action item: add dates and any quantified results (%, time saved, $ impact).*

### 6.6 Projects  *(recommended — differentiates the site)*
- Card grid (image/icon, title, short description, tags, links).
- Even 2–3 academic or personal projects (e.g., a process-improvement case study,
  a workflow analysis, a data project) add strong credibility.
- *Action item: provide project details; use placeholders until then.*

### 6.7 Education
- **Texas Tech University** — B.S. Industrial Engineering (expected grad date TBD).
- Relevant coursework, honors, GPA (if strong), organizations (e.g., IISE).

### 6.8 Contact
- Simple, friendly CTA: "Let's connect."
- Email: ologunba@ttu.edu (mailto link).
- Links: LinkedIn, GitHub (durotimiogunbameru-hue).
- Optional contact form (needs a serverless handler — see §9 open questions).

### 6.9 Footer
- Copyright, quick links, "Back to top", built-with note.

---

## 7. Design Requirements

- **Aesthetic:** Modern, minimal, professional with one confident accent color.
- **Suggested palette:** Deep slate/navy base (`#0f172a` / `#1e293b`) with a bright
  accent (sky `#38bdf8` or indigo `#818cf8`) — matches the current starter page.
  Alternative: professional monochrome + a single engineering-orange accent.
- **Typography:** Clean sans-serif (e.g., Inter, Poppins, or system-ui). Strong type
  scale — large hero, clear hierarchy.
- **Layout:** Generous whitespace, max content width ~1100–1200px, 8px spacing grid.
- **Motion:** Subtle scroll-reveal animations, smooth anchor scrolling, hover states.
  Respect `prefers-reduced-motion`.
- **Dark/light:** Optional theme toggle (nice-to-have). Default dark hero reads well.
- **Imagery:** Consistent iconography (e.g., Lucide/Feather icons). Optimize all images.

---

## 8. Technical Requirements

- **Hosting:** **Vercel**, connected to the GitHub repo for automatic deploys.
  - Every push to `main` → production deploy; every branch/PR → a preview URL.
  - Zero-config for static sites and for framework builds (auto-detected).
  - Free tier is sufficient; global CDN + automatic HTTPS included.
- **Stack options:**
  - **Option A — Static HTML/CSS/JS (simplest, zero build):**
    Plain `index.html` + `styles.css` + `main.js`. Vercel serves it directly.
  - **Option B — Framework (recommended on Vercel): Next.js, Astro, or Vite/React.**
    Vercel builds and deploys automatically with no extra CI config. **Next.js** is
    Vercel's native framework and unlocks serverless API routes (useful for a
    working contact form) and image optimization out of the box.
- **Recommendation:** Either works well. If you want a **contact form that sends email**
  or plan to grow the site, go with **Next.js (Option B)** — Vercel makes it effortless.
  For a fast, ultra-simple v1, **Option A (static)** is perfectly fine and still deploys
  to Vercel in one click.
- **Deployment flow:** Import the GitHub repo into Vercel once; thereafter `git push`
  auto-deploys. No manual build/publish steps needed.
- **Responsive:** Mobile-first, tested 320px → 1920px.
- **Performance:** Inline critical CSS, lazy-load images, minimal JS, system fonts or
  a single self-hosted webfont.
- **Accessibility (WCAG AA):** Semantic HTML, alt text, keyboard nav, focus states,
  4.5:1 contrast, reduced-motion support.
- **SEO:** Title, meta description, Open Graph tags, favicon, `sitemap`, descriptive
  headings. Add a social share preview image.
- **Analytics (optional):** Vercel Web Analytics (privacy-friendly, one-line setup) or
  another cookieless tool.
- **Assets:** Résumé PDF committed to the repo for download.

---

## 9. Content Checklist (to gather from Durotimi)

- [ ] Professional headshot (optional)
- [ ] Résumé PDF (final version) for download
- [ ] LinkedIn profile URL
- [ ] Employment dates for IESL and Staybridge Suites
- [ ] Quantified achievements (metrics, %, time/cost saved)
- [ ] Expected graduation date + GPA (if sharing)
- [ ] 2–3 projects with descriptions and links
- [ ] Tools/software proficiency list (Excel, CAD, Minitab, Lean/Six Sigma, Python?)
- [ ] Any certifications (e.g., Lean Six Sigma, OSHA)
- [ ] Preferred availability wording (Summer 2027, location flexibility)

---

## 10. Open Questions / Decisions

1. **Contact form vs. mailto only?** On Vercel, a working form is easy via a serverless
   API route (Next.js) or a service like Formspree/Resend. Mailto is still the simplest.
2. **Static vs. framework?** Both deploy cleanly to Vercel — pick based on whether you
   want a contact form / future growth (Next.js) or maximum simplicity (static).
3. **Custom domain?** e.g., `durotimiogunbameru.com` — add it in Vercel's dashboard
   (free to connect; domain purchase separate). Improves professionalism.
4. **Theme toggle?** Nice-to-have; default dark hero is fine for v1.
5. **Projects section** — include now with placeholders, or defer until content ready?

---

## 11. Scope

### In scope (v1)
- Single-page responsive site with all sections §5.
- Vercel deployment (auto-deploy from the GitHub repo).
- Résumé download, contact links, social links.
- Polished, accessible, performant design.

### Out of scope (v1)
- Blog / CMS.
- Backend / database.
- User authentication.
- Multi-page routing.

---

## 12. Milestones

| Phase | Deliverable | 
|---|---|
| **M1 — Content** | Gather §9 checklist items |
| **M2 — Design** | Finalize palette, typography, layout direction |
| **M3 — Build** | Implement all sections, responsive, accessible |
| **M4 — Polish** | Animations, SEO, performance, cross-browser QA |
| **M5 — Launch** | Connect repo to Vercel, deploy, verify live, share link |
| **M6 — Optional** | Custom domain, analytics, contact form |

---

## 13. Definition of Done

- All sections implemented with real content.
- Lighthouse ≥ 95 across the board.
- Fully responsive and keyboard-accessible.
- Résumé downloads correctly; all links work.
- Live and verified at the Vercel deployment URL (and custom domain, if set).
- No console errors; validated HTML.
