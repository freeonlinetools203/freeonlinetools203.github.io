// =========================================================================
// 1. CENTRALIZED TOOLS DATABASE & URL MAP (ALL 240+ EXISTING URLS SAFE)
// =========================================================================
const toolUrlMap = {
  "Age Calculator": "age-calculator.html",
  "Dog Age Calculator": "dog-age-calculator.html",
  "What Year Was I Born Calculator": "what-year-was-i-born.html",
  "Born Year Age Calculator": "born-year-age-calculator.html",
  "Current Year Calculator": "current-year-calculator.html",
  "Chronological Age Calculator": "chronological-age-calculator.html",
  "Online Chronological Age Calculator": "online-chronological-age-calculator.html",
  "Age Calculator Difference": "age-calculator-difference.html",
  "Calculate Age Difference": "calculate-age-difference.html",
  "Age Gap Calculator": "age-gap-calculator.html",
  "Age Gap Dating Calculator": "age-gap-dating-calculator.html",
  "Dating Age Difference Calculator": "dating-age-difference-calculator.html",
  "Biological Age Calculator": "biological-age-calculator.html",
  "Free Biological Age Calculator": "free-biological-age-calculator.html",
  "Adjusted Age Calculator": "adjusted-age-calculator.html",
  "Preemie Adjusted Age Calculator": "preemie-adjusted-age-calculator.html",
  "Pearson Age Calculator": "pearson-age-calculator.html",
  "Pearson Chronological Age Calculator": "pearson-chronological-age-calculator.html",
  "Age Calculator By Photo": "age-calculator-by-photo.html",
  "Photo Age Calculator": "photo-age-calculator.html",
  "Geekzilla Age Calculator": "age-calculator-geekzilla.html",
  "Age In Days Calculator": "age-in-days-calculator.html",
  "Age In Months Calculator": "age-in-months-calculator.html",
  "Birth Year Calculator": "birth-year-calculator.html",
  "Excel Formula To Calculate Age": "excel-formula-to-calculate-age.html",
  "How To Calculate Age In Excel": "how-to-calculate-age-in-excel.html",
  "Calculate Age From DOB In Excel": "calculate-age-from-dob-in-excel.html",
  "AI Age Guesser": "ai-age-guesser.html",
  "Future Age Predictor": "future-age-predictor.html",
  "Korean Age Calculator": "korean-age-calculator.html",
  "Birthday Countdown": "birthday-countdown.html",
  "Happy Birthday Tool": "happy-birthday-tool.html",
  "Life Expectancy Calculator": "life-expectancy-calculator.html",
  "Running Age Calculator": "running-age-calculator.html",
  "Running Age Calculator by Date of Birth": "running-age-calculator-by-date-of-birth.html",
  "Date of Birth Calculator Year": "date-of-birth-calculator-year.html",
  "Keyword Density Checker": "keyword-density-checker.html",
  "Meta Tags Generator": "meta-tags-generator.html",
  "Meta Tag Analyzer": "meta-tag-analyzer.html",
  "Broken Link Checker": "broken-link-checker.html",
  "Free Backlink Checker": "free-backlink-checker.html",
  "Google Index Checker": "google-index-checker.html",
  "SEO Analyzer": "seo-analyzer.html",
  "SEO Score Checker": "seo-score-checker.html",
  "SEO Title Generator": "seo-title-generator.html",
  "SERP Snippet Preview": "serp-snippet-preview.html",
  "Readability Checker": "readability-checker.html",
  "Heading Structure Checker": "heading-structure-checker.html",
  "Image Alt Analyzer": "image-alt-analyzer.html",
  "XML Sitemap Generator": "xml-sitemap-generator.html",
  "Instagram Hashtag Generator": "instagram-hashtag-generator.html",
  "LinkedIn Hashtag Generator": "linkedin-hashtag-generator.html",
  "Facebook Hashtag Generator": "facebook-hashtag-generator.html",
  "Pinterest Hashtag Generator": "pinterest-hashtag-generator.html",
  "AI Hashtag Generator": "ai-hashtag-generator.html",
  "SEO Hashtags Generator": "seo-hashtags-generator.html",
  "Random Hashtag Generator": "random-hashtag-generator.html",
  "TikTok Hashtag Generator": "tiktok-hashtag-generator.html",
  "Twitter Hashtag Generator": "twitter-hashtag-generator.html",
  "Threads Hashtag Generator": "threads-hashtag-generator.html",
  "Trending Hashtags Today": "trending-hashtags-today.html",
  "Viral Hashtag Generator": "viral-hashtag-generator.html",
  "YouTube Hashtag Generator": "youtube-hashtag-generator.html",
  "Social Media Caption Generator": "social-media-caption-generator.html",
  "Dog Pregnancy Calculator": "dog-pregnancy-calculator.html",
  "Cat Pregnancy Calculator": "cat-pregnancy-calculator.html",
  "Cow Pregnancy Calculator": "cow-pregnancy-calculator.html",
  "Rabbit Pregnancy Calculator": "rabbit-pregnancy-calculator.html",
  "Goat Pregnancy Calculator": "goat-pregnancy-calculator.html",
  "Horse Gestation Calculator": "horse-gestation-calculator.html",
  "Sheep Pregnancy Calculator": "sheep-pregnancy-calculator.html",
  "Pig Pregnancy Calculator": "pig-pregnancy-calculator.html",
  "Lambing Calculator": "lambing-calculator.html",
  "MD5 Hash Generator": "md5-generator.html",
  "SHA-256 Hash Generator": "sha256-generator.html",
  "SHA-1 Hash Generator": "sha1-generator.html",
  "Base64 Encoder/Decoder": "base64-encoder-decoder.html",
  "URL Encoder/Decoder": "url-encoder-decoder.html",
  "HTML Encoder/Decoder": "html-encoder-decoder.html",
  "HTML Minifier Pro": "html-minifier-pro.html",
  "JSON Formatter & Validator": "json-formatter-validator.html",
  "Color Palette Generator": "color-palette-generator.html",
  "Palette Generator": "palette-generator.html",
  "Color Shades Generator": "color-shades-generator.html",
  "Color Gradient Maker": "color-gradient-maker.html",
  "Color Contrast Checker": "color-contrast-checker.html",
  "Color Name Finder": "color-name-finder.html",
  "Random Color Picker": "random-color-picker.html",
  "Color Wheel": "color-wheel-seo.html",
  "Image Color Extractor": "image-color-extractor.html",
  "Gradient Maker": "gradient-maker.html",
  "Unit Converter": "unit-converter.html",
  "Age Difference Calculator": "age-difference-calculator.html",
  "Discount Calculator": "discount-calculator.html",
  "Profit & Loss Calculator": "profit-loss-calculator.html",
  "GPA Calculator": "gpa-calculator.html",
  "GST Calculator": "gst-calculator.html",
  "Percentage Calculator": "percentage-calculator.html",
  "Date Calculator": "date-calculator.html",
  "QR Code Generator": "qr-code-generator.html",
  "Advanced QR Generator": "advanced-qr-generator.html",
  "YouTube Thumbnail Downloader": "youtube-thumbnail-downloader.html",
  "Currency Converter": "currency-converter.html",
  "My Birth Year": "my-birth-year.html",
  "BMI Calculator": "bmi-calculator.html",
  "BMR Calculator": "bmr-calculator.html",
  "Calorie Calculator": "calorie-calculator.html",
  "TDEE Calculator": "tdee-calculator.html",
  "Body Fat Calculator": "body-fat-calculator.html",
  "Ideal Weight Calculator": "ideal-weight-calculator.html",
  "Lean Body Mass Calculator": "lean-body-mass-calculator.html",
  "Macro Calculator": "macro-calculator.html",
  "Protein Calculator": "protein-calculator.html",
  "Waist to Hip Calculator": "waist-to-hip-calculator.html",
  "EMI Calculator": "emi-calculator.html",
  "Loan Calculator": "loan-calculator.html",
  "Zakat Calculator": "zakat-calculator.html",
  "SIP Calculator": "sip-calculator.html",
  "Word Counter": "word-counter.html",
  "Line Counter": "line-counter.html",
  "Text Case Converter": "text-case-converter.html",
  "Password Generator": "password-generator.html",
  "Password Strength Checker": "password-checker.html",
  "PDF Merger": "pdf-merger.html",
  "PDF Splitter": "pdf-splitter.html",
  "PDF to Image": "pdf-to-image.html",
  "PDF to JPG": "pdf-to-jpg.html",
  "PDF to PNG": "pdf-to-png.html",
  "PDF to BMP": "pdf-to-bmp.html",
  "PDF to WEBP": "pdf-to-webp.html",
  "PDF to TIFF": "pdf-to-tiff.html",
  "PDF to Word": "pdf-to-word.html",
  "PDF to Excel": "pdf-to-excel.html",
  "PDF to Text": "pdf-to-text.html",
  "PDF Rotator": "pdf-rotator.html",
  "Image Converter": "image-converter.html",
  "Image Cropper": "image-cropper.html",
  "Image Resizer": "image-resizer.html",
  "Image to PDF": "image-to-pdf.html",
  "Image Upscaler": "image-upscaler.html",
  "Image Compressor": "image-compressor.html",
  "WebP Converter": "webp-converter.html",
  "Zodiac Sign Finder": "zodiac-sign-finder.html",
  "Chinese Zodiac Finder": "chinese-zodiac-finder.html",
  "Time Calculator": "time-calculator.html",
  "Countdown Timer": "countdown-timer.html",
  "World Clock": "world-clock.html",
  "Spin The Wheel": "spin-the-wheel.html",
  "Yes/No Wheel": "yes-no-wheel.html",
  "Decision Roulette": "decision-roulette.html",
  "Random Name Picker": "random-name-picker.html",
  "Name Picker Wheel": "name-picker-wheel.html",
  "Random Number Generator": "random-number-generator.html",
  "Best Lottery Number Generator": "best-lottery-number-generator.html",
  "Prize Wheel": "prize-wheel.html",
  "Lucky Prize Wheel": "lucky-prize-wheel.html",
  "Daily Lucky Number Wheel": "daily-lucky-number-wheel.html",
  "Task Spinner": "task-spinner.html",
  "Art Roulette": "art-roulette-seo.html",
  "Chore Wheel": "chore-wheel-seo.html",
  "Country Picker Wheel": "country-picker-wheel-seo.html",
  "Decision Wheel": "decision-wheel.html",
  "Dinner Spinner": "dinner-spinner.html",
  "Icebreaker Wheel": "icebreaker-wheel-seo.html",
  "Random Fact Wheel": "random-fact-wheel-seo.html",
  "Random Animal Wheel": "random-animal-wheel.html",
  "Zodiac Wheel": "zodiac-wheel.html",
  "Twister Spinner": "twister-spinner-seo.html",
  "Truth or Dare Generator": "truth-or-dare-generator.html",
  "Sketch or Dare": "sketch-or-dare-seo.html",
  "Dare or Draw": "dare-or-draw-seo.html",
  "Hot Seat Challenge": "hot-seat-challenge-seo.html",
  "Stop Right There Wheel": "stop-right-there-wheel.html",
  "Holiday Activity Wheel": "holiday-wheel.html",
  "Food Picker Wheel": "food-picker-wheel.html",
  "Drink Picker Wheel": "drink-wheel.html",
  "Exercise Wheel": "exercise-wheel.html",
  "Workout Spinner": "workout-spinner.html",
  "Movie Picker Wheel": "movie-picker-wheel.html",
  "You vs Food Wheel": "you-vs-food-wheel.html",
  "Mystery Gift Wheel": "mystery-gift-wheel.html",
  "Casino Games Wheel": "casino-games-wheel.html",
  "Squid Game Spin Wheel": "squid-game-wheel.html",
  "Game Character Spin Wheel": "game-character-spin-wheel.html",
  "Party Games Spin Wheel": "party-games-spin-wheel.html",
  "Drinking Game Spin Wheel": "drinking-game-spin-wheel.html",
  "Board Game Spin Wheel": "board-game-spin-wheel.html",
  "Carnival Game Spin Wheel": "carnival-game-spin-wheel.html",
  "YouTube SEO Score Checker": "youtube-seo-score-checker.html",
  "YouTube Keyword Generator": "youtube-keyword-generator.html",
  "YouTube Keyword Research": "youtube-keyword-research.html",
  "YouTube Channel Analyzer": "youtube-channel-analyzer.html",
  "YouTube Channel Comparison": "youtube-channel-comparison.html",
  "YouTube Viral Video Predictor": "youtube-viral-video-predictor.html",
  "YouTube SEO Checklist Generator": "youtube-seo-checklist-generator.html",
  "YouTube Title Generator": "youtube-title-generator.html",
  "YouTube Description Generator": "youtube-description-generator.html",
  "YouTube Video Idea Generator": "youtube-video-idea-generator.html",
  "YouTube Video Outline Generator": "youtube-video-outline-generator.html",
  "YouTube Content Planner AI": "youtube-content-planner-ai.html",
  "YouTube Video Tags Extractor": "youtube-video-tags-extractor.html",
  "YouTube Video Tags Generator": "youtube-video-tags-generator.html",
  "YouTube Thumbnail Text Generator": "youtube-thumbnail-text-generator.html",
  "YouTube Thumbnail Color Palette Generator": "youtube-thumbnail-color-palette-generator.html",
  "YouTube Thumbnail Split Tester": "youtube-thumbnail-split-tester.html",
  "YouTube Thumbnail CTR Predictor": "thumbnail-ctr-predictor.html",
  "YouTube Shorts Hook Generator": "youtube-shorts-hook-generator.html",
  "YouTube Shorts Script Generator": "youtube-shorts-script-generator.html",
  "YouTube Shorts Idea Calendar Generator": "youtube-shorts-idea-calendar-generator.html",
  "YouTube Channel Name Generator": "youtube-channel-name-generator.html",
  "YouTube Community Post Generator": "youtube-community-post-generator.html"
};

function getUrl(toolName) {
  if (toolUrlMap[toolName]) {
    return "https://freeonlinetools203.com/" + toolUrlMap[toolName];
  }
  return "https://freeonlinetools203.com/" + toolName.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w\-]/g, '') + '.html';
}

// =========================================================================
// 2. FEATURED HERO AGE CALCULATOR (REAL WORKING CALCULATION)
// =========================================================================
function initHeroAgeCalculator() {
  const daySel = document.getElementById('heroDobDay');
  const monthSel = document.getElementById('heroDobMonth');
  const yearSel = document.getElementById('heroDobYear');
  const calcBtn = document.getElementById('heroCalcAgeBtn');
  const outputEl = document.getElementById('heroAgeOutput');
  const resultBox = document.getElementById('heroAgeResultBox');

  if (!daySel || !monthSel || !yearSel || !calcBtn || !outputEl) return;

  // Populate Days 1-31
  for (let d = 1; d <= 31; d++) {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d;
    if (d === 15) opt.selected = true;
    daySel.appendChild(opt);
  }

  // Populate Years 1920 - Current Year
  const now = new Date();
  const currentYear = now.getFullYear();
  for (let y = currentYear; y >= 1920; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    if (y === 2000) opt.selected = true;
    yearSel.appendChild(opt);
  }

  function calculateHeroExactAge() {
    const day = parseInt(daySel.value, 10);
    const month = parseInt(monthSel.value, 10);
    const year = parseInt(yearSel.value, 10);

    const birthDate = new Date(year, month, day);
    const today = new Date();

    if (birthDate > today) {
      outputEl.textContent = "Birth date cannot be in the future!";
      outputEl.style.color = "#DC2626";
      return;
    }

    outputEl.style.color = "#1D4ED8";
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Trigger smooth re-reveal animation on result box
    if (resultBox) {
      resultBox.style.animation = 'none';
      resultBox.offsetHeight;
      resultBox.style.animation = 'fotResultReveal 0.35s cubic-bezier(0.22, 1, 0.36, 1) both';
    }

    outputEl.textContent = `${years} Years, ${months} Months, ${days} Days`;
  }

  // Calculate initial real age for default date and bind button
  calculateHeroExactAge();
  calcBtn.addEventListener('click', calculateHeroExactAge);
}

// =========================================================================
// 3. WORKING HOMEPAGE & GLOBAL SEARCH BAR
// =========================================================================
window.tsSearch = function() {
  const input = document.getElementById('tsInput');
  const container = document.getElementById('tsResultsContainer');
  const label = document.getElementById('tsResultLabel');
  const grid = document.getElementById('tsResults');
  if (!input || !container || !grid) return;

  const query = input.value.toLowerCase().trim();
  if (!query) {
    container.style.display = 'none';
    grid.innerHTML = '';
    return;
  }

  const matches = Object.entries(toolUrlMap).filter(([name]) =>
    name.toLowerCase().includes(query)
  );

  container.style.display = 'block';
  if (matches.length === 0) {
    label.textContent = `No tools found matching "${input.value}" — try searching Age, PDF, BMI, SEO, or QR.`;
    grid.innerHTML = '';
    return;
  }

  label.textContent = `Showing ${matches.length} matching tool(s):`;
  grid.innerHTML = matches.map(([name, file]) =>
    `<a href="https://freeonlinetools203.com/${file}" class="fot-search-item"><span>${name}</span><span>→</span></a>`
  ).join('');
};

// =========================================================================
// 4. NAVIGATION, THEME TOGGLE, SCROLL REVEAL & TOOL PAGE HEADER INJECTION
// =========================================================================
document.addEventListener('DOMContentLoaded', function() {
  // Init Hero Age Calculator if on homepage
  initHeroAgeCalculator();

  // Live search input listener
  const searchInput = document.getElementById('tsInput');
  if (searchInput) {
    searchInput.addEventListener('input', window.tsSearch);
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.tsSearch();
      }
    });
  }

  // Light / Dark Mode Toggle
  const themeBtn = document.getElementById('fotThemeBtn');
  if (localStorage.getItem('fotTheme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('fotTheme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('fotMobileBtn');
  const mainNav = document.getElementById('fotMainNav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', function() {
      mainNav.classList.toggle('mobile-open');
    });
  }

  // Inject Unified Blue & White Header on Sub-Pages if they don't already have .fot-topbar
  if (!document.querySelector('.fot-topbar')) {
    const oldNav = document.querySelector('.navbar, .megamenu-container');
    if (oldNav) oldNav.remove();

    const subPageHeader = `
    <header style="background:#FFFFFF;border-bottom:1px solid #E2E8F0;position:sticky;top:0;z-index:1000;box-shadow:0 2px 12px rgba(15,23,42,0.05);font-family:'Inter',sans-serif;">
      <div style="max-width:1320px;margin:0 auto;padding:10px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <a href="https://freeonlinetools203.com/" style="display:flex;align-items:center;gap:10px;text-decoration:none;">
          <span style="width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#2563EB,#1E3A8A);color:#FFF;display:inline-flex;align-items:center;justify-content:center;font-weight:900;">🛠️</span>
          <span>
            <strong style="display:block;font-size:1.1rem;color:#0F296E;">FreeOnlineTools203.com</strong>
            <small style="display:block;font-size:0.7rem;color:#475569;font-weight:600;">240+ Free Online Tools • Fast • Easy • 100% Free</small>
          </span>
        </a>
        <nav style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
          <a href="https://freeonlinetools203.com/" style="color:#0F172A;text-decoration:none;font-weight:600;font-size:0.9rem;">Home</a>
          <a href="https://freeonlinetools203.com/all-tools.html" style="background:#2563EB;color:#FFF;padding:7px 16px;border-radius:999px;text-decoration:none;font-weight:700;font-size:0.88rem;">All Tools (240+)</a>
          <a href="https://freeonlinetools203.com/about.html" style="color:#0F172A;text-decoration:none;font-weight:600;font-size:0.9rem;">About</a>
          <a href="https://freeonlinetools203.com/contact.html" style="color:#0F172A;text-decoration:none;font-weight:600;font-size:0.9rem;">Contact</a>
        </nav>
      </div>
    </header>`;
    document.body.insertAdjacentHTML('afterbegin', subPageHeader);
  }

  // Subtle Scroll Reveal Animation (IntersectionObserver)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll('.fot-reveal, .section, .reviews-section, .seo-article-wrap');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fot-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealTargets.forEach(el => {
      el.classList.add('fot-reveal');
      observer.observe(el);
    });
  }
});

// =========================================================================
// 5. FULL CATEGORIZED DATABASE FOR DEDICATED CATEGORY & ALL-TOOLS PAGES
// =========================================================================
const categoryPagesDB = {
  "calculators": {
    title: "Calculators",
    icon: "🧮",
    desc: "Fast and accurate everyday math, discount, percentage, GPA, currency, and QR code calculators.",
    tools: [
      { name: "Age Calculator", sub: "Age & Date" },
      { name: "Age Difference Calculator", sub: "Age & Date" },
      { name: "Date Calculator", sub: "Age & Date" },
      { name: "My Birth Year", sub: "Age & Date" },
      { name: "Discount Calculator", sub: "Finance & Math" },
      { name: "Profit & Loss Calculator", sub: "Finance & Math" },
      { name: "GST Calculator", sub: "Finance & Math" },
      { name: "Percentage Calculator", sub: "Finance & Math" },
      { name: "Currency Converter", sub: "Finance & Math" },
      { name: "GPA Calculator", sub: "Finance & Math" },
      { name: "Unit Converter", sub: "Utilities" },
      { name: "QR Code Generator", sub: "Utilities" },
      { name: "Advanced QR Generator", sub: "Utilities" },
      { name: "YouTube Thumbnail Downloader", sub: "Utilities" }
    ]
  },
  "pdf-tools": {
    title: "PDF Tools",
    icon: "📄",
    desc: "Merge, split, rotate, and convert PDF files to Word, Excel, JPG, PNG, and Text online.",
    tools: [
      { name: "PDF Merger", sub: "Organize PDF" },
      { name: "PDF Splitter", sub: "Organize PDF" },
      { name: "PDF Rotator", sub: "Organize PDF" },
      { name: "PDF to Word", sub: "Convert to Document" },
      { name: "PDF to Excel", sub: "Convert to Document" },
      { name: "PDF to Text", sub: "Convert to Document" },
      { name: "PDF to Image", sub: "Convert to Image" },
      { name: "PDF to JPG", sub: "Convert to Image" },
      { name: "PDF to PNG", sub: "Convert to Image" },
      { name: "PDF to BMP", sub: "Convert to Image" },
      { name: "PDF to WEBP", sub: "Convert to Image" },
      { name: "PDF to TIFF", sub: "Convert to Image" }
    ]
  },
  "image-tools": {
    title: "Image Tools",
    icon: "🖼️",
    desc: "Crop, resize, compress, upscale, and convert images directly in your browser.",
    tools: [
      { name: "Image Resizer", sub: "Edit Image" },
      { name: "Image Cropper", sub: "Edit Image" },
      { name: "Image Upscaler", sub: "Edit Image" },
      { name: "Image Compressor", sub: "Optimize" },
      { name: "Image Converter", sub: "Convert" },
      { name: "WebP Converter", sub: "Convert" },
      { name: "Image to PDF", sub: "Convert" },
      { name: "Image Color Extractor", sub: "Colors" }
    ]
  },
  "youtube-tools": {
    title: "YouTube Tools",
    icon: "🎬",
    desc: "Optimize video titles, tags, keywords, thumbnails, Shorts scripts, and channel SEO.",
    tools: [
      { name: "YouTube Keyword Generator", sub: "SEO & Keywords" },
      { name: "YouTube Keyword Research", sub: "SEO & Keywords" },
      { name: "YouTube SEO Score Checker", sub: "SEO & Keywords" },
      { name: "YouTube Channel Analyzer", sub: "SEO & Keywords" },
      { name: "YouTube Channel Comparison", sub: "SEO & Keywords" },
      { name: "YouTube Viral Video Predictor", sub: "SEO & Keywords" },
      { name: "YouTube SEO Checklist Generator", sub: "SEO & Keywords" },
      { name: "YouTube Title Generator", sub: "Content & Scripts" },
      { name: "YouTube Description Generator", sub: "Content & Scripts" },
      { name: "YouTube Video Idea Generator", sub: "Content & Scripts" },
      { name: "YouTube Video Outline Generator", sub: "Content & Scripts" },
      { name: "YouTube Content Planner AI", sub: "Content & Scripts" },
      { name: "YouTube Shorts Hook Generator", sub: "Content & Scripts" },
      { name: "YouTube Shorts Script Generator", sub: "Content & Scripts" },
      { name: "YouTube Shorts Idea Calendar Generator", sub: "Content & Scripts" },
      { name: "YouTube Video Tags Extractor", sub: "Tags & Hashtags" },
      { name: "YouTube Video Tags Generator", sub: "Tags & Hashtags" },
      { name: "YouTube Hashtag Generator", sub: "Tags & Hashtags" },
      { name: "YouTube Thumbnail Downloader", sub: "Thumbnails" },
      { name: "YouTube Thumbnail Text Generator", sub: "Thumbnails" },
      { name: "YouTube Thumbnail Color Palette Generator", sub: "Thumbnails" },
      { name: "YouTube Thumbnail Split Tester", sub: "Thumbnails" },
      { name: "YouTube Thumbnail CTR Predictor", sub: "Thumbnails" },
      { name: "YouTube Channel Name Generator", sub: "Channel" },
      { name: "YouTube Community Post Generator", sub: "Channel" }
    ]
  },
  "seo-tools": {
    title: "SEO Tools",
    icon: "🔍",
    desc: "Check keyword density, analyze meta tags, preview SERP snippets, and audit on-page SEO.",
    tools: [
      { name: "Keyword Density Checker", sub: "Content & Meta" },
      { name: "Meta Tags Generator", sub: "Content & Meta" },
      { name: "Meta Tag Analyzer", sub: "Content & Meta" },
      { name: "SEO Title Generator", sub: "Content & Meta" },
      { name: "SERP Snippet Preview", sub: "Content & Meta" },
      { name: "SEO Analyzer", sub: "Site Audit" },
      { name: "SEO Score Checker", sub: "Site Audit" },
      { name: "Readability Checker", sub: "Site Audit" },
      { name: "Heading Structure Checker", sub: "Site Audit" },
      { name: "Image Alt Analyzer", sub: "Site Audit" },
      { name: "Broken Link Checker", sub: "Site Audit" },
      { name: "Google Index Checker", sub: "Site Audit" },
      { name: "Free Backlink Checker", sub: "Technical" },
      { name: "XML Sitemap Generator", sub: "Technical" }
    ]
  },
  "text-tools": {
    title: "Text Tools",
    icon: "📝",
    desc: "Count words and lines, convert text case, and generate or verify strong passwords.",
    tools: [
      { name: "Word Counter", sub: "Writing" },
      { name: "Line Counter", sub: "Writing" },
      { name: "Text Case Converter", sub: "Writing" },
      { name: "Password Generator", sub: "Security" },
      { name: "Password Strength Checker", sub: "Security" }
    ]
  },
  "financial-tools": {
    title: "Financial Tools",
    icon: "💰",
    desc: "Calculate loan EMIs, SIP investment returns, and annual Zakat accurately.",
    tools: [
      { name: "EMI Calculator", sub: "Loans & Investments" },
      { name: "Loan Calculator", sub: "Loans & Investments" },
      { name: "SIP Calculator", sub: "Loans & Investments" },
      { name: "Zakat Calculator", sub: "Tax & Zakat" }
    ]
  },
  "health-tools": {
    title: "Health Tools",
    icon: "❤️",
    desc: "Check BMI, BMR, daily calories, TDEE, body fat percentage, macros, and ideal weight.",
    tools: [
      { name: "BMI Calculator", sub: "Body Metrics" },
      { name: "Body Fat Calculator", sub: "Body Metrics" },
      { name: "Ideal Weight Calculator", sub: "Body Metrics" },
      { name: "Lean Body Mass Calculator", sub: "Body Metrics" },
      { name: "Waist to Hip Calculator", sub: "Body Metrics" },
      { name: "BMR Calculator", sub: "Nutrition & Calories" },
      { name: "Calorie Calculator", sub: "Nutrition & Calories" },
      { name: "TDEE Calculator", sub: "Nutrition & Calories" },
      { name: "Macro Calculator", sub: "Nutrition & Calories" },
      { name: "Protein Calculator", sub: "Nutrition & Calories" }
    ]
  },
  "age-calculators": {
    title: "Age Calculators",
    icon: "📅",
    desc: "Calculate exact chronological age, age gaps, biological age, preemie adjusted age, and birth year.",
    tools: [
      { name: "Age Calculator", sub: "Basic Age" },
      { name: "Current Year Calculator", sub: "Basic Age" },
      { name: "What Year Was I Born Calculator", sub: "Basic Age" },
      { name: "Born Year Age Calculator", sub: "Basic Age" },
      { name: "Birth Year Calculator", sub: "Basic Age" },
      { name: "Age In Days Calculator", sub: "Basic Age" },
      { name: "Age In Months Calculator", sub: "Basic Age" },
      { name: "Date of Birth Calculator Year", sub: "Basic Age" },
      { name: "Age Difference Calculator", sub: "Age Difference" },
      { name: "Age Calculator Difference", sub: "Age Difference" },
      { name: "Calculate Age Difference", sub: "Age Difference" },
      { name: "Age Gap Calculator", sub: "Age Difference" },
      { name: "Age Gap Dating Calculator", sub: "Age Difference" },
      { name: "Dating Age Difference Calculator", sub: "Age Difference" },
      { name: "Chronological Age Calculator", sub: "Health & Clinical" },
      { name: "Online Chronological Age Calculator", sub: "Health & Clinical" },
      { name: "Biological Age Calculator", sub: "Health & Clinical" },
      { name: "Free Biological Age Calculator", sub: "Health & Clinical" },
      { name: "Adjusted Age Calculator", sub: "Health & Clinical" },
      { name: "Preemie Adjusted Age Calculator", sub: "Health & Clinical" },
      { name: "Pearson Age Calculator", sub: "Health & Clinical" },
      { name: "Pearson Chronological Age Calculator", sub: "Health & Clinical" },
      { name: "Life Expectancy Calculator", sub: "Health & Clinical" },
      { name: "Dog Age Calculator", sub: "Fun & Specialty" },
      { name: "AI Age Guesser", sub: "Fun & Specialty" },
      { name: "Future Age Predictor", sub: "Fun & Specialty" },
      { name: "Korean Age Calculator", sub: "Fun & Specialty" },
      { name: "Birthday Countdown", sub: "Fun & Specialty" },
      { name: "Happy Birthday Tool", sub: "Fun & Specialty" },
      { name: "Running Age Calculator", sub: "Fun & Specialty" },
      { name: "Running Age Calculator by Date of Birth", sub: "Fun & Specialty" },
      { name: "Age Calculator By Photo", sub: "Photo Age" },
      { name: "Photo Age Calculator", sub: "Photo Age" },
      { name: "Geekzilla Age Calculator", sub: "Photo Age" }
    ]
  },
  "random-fun": {
    title: "Random & Fun Tools",
    icon: "🎲",
    desc: "Spin custom decision wheels, pick random names, generate lottery numbers, and play party games.",
    tools: [
      { name: "Spin The Wheel", sub: "Decision Wheels" },
      { name: "Yes/No Wheel", sub: "Decision Wheels" },
      { name: "Decision Roulette", sub: "Decision Wheels" },
      { name: "Decision Wheel", sub: "Decision Wheels" },
      { name: "Task Spinner", sub: "Decision Wheels" },
      { name: "Art Roulette", sub: "Decision Wheels" },
      { name: "Chore Wheel", sub: "Decision Wheels" },
      { name: "Twister Spinner", sub: "Decision Wheels" },
      { name: "Stop Right There Wheel", sub: "Decision Wheels" },
      { name: "Color Wheel", sub: "Decision Wheels" },
      { name: "Squid Game Spin Wheel", sub: "Decision Wheels" },
      { name: "Game Character Spin Wheel", sub: "Decision Wheels" },
      { name: "Carnival Game Spin Wheel", sub: "Decision Wheels" },
      { name: "Random Name Picker", sub: "Pickers & Numbers" },
      { name: "Name Picker Wheel", sub: "Pickers & Numbers" },
      { name: "Random Number Generator", sub: "Pickers & Numbers" },
      { name: "Best Lottery Number Generator", sub: "Pickers & Numbers" },
      { name: "Prize Wheel", sub: "Pickers & Numbers" },
      { name: "Lucky Prize Wheel", sub: "Pickers & Numbers" },
      { name: "Daily Lucky Number Wheel", sub: "Pickers & Numbers" },
      { name: "Country Picker Wheel", sub: "Pickers & Numbers" },
      { name: "Mystery Gift Wheel", sub: "Pickers & Numbers" },
      { name: "Random Fact Wheel", sub: "Pickers & Numbers" },
      { name: "Random Animal Wheel", sub: "Pickers & Numbers" },
      { name: "Zodiac Wheel", sub: "Pickers & Numbers" },
      { name: "Exercise Wheel", sub: "Pickers & Numbers" },
      { name: "Workout Spinner", sub: "Pickers & Numbers" },
      { name: "Movie Picker Wheel", sub: "Pickers & Numbers" },
      { name: "Holiday Activity Wheel", sub: "Pickers & Numbers" },
      { name: "Icebreaker Wheel", sub: "Pickers & Numbers" },
      { name: "Dinner Spinner", sub: "Food & Drink" },
      { name: "Food Picker Wheel", sub: "Food & Drink" },
      { name: "Drink Picker Wheel", sub: "Food & Drink" },
      { name: "You vs Food Wheel", sub: "Food & Drink" },
      { name: "Truth or Dare Generator", sub: "Party Games" },
      { name: "Sketch or Dare", sub: "Party Games" },
      { name: "Dare or Draw", sub: "Party Games" },
      { name: "Hot Seat Challenge", sub: "Party Games" },
      { name: "Casino Games Wheel", sub: "Party Games" },
      { name: "Party Games Spin Wheel", sub: "Party Games" },
      { name: "Drinking Game Spin Wheel", sub: "Party Games" },
      { name: "Board Game Spin Wheel", sub: "Party Games" }
    ]
  },
  "pet-animal": {
    title: "Pet & Animal Tools",
    icon: "🐾",
    desc: "Calculate pregnancy due dates, gestation timelines, and pet age equivalents.",
    tools: [
      { name: "Dog Pregnancy Calculator", sub: "Pets" },
      { name: "Cat Pregnancy Calculator", sub: "Pets" },
      { name: "Rabbit Pregnancy Calculator", sub: "Pets" },
      { name: "Dog Age Calculator", sub: "Pets" },
      { name: "Cow Pregnancy Calculator", sub: "Livestock" },
      { name: "Goat Pregnancy Calculator", sub: "Livestock" },
      { name: "Horse Gestation Calculator", sub: "Livestock" },
      { name: "Sheep Pregnancy Calculator", sub: "Livestock" },
      { name: "Pig Pregnancy Calculator", sub: "Livestock" },
      { name: "Lambing Calculator", sub: "Livestock" }
    ]
  },
  "date-time": {
    title: "Date & Time Tools",
    icon: "⏰",
    desc: "Calculate date durations, time intervals, birthday countdowns, zodiac signs, and world time.",
    tools: [
      { name: "Date Calculator", sub: "Date & Time" },
      { name: "Time Calculator", sub: "Date & Time" },
      { name: "Countdown Timer", sub: "Date & Time" },
      { name: "World Clock", sub: "Date & Time" },
      { name: "Birthday Countdown", sub: "Birthday & Zodiac" },
      { name: "Happy Birthday Tool", sub: "Birthday & Zodiac" },
      { name: "Zodiac Sign Finder", sub: "Birthday & Zodiac" },
      { name: "Chinese Zodiac Finder", sub: "Birthday & Zodiac" }
    ]
  },
  "developer-tools": {
    title: "Developer Tools",
    icon: "💻",
    desc: "Format JSON, minify HTML, encode/decode Base64 & URLs, and generate MD5/SHA hashes.",
    tools: [
      { name: "JSON Formatter & Validator", sub: "Formatters" },
      { name: "HTML Minifier Pro", sub: "Formatters" },
      { name: "Base64 Encoder/Decoder", sub: "Encoders" },
      { name: "URL Encoder/Decoder", sub: "Encoders" },
      { name: "HTML Encoder/Decoder", sub: "Encoders" },
      { name: "MD5 Hash Generator", sub: "Hashing" },
      { name: "SHA-256 Hash Generator", sub: "Hashing" },
      { name: "SHA-1 Hash Generator", sub: "Hashing" }
    ]
  },
  "color-tools": {
    title: "Color Tools",
    icon: "🎨",
    desc: "Generate harmonious color palettes, CSS gradients, color shades, and check contrast.",
    tools: [
      { name: "Color Palette Generator", sub: "Palettes" },
      { name: "Palette Generator", sub: "Palettes" },
      { name: "Color Shades Generator", sub: "Palettes" },
      { name: "Color Gradient Maker", sub: "Gradients" },
      { name: "Gradient Maker", sub: "Gradients" },
      { name: "Color Contrast Checker", sub: "Pickers & Checkers" },
      { name: "Color Name Finder", sub: "Pickers & Checkers" },
      { name: "Random Color Picker", sub: "Pickers & Checkers" },
      { name: "Color Wheel", sub: "Pickers & Checkers" },
      { name: "Image Color Extractor", sub: "Pickers & Checkers" }
    ]
  },
  "social-media": {
    title: "Social Media Tools",
    icon: "📱",
    desc: "Generate trending hashtags and engaging captions for Instagram, TikTok, LinkedIn, and X.",
    tools: [
      { name: "Instagram Hashtag Generator", sub: "Platform Hashtags" },
      { name: "TikTok Hashtag Generator", sub: "Platform Hashtags" },
      { name: "LinkedIn Hashtag Generator", sub: "Platform Hashtags" },
      { name: "Facebook Hashtag Generator", sub: "Platform Hashtags" },
      { name: "Pinterest Hashtag Generator", sub: "Platform Hashtags" },
      { name: "Twitter Hashtag Generator", sub: "Platform Hashtags" },
      { name: "Threads Hashtag Generator", sub: "Platform Hashtags" },
      { name: "YouTube Hashtag Generator", sub: "Platform Hashtags" },
      { name: "AI Hashtag Generator", sub: "AI & Viral" },
      { name: "SEO Hashtags Generator", sub: "AI & Viral" },
      { name: "Viral Hashtag Generator", sub: "AI & Viral" },
      { name: "Trending Hashtags Today", sub: "AI & Viral" },
      { name: "Random Hashtag Generator", sub: "AI & Viral" },
      { name: "Social Media Caption Generator", sub: "Captions" }
    ]
  },
  "productivity": {
    title: "Productivity & Excel Tools",
    icon: "📗",
    desc: "Master Excel DATEDIF formulas and spreadsheet guides for accurate date and age tracking.",
    tools: [
      { name: "Excel Formula To Calculate Age", sub: "Excel Guides" },
      { name: "How To Calculate Age In Excel", sub: "Excel Guides" },
      { name: "Calculate Age From DOB In Excel", sub: "Excel Guides" }
    ]
  }
};

// =========================================================================
// 6. DEDICATED CATEGORY PAGE RENDERER (STRICTLY ONLY SELECTED CATEGORY)
// =========================================================================
function initDedicatedCategoryPage() {
  const root = document.getElementById('fotCategoryPageRoot');
  if (!root) return;

  const slug = root.getAttribute('data-category');
  const catData = categoryPagesDB[slug];
  if (!catData) return;

  const uniqueSubs = [...new Set(catData.tools.map(t => t.sub))];
  const initialLimit = 12;
  let showAll = catData.tools.length <= initialLimit;
  let currentSub = 'all';
  let currentQuery = '';

  root.innerHTML = `
    <div style="background:linear-gradient(135deg,#1D4ED8 0%,#0F296E 100%);color:#FFF;padding:36px 24px;border-radius:20px;margin:24px auto;max-width:1320px;box-shadow:0 12px 30px rgba(15,41,110,0.2);">
      <nav style="font-size:0.84rem;margin-bottom:12px;color:#BFDBFE;">
        <a href="https://freeonlinetools203.com/" style="color:#FFF;text-decoration:none;font-weight:600;">Home</a> ›
        <a href="https://freeonlinetools203.com/all-tools.html" style="color:#FFF;text-decoration:none;font-weight:600;">All Tools</a> ›
        <span>${catData.title}</span>
      </nav>
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
        <span style="font-size:2.6rem;background:rgba(255,255,255,0.15);padding:10px 14px;border-radius:16px;">${catData.icon}</span>
        <div>
          <h1 style="font-size:clamp(1.7rem,3vw,2.3rem);font-weight:900;margin-bottom:4px;">${catData.title} (${catData.tools.length} Tools)</h1>
          <p style="color:#E0F2FE;font-size:0.96rem;max-width:720px;">${catData.desc}</p>
        </div>
      </div>
    </div>

    <div style="max-width:1320px;margin:0 auto 48px;padding:0 24px;">
      <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:24px;box-shadow:0 6px 20px rgba(15,23,42,0.05);">
        <input type="text" id="catOnlySearchInput" placeholder="Search inside ${catData.title} only..." style="width:100%;padding:13px 18px;border:1.5px solid #CBD5E1;border-radius:12px;font-size:0.96rem;font-family:inherit;margin-bottom:16px;outline:none;">

        ${uniqueSubs.length > 1 ? `
        <div id="catFilterTabs" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">
          <button type="button" data-sub="all" class="cat-sub-btn active" style="padding:7px 16px;border-radius:999px;border:1px solid #2563EB;background:#2563EB;color:#FFF;font-weight:700;font-size:0.84rem;cursor:pointer;">All (${catData.tools.length})</button>
          ${uniqueSubs.map(s => `<button type="button" data-sub="${s}" class="cat-sub-btn" style="padding:7px 16px;border-radius:999px;border:1px solid #CBD5E1;background:#F8FAFC;color:#0F172A;font-weight:600;font-size:0.84rem;cursor:pointer;">${s}</button>`).join('')}
        </div>` : ''}

        <div id="catToolsGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px;"></div>

        <div id="catShowAllWrap" style="text-align:center;margin-top:24px;"></div>
      </div>

      <!-- Related Categories -->
      <div style="margin-top:32px;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:18px;padding:24px;">
        <h3 style="font-size:1.1rem;font-weight:800;color:#0F296E;margin-bottom:14px;">Explore Other Tool Categories</h3>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          ${Object.entries(categoryPagesDB).filter(([k]) => k !== slug).slice(0, 8).map(([k, v]) =>
            `<a href="https://freeonlinetools203.com/category-${k}.html" style="padding:8px 16px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:999px;color:#1D4ED8;font-weight:700;font-size:0.85rem;text-decoration:none;">${v.icon} ${v.title}</a>`
          ).join('')}
        </div>
      </div>
    </div>
  `;

  const gridEl = document.getElementById('catToolsGrid');
  const showAllWrap = document.getElementById('catShowAllWrap');
  const searchEl = document.getElementById('catOnlySearchInput');

  function renderCategoryTools() {
    const filtered = catData.tools.filter(t => {
      const matchSub = currentSub === 'all' || t.sub === currentSub;
      const matchQuery = t.name.toLowerCase().includes(currentQuery);
      return matchSub && matchQuery;
    });

    const isFiltering = currentSub !== 'all' || currentQuery !== '';
    const visibleList = (showAll || isFiltering) ? filtered : filtered.slice(0, initialLimit);

    if (visibleList.length === 0) {
      gridEl.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:24px;color:#64748B;">No tools found inside ${catData.title} matching "${currentQuery}".</div>`;
      showAllWrap.innerHTML = '';
      return;
    }

    gridEl.innerHTML = visibleList.map(t => `
      <a href="${getUrl(t.name)}" style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:16px 18px;background:linear-gradient(135deg,#2563EB 0%,#1E3A8A 100%);color:#FFFFFF;border-radius:14px;text-decoration:none;font-weight:700;font-size:0.93rem;box-shadow:0 4px 12px rgba(37,99,235,0.2);transition:transform 0.2s;">
        <span>${catData.icon} ${t.name}</span>
        <span>→</span>
      </a>
    `).join('');

    if (!isFiltering && filtered.length > initialLimit) {
      showAllWrap.innerHTML = `<button type="button" id="toggleCatAllBtn" style="padding:11px 28px;background:#EFF6FF;color:#1D4ED8;border:1.5px solid #2563EB;border-radius:999px;font-weight:800;font-size:0.92rem;cursor:pointer;">
        ${showAll ? 'Show Less ↑' : `Show All ${filtered.length} ${catData.title} ↓`}
      </button>`;
      document.getElementById('toggleCatAllBtn').addEventListener('click', () => {
        showAll = !showAll;
        renderCategoryTools();
      });
    } else {
      showAllWrap.innerHTML = '';
    }
  }

  renderCategoryTools();

  searchEl.addEventListener('input', function() {
    currentQuery = this.value.toLowerCase().trim();
    renderCategoryTools();
  });

  document.querySelectorAll('.cat-sub-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.cat-sub-btn').forEach(b => {
        b.style.background = '#F8FAFC';
        b.style.color = '#0F172A';
        b.style.borderColor = '#CBD5E1';
      });
      this.style.background = '#2563EB';
      this.style.color = '#FFFFFF';
      this.style.borderColor = '#2563EB';
      currentSub = this.getAttribute('data-sub');
      renderCategoryTools();
    });
  });
}

document.addEventListener('DOMContentLoaded', initDedicatedCategoryPage);
