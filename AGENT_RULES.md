# MANDATORY WORKSPACE PROJECT RULES: WEALTH BLUEPRINT 2026

All agents, contributors, and automated workflows generating content or code in this repository MUST strictly follow and enforce the three core pillars detailed below across every file created or updated.

---

## Pillar 1: Google AdSense 2026 "Low Value Content" Prevention

1. **Word Count & Depth Requirements**:
   - **Pillar Pages & Category Guides**: Must contain at least **1,200 to 1,500 words** of original, deeply practical, real-world editorial analysis. No shallow overviews or generic fluff.
   - **Calculators & Interactive Tools**: Never publish standalone tools or calculators without at least **800 words** of accompanying methodology, mathematical breakdowns, step-by-step usage workflows, and practical case studies positioned below the tool.

2. **Zero-Tolerance for Thin Content**:
   - **No Placeholders**: Never leave "coming soon" placeholders, dummy text, stub sections, or dead/empty links (`#`).
   - **No Thin Archives**: Tag and category index pages must contain descriptive contextual introductions (at least 150-250 words) and robust curation—never empty or single-item thin lists.

3. **Mandatory E-E-A-T Author Identity Box**:
   - Every article, guide, and pillar page must feature the verified author bio box:
   > **Written & Verified by Dhanushka Lakshan Senanayake, E-Commerce & Digital Venture Analyst — Last Updated: October 2026**
   - Provide clear editorial transparency, credentials, review date, and expert perspective on every page.

---

## Pillar 2: 2026 Generative Engine Optimization (100-Point GEO Citation Index)

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
   - Phrase all `<h2>` and `<h3>` subheadings as explicit, high-intent questions reflecting modern natural-language search and AI prompting behavior (e.g., *"How Much Capital Is Required to Launch a Wealth Blueprint Venture in 2026?"* instead of *"Capital Requirements"*).

---

## Pillar 3: Tier 1 Technical SEO (US, UK, Canada, Australia)

1. **International Targeting (`hreflang`)**:
   Every HTML `<head>` must include complete hreflang alternate tags:
   ```html
   <link rel="alternate" hreflang="en-US" href="https://example.com/us/page/" />
   <link rel="alternate" hreflang="en-GB" href="https://example.com/gb/page/" />
   <link rel="alternate" hreflang="en-CA" href="https://example.com/ca/page/" />
   <link rel="alternate" hreflang="en-AU" href="https://example.com/au/page/" />
   <link rel="alternate" hreflang="x-default" href="https://example.com/page/" />
   ```

2. **Multi-Currency Pricing Benchmarks**:
   All financial metrics, pricing comparisons, and cost tables must present localized benchmarks across the four major Tier-1 regions:
   - **$ USD** (United States)
   - **£ GBP** (United Kingdom)
   - **$ CAD** (Canada)
   - **$ AUD** (Australia)

3. **Structured JSON-LD Schema**:
   Every page head must embed valid, syntax-checked JSON-LD schema blocks corresponding to content type:
   - `Organization` & `WebSite`
   - `Article` (with author Dhanushka Lakshan Senanayake and datePublished/dateModified)
   - `FAQPage` (matching the question-format headings)
   - `HowTo` (for step-by-step guides)
   - `VideoObject` (where video assets or tutorials are embedded)

4. **Zero Cumulative Layout Shift (CLS = 0) for AdSense**:
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
