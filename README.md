markdown_content = """# Hatch House | High-Performance Co-Working Landing Page

A production-grade, enterprise-secured landing page built for **Hatch House**. This project was engineered to prove that for static-first ventures, choosing the right architecture is superior to simply writing "good" code.

## 🚀 Performance Metrics
Validated by WebPageTest & Lighthouse:
* **LCP (Largest Contentful Paint):** 0.672s
* **TTFB (Time to First Byte):** Near-zero via Vercel Edge Network
* **TBT (Total Blocking Time):** 0ms
* **Security Grade:** A (Mozilla Observatory / HSTS / CSP)
* **Page Weight:** 484kb (Lean, optimized assets)

## 🛠 Architectural Decisions

### 1. The Framework: Astro JS
While my default is often React/Next.js, I opted for **Astro** for this project. 
* **Why:** For a landing page, shipping a massive React bundle is unnecessary overhead. Astro’s "Islands Architecture" allowed me to ship **zero client-side JavaScript** by default, only hydrating interactive elements where strictly necessary.

### 2. Infrastructure: Vercel Edge Network
Traditional shared hosting was migrated to **Vercel’s Global CDN**.
* **Why:** By deploying to the Edge, the site is physically closer to the user. This reduced latency significantly, ensuring the site feels instantaneous regardless of the user's global location.

### 3. Backend: Decoupled Lead-Gen
I implemented a serverless lead-generation system using **Astro Actions** and **Vercel Serverless Functions**.
* **Why:** This allows for a 100% static frontend with a "pay-as-you-go" backend.
* **Cost Efficiency:** Integrated **Resend** for transactional emails, resulting in **$0/mo infrastructure costs** for the client while maintaining the ability to scale to thousands of leads.

## 🔒 Security Hardening
Performance is irrelevant without security. The production environment is hardened with:
* **Content Security Policy (CSP):** Mitigates XSS by strictly defining trusted content sources.
* **HSTS:** Forces secure HTTPS connections.
* **Clickjacking Protection:** Enforced `SAMEORIGIN` framing protection and `X-Content-Type-Options: nosniff`.

## 📦 Tech Stack
* **Frontend:** Astro, Tailwind CSS, TypeScript
* **Serverless:** Vercel Functions, Astro Actions
* **Email:** Resend
* **Deployment:** Vercel Edge Network

## ⚡ Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
