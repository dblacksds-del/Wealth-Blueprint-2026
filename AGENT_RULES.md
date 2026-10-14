# Wealth Blueprint - Permanent Editorial & Architecture Rules

All content, code, and pages generated in this repository must strictly adhere to these rules.

---

## 1. Plain Language (13-Year-Old Reading Level)
- Write in short, clear sentences that any beginner can easily understand.
- Explain any technical term in one simple line before using it.
- **BANNED JARGON**: Never use terms like:
  - "labor arbitrage"
  - "Net Venture Yield equation"
  - "algorithmic discovery commerce"
  - "GEO Citation Index"
  - "empirical data"
  - "tested cohorts"
  - "Wealth Blueprint Research Desk"
- Write in an encouraging, practical, and honest tone.

---

## 2. Zero Fabricated Evidence or Fake Claims
- **Never invent facts, fake studies, fake percentages, or fake quotes.**
- **No fake case studies**: Never include fabricated earnings stories (such as the "$0 to $3,840/month" story), invented repeat-purchase rates, or fabricated conversion numbers.
- **No deceptive citation links**: Never link to generic homepages (such as statista.com, emarketer.com, stripe.com, or bls.gov) to falsely imply they reported a specific number that was actually estimated.
- If an exact number is unknown or varies, state clearly: *"typical ranges vary widely"* or label example math clearly as *"Example only:"*.
- Be honest about challenges, real expenses, customer support requirements, and failure rates.

---

## 3. Honest Byline & Authority Box
Every guide and article must feature the exact verified honest byline:
```html
<div class="author-eeat-box">
  <div class="author-avatar-badge">DS</div>
  <div>
    <div style="font-weight: 700; color: var(--text-primary); font-size: 1rem;">Written by Dhanushka Lakshan Senanayake, with AI assistance.</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">Reviewed <span class="dynamic-updated-date">October 2026</span></div>
  </div>
</div>
```
- Never use inflated titles like "E-Commerce & Digital Venture Analyst".

---

## 4. No Income Promises or Misleading Headlines
- Never use words like **"guaranteed"**, **"proven"**, **"verified"**, or **"free business"** in page titles, headlines, or callouts.
- Always include realistic, cautious expectations:
  > "Most people earn little at first. Results depend on your effort, skill, and luck. There are no guaranteed incomes or overnight shortcuts."
- When discussing costs, account for realistic items like samples, domain registration, software tools, return rates, and advertising budgets.

---

## 5. Evergreen Architecture
- **Evergreen Clean URLs**: Never embed calendar years in filenames or URLs (use `/ai-dropshipping-guide.html` instead of `/ai-dropshipping-guide-2026.html`).
- **Dynamic Year & Date Classes**:
  - `.dynamic-edition`: Displays the current edition (e.g., `2026–2027 Edition` in Q4, `2027 Edition` in Q1–Q3).
  - `.dynamic-year`: Displays the current calendar year in copyright footers.
  - `.dynamic-updated-date`: Automatically formats current month and year (e.g., `October 2026`).

---

## 6. Clean Technical SEO & Hidden Ad Slots
- **Headings & Meta**: Exactly one `<h1>` per page. Unique `<title>` (under 60 characters) and `<meta name="description">` (under 155 characters).
- **No hreflang Tags**: Remove all `hreflang` tags. Write in clear neutral English for US, UK, and Canada, using USD ($) for standard pricing examples.
- **Search Console Verification**: Keep `<meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_STRING">` **ONLY** on `index.html` with an explicit HTML comment. Remove it from all other pages.
- **Zero-Height Hidden Ad Slots**:
  - Remove all visible placeholder boxes (such as "AdSense Responsive Leaderboard" or "AdSense Rectangle") and CSS `min-height` placeholders.
  - Replace them with completely invisible, zero-height HTML comments/containers:
    ```html
    <!-- PASTE ADSENSE AD UNIT CODE HERE -->
    ```
  - Display nothing on screen until real AdSense unit code is pasted.
- **Production Domain**: Canonical URLs and sitemap URLs must always use `https://wealth-blueprint-2026.vercel.app`.
