/**
 * Wealth Blueprint - Main Interactive JavaScript
 * Includes: Theme Toggle, Dynamic Auto-Updating Year & Edition Engine,
 * Business Model Matcher Quiz, and FAQ Accordions.
 */

(function () {
  'use strict';

  // 1. Theme Toggle (Dark / Light Mode)
  const initTheme = () => {
    const savedTheme = localStorage.getItem('wb_theme');
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
        localStorage.setItem('wb_theme', newTheme);
        toggleBtns.forEach((b) => {
          b.innerHTML = newTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
        });
      });
    });
  };

  // 2. Dynamic Auto-Updating Year & Edition Engine (100% Evergreen)
  const initDynamicDateEngine = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0 = Jan, 9 = Oct, 10 = Nov, 11 = Dec

    // In Q4 (Oct, Nov, Dec), roll over to dual edition: "2026–2027 Edition"
    // In Q1–Q3 (Jan–Sep), roll over to single active year: "2027 Edition"
    const editionText = currentMonth >= 9 
      ? `${currentYear}–${currentYear + 1} Edition` 
      : `${currentYear} Edition`;

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const updatedDateString = `${monthNames[currentMonth]} ${currentYear}`;

    // Inject into .dynamic-edition elements (header badge, hero badges)
    document.querySelectorAll('.dynamic-edition').forEach((el) => {
      el.textContent = editionText;
    });

    // Inject into .dynamic-year elements (copyright footer, general references)
    document.querySelectorAll('.dynamic-year').forEach((el) => {
      el.textContent = currentYear.toString();
    });

    // Inject into .dynamic-next-year elements
    document.querySelectorAll('.dynamic-next-year').forEach((el) => {
      el.textContent = (currentYear + 1).toString();
    });

    // Inject into .dynamic-updated-date elements (E-E-A-T author box "Last Updated: Month Year")
    document.querySelectorAll('.dynamic-updated-date').forEach((el) => {
      el.textContent = updatedDateString;
    });

    // Automatically update copyright footer text if present
    document.querySelectorAll('.copyright-year').forEach((el) => {
      el.textContent = currentYear.toString();
    });

    // Auto-update document.title dynamically in Q4 / new years
    if (document.title && document.title.includes('2026')) {
      const yearReplacement = currentMonth >= 9 
        ? `${currentYear}–${currentYear + 1}` 
        : currentYear.toString();
      document.title = document.title.replace(/\b2026\b/g, yearReplacement);
    }
  };

  // 3. Mobile Nav Toggle
  const initMobileNav = () => {
    const navToggles = document.querySelectorAll('.mobile-nav-toggle');
    const navMenus = document.querySelectorAll('.nav-menu');

    navToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        navMenus.forEach((menu) => menu.classList.toggle('open'));
      });
    });
  };

  // 4. Starting Budget Selector (Filter the 10 Beginner Guides)
  const initBudgetSelector = () => {
    const container = document.getElementById('budget-guides-container');
    const filterButtons = document.querySelectorAll('.budget-filter-btn');
    const countDisplay = document.getElementById('budget-filter-count');
    if (!container || !filterButtons.length) return;

    const cards = container.querySelectorAll('.guide-card-item');

    const filterCards = (filter) => {
      let visibleCount = 0;
      cards.forEach((card) => {
        const tier = card.getAttribute('data-budget-tier'); // 'zero', 'under50', 'high'
        let match = false;
        if (filter === 'all') {
          match = true;
        } else if (filter === 'under50') {
          match = (tier === 'zero' || tier === 'under50');
        } else if (filter === 'zero') {
          match = (tier === 'zero');
        }

        if (match) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (countDisplay) {
        if (filter === 'zero') {
          countDisplay.textContent = 'Showing 4 guides that require $0 startup capital';
        } else if (filter === 'under50') {
          countDisplay.textContent = 'Showing 9 guides that require under $50 startup capital';
        } else {
          countDisplay.textContent = 'Showing all 10 guides across all budget levels';
        }
      }
    };

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-budget-filter');
        filterCards(filter);
      });
    });
  };


  // 5. FAQ Accordion Toggle
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

  // 6. Dropshipping Unit Economics & Break-Even Calculator
  const initDropshippingCalculator = () => {
    const retailInput = document.getElementById('calc-retail');
    if (!retailInput) return;

    const cogsInput = document.getElementById('calc-cogs');
    const affInput = document.getElementById('calc-affiliate');
    const fixedInput = document.getElementById('calc-fixed');
    const adsInput = document.getElementById('calc-ads');

    const retailVal = document.getElementById('calc-retail-val');
    const cogsVal = document.getElementById('calc-cogs-val');
    const affVal = document.getElementById('calc-affiliate-val');
    const fixedVal = document.getElementById('calc-fixed-val');
    const adsVal = document.getElementById('calc-ads-val');

    const outReferral = document.getElementById('calc-out-referral');
    const outPayment = document.getElementById('calc-out-payment');
    const outAffDollar = document.getElementById('calc-out-aff-dollar');
    const outCogs = document.getElementById('calc-out-cogs');
    const outNetProfit = document.getElementById('calc-out-net-profit');
    const outNetMargin = document.getElementById('calc-out-net-margin');
    const outSunk = document.getElementById('calc-out-sunk');
    const outBreakeven = document.getElementById('calc-out-breakeven');

    const updateCalc = () => {
      const retail = parseFloat(retailInput.value);
      const cogs = parseFloat(cogsInput.value);
      const affPercent = parseFloat(affInput.value) / 100;
      const fixed = parseFloat(fixedInput.value);
      const ads = parseFloat(adsInput.value);

      // Display inputs
      retailVal.textContent = `$${retail.toFixed(2)}`;
      cogsVal.textContent = `$${cogs.toFixed(2)}`;
      affVal.textContent = `${(affPercent * 100).toFixed(0)}%`;
      fixedVal.textContent = `$${fixed.toFixed(2)}`;
      adsVal.textContent = `$${ads.toFixed(2)}`;

      // Fees
      const referralFee = retail * 0.06;
      const paymentFee = (retail * 0.029) + 0.30;
      const affiliatePayout = retail * affPercent;
      const totalVariableCost = cogs + referralFee + paymentFee + affiliatePayout;
      const netProfit = retail - totalVariableCost;
      const netMargin = (netProfit / retail) * 100;
      const totalSunkCost = fixed + ads;
      const breakEvenUnits = netProfit > 0 ? Math.ceil(totalSunkCost / netProfit) : 'N/A';

      // Output values
      outReferral.textContent = `-$${referralFee.toFixed(2)}`;
      outPayment.textContent = `-$${paymentFee.toFixed(2)}`;
      outAffDollar.textContent = `-$${affiliatePayout.toFixed(2)}`;
      outCogs.textContent = `-$${cogs.toFixed(2)}`;

      outNetProfit.textContent = `$${netProfit.toFixed(2)}`;
      outNetProfit.style.color = netProfit > 0 ? 'var(--accent-emerald)' : '#dc2626';

      outNetMargin.textContent = `${netMargin.toFixed(1)}%`;
      outNetMargin.style.color = netMargin > 0 ? 'var(--accent-emerald)' : '#dc2626';

      outSunk.textContent = `$${totalSunkCost.toFixed(2)}`;
      outBreakeven.textContent = typeof breakEvenUnits === 'number' ? `${breakEvenUnits} Units` : 'Negative Margin';
    };

    [retailInput, cogsInput, affInput, fixedInput, adsInput].forEach((input) => {
      input.addEventListener('input', updateCalc);
    });

    updateCalc();
  };

  // 7. Supplier SLA & Feasibility Checker
  const initSupplierChecker = () => {
    const select = document.getElementById('supplier-select');
    const container = document.getElementById('supplier-diagnostic-card');
    if (!select || !container) return;

    const supplierData = {
      zendrop: {
        name: "Zendrop US Domestic Warehouses",
        speed: "2–5 Business Days (USPS Ground Advantage)",
        cost: "$49.00 – $79.00 / month (Pro/Plus plan)",
        slaCompliance: "PASSED: Verified physical carrier scan in 24–48 hours",
        badge: '<span style="background-color: #dcfce7; color: #166534; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem;">✓ 100% SLA COMPLIANT (RECOMMENDED)</span>',
        notes: "Direct TikTok Shop API integration with domestic facilities in California and Pennsylvania. Automated tracking sync maintains Late Dispatch Rate (LDR) below 1.2%."
      },
      cjdropshipping: {
        name: "CJ Dropshipping US Local Inventory",
        speed: "2–5 Business Days (US Domestic Warehouses)",
        cost: "$0 / month (Pay per order fulfillment fee)",
        slaCompliance: "PASSED: When filtering for US Warehouse local inventory",
        badge: '<span style="background-color: #dcfce7; color: #166534; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem;">✓ 100% SLA COMPLIANT (FREE ENTRY)</span>',
        notes: "Zero monthly software overhead makes this ideal for micro-capital founders ($0–$15). Operators must strictly filter for 'US Warehouse' stock to avoid international transit delays."
      },
      autods: {
        name: "AutoDS US Supplier Network",
        speed: "2–5 Business Days (US Fast-Shipping Partners)",
        cost: "$39.00 / mo + $9.90 automated fulfillment credits",
        slaCompliance: "PASSED: Automated tracking ingestion within 12 hours",
        badge: '<span style="background-color: #dcfce7; color: #166534; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem;">✓ 100% SLA COMPLIANT</span>',
        notes: "Real-time automated price and stock monitor prevents out-of-stock cancellations. Automatic tracking uploads ensure orders clear TikTok\\'s 48-hour carrier scan SLA."
      },
      spocket: {
        name: "Spocket US/EU Vetted Network",
        speed: "2–5 Business Days (Domestic US & European Artisans)",
        cost: "$39.99 / month (Starter/Pro tier)",
        slaCompliance: "PASSED: Domestic North American fulfillment",
        badge: '<span style="background-color: #dcfce7; color: #166534; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem;">✓ 100% SLA COMPLIANT</span>',
        notes: "Over 80% of supplier partners are based in the United States and Canada, ensuring rapid 3-day average transit with domestic USPS tracking numbers."
      },
      syncee: {
        name: "Syncee Global Brands (Alibaba US Dropshipping Partner)",
        speed: "2–5 Business Days (Domestic Brand Hubs)",
        cost: "$29.00 / month",
        slaCompliance: "PASSED: 12,000+ Vetted Brands with Local US Stock",
        badge: '<span style="background-color: #dcfce7; color: #166534; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem;">✓ 100% SLA COMPLIANT</span>',
        notes: "Direct integration with authorized US wholesale distributors. Automatic order synchronization protects against duplicate tracking and late carrier scans."
      },
      aliexpress: {
        name: "AliExpress Direct Postal (Overseas Shipping)",
        speed: "14–28 Business Days (Standard International Postal)",
        cost: "$0 / month",
        slaCompliance: "CRITICAL FAILURE: Violates TikTok 48-Hour Carrier Origin Scan",
        badge: '<span style="background-color: #fee2e2; color: #991b1b; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem;">⚠ IMMEDIATE ACCOUNT SUSPENSION RISK</span>',
        notes: "DANGER: Overseas packages lack domestic USPS/UPS physical carrier origin scans within 2 business days. Late Dispatch Rate will spike above 4.0%, causing TikTok Shop to auto-cancel orders at day 5 and permanently terminate merchant privileges."
      }
    };

    const renderSupplier = () => {
      const data = supplierData[select.value];
      if (!data) return;

      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          <h4 style="margin: 0; font-size: 1.2rem; color: var(--text-primary);">${data.name}</h4>
          <div>${data.badge}</div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1rem; font-size: 0.95rem;">
          <div><strong>Fulfillment Speed:</strong> <br><span style="color: var(--text-secondary);">${data.speed}</span></div>
          <div><strong>Software Cost:</strong> <br><span style="color: var(--text-secondary);">${data.cost}</span></div>
          <div><strong>TikTok 2-Day Scan SLA:</strong> <br><span style="color: var(--text-secondary);">${data.slaCompliance}</span></div>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0; line-height: 1.6;"><strong>Operational Assessment:</strong> ${data.notes}</p>
      `;
    };

    select.addEventListener('change', renderSupplier);
    renderSupplier();
  };

  // 8. Launch Checklist with Live Progress Bar
  const initLaunchChecklist = () => {
    const checkboxes = document.querySelectorAll('.launch-check');
    const progressBar = document.getElementById('checklist-progress-bar');
    const progressText = document.getElementById('checklist-progress-text');
    if (!checkboxes.length || !progressBar || !progressText) return;

    const updateProgress = () => {
      const total = checkboxes.length;
      let checked = 0;
      checkboxes.forEach((cb) => {
        if (cb.checked) checked++;
      });

      const percentage = Math.round((checked / total) * 100);
      progressBar.style.width = `${percentage}%`;
      progressText.textContent = `${percentage}% Complete (${checked} of ${total} Milestones)`;

      if (percentage === 100) {
        progressText.textContent = `100% Launch Ready! Ready for TikTok Shop Deployment.`;
        progressText.style.color = 'var(--accent-emerald)';
      } else {
        progressText.style.color = 'var(--accent-primary)';
      }
    };

    checkboxes.forEach((cb) => {
      cb.addEventListener('change', updateProgress);
    });

    updateProgress();
  };

  // 9. Simple Freelance Take-Home Estimator (Plain Language & Editable Assumptions)
  const initFreelanceEstimator = () => {
    const priceInput = document.getElementById('freelance-price');
    if (!priceInput) return;

    const feeInput = document.getElementById('freelance-fee-pct');
    const hoursInput = document.getElementById('freelance-hours');

    const outGross = document.getElementById('freelance-out-gross');
    const outFee = document.getElementById('freelance-out-fee');
    const outNet = document.getElementById('freelance-out-net');
    const outHourly = document.getElementById('freelance-out-hourly');

    const calculate = () => {
      const price = Math.max(0, parseFloat(priceInput.value) || 0);
      const feePct = Math.max(0, Math.min(100, parseFloat(feeInput ? feeInput.value : 10) || 0));
      const hours = Math.max(0.25, parseFloat(hoursInput ? hoursInput.value : 1) || 1);

      const feeAmount = price * (feePct / 100);
      const netPay = price - feeAmount;
      const hourlyRate = hours > 0 ? (netPay / hours) : 0;

      if (outGross) outGross.textContent = `$${price.toFixed(2)}`;
      if (outFee) outFee.textContent = `-$${feeAmount.toFixed(2)}`;
      if (outNet) outNet.textContent = `$${netPay.toFixed(2)}`;
      if (outHourly) outHourly.textContent = `$${hourlyRate.toFixed(2)}/hr`;
    };

    priceInput.addEventListener('input', calculate);
    if (feeInput) feeInput.addEventListener('input', calculate);
    if (hoursInput) hoursInput.addEventListener('input', calculate);

    calculate();
  };

  // Run on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDynamicDateEngine();
    initMobileNav();
    initBudgetSelector();
    initFAQ();
    initDropshippingCalculator();
    initSupplierChecker();
    initLaunchChecklist();
    initFreelanceEstimator();
  });
})();
