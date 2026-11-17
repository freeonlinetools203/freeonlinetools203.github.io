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
