<?php
/**
 * ============================================================
 *  MEGA MENU HEADER — freeonlinetools203.com
 *  Single file update karein → sari 500+ pages update ho jayengi
 *  
 *  USAGE: Apni har page mein yeh add karein:
 *  <?php include 'header-megamenu.php'; ?>
 * ============================================================
 *
 *  TOOL CATEGORIES ADD KARNA: Neeche $megaMenuData array mein
 *  apni categories aur tools add karein.
 * ============================================================
 */

// ============================================================
// STEP 1: Apne tools yahan define karein
// Format: 'Category Name' => [ ['Tool Name', '/url'] , ... ]
// ============================================================
$megaMenuData = [

  "🧮 Calculators" => [
    ["BMI Calculator",          "/bmi-calculator"],
    ["Age Calculator",          "/age-calculator"],
    ["Percentage Calculator",   "/percentage-calculator"],
    ["Loan EMI Calculator",     "/emi-calculator"],
    ["Compound Interest",       "/compound-interest"],
    ["Simple Interest",         "/simple-interest"],
    ["GST Calculator",          "/gst-calculator"],
    ["Tip Calculator",          "/tip-calculator"],
    ["Discount Calculator",     "/discount-calculator"],
    ["Calorie Calculator",      "/calorie-calculator"],
    ["Date Difference",         "/date-difference"],
    ["Time Zone Converter",     "/timezone-converter"],
    ["Area Calculator",         "/area-calculator"],
    ["Speed Calculator",        "/speed-calculator"],
    ["Salary Calculator",       "/salary-calculator"],
  ],

  "🔤 Text Tools" => [
    ["Word Counter",            "/word-counter"],
    ["Character Counter",       "/character-counter"],
    ["Case Converter",          "/case-converter"],
    ["Text Reverser",           "/text-reverser"],
    ["Duplicate Line Remover",  "/duplicate-remover"],
    ["Text to Slug",            "/text-to-slug"],
    ["Lorem Ipsum Generator",   "/lorem-ipsum"],
    ["Fancy Text Generator",    "/fancy-text"],
    ["Text Sorter",             "/text-sorter"],
    ["Find & Replace",          "/find-replace"],
    ["Remove Extra Spaces",     "/remove-spaces"],
    ["Text Repeater",           "/text-repeater"],
    ["Morse Code Converter",    "/morse-code"],
    ["ASCII Art Generator",     "/ascii-art"],
    ["Paraphrasing Tool",       "/paraphrasing-tool"],
  ],

  "🔐 Security Tools" => [
    ["Password Generator",      "/password-generator"],
    ["Password Strength Check", "/password-strength"],
    ["MD5 Hash Generator",      "/md5-generator"],
    ["SHA256 Generator",        "/sha256-generator"],
    ["Base64 Encoder",          "/base64-encoder"],
    ["Base64 Decoder",          "/base64-decoder"],
    ["URL Encoder",             "/url-encoder"],
    ["URL Decoder",             "/url-decoder"],
    ["JWT Decoder",             "/jwt-decoder"],
    ["Random Token Generator",  "/token-generator"],
    ["QR Code Generator",       "/qr-generator"],
    ["QR Code Reader",          "/qr-reader"],
    ["Bcrypt Generator",        "/bcrypt"],
    ["ROT13 Cipher",            "/rot13"],
    ["Caesar Cipher",           "/caesar-cipher"],
  ],

  "🖼️ Image Tools" => [
    ["Image Compressor",        "/image-compressor"],
    ["Image Resizer",           "/image-resizer"],
    ["Image to WebP",           "/image-to-webp"],
    ["Image to PNG",            "/image-to-png"],
    ["Image to JPG",            "/image-to-jpg"],
    ["Image Cropper",           "/image-cropper"],
    ["Image Flipper",           "/image-flipper"],
    ["Image Grayscale",         "/image-grayscale"],
    ["Favicon Generator",       "/favicon-generator"],
    ["Photo to Sketch",         "/photo-to-sketch"],
    ["Meme Generator",          "/meme-generator"],
    ["Image Border Adder",      "/image-border"],
    ["Watermark Adder",         "/watermark-adder"],
    ["SVG Optimizer",           "/svg-optimizer"],
    ["Color Picker from Image", "/color-picker"],
  ],

  "📄 PDF Tools" => [
    ["PDF to Word",             "/pdf-to-word"],
    ["Word to PDF",             "/word-to-pdf"],
    ["PDF Compressor",          "/pdf-compressor"],
    ["PDF Merger",              "/pdf-merger"],
    ["PDF Splitter",            "/pdf-splitter"],
    ["PDF to Image",            "/pdf-to-image"],
    ["Image to PDF",            "/image-to-pdf"],
    ["PDF Page Remover",        "/pdf-page-remover"],
    ["PDF Rotator",             "/pdf-rotator"],
    ["PDF Watermark",           "/pdf-watermark"],
    ["PDF to Excel",            "/pdf-to-excel"],
    ["Excel to PDF",            "/excel-to-pdf"],
    ["PDF to PPT",              "/pdf-to-ppt"],
    ["PDF Unlocker",            "/pdf-unlocker"],
    ["PDF OCR",                 "/pdf-ocr"],
  ],

  "🌐 SEO Tools" => [
    ["Meta Tag Generator",      "/meta-tag-generator"],
    ["Keyword Density Checker", "/keyword-density"],
    ["XML Sitemap Generator",   "/sitemap-generator"],
    ["Robots.txt Generator",    "/robots-txt"],
    ["Open Graph Generator",    "/og-generator"],
    ["Schema Markup Generator", "/schema-generator"],
    ["Redirect Checker",        "/redirect-checker"],
    ["Backlink Checker",        "/backlink-checker"],
    ["DA PA Checker",           "/da-pa-checker"],
    ["Plagiarism Checker",      "/plagiarism-checker"],
    ["SEO Score Checker",       "/seo-score"],
    ["Page Speed Checker",      "/page-speed"],
    ["SERP Preview Tool",       "/serp-preview"],
    ["Anchor Text Analyzer",    "/anchor-analyzer"],
    ["Broken Link Checker",     "/broken-links"],
  ],

  "💻 Developer Tools" => [
    ["HTML Formatter",          "/html-formatter"],
    ["CSS Minifier",            "/css-minifier"],
    ["JS Minifier",             "/js-minifier"],
    ["JSON Formatter",          "/json-formatter"],
    ["JSON Validator",          "/json-validator"],
    ["XML Formatter",           "/xml-formatter"],
    ["SQL Formatter",           "/sql-formatter"],
    ["Regex Tester",            "/regex-tester"],
    ["Color Code Converter",    "/color-converter"],
    ["CSS Gradient Generator",  "/gradient-generator"],
    ["Box Shadow Generator",    "/box-shadow"],
    ["Flexbox Generator",       "/flexbox-generator"],
    ["Grid Generator",          "/grid-generator"],
    ["HTML to Markdown",        "/html-to-markdown"],
    ["Diff Checker",            "/diff-checker"],
  ],

  "💱 Converters" => [
    ["Currency Converter",      "/currency-converter"],
    ["Unit Converter",          "/unit-converter"],
    ["Length Converter",        "/length-converter"],
    ["Weight Converter",        "/weight-converter"],
    ["Temperature Converter",   "/temperature-converter"],
    ["Speed Converter",         "/speed-converter"],
    ["Volume Converter",        "/volume-converter"],
    ["Data Size Converter",     "/data-size-converter"],
    ["Pressure Converter",      "/pressure-converter"],
    ["Energy Converter",        "/energy-converter"],
    ["Frequency Converter",     "/frequency-converter"],
    ["Angle Converter",         "/angle-converter"],
    ["Time Converter",          "/time-converter"],
    ["Fuel Efficiency Converter","/fuel-converter"],
    ["Number System Converter", "/number-converter"],
  ],

];

// Active page detect karein
$currentPath = $_SERVER['REQUEST_URI'] ?? '/';
?>
<!DOCTYPE html>
<!-- ===== MEGA MENU PARTIAL — copy karo ya include karo ===== -->
<style>
/* ============================================================
   CSS VARIABLES — Ek jagah se rang badlein
   ============================================================ */
:root {
  --mm-grad-start: #881e8a;
  --mm-grad-end:   #2563eb;
  --mm-bg:         linear-gradient(135deg, var(--mm-grad-start), var(--mm-grad-end));
  --mm-text:       #ffffff;
  --mm-text-muted: rgba(255,255,255,0.75);
  --mm-hover-bg:   rgba(255,255,255,0.15);
  --mm-active-bg:  rgba(255,255,255,0.22);
  --mm-border:     rgba(255,255,255,0.18);
  --mm-shadow:     0 20px 60px rgba(0,0,0,0.35), 0 4px 16px rgba(136,30,138,0.25);
  --mm-panel-bg:   #0f172a;
  --mm-panel-border: rgba(255,255,255,0.08);
  --mm-col-hover:  rgba(255,255,255,0.06);
  --mm-link-hover: #c084fc;
  --mm-search-bg:  rgba(255,255,255,0.12);
  --mm-radius:     14px;
  --mm-height:     62px;
  --mm-font:       'Segoe UI', system-ui, -apple-system, sans-serif;
  --mm-transition: 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ============================================================
   RESET & BASE
   ============================================================ */
#mm-nav * { box-sizing: border-box; margin: 0; padding: 0; }
#mm-nav a { text-decoration: none; color: inherit; }
#mm-nav ul { list-style: none; }

/* ============================================================
   TOP NAV BAR
   ============================================================ */
#mm-nav {
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  font-family: var(--mm-font);
}

.mm-bar {
  background: var(--mm-bg);
  height: var(--mm-height);
  display: flex;
  align-items: center;
  padding: 0 18px;
  gap: 6px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.3);
  border-bottom: 1px solid var(--mm-border);
  position: relative;
}

/* Logo */
.mm-logo {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--mm-text);
  white-space: nowrap;
  letter-spacing: -0.3px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;
}
.mm-logo-icon {
  width: 32px; height: 32px;
  background: rgba(255,255,255,0.2);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

/* Main nav list */
.mm-links {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  overflow: hidden;
}

/* Each top-level item */
.mm-item {
  position: static;
  flex-shrink: 0;
}

.mm-item > .mm-trigger {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 11px;
  border-radius: 8px;
  color: var(--mm-text);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--mm-transition);
  white-space: nowrap;
  user-select: none;
  border: none;
  background: transparent;
  letter-spacing: 0.1px;
}
.mm-item > .mm-trigger:hover,
.mm-item.mm-open > .mm-trigger {
  background: var(--mm-hover-bg);
}
.mm-trigger .mm-arrow {
  font-size: 0.6rem;
  opacity: 0.7;
  transition: transform var(--mm-transition);
}
.mm-item.mm-open .mm-arrow { transform: rotate(180deg); }

/* Search */
.mm-search-wrap {
  display: flex;
  align-items: center;
  background: var(--mm-search-bg);
  border: 1px solid var(--mm-border);
  border-radius: 24px;
  padding: 5px 14px;
  gap: 7px;
  transition: background var(--mm-transition), border var(--mm-transition);
  flex-shrink: 0;
  margin-left: 6px;
}
.mm-search-wrap:focus-within {
  background: rgba(255,255,255,0.2);
  border-color: rgba(255,255,255,0.4);
}
.mm-search-input {
  background: none;
  border: none;
  outline: none;
  color: var(--mm-text);
  font-size: 0.82rem;
  width: 160px;
  font-family: var(--mm-font);
}
.mm-search-input::placeholder { color: var(--mm-text-muted); }
.mm-search-icon { color: var(--mm-text-muted); font-size: 0.9rem; flex-shrink: 0; }

/* Hamburger */
.mm-ham {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  border: none;
  background: var(--mm-hover-bg);
  margin-left: auto;
}
.mm-ham span {
  display: block;
  width: 22px; height: 2px;
  background: var(--mm-text);
  border-radius: 2px;
  transition: transform var(--mm-transition), opacity var(--mm-transition);
}
.mm-ham.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.mm-ham.active span:nth-child(2) { opacity: 0; }
.mm-ham.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ============================================================
   MEGA PANEL (Desktop)
   ============================================================ */
.mm-panel {
  display: none;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  width: min(1280px, 96vw);
  background: var(--mm-panel-bg);
  border: 1px solid var(--mm-panel-border);
  border-radius: var(--mm-radius);
  box-shadow: var(--mm-shadow);
  padding: 20px 24px 24px;
  animation: mmFadeDown 0.2s var(--mm-transition) both;
  z-index: 10000;
}

@keyframes mmFadeDown {
  from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

.mm-item.mm-open .mm-panel { display: block; }

/* Panel header */
.mm-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--mm-panel-border);
  padding-bottom: 14px;
  margin-bottom: 18px;
}
.mm-panel-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
}
.mm-panel-count {
  font-size: 0.72rem;
  background: linear-gradient(135deg, var(--mm-grad-start), var(--mm-grad-end));
  color: #fff;
  padding: 2px 9px;
  border-radius: 20px;
  font-weight: 600;
}

/* Grid of tool columns */
.mm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 6px;
}

/* Individual tool link */
.mm-tool-link {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 10px;
  border-radius: 8px;
  color: rgba(255,255,255,0.78);
  font-size: 0.78rem;
  font-weight: 500;
  transition: background var(--mm-transition), color var(--mm-transition);
  line-height: 1.35;
}
.mm-tool-link:hover {
  background: var(--mm-col-hover);
  color: var(--mm-link-hover);
}
.mm-tool-link::before {
  content: '›';
  color: var(--mm-link-hover);
  font-size: 1rem;
  opacity: 0;
  transition: opacity var(--mm-transition), transform var(--mm-transition);
  flex-shrink: 0;
}
.mm-tool-link:hover::before {
  opacity: 1;
  transform: translateX(2px);
}

/* Panel search results */
.mm-panel-search {
  display: none;
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
}
.mm-panel-search.active { display: flex; }
.mm-panel-grid-wrap { display: block; }
.mm-panel-grid-wrap.hidden { display: none; }

/* ============================================================
   SEARCH RESULTS OVERLAY
   ============================================================ */
#mm-search-overlay {
  display: none;
  position: absolute;
  top: calc(100% + 2px);
  right: 18px;
  width: 360px;
  background: var(--mm-panel-bg);
  border: 1px solid var(--mm-panel-border);
  border-radius: var(--mm-radius);
  box-shadow: var(--mm-shadow);
  padding: 14px;
  z-index: 10001;
  animation: mmFadeDown 0.18s ease both;
  max-height: 420px;
  overflow-y: auto;
}
#mm-search-overlay.active { display: block; }
.mm-search-results-title {
  font-size: 0.72rem;
  color: var(--mm-text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
}
.mm-search-result-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 8px;
  color: rgba(255,255,255,0.85);
  font-size: 0.82rem;
  font-weight: 500;
  transition: background var(--mm-transition);
  cursor: pointer;
}
.mm-search-result-item:hover { background: var(--mm-col-hover); color: var(--mm-link-hover); }
.mm-search-result-cat {
  font-size: 0.68rem;
  color: var(--mm-text-muted);
  margin-left: auto;
  white-space: nowrap;
  flex-shrink: 0;
}
.mm-no-results {
  text-align: center;
  color: var(--mm-text-muted);
  font-size: 0.82rem;
  padding: 20px 0;
}

/* ============================================================
   MOBILE DRAWER
   ============================================================ */
#mm-drawer {
  display: none;
  position: fixed;
  top: var(--mm-height);
  left: 0; right: 0; bottom: 0;
  background: #0d1117;
  z-index: 9998;
  overflow-y: auto;
  padding: 12px 16px 32px;
  border-top: 1px solid var(--mm-panel-border);
}
#mm-drawer.open { display: block; }

/* Mobile search */
.mm-mob-search {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.08);
  border: 1px solid var(--mm-panel-border);
  border-radius: 10px;
  padding: 10px 14px;
  gap: 8px;
  margin-bottom: 16px;
}
.mm-mob-search input {
  background: none; border: none; outline: none;
  color: #fff; font-size: 0.9rem; flex: 1;
  font-family: var(--mm-font);
}
.mm-mob-search input::placeholder { color: rgba(255,255,255,0.5); }

/* Mobile accordion */
.mm-mob-cat {
  border-bottom: 1px solid var(--mm-panel-border);
}
.mm-mob-cat-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 4px;
  background: none;
  border: none;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  font-family: var(--mm-font);
}
.mm-mob-cat-btn .mm-mob-arrow {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.5);
  transition: transform var(--mm-transition);
}
.mm-mob-cat.open .mm-mob-arrow { transform: rotate(180deg); }
.mm-mob-cat-links {
  display: none;
  flex-direction: column;
  gap: 2px;
  padding: 4px 0 12px;
}
.mm-mob-cat.open .mm-mob-cat-links { display: flex; }
.mm-mob-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  color: rgba(255,255,255,0.75);
  font-size: 0.82rem;
  font-weight: 500;
  transition: background var(--mm-transition);
}
.mm-mob-link:hover { background: rgba(255,255,255,0.07); color: #c084fc; }
.mm-mob-link::before { content: '→'; color: #c084fc; font-size: 0.75rem; }

/* Mobile search results */
#mm-mob-results { margin-top: 8px; }

/* Scrollbar styling for dark panel */
.mm-panel::-webkit-scrollbar,
#mm-search-overlay::-webkit-scrollbar,
#mm-drawer::-webkit-scrollbar { width: 5px; }
.mm-panel::-webkit-scrollbar-track,
#mm-search-overlay::-webkit-scrollbar-track,
#mm-drawer::-webkit-scrollbar-track { background: transparent; }
.mm-panel::-webkit-scrollbar-thumb,
#mm-search-overlay::-webkit-scrollbar-thumb,
#mm-drawer::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 900px) {
  .mm-links { display: none; }
  .mm-search-wrap { display: none; }
  .mm-ham { display: flex; }
}
@media (max-width: 500px) {
  .mm-logo span { display: none; }
}
</style>

<!-- ==================== NAVIGATION HTML ==================== -->
<nav id="mm-nav">
  <div class="mm-bar">

    <!-- Logo -->
    <a class="mm-logo" href="/">
      <div class="mm-logo-icon">⚡</div>
      <span>Free Online Tools</span>
    </a>

    <!-- Desktop Nav Links -->
    <ul class="mm-links" id="mm-links">
      <?php foreach ($megaMenuData as $catName => $tools): ?>
        <?php $catId = 'mm-cat-' . md5($catName); ?>
        <li class="mm-item" data-cat="<?= htmlspecialchars($catName) ?>" id="<?= $catId ?>">
          <button class="mm-trigger" aria-haspopup="true" aria-expanded="false">
            <?= htmlspecialchars($catName) ?>
            <span class="mm-arrow">▼</span>
          </button>

          <!-- Mega Panel -->
          <div class="mm-panel" role="region">
            <div class="mm-panel-head">
              <div class="mm-panel-title">
                <?= htmlspecialchars($catName) ?>
                <span class="mm-panel-count"><?= count($tools) ?> Tools</span>
              </div>
            </div>
            <!-- Panel search results (hidden by default) -->
            <div class="mm-panel-search" id="ps-<?= $catId ?>"></div>
            <!-- Tool grid -->
            <div class="mm-panel-grid-wrap mm-grid" id="pg-<?= $catId ?>">
              <?php foreach ($tools as [$name, $url]): ?>
                <a class="mm-tool-link"
                   href="<?= htmlspecialchars($url) ?>"
                   <?= ($currentPath === $url ? 'aria-current="page"' : '') ?>>
                  <?= htmlspecialchars($name) ?>
                </a>
              <?php endforeach; ?>
            </div>
          </div>
        </li>
      <?php endforeach; ?>
    </ul>

    <!-- Desktop Search -->
    <div class="mm-search-wrap" id="mm-search-wrap">
      <span class="mm-search-icon">🔍</span>
      <input
        type="search"
        class="mm-search-input"
        id="mm-search"
        placeholder="Search 500+ tools..."
        autocomplete="off"
        aria-label="Search tools"
      />
    </div>

    <!-- Global search overlay -->
    <div id="mm-search-overlay" role="listbox" aria-label="Search results"></div>

    <!-- Hamburger -->
    <button class="mm-ham" id="mm-ham" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div><!-- /mm-bar -->
</nav>

<!-- ==================== MOBILE DRAWER ==================== -->
<div id="mm-drawer" role="dialog" aria-label="Navigation menu">
  <div class="mm-mob-search">
    <span>🔍</span>
    <input type="search" id="mm-mob-search" placeholder="Search 500+ tools..." autocomplete="off" />
  </div>
  <div id="mm-mob-results"></div>

  <?php foreach ($megaMenuData as $catName => $tools): ?>
    <div class="mm-mob-cat">
      <button class="mm-mob-cat-btn">
        <?= htmlspecialchars($catName) ?>
        <span class="mm-mob-arrow">▼</span>
      </button>
      <div class="mm-mob-cat-links">
        <?php foreach ($tools as [$name, $url]): ?>
          <a class="mm-mob-link" href="<?= htmlspecialchars($url) ?>"><?= htmlspecialchars($name) ?></a>
        <?php endforeach; ?>
      </div>
    </div>
  <?php endforeach; ?>
</div>

<!-- ==================== JAVASCRIPT ==================== -->
<script>
(function () {
  "use strict";

  /* ─────────────────────────────────────────────────
     Build a flat tool index from PHP-rendered DOM
     ───────────────────────────────────────────────── */
  const toolIndex = [];
  document.querySelectorAll('.mm-item').forEach(item => {
    const cat = item.dataset.cat;
    item.querySelectorAll('.mm-tool-link').forEach(link => {
      toolIndex.push({ name: link.textContent.trim(), url: link.href, cat });
    });
  });

  /* ─────────────────────────────────────────────────
     Desktop: Mega-menu open / close
     ───────────────────────────────────────────────── */
  let openItem = null;
  const bar = document.querySelector('.mm-bar');

  function openMegaMenu(item) {
    if (openItem && openItem !== item) closeMegaMenu(openItem);
    item.classList.add('mm-open');
    const trigger = item.querySelector('.mm-trigger');
    trigger.setAttribute('aria-expanded', 'true');
    openItem = item;
  }

  function closeMegaMenu(item) {
    if (!item) return;
    item.classList.remove('mm-open');
    item.querySelector('.mm-trigger').setAttribute('aria-expanded', 'false');
    if (openItem === item) openItem = null;
  }

  document.querySelectorAll('.mm-item').forEach(item => {
    const trigger = item.querySelector('.mm-trigger');

    // Click toggle
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      item.classList.contains('mm-open') ? closeMegaMenu(item) : openMegaMenu(item);
    });

    // Hover open
    item.addEventListener('mouseenter', () => openMegaMenu(item));
    item.addEventListener('mouseleave', () => closeMegaMenu(item));
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!bar.contains(e.target)) {
      if (openItem) closeMegaMenu(openItem);
      hideSearchOverlay();
    }
  });

  /* ─────────────────────────────────────────────────
     Desktop Global Search
     ───────────────────────────────────────────────── */
  const searchInput  = document.getElementById('mm-search');
  const overlay      = document.getElementById('mm-search-overlay');

  function hideSearchOverlay() {
    overlay.classList.remove('active');
    overlay.innerHTML = '';
  }

  function renderSearchResults(q) {
    if (!q) { hideSearchOverlay(); return; }
    const results = toolIndex.filter(t =>
      t.name.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 18);

    if (!results.length) {
      overlay.innerHTML = `<div class="mm-search-results-title">Results</div>
        <div class="mm-no-results">No tools found for "<strong>${escHtml(q)}</strong>"</div>`;
    } else {
      overlay.innerHTML = `<div class="mm-search-results-title">${results.length} tools found</div>` +
        results.map(r => `
          <a class="mm-search-result-item" href="${r.url}">
            🔧 ${highlight(r.name, q)}
            <span class="mm-search-result-cat">${r.cat.replace(/^[^\s]+\s/,'')}</span>
          </a>`).join('');
    }
    overlay.classList.add('active');
  }

  searchInput.addEventListener('input', e => {
    if (openItem) closeMegaMenu(openItem);
    renderSearchResults(e.target.value.trim());
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') { hideSearchOverlay(); searchInput.blur(); }
  });

  /* ─────────────────────────────────────────────────
     Mobile: Hamburger
     ───────────────────────────────────────────────── */
  const ham    = document.getElementById('mm-ham');
  const drawer = document.getElementById('mm-drawer');

  ham.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    ham.classList.toggle('active', isOpen);
    ham.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Mobile accordion
  document.querySelectorAll('.mm-mob-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.parentElement;
      cat.classList.toggle('open');
    });
  });

  /* ─────────────────────────────────────────────────
     Mobile Search
     ───────────────────────────────────────────────── */
  const mobSearch  = document.getElementById('mm-mob-search');
  const mobResults = document.getElementById('mm-mob-results');

  mobSearch.addEventListener('input', e => {
    const q = e.target.value.trim();
    if (!q) { mobResults.innerHTML = ''; return; }

    const results = toolIndex.filter(t =>
      t.name.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 30);

    mobResults.innerHTML = results.length
      ? results.map(r => `
          <a class="mm-mob-link" href="${r.url}" style="border-radius:8px;margin-bottom:2px;">
            ${highlight(r.name, q)}
            <span style="margin-left:auto;font-size:0.68rem;color:rgba(255,255,255,0.4)">
              ${r.cat.replace(/^[^\s]+\s/,'')}
            </span>
          </a>`).join('')
      : `<div class="mm-no-results" style="color:rgba(255,255,255,0.5);font-size:0.82rem;padding:16px 0;text-align:center;">
          No tools found for "${escHtml(q)}"
        </div>`;
  });

  /* ─────────────────────────────────────────────────
     Helpers
     ───────────────────────────────────────────────── */
  function escHtml(s) {
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function highlight(text, q) {
    const safe = escHtml(text);
    const re = new RegExp(`(${escHtml(q).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    return safe.replace(re, '<mark style="background:rgba(192,132,252,0.3);color:#c084fc;border-radius:3px;padding:0 2px">$1</mark>');
  }

  /* Close drawer on resize to desktop */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      drawer.classList.remove('open');
      ham.classList.remove('active');
      ham.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

})();
</script>
<!-- ==================== END MEGA MENU ==================== -->
