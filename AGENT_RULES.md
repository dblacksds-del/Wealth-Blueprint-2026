# MANDATORY WORKSPACE PROJECT RULES: WEALTH BLUEPRINT (EVERGREEN EDITION)

All agents, contributors, and automated workflows generating content or code in this repository MUST strictly follow and enforce the core pillars and evergreen architectural standards detailed below across every file created or updated.

---

## Pillar 1: Google AdSense "Low Value Content" Prevention

1. **Word Count & Depth Requirements**:
   - **Pillar Pages & Category Guides**: Must contain at least **1,200 to 1,500 words** of original, deeply practical, real-world editorial analysis. No shallow overviews or generic fluff.
   - **Calculators & Interactive Tools**: Never publish standalone tools or calculators without at least **800 words** of accompanying methodology, mathematical breakdowns, step-by-step usage workflows, and practical case studies positioned below the tool.

2. **Zero-Tolerance for Thin Content & Evergreen URLs**:
   - **No Placeholders**: Never leave "coming soon" placeholders, dummy text, stub sections, or dead/empty links (`#`).
   - **Evergreen Clean URLs**: Never embed static calendar years into file names or URLs (e.g., use `/ai-dropshipping-guide.html` rather than `/ai-dropshipping-guide-2026.html`). If legacy year URLs exist, maintain lightweight canonical redirects.
   - **No Thin Archives**: Tag and category index pages must contain descriptive contextual introductions (at least 150-250 words) and robust curation—never empty or single-item thin lists.

3. **Mandatory E-E-A-T Author Identity Box (Dynamic Auto-Updating)**:
   - Every article, guide, and pillar page must feature the verified author bio box with auto-updating date:
   ```html
   <div class="author-eeat-box">
     <div class="author-avatar-badge">DS</div>
     <div>
       <div style="font-weight: 700; color: var(--text-primary); font-size: 1.05rem;">Written & Verified by Dhanushka Lakshan Senanayake</div>
       <div style="font-size: 0.875rem; color: var(--text-muted);">E-Commerce & Digital Venture Analyst — Last Updated: <span class="dynamic-updated-date">October 2026</span></div>
     </div>
   </div>
   ```
   - Provide clear editorial transparency, credentials, review date, and expert perspective on every page.

---

## Pillar 2: Generative Engine Optimization (100-Point GEO Citation Index)

Engineered for maximum citation and visibility across Google AI Overviews, ChatGPT Search, Perplexity, and Claude:

1. **Answer-First Extractability (+27% AI Citation Lift)**:
   - Every page and every major `<h2>` section **must** open with a bold, standalone **40-to-60-word direct-answer summary block**.
   - These blocks must directly answer the core user query before diving into detailed breakdowns.

2. **High Quantitative Fact Density (+40% AI Visibility Lift)**:
   - Embed at least **1 verifiable statistic, exact dollar figure, percentage, or industry pricing benchmark every 150 to 200 words**.
   - Ground all advice with empirical financial data, fee structures, and profit margin benchmarks.

3. **Primary Source Attribution & Structured Tables**:
   - Include **5 to 8 outbound citations** linking directly to authoritative primary sources (e.g., official government records, regulatory filings, financial institutions, primary research studies).
   - Include structured HTML/Markdown comparison tables on every page to summarize metrics, pricing, pros/cons, and alternatives.

4. **Conversational Question-Format Headings**:
   - Phrase all `<h2>` and `<h3>` subheadings as explicit, high-intent questions reflecting modern natural-language search and AI prompting behavior (e.g., *"How Much Capital Is Required to Launch an AI Dropshipping Venture?"* instead of *"Capital Requirements"*).

---

## Pillar 3: Tier 1 Technical SEO & Production Standards

1. **Production Domain & Canonical URLs**:
   All canonical links, sitemaps, robots.txt references, OpenGraph tags, and JSON-LD schemas must use the live production domain:
   `https://wealth-blueprint-2026.vercel.app`

2. **International Targeting (`hreflang`)**:
   Every HTML `<head>` must include complete hreflang alternate tags:
   ```html
   <link rel="alternate" hreflang="en-US" href="https://wealth-blueprint-2026.vercel.app/us/page.html" />
   <link rel="alternate" hreflang="en-GB" href="https://wealth-blueprint-2026.vercel.app/gb/page.html" />
   <link rel="alternate" hreflang="en-CA" href="https://wealth-blueprint-2026.vercel.app/ca/page.html" />
   <link rel="alternate" hreflang="en-AU" href="https://wealth-blueprint-2026.vercel.app/au/page.html" />
   <link rel="alternate" hreflang="x-default" href="https://wealth-blueprint-2026.vercel.app/page.html" />
   ```

3. **Multi-Currency Pricing Benchmarks**:
   All financial metrics, pricing comparisons, and cost tables must present localized benchmarks across the four major Tier-1 regions:
   - **$ USD** (United States)
   - **£ GBP** (United Kingdom)
   - **$ CAD** (Canada)
   - **$ AUD** (Australia)

4. **Structured JSON-LD Schema**:
   Every page head must embed valid, syntax-checked JSON-LD schema blocks corresponding to content type:
   - `Organization` & `WebSite`
   - `Article` (with author Dhanushka Lakshan Senanayake and datePublished/dateModified)
   - `FAQPage` (matching the question-format headings)
   - `HowTo` (for step-by-step guides)
   - `VideoObject` (where video assets or tutorials are embedded)

5. **Zero Cumulative Layout Shift (CLS = 0) for AdSense**:
   - All AdSense display ad wrapper elements must have predefined `min-height` and fixed aspect ratios in CSS to eliminate layout shifts when ad units load:
   ```css
   .ad-slot-leaderboard {
     min-height: 280px;
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .ad-slot-rectangle {
     min-height: 250px;
     min-width: 300px;
   }
   ```

---

## Pillar 4: Dynamic Auto-Updating Year & Edition Engine

To prevent content from appearing dated in future years (2027, 2028, and beyond):
1. **Dynamic Classes**:
   - `.dynamic-edition`: Automatically renders `2026–2027 Edition` during Q4 (Oct–Dec) and transitions to `2027 Edition` in January.
   - `.dynamic-year`: Automatically renders the current calendar year (`2026`, `2027`, etc.) in copyright footers and UI text.
   - `.dynamic-updated-date`: Automatically renders `Month Year` (e.g. `October 2026`) in author and review timestamps.
2. **Evergreen Branding**:
   - Site header brand is: `WealthBlueprint` with `<span class="logo-badge dynamic-edition">2026–2027 Edition</span>`.
