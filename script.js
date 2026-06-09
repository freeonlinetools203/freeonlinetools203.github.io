// =========================================================================
// CENTRALIZED TOOLS DATABASE (COMPLETE - 170+ TOOLS)
// =========================================================================
const toolsDatabase = {
  // 1. MOST POPULAR TOOLS
  catMostPopular: {
    name: "✨ Most Popular Tools",
    tools: [
      "Spin The Wheel",
      "Random Color Picker",
      "Keyword Density Checker",
      "Instagram Hashtag Generator",
      "Age Calculator"
    ]
  },

  // 2. SOCIAL MEDIA HASHTAG TOOLS
  catHash: {
    name: "📱 Social Media Hashtag Tools",
    tools: [
      "Instagram Hashtag Generator",
      "LinkedIn Hashtag Generator",
      "Facebook Hashtag Generator",
      "Pinterest Hashtag Generator",
      "AI Hashtag Generator",
      "SEO Hashtags Generator",
      "Random Hashtag Generator",
      "TikTok Hashtag Generator",
      "Twitter Hashtag Generator",
      "Threads Hashtag Generator",
      "Trending Hashtags Today",
      "Viral Hashtag Generator",
      "YouTube Hashtag Generator",
      "Social Media Caption Generator"
    ]
  },

  // 3. SEO TOOLS
  catSeo: {
    name: "🔍 SEO Tools",
    tools: [
      "Keyword Density Checker",
      "Meta Tags Generator",
      "Meta Tag Analyzer",
      "Broken Link Checker",
      "Free Backlink Checker",
      "Google Index Checker",
      "SEO Analyzer",
      "SEO Score Checker",
      "SEO Title Generator",
      "SERP Snippet Preview",
      "Readability Checker",
      "Heading Structure Checker",
      "Image Alt Analyzer",
      "XML Sitemap Generator"
    ]
  },

  // 4. YOUTUBE TOOLS (24 TOOLS)
  catYoutube: {
    name: "🎬 YouTube Tools",
    tools: [
      "YouTube SEO Score Checker",
      "YouTube Keyword Generator",
      "YouTube Keyword Research",
      "YouTube Channel Analyzer",
      "YouTube Channel Comparison",
      "YouTube Viral Video Predictor",
      "YouTube SEO Checklist Generator",
      "YouTube Title Generator",
      "YouTube Description Generator",
      "YouTube Video Idea Generator",
      "YouTube Video Outline Generator",
      "YouTube Content Planner AI",
      "YouTube Video Tags Extractor",
      "YouTube Video Tags Generator",
      "YouTube Hashtag Generator",
      "YouTube Thumbnail Downloader",
      "YouTube Thumbnail Text Generator",
      "YouTube Thumbnail Color Palette Generator",
      "YouTube Thumbnail Split Tester",
      "YouTube Thumbnail CTR Predictor",
      "YouTube Shorts Hook Generator",
      "YouTube Shorts Script Generator",
      "YouTube Shorts Idea Calendar Generator",
      "YouTube Channel Name Generator",
      "YouTube Community Post Generator"
    ]
  },

  // 5. RANDOM & FUN TOOLS
  catFun: {
    name: "🎲 Random & Fun Tools",
    tools: [
      "Spin The Wheel",
      "Yes/No Wheel",
      "Decision Roulette",
      "Random Name Picker",
      "Random Number Generator",
      "Prize Wheel",
      "Lucky Prize Wheel",
      "Daily Lucky Number Wheel",
      "Task Spinner",
      "Art Roulette",
      "Chore Wheel",
      "Country Picker Wheel",
      "Decision Wheel",
      "Dinner Spinner",
      "Icebreaker Wheel",
      "Random Fact Wheel",
      "Random Animal Wheel",
      "Zodiac Wheel",
      "Twister Spinner",
      "Truth or Dare Generator",
      "Sketch or Dare",
      "Dare or Draw",
      "Hot Seat Challenge",
      "Stop Right There Wheel",
      "Holiday Activity Wheel",
      "Food Picker Wheel",
      "Drink Picker Wheel",
      "Exercise Wheel",
      "Workout Spinner",
      "Movie Picker Wheel",
      "You vs Food Wheel",
      "Mystery Gift Wheel",
      "Casino Games Wheel",
      "Color Wheel",
      "Name Picker Wheel",
      "Squid Game Spin Wheel",
      "Game Character Spin Wheel",
      "Party Games Spin Wheel",
      "Drinking Game Spin Wheel",
      "Board Game Spin Wheel",
      "Carnival Game Spin Wheel"
    ]
  },

  // 6. COLOR TOOLS
  catColor: {
    name: "🎨 Color Tools",
    tools: [
      "Color Palette Generator",
      "Palette Generator",
      "Color Shades Generator",
      "Color Gradient Maker",
      "Color Contrast Checker",
      "Color Name Finder",
      "Random Color Picker",
      "Color Wheel",
      "Image Color Extractor"
    ]
  },

  // 7. PDF TOOLS
  catPdf: {
    name: "📄 PDF Tools",
    tools: [
      "PDF Merger",
      "PDF Splitter",
      "PDF to Image",
      "PDF to JPG",
      "PDF to PNG",
      "PDF to BMP",
      "PDF to WEBP",
      "PDF to TIFF",
      "PDF to Word",
      "PDF to Excel",
      "PDF to Text",
      "PDF Rotator"
    ]
  },

  // 8. IMAGE TOOLS
  catImage: {
    name: "🖼️ Image Tools",
    tools: [
      "Image Color Extractor",
      "Image Converter",
      "Image Cropper",
      "Image Resizer",
      "Image to PDF",
      "Image Upscaler",
      "Image Compressor",
      "WebP Converter"
    ]
  },

  // 9. POPULAR CALCULATORS
  catPop: {
    name: "📊 Popular Calculators",
    tools: [
      "Unit Converter",
      "Age Calculator",
      "Age Difference Calculator",
      "Discount Calculator",
      "Profit & Loss Calculator",
      "GPA Calculator",
      "GST Calculator",
      "Percentage Calculator",
      "Date Calculator",
      "QR Code Generator",
      "Advanced QR Generator",
      "YouTube Thumbnail Downloader",
      "Currency Converter"
    ]
  },

  // 10. DEVELOPER & SECURITY TOOLS
  catDev: {
    name: "🔐 Developer & Security Tools",
    tools: [
      "MD5 Hash Generator",
      "SHA-256 Hash Generator",
      "SHA-1 Hash Generator",
      "Base64 Encoder/Decoder",
      "URL Encoder/Decoder",
      "HTML Encoder/Decoder",
      "HTML Minifier Pro",
      "JSON Formatter & Validator"
    ]
  },

  // 11. HEALTH & FITNESS
  catHealth: {
    name: "🏃‍♂️ Health & Fitness",
    tools: [
      "BMI Calculator",
      "BMR Calculator",
      "Calorie Calculator",
      "TDEE Calculator"
    ]
  },

  // 12. FINANCIAL TOOLS
  catFin: {
    name: "💰 Financial Tools",
    tools: [
      "EMI Calculator",
      "Loan Calculator",
      "Zakat Calculator",
      "SIP Calculator"
    ]
  },

  // 13. TEXT & WRITING TOOLS
  catText: {
    name: "📝 Text & Writing Tools",
    tools: [
      "Word Counter",
      "Line Counter",
      "Text Case Converter",
      "Password Generator",
      "Password Strength Checker"
    ]
  },

  // 14. ANIMAL PREGNANCY TOOLS
  catPreg: {
    name: "🐾 Animal Pregnancy Tools",
    tools: [
      "Dog Pregnancy Calculator",
      "Cat Pregnancy Calculator",
      "Cow Pregnancy Calculator",
      "Rabbit Pregnancy Calculator",
      "Goat Pregnancy Calculator",
      "Horse Pregnancy Calculator",
      "Sheep Pregnancy Calculator",
      "Pig Pregnancy Calculator"
    ]
  }
};

// =========================================================================
// TOOL URL MAPPING (COMPLETE - ALL TOOLS)
// =========================================================================
const toolUrlMap = {
    // SEO Tools
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
    
    // Social Media Hashtag Tools
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
    "YouTube Hashtag Generator": "youtube-hashtag-generator-v2.html",
    "Social Media Caption Generator": "social-media-caption-generator.html",
    
    // Animal Pregnancy Tools
    "Dog Pregnancy Calculator": "dog-pregnancy-calculator.html",
    "Cat Pregnancy Calculator": "cat-pregnancy-calculator.html",
    "Cow Pregnancy Calculator": "cow-pregnancy-calculator.html",
    "Rabbit Pregnancy Calculator": "rabbit-pregnancy-calculator.html",
    "Goat Pregnancy Calculator": "goat-pregnancy-calculator.html",
    "Horse Pregnancy Calculator": "horse-pregnancy-calculator.html",
    "Sheep Pregnancy Calculator": "sheep-pregnancy-calculator.html",
    "Pig Pregnancy Calculator": "pig-pregnancy-calculator.html",
    
    // Developer & Security Tools
    "MD5 Hash Generator": "md5-generator.html",
    "SHA-256 Hash Generator": "sha256-generator.html",
    "SHA-1 Hash Generator": "sha1-generator.html",
    "Base64 Encoder/Decoder": "base64-encoder-decoder.html",
    "URL Encoder/Decoder": "url-encoder-decoder.html",
    "HTML Encoder/Decoder": "html-encoder-decoder.html",
    "HTML Minifier Pro": "html-minifier-pro.html",
    "JSON Formatter & Validator": "json-formatter-validator.html",
    
    // Color Tools
    "Color Palette Generator": "color-palette-generator.html",
    "Palette Generator": "palette-generator.html",
    "Color Shades Generator": "color-shades-generator.html",
    "Color Gradient Maker": "color-gradient-maker.html",
    "Color Contrast Checker": "color-contrast-checker.html",
    "Color Name Finder": "color-name-finder.html",
    "Random Color Picker": "random-color-picker.html",
    "Color Wheel": "color-wheel-seo.html",
    
    // Popular Calculators
    "Unit Converter": "unit-converter.html",
    "Age Calculator": "age-calculator.html",
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
    
    // Health & Fitness
    "BMI Calculator": "bmi-calculator.html",
    "BMR Calculator": "bmr-calculator.html",
    "Calorie Calculator": "calorie-calculator.html",
    "TDEE Calculator": "tdee-calculator.html",
    
    // Financial Tools
    "EMI Calculator": "emi-calculator.html",
    "Loan Calculator": "loan-calculator.html",
    "Zakat Calculator": "zakat-calculator.html",
    "SIP Calculator": "sip-calculator.html",
    
    // Text & Writing Tools
    "Word Counter": "word-counter.html",
    "Line Counter": "line-counter.html",
    "Text Case Converter": "text-case-converter.html",
    "Password Generator": "password-generator.html",
    "Password Strength Checker": "password-checker.html",
    
    // PDF Tools
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
    
    // Image Tools
    "Image Color Extractor": "image-color-extractor.html",
    "Image Converter": "image-converter.html",
    "Image Cropper": "image-cropper.html",
    "Image Resizer": "image-resizer.html",
    "Image to PDF": "image-to-pdf.html",
    "Image Upscaler": "image-upscaler.html",
    "Image Compressor": "image-compressor.html",
    "WebP Converter": "webp-converter.html",
    
    // Wheel & Fun Tools
    "Spin The Wheel": "spin-the-wheel.html",
    "Yes/No Wheel": "yes-no-wheel.html",
    "Decision Roulette": "decision-roulette.html",
    "Random Name Picker": "random-name-picker.html",
    "Name Picker Wheel": "name-picker-wheel.html",
    "Random Number Generator": "random-number-generator.html",
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
    "Color Wheel": "color-wheel-seo.html",
    "Squid Game Spin Wheel": "squid-game-wheel.html",
    "Game Character Spin Wheel": "game-character-spin-wheel.html",
    "Party Games Spin Wheel": "party-games-spin-wheel.html",
    "Drinking Game Spin Wheel": "drinking-game-spin-wheel.html",
    "Board Game Spin Wheel": "board-game-spin-wheel.html",
    "Carnival Game Spin Wheel": "carnival-game-spin-wheel.html",

    // YouTube Tools (ALL 25)
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
// RENDER DASHBOARD
// =========================================================================
function renderDashboard() {
    const container = document.getElementById('toolsContainer');
    if (!container) return;
    
    const orderedCategoryKeys = [
        "catMostPopular", 
        "catHash", 
        "catSeo", 
        "catYoutube",
        "catFun", 
        "catColor",
        "catPdf", 
        "catImage", 
        "catPop", 
        "catDev", 
        "catHealth",
        "catFin", 
        "catText", 
        "catPreg"
    ];
    
    let html = '';
    for (const key of orderedCategoryKeys) {
        const cat = toolsDatabase[key];
        if (!cat) continue;
        html += `<div class="section" data-category="${key}" id="section_${key}">
            <h2>${cat.name}</h2>
            <div class="tools-grid">
                ${cat.tools.map(tool => `<div class="tool-card"><a href="${getUrl(tool)}">${tool}</a></div>`).join('')}
            </div>
        </div>`;
    }
    container.innerHTML = html;
}

// =========================================================================
// GENERATE MOBILE MENU
// =========================================================================
function generateMobileMenu() {
    let html = `<ul class="mobile-nav">
      <li><a href="https://freeonlinetools203.com/index.html">🏠 Home</a></li>
      <li>
        <a href="#" class="mobile-dropdown-toggle" id="mobileToolsToggle">🛠️ All Tools</a>
        <div class="mobile-dropdown-content" id="mobileToolsContent">`;

    for (const [catKey, catData] of Object.entries(toolsDatabase)) {
        html += `<h4>${catData.name}</h4>`;
        catData.tools.forEach(tool => {
            html += `<a href="${getUrl(tool)}">${tool}</a>`;
        });
    }

    html += `</div></li>
      <li><a href="https://freeonlinetools203.com/about.html">ℹ️ About</a></li>
      <li><a href="https://freeonlinetools203.com/contact.html">📧 Contact</a></li>
      <li><a href="https://freeonlinetools203.com/privacy-policy.html">🔒 Privacy</a></li>
      <li><a href="https://freeonlinetools203.com/terms-conditions.html">📜 Terms</a></li>
      <li><a href="https://freeonlinetools203.com/disclaimer.html">⚠️ Disclaimer</a></li>
    </ul>`;
    return html;
}

// =========================================================================
// POPULATE FOOTER
// =========================================================================
function populateFooter() {
    const footerCol = document.getElementById('footerPopularTools');
    if (!footerCol) return;
    const popularTools = toolsDatabase.catPop.tools.slice(0, 6);
    let html = '<h4>Popular Tools</h4>';
    popularTools.forEach(tool => { html += `<a href="${getUrl(tool)}">${tool}</a>`; });
    footerCol.innerHTML = html;
}

// =========================================================================
// NAVBAR CSS
// =========================================================================
const navbarCSS = `<style>
.megamenu-container{width:100%;background:linear-gradient(to right,#881e8a,#2563eb);position:relative;z-index:1000;box-shadow:0 4px 15px rgba(0,0,0,0.1)}
.megamenu-wrapper{max-width:1400px;margin:0 auto;padding:0 15px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;min-height:60px}
.megamenu-logo a{display:flex;align-items:center;gap:8px;color:white;font-size:1.2rem;font-weight:bold;text-decoration:none;padding:12px 0}
.megamenu-logo img{height:40px;width:auto}
.megamenu-nav{display:flex;gap:5px;list-style:none;margin:0;padding:0}
.megamenu-nav>li{position:static}
.megamenu-nav>li>a{display:block;color:white;text-decoration:none;padding:12px 15px;font-size:0.95rem;font-weight:500;transition:all 0.3s ease;border-radius:8px}
.megamenu-nav>li>a:hover{background:rgba(255,255,255,0.15)}
.has-dropdown>a::after{content:" ▼";font-size:10px;margin-left:5px}
.mega-dropdown{position:absolute;top:100%;left:0;right:0;width:100%;background:white;border-radius:0 0 12px 12px;box-shadow:0 20px 40px rgba(0,0,0,0.15);opacity:0;visibility:hidden;transition:all 0.25s ease;z-index:1001}
.megamenu-nav>li:hover .mega-dropdown{opacity:1;visibility:visible}
.dropdown-scroll{max-height:500px;overflow-y:auto;overflow-x:hidden;padding:20px}
.dropdown-scroll::-webkit-scrollbar{width:8px}
.dropdown-scroll::-webkit-scrollbar-track{background:#f1f1f1;border-radius:10px}
.dropdown-scroll::-webkit-scrollbar-thumb{background:#881e8a;border-radius:10px}
.dropdown-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:20px}
.dropdown-column h4{color:#881e8a;font-size:0.9rem;margin-bottom:10px;padding-bottom:5px;border-bottom:2px solid #2563eb;position:sticky;top:0;background:white;z-index:1}
.dropdown-column a{display:block;color:#333;text-decoration:none;padding:6px 0;font-size:0.8rem;transition:all 0.2s;border-bottom:1px solid #f0f0f0}
.dropdown-column a:hover{color:#2563eb;padding-left:8px}
.mobile-toggle{display:none;background:none;border:none;color:white;font-size:28px;cursor:pointer;padding:10px}
.mobile-toggle{font-weight:bold;font-size:1.3rem}
.mobile-menu{display:none;background:white;width:100%;max-height:0;overflow:hidden;transition:max-height 0.4s ease}
.mobile-menu.open{display:block;max-height:80vh;overflow-y:auto}
.mobile-nav{list-style:none;margin:0;padding:0}
.mobile-nav>li{border-bottom:1px solid #eee}
.mobile-nav>li>a{display:block;padding:14px 16px;color:#333;text-decoration:none;font-weight:500}
.mobile-dropdown-toggle{display:flex!important;justify-content:space-between;align-items:center}
.mobile-dropdown-toggle::after{content:"▼";font-size:10px;color:#888}
.mobile-dropdown-toggle.open::after{content:"▲"}
.mobile-dropdown-content{padding-left:20px;display:none;background:#f9f9f9;max-height:300px;overflow-y:auto}
.mobile-dropdown-content.open{display:block}
.mobile-dropdown-content h4{padding:10px 0 5px 12px;color:#881e8a;font-size:0.85rem;font-weight:bold;position:sticky;top:0;background:#f9f9f9}
.mobile-dropdown-content a{display:block;padding:8px 12px 8px 20px;color:#555;text-decoration:none;font-size:0.85rem;border-bottom:1px solid #eee}
@media(max-width:768px){.megamenu-nav{display:none}.mobile-toggle{display:block}.mega-dropdown{display:none}}
</style>`;

// =========================================================================
// NAVBAR HTML (6 COLUMNS - ALL TOOLS INCLUDED)
// =========================================================================
const navbarHTML = `<div class="megamenu-container">
  <div class="megamenu-wrapper">
    <div class="megamenu-logo">
      <a href="https://freeonlinetools203.com/index.html">
        <img src="https://freeonlinetools203.com/3.jpeg.png" alt="Free Online Tools">
        <span>✨ Free Online Tools</span>
      </a>
    </div>
    <ul class="megamenu-nav">
      <li><a href="https://freeonlinetools203.com/index.html">🏠 Home</a></li>
      <li class="has-dropdown">
        <a href="#">🛠️ All Tools</a>
        <div class="mega-dropdown"><div class="dropdown-scroll"><div class="dropdown-grid">
          
          <!-- COLUMN 1: Most Popular + Social Media Hashtag Tools -->
          <div class="dropdown-column">
            <h4>✨ Most Popular Tools</h4>
            <a href="spin-the-wheel.html">🎡 Spin The Wheel</a>
            <a href="random-color-picker.html">🎨 Random Color Picker</a>
            <a href="keyword-density-checker.html">🔑 Keyword Density Checker</a>
            <a href="instagram-hashtag-generator.html">📱 Instagram Hashtag Generator</a>
            <a href="age-calculator.html">📅 Age Calculator</a>
            
            <h4>📱 Social Media Hashtag Tools</h4>
            <a href="instagram-hashtag-generator.html">📸 Instagram Hashtag Generator</a>
            <a href="linkedin-hashtag-generator.html">💼 LinkedIn Hashtag Generator</a>
            <a href="facebook-hashtag-generator.html">📘 Facebook Hashtag Generator</a>
            <a href="pinterest-hashtag-generator.html">📌 Pinterest Hashtag Generator</a>
            <a href="ai-hashtag-generator.html">🤖 AI Hashtag Generator</a>
            <a href="seo-hashtags-generator.html">🔎 SEO Hashtags Generator</a>
            <a href="random-hashtag-generator.html">🎲 Random Hashtag Generator</a>
            <a href="tiktok-hashtag-generator.html">🎵 TikTok Hashtag Generator</a>
            <a href="twitter-hashtag-generator.html">🐦 Twitter Hashtag Generator</a>
            <a href="threads-hashtag-generator.html">🧵 Threads Hashtag Generator</a>
            <a href="trending-hashtags-today.html">📈 Trending Hashtags Today</a>
            <a href="viral-hashtag-generator.html">⚡ Viral Hashtag Generator</a>
            <a href="youtube-hashtag-generator-v2.html">📺 YouTube Hashtag Generator</a>
            <a href="social-media-caption-generator.html">✍️ Social Media Caption Generator</a>
          </div>
          
          <!-- COLUMN 2: SEO Tools + Random & Fun Tools -->
          <div class="dropdown-column">
            <h4>🔍 SEO Tools</h4>
            <a href="keyword-density-checker.html">Keyword Density Checker</a>
            <a href="meta-tags-generator.html">Meta Tags Generator</a>
            <a href="meta-tag-analyzer.html">Meta Tag Analyzer</a>
            <a href="broken-link-checker.html">Broken Link Checker</a>
            <a href="free-backlink-checker.html">Free Backlink Checker</a>
            <a href="google-index-checker.html">Google Index Checker</a>
            <a href="seo-analyzer.html">SEO Analyzer</a>
            <a href="seo-score-checker.html">SEO Score Checker</a>
            <a href="seo-title-generator.html">SEO Title Generator</a>
            <a href="serp-snippet-preview.html">SERP Snippet Preview</a>
            <a href="readability-checker.html">Readability Checker</a>
            <a href="heading-structure-checker.html">Heading Structure Checker</a>
            <a href="image-alt-analyzer.html">Image Alt Analyzer</a>
            <a href="xml-sitemap-generator.html">XML Sitemap Generator</a>
            
            <h4>🎲 Random & Fun Tools</h4>
            <a href="spin-the-wheel.html">🎡 Spin The Wheel</a>
            <a href="yes-no-wheel.html">✅ Yes/No Wheel</a>
            <a href="decision-roulette.html">🎯 Decision Roulette</a>
            <a href="decision-wheel.html">🤔 Decision Wheel</a>
            <a href="random-name-picker.html">🏷️ Random Name Picker</a>
            <a href="name-picker-wheel.html">🎯 Name Picker Wheel</a>
            <a href="random-number-generator.html">🔢 Random Number Generator</a>
            <a href="prize-wheel.html">🏆 Prize Wheel</a>
            <a href="lucky-prize-wheel.html">🍀 Lucky Prize Wheel</a>
            <a href="daily-lucky-number-wheel.html">🔢 Daily Lucky Number Wheel</a>
            <a href="task-spinner.html">📋 Task Spinner</a>
            <a href="random-animal-wheel.html">🐾 Random Animal Wheel</a>
            <a href="art-roulette-seo.html">🎨 Art Roulette</a>
            <a href="chore-wheel-seo.html">🧹 Chore Wheel</a>
            <a href="country-picker-wheel-seo.html">🌍 Country Picker Wheel</a>
            <a href="dinner-spinner.html">🍽️ Dinner Spinner</a>
            <a href="food-picker-wheel.html">🍕 Food Picker Wheel</a>
            <a href="you-vs-food-wheel.html">🍔 You vs Food Wheel</a>
            <a href="movie-picker-wheel.html">🎬 Movie Picker Wheel</a>
            <a href="drink-wheel.html">🍹 Drink Picker Wheel</a>
            <a href="exercise-wheel.html">🏋️ Exercise Wheel</a>
            <a href="workout-spinner.html">💪 Workout Spinner</a>
            <a href="mystery-gift-wheel.html">🎁 Mystery Gift Wheel</a>
            <a href="casino-games-wheel.html">🎰 Casino Games Wheel</a>
            <a href="color-wheel-seo.html">🎨 Color Wheel</a>
            <a href="icebreaker-wheel-seo.html">🗣️ Icebreaker Wheel</a>
            <a href="random-fact-wheel-seo.html">📚 Random Fact Wheel</a>
            <a href="zodiac-wheel.html">♈ Zodiac Wheel</a>
            <a href="twister-spinner-seo.html">🌀 Twister Spinner</a>
            <a href="truth-or-dare-generator.html">💬 Truth or Dare Generator</a>
            <a href="sketch-or-dare-seo.html">✏️ Sketch or Dare</a>
            <a href="dare-or-draw-seo.html">🎨 Dare or Draw</a>
            <a href="hot-seat-challenge-seo.html">🔥 Hot Seat Challenge</a>
            <a href="stop-right-there-wheel.html">🛑 Stop Right There Wheel</a>
            <a href="holiday-wheel.html">🎄 Holiday Activity Wheel</a>
            <a href="squid-game-wheel.html">🦑 Squid Game Spin Wheel</a>
            <a href="game-character-spin-wheel.html">🎮 Game Character Spin Wheel</a>
            <a href="party-games-spin-wheel.html">🎉 Party Games Spin Wheel</a>
            <a href="drinking-game-spin-wheel.html">🍻 Drinking Game Spin Wheel</a>
            <a href="board-game-spin-wheel.html">🎲 Board Game Spin Wheel</a>
            <a href="carnival-game-spin-wheel.html">🎪 Carnival Game Spin Wheel</a>
          </div>
          
          <!-- COLUMN 3: YouTube Tools (ALL 25) -->
          <div class="dropdown-column">
            <h4>🎬 YouTube SEO & Analytics</h4>
            <a href="youtube-seo-score-checker.html">📊 YouTube SEO Score Checker</a>
            <a href="youtube-keyword-generator.html">🔑 YouTube Keyword Generator</a>
            <a href="youtube-keyword-research.html">📈 YouTube Keyword Research</a>
            <a href="youtube-channel-analyzer.html">📺 YouTube Channel Analyzer</a>
            <a href="youtube-channel-comparison.html">⚖️ YouTube Channel Comparison</a>
            <a href="youtube-viral-video-predictor.html">🚀 YouTube Viral Video Predictor</a>
            <a href="youtube-seo-checklist-generator.html">✅ YouTube SEO Checklist Generator</a>
            
            <h4>📝 YouTube Content Creation</h4>
            <a href="youtube-title-generator.html">📝 YouTube Title Generator</a>
            <a href="youtube-description-generator.html">📄 YouTube Description Generator</a>
            <a href="youtube-video-idea-generator.html">💡 YouTube Video Idea Generator</a>
            <a href="youtube-video-outline-generator.html">📋 YouTube Video Outline Generator</a>
            <a href="youtube-content-planner-ai.html">📅 YouTube Content Planner AI</a>
            
            <h4>🏷️ YouTube Tags & Hashtags</h4>
            <a href="youtube-video-tags-extractor.html">🏷️ YouTube Video Tags Extractor</a>
            <a href="youtube-video-tags-generator.html">🏷️ YouTube Video Tags Generator</a>
            <a href="youtube-hashtag-generator-v2.html">#️⃣ YouTube Hashtag Generator</a>
            
            <h4>🎨 YouTube Thumbnail Tools</h4>
            <a href="youtube-thumbnail-downloader.html">🖼️ YouTube Thumbnail Downloader</a>
            <a href="youtube-thumbnail-text-generator.html">✍️ YouTube Thumbnail Text Generator</a>
            <a href="youtube-thumbnail-color-palette-generator.html">🎨 YouTube Thumbnail Color Palette</a>
            <a href="youtube-thumbnail-split-tester.html">🔄 YouTube Thumbnail Split Tester</a>
            <a href="thumbnail-ctr-predictor.html">📊 YouTube Thumbnail CTR Predictor</a>
            
            <h4>📱 YouTube Shorts Tools</h4>
            <a href="youtube-shorts-hook-generator.html">🎯 YouTube Shorts Hook Generator</a>
            <a href="youtube-shorts-script-generator.html">🎬 YouTube Shorts Script Generator</a>
            <a href="youtube-shorts-idea-calendar-generator.html">📅 YouTube Shorts Idea Calendar</a>
            
            <h4>🎬 YouTube Branding & Community</h4>
            <a href="youtube-channel-name-generator.html">🎬 YouTube Channel Name Generator</a>
            <a href="youtube-community-post-generator.html">💬 YouTube Community Post Generator</a>
          </div>
          
          <!-- COLUMN 4: Color + PDF + Image Tools -->
          <div class="dropdown-column">
            <h4>🎨 Color Tools</h4>
            <a href="color-palette-generator.html">Color Palette Generator</a>
            <a href="palette-generator.html">Palette Generator</a>
            <a href="color-shades-generator.html">Color Shades Generator</a>
            <a href="color-gradient-maker.html">Color Gradient Maker</a>
            <a href="color-contrast-checker.html">Color Contrast Checker</a>
            <a href="color-name-finder.html">Color Name Finder</a>
            <a href="random-color-picker.html">Random Color Picker</a>
            <a href="color-wheel-seo.html">Color Wheel</a>
            <a href="image-color-extractor.html">Image Color Extractor</a>
            
            <h4>📄 PDF Tools</h4>
            <a href="pdf-merger.html">PDF Merger</a>
            <a href="pdf-splitter.html">PDF Splitter</a>
            <a href="pdf-to-image.html">PDF to Image</a>
            <a href="pdf-to-jpg.html">PDF to JPG</a>
            <a href="pdf-to-png.html">PDF to PNG</a>
            <a href="pdf-to-bmp.html">PDF to BMP</a>
            <a href="pdf-to-webp.html">PDF to WEBP</a>
            <a href="pdf-to-tiff.html">PDF to TIFF</a>
            <a href="pdf-to-word.html">PDF to Word</a>
            <a href="pdf-to-excel.html">PDF to Excel</a>
            <a href="pdf-to-text.html">PDF to Text</a>
            <a href="pdf-rotator.html">PDF Rotator</a>
            
            <h4>🖼️ Image Tools</h4>
            <a href="image-converter.html">Image Converter</a>
            <a href="image-cropper.html">Image Cropper</a>
            <a href="image-resizer.html">Image Resizer</a>
            <a href="image-to-pdf.html">Image to PDF</a>
            <a href="image-upscaler.html">Image Upscaler</a>
            <a href="image-compressor.html">Image Compressor</a>
            <a href="webp-converter.html">WebP Converter</a>
          </div>
          
          <!-- COLUMN 5: Calculators + Developer Tools -->
          <div class="dropdown-column">
            <h4>📊 Popular Calculators</h4>
            <a href="unit-converter.html">Unit Converter</a>
            <a href="age-calculator.html">Age Calculator</a>
            <a href="age-difference-calculator.html">Age Difference Calculator</a>
            <a href="discount-calculator.html">Discount Calculator</a>
            <a href="profit-loss-calculator.html">Profit & Loss Calculator</a>
            <a href="gpa-calculator.html">GPA Calculator</a>
            <a href="gst-calculator.html">GST Calculator</a>
            <a href="percentage-calculator.html">Percentage Calculator</a>
            <a href="date-calculator.html">Date Calculator</a>
            <a href="qr-code-generator.html">QR Code Generator</a>
            <a href="advanced-qr-generator.html">Advanced QR Generator</a>
            <a href="currency-converter.html">Currency Converter</a>
            
            <h4>🔐 Developer & Security Tools</h4>
            <a href="md5-generator.html">MD5 Hash Generator</a>
            <a href="sha256-generator.html">SHA-256 Hash Generator</a>
            <a href="sha1-generator.html">SHA-1 Hash Generator</a>
            <a href="base64-encoder-decoder.html">Base64 Encoder/Decoder</a>
            <a href="url-encoder-decoder.html">URL Encoder/Decoder</a>
            <a href="html-encoder-decoder.html">HTML Encoder/Decoder</a>
            <a href="html-minifier-pro.html">HTML Minifier Pro</a>
            <a href="json-formatter-validator.html">JSON Formatter & Validator</a>
          </div>
          
          <!-- COLUMN 6: Health + Finance + Text + Animal -->
          <div class="dropdown-column">
            <h4>🏃‍♂️ Health & Fitness</h4>
            <a href="bmi-calculator.html">BMI Calculator</a>
            <a href="bmr-calculator.html">BMR Calculator</a>
            <a href="calorie-calculator.html">Calorie Calculator</a>
            <a href="tdee-calculator.html">TDEE Calculator</a>
            
            <h4>💰 Financial Tools</h4>
            <a href="emi-calculator.html">EMI Calculator</a>
            <a href="loan-calculator.html">Loan Calculator</a>
            <a href="sip-calculator.html">SIP Calculator</a>
            <a href="zakat-calculator.html">Zakat Calculator</a>
            
            <h4>📝 Text & Writing Tools</h4>
            <a href="word-counter.html">Word Counter</a>
            <a href="line-counter.html">Line Counter</a>
            <a href="text-case-converter.html">Text Case Converter</a>
            <a href="password-generator.html">Password Generator</a>
            <a href="password-checker.html">Password Strength Checker</a>
            
            <h4>🐾 Animal Pregnancy Tools</h4>
            <a href="dog-pregnancy-calculator.html">Dog Pregnancy Calculator</a>
            <a href="cat-pregnancy-calculator.html">Cat Pregnancy Calculator</a>
            <a href="cow-pregnancy-calculator.html">Cow Pregnancy Calculator</a>
            <a href="rabbit-pregnancy-calculator.html">Rabbit Pregnancy Calculator</a>
            <a href="goat-pregnancy-calculator.html">Goat Pregnancy Calculator</a>
            <a href="horse-pregnancy-calculator.html">Horse Pregnancy Calculator</a>
            <a href="sheep-pregnancy-calculator.html">Sheep Pregnancy Calculator</a>
            <a href="pig-pregnancy-calculator.html">Pig Pregnancy Calculator</a>
          </div>
          
        </div></div></div>
      </li>
      <li><a href="https://freeonlinetools203.com/about.html">ℹ️ About</a></li>
      <li><a href="https://freeonlinetools203.com/contact.html">📧 Contact</a></li>
      <li><a href="https://freeonlinetools203.com/privacy-policy.html">🔒 Privacy</a></li>
      <li><a href="https://freeonlinetools203.com/terms-conditions.html">📜 Terms</a></li>
      <li><a href="https://freeonlinetools203.com/disclaimer.html">⚠️ Disclaimer</a></li>
    </ul>
    <button class="mobile-toggle" id="mobileToggle">☰</button>
  </div>
  <div class="mobile-menu" id="mobileMenu"></div>
</div>`;

// =========================================================================
// PAGE ONLOAD
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.head.insertAdjacentHTML('beforeend', navbarCSS);
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    const mobileMenuDiv = document.getElementById('mobileMenu');
    if (mobileMenuDiv) {
        mobileMenuDiv.innerHTML = generateMobileMenu();
    }
    
    renderDashboard();
    populateFooter();
    
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }
    
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'mobileToolsToggle') {
            e.preventDefault();
            const toggle = e.target;
            const content = document.getElementById('mobileToolsContent');
            if (toggle && content) {
                toggle.classList.toggle('open');
                content.classList.toggle('open');
            }
        }
    });
});

// ========== SEARCH BAR FUNCTIONALITY ==========
(function() {
  function waitForDashboard() {
    var container = document.getElementById('toolsContainer');
    if (container && container.innerHTML !== '<div class="loader">Loading professional tools...</div>') {
      attachSearchEvents();
    } else {
      setTimeout(waitForDashboard, 100);
    }
  }
  
  function attachSearchEvents() {
    var input = document.getElementById('tsInput');
    if (!input) return;
    
    window.tsSearch = function() {
      var q = document.getElementById('tsInput');
      if (!q) return;
      
      var query = q.value.toLowerCase().trim();
      var label = document.getElementById('tsResultLabel');
      var grid = document.getElementById('tsResults');
      
      if (!grid) return;
      grid.innerHTML = '';
      
      if (!query) {
        if(label) label.style.display = 'none';
        return;
      }
      
      if (typeof gtag !== 'undefined' && query.length >= 2) {
        gtag('event', 'search_used', {
          'search_term': query,
          'event_category': 'engagement'
        });
      }
      
      var list = [];
      if (typeof toolUrlMap !== 'undefined') {
        for (var name in toolUrlMap) {
          if (toolUrlMap.hasOwnProperty(name)) {
            list.push([name, toolUrlMap[name]]);
          }
        }
      }
      
      var found = list.filter(function(t) {
        return t[0].toLowerCase().indexOf(query) !== -1;
      });
      
      if(label) {
        label.style.display = 'block';
        if (found.length === 0) {
          label.textContent = '';
          grid.innerHTML = '<div class="ts-no-result">❌ Koi tool nahi mila — dusra keyword try karein.</div>';
          return;
        }
        label.textContent = '✨ ' + found.length + ' tool(s) mile:';
      }
      
      found.forEach(function(t) {
        var a = document.createElement('a');
        a.className = 'ts-result-card';
        a.href = 'https://freeonlinetools203.com/' + t[1];
        a.textContent = t[0];
        grid.appendChild(a);
      });
    };
    
    window.tsQuick = function(val) {
      var inp = document.getElementById('tsInput');
      if (inp) {
        inp.value = val;
        tsSearch();
      }
    };
    
    input.addEventListener('keyup', function(e) {
      var val = this.value;
      if (e.key === 'Enter') {
        tsSearch();
      } else if (val.length >= 2) {
        tsSearch();
      } else if (val.length === 0) {
        var lbl = document.getElementById('tsResultLabel');
        var grd = document.getElementById('tsResults');
        if(lbl) lbl.style.display = 'none';
        if(grd) grd.innerHTML = '';
      }
    });
  }
  
  waitForDashboard();
})();
