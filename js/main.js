/**
 * Wealth Blueprint 2026 - Main Interactive JavaScript
 */

(function () {
  'use strict';

  // 1. Theme Toggle (Dark / Light Mode)
  const initTheme = () => {
    const savedTheme = localStorage.getItem('wb2026_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('wb2026_theme', newTheme);
        toggleBtns.forEach((b) => {
          b.innerHTML = newTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
        });
      });
    });
  };

  // 2. Mobile Nav Toggle
  const initMobileNav = () => {
    const navToggles = document.querySelectorAll('.mobile-nav-toggle');
    const navMenus = document.querySelectorAll('.nav-menu');

    navToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        navMenus.forEach((menu) => menu.classList.toggle('open'));
      });
    });
  };

  // 3. Business Model Quiz Data & Interactive Filtering
  const businessModels = [
    {
      id: 'dropshipping',
      title: 'AI Dropshipping',
      budget: 'low',
      budgetRange: '$1–$80/mo',
      hours: '20plus',
      hoursLabel: '15–25 hrs/wk',
      income: '5kplus',
      incomeLabel: '$3,000–$12,000/mo',
      conversion: '3.2%–5.0% Conversion Rate',
      aov: '$35–$59 US AOV',
      link: '/ai-dropshipping-guide-2026.html',
      description: 'Algorithmic product testing using TikTok Shop and automated Shopify fulfillment without holding physical inventory.'
    },
    {
      id: 'affiliate',
      title: 'Affiliate Marketing',
      budget: 'free',
      budgetRange: '$0 Free',
      hours: '10to20',
      hoursLabel: '10–20 hrs/wk',
      income: '2kto5k',
      incomeLabel: '$1,500–$7,500/mo',
      conversion: '15%–25% TikTok Shop Commission',
      aov: '40% Recurring SaaS Margins',
      link: '/affiliate-marketing.html',
      description: 'Monetize organic content via TikTok Shop creator links (driving 42% of US GMV) and high-ticket recurring B2B software.'
    },
    {
      id: 'pod',
      title: 'Print on Demand (POD)',
      budget: 'micro',
      budgetRange: '$0–$40/mo',
      hours: '10to20',
      hoursLabel: '8–15 hrs/wk',
      income: '2kto5k',
      incomeLabel: '$1,200–$5,000/mo',
      conversion: '$1.39B Womenswear Demand',
      aov: '30%–45% Net Margin',
      link: '/print-on-demand.html',
      description: 'Zero-inventory apparel and home decor products printed and dispatched automatically upon customer order.'
    },
    {
      id: 'freelancing',
      title: 'High-Value Freelancing',
      budget: 'free',
      budgetRange: '$0 Free',
      hours: 'under10',
      hoursLabel: '5–15 hrs/wk',
      income: '2kto5k',
      incomeLabel: '$2,000–$8,000/mo',
      conversion: '$45–$120/hr Arbitrage',
      aov: '85%+ Gross Profit',
      link: '/freelancing.html',
      description: 'B2B skill arbitrage in technical SEO auditing, short-form video editing, and AI prompt engineering.'
    },
    {
      id: 'digitalproducts',
      title: 'Selling Digital Products',
      budget: 'micro',
      budgetRange: '$0–$50/mo',
      hours: 'under10',
      hoursLabel: '4–10 hrs/wk',
      income: '5kplus',
      incomeLabel: '$2,500–$15,000/mo',
      conversion: '92% Net Profit Margin',
      aov: '2-Day Virtual Delivery SLA',
      link: '/digital-products.html',
      description: 'Create once, sell infinitely: Notion productivity hubs, financial spreadsheet models, and design assets.'
    },
    {
      id: 'facelessyoutube',
      title: 'Faceless YouTube Automation',
      budget: 'micro',
      budgetRange: '$0–$30/mo',
      hours: '10to20',
      hoursLabel: '10–18 hrs/wk',
      income: '5kplus',
      incomeLabel: '$3,000–$14,000/mo',
      conversion: '$8–$28 RPM Financial Niche',
      aov: '22.9% AI Overview Citations',
      link: '/faceless-youtube.html',
      description: 'Capturing YouTube video search volume and Google AI Overviews with AI-assisted scripting, voiceover, and stock footage.'
    },
    {
      id: 'nicheblogging',
      title: 'Niche Blogging & GEO Publishing',
      budget: 'micro',
      budgetRange: '$2.95–$15/mo',
      hours: '10to20',
      hoursLabel: '10–20 hrs/wk',
      income: '2kto5k',
      incomeLabel: '$1,500–$6,500/mo',
      conversion: '68% AdSense Rev Share',
      aov: '$30–$75 Mediavine RPM',
      link: '/niche-blogging.html',
      description: 'Authority editorial portals optimized for 2026 Generative Engine Optimization (GEO) and display monetization.'
    },
    {
      id: 'ugc',
      title: 'UGC & Social Media Management',
      budget: 'free',
      budgetRange: '$0 Free',
      hours: '10to20',
      hoursLabel: '10–15 hrs/wk',
      income: '2kto5k',
      incomeLabel: '$2,000–$6,000/mo',
      conversion: '$150–$450 Per Video Asset',
      aov: '171,000+ Small Brand Market',
      link: '/ugc-social-media.html',
      description: 'Producing authentic smartphone video creatives for brands running performance ads on TikTok and Meta.'
    },
    {
      id: 'courses',
      title: 'Online Tutoring & Courses',
      budget: 'micro',
      budgetRange: '$0–$50/mo',
      hours: 'under10',
      hoursLabel: '6–12 hrs/wk',
      income: '5kplus',
      incomeLabel: '$3,500–$20,000/mo',
      conversion: '$97–$497 Course Price Point',
      aov: '88% Course Completion Margin',
      link: '/online-courses.html',
      description: 'Packaged cohort workshops and on-demand micro-learning curriculums delivered via modern LMS platforms.'
    },
    {
      id: 'aiautomation',
      title: 'AI Automation Services (AAA)',
      budget: 'low',
      budgetRange: '$0–$100/mo',
      hours: 'under10',
      hoursLabel: '8–15 hrs/wk',
      income: '5kplus',
      incomeLabel: '$4,000–$18,000/mo',
      conversion: '85% 12-Hour Lead Conversion',
      aov: '$1,500–$3,500 Retainer Fee',
      link: '/ai-automation-services.html',
      description: 'Deploying custom Make/n8n workflows and AI customer response agents for local dental, legal, and real estate firms.'
    }
  ];

  const initQuiz = () => {
    const quizContainer = document.getElementById('quiz-results-container');
    if (!quizContainer) return;

    let selectedBudget = 'all';
    let selectedHours = 'all';
    let selectedIncome = 'all';

    const renderResults = () => {
      const filtered = businessModels.filter((item) => {
        const matchBudget = selectedBudget === 'all' || item.budget === selectedBudget;
        const matchHours = selectedHours === 'all' || item.hours === selectedHours;
        const matchIncome = selectedIncome === 'all' || item.income === selectedIncome;
        return matchBudget && matchHours && matchIncome;
      });

      if (filtered.length === 0) {
        quizContainer.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 2rem; background: var(--bg-card); border-radius: 8px; border: 1px dashed var(--border-color);">
            <p style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">No exact match for this precise combination.</p>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Try broadening your budget or hours selection to explore related 2026 models.</p>
          </div>
        `;
        return;
      }

      quizContainer.innerHTML = filtered.map((item) => {
        let tagClass = 'tag-free';
        let tagLabel = 'Zero Capital ($0)';
        if (item.budget === 'micro') {
          tagClass = 'tag-micro';
          tagLabel = 'Micro-Capital ($1–$15)';
        } else if (item.budget === 'low') {
          tagClass = 'tag-low';
          tagLabel = 'Low-Capital ($15–$100)';
        }

        return `
          <div class="model-result-card">
            <span class="model-tag ${tagClass}">${tagLabel}</span>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--text-primary);">${item.title}</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${item.description}</p>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.85rem; line-height: 1.5;">
              <div><strong>Startup Budget:</strong> ${item.budgetRange}</div>
              <div><strong>Time Commitment:</strong> ${item.hoursLabel}</div>
              <div><strong>Income Benchmark:</strong> ${item.incomeLabel}</div>
              <div><strong>Key Metric:</strong> ${item.conversion}</div>
            </div>
            <a href="${item.link}" style="display: inline-block; font-size: 0.875rem; font-weight: 600; color: var(--accent-primary); text-decoration: none;">
              Read Full 2026 Blueprint &rarr;
            </a>
          </div>
        `;
      }).join('');
    };

    // Attach listeners
    document.querySelectorAll('.quiz-filter-budget .quiz-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.quiz-filter-budget .quiz-btn').forEach((b) => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedBudget = e.target.getAttribute('data-value');
        renderResults();
      });
    });

    document.querySelectorAll('.quiz-filter-hours .quiz-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.quiz-filter-hours .quiz-btn').forEach((b) => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedHours = e.target.getAttribute('data-value');
        renderResults();
      });
    });

    document.querySelectorAll('.quiz-filter-income .quiz-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.quiz-filter-income .quiz-btn').forEach((b) => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedIncome = e.target.getAttribute('data-value');
        renderResults();
      });
    });

    renderResults();
  };

  // 4. FAQ Accordion Toggle
  const initFAQ = () => {
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        const answer = btn.nextElementSibling;
        if (answer) {
          answer.style.display = expanded ? 'none' : 'block';
        }
        const icon = btn.querySelector('.faq-icon');
        if (icon) {
          icon.textContent = expanded ? '+' : '−';
        }
      });
    });
  };

  // Run on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initQuiz();
    initFAQ();
  });
})();
