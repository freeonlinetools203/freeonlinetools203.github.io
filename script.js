// =========================================================================
// CENTRALIZED TOOLS DATABASE (UNCHANGED)
// =========================================================================
const toolsDatabase = {
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
        "XML Sitemap Generator",
        "ultrasound-scanner.html"
    ]
},
    catHash: {
        name: "📱 Social Media Hashtag Tools",
        tools: ["Instagram Hashtag Generator","LinkedIn Hashtag Generator","Facebook Hashtag Generator","Pinterest Hashtag Generator","AI Hashtag Generator","SEO Hashtags Generator"]
    },
    catPreg: {
        name: "🐾 Animal Pregnancy Tools",
        tools: ["Dog Pregnancy Calculator","Cat Pregnancy Calculator","Cow Pregnancy Calculator","Rabbit Pregnancy Calculator","Goat Pregnancy Calculator","Horse Pregnancy Calculator","Sheep Pregnancy Calculator","Pig Pregnancy Calculator"]
    },
    catDev: {
        name: "🔐 Developer & Security Tools",
        tools: ["MD5 Hash Generator","SHA-256 Hash Generator","SHA-1 Hash Generator","Base64 Encoder/Decoder","URL Encoder/Decoder","HTML Encoder/Decoder"]
    },
    catColor: {
        name: "🎨 Color Tools",
        tools: ["Color Palette Generator","Color Shades Generator","Color Gradient Maker","Color Contrast Checker","Color Name Finder","Random Color Picker"]
    },
    catPop: {
        name: "📊 Popular Calculators",
        tools: ["Unit Converter","Age Calculator","Age Difference Calculator","Discount Calculator","Profit & Loss Calculator","GPA Calculator","GST Calculator","Percentage Calculator","Date Calculator","QR Code Generator","YouTube Thumbnail Downloader","Currency Converter"]
    },
    catHealth: {
        name: "🏃‍♂️ Health & Fitness",
        tools: ["BMI Calculator","BMR Calculator","Calorie Calculator","TDEE Calculator"]
    },
    catFin: {
        name: "💰 Financial Tools",
        tools: ["EMI Calculator","Loan Calculator","Zakat Calculator","SIP Calculator"]
    },
    catText: {
        name: "📝 Text & Writing Tools",
        tools: ["Word Counter","Line Counter","Text Case Converter","Password Generator","Password Strength Checker"]
    },
    catPdf: {
        name: "📄 PDF Tools",
        tools: ["PDF Merger","PDF Splitter","PDF to Image","PDF to JPG","PDF to PNG","PDF to BMP","PDF to WEBP","PDF to TIFF","PDF to Word","PDF to Excel","PDF to Text","PDF Rotator"]
    },
    catImage: {
        name: "🖼️ Image Tools",
        tools: ["Image Color Extractor","Image Converter","Image Cropper","Image Resizer","Image to PDF","Image Upscaler","Image Compressor"]
    },
    catFun: {
        name: "🎲 Random & Fun Tools",
        tools: [
            "Spin The Wheel","Yes/No Wheel","Decision Roulette","Random Name Picker",
            "Random Number Generator","Prize Wheel","Task Spinner","Art Roulette",
            "Chore Wheel","Country Picker Wheel","Decision Wheel","Dinner Spinner",
            "Icebreaker Wheel","Random Fact Wheel","Zodiac Wheel","Twister Spinner",
            "Truth or Dare Generator","Sketch or Dare","Hot Seat Challenge",
            "Holiday Activity Wheel","Food Picker Wheel","Drink Picker Wheel","Exercise Wheel"
        ]
    }
};

// =========================================================================
// TOOL URL MAPPING (SAME AS BEFORE)
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
    "Ultrasound Scanner": "ultrasound-scanner.html",
    // Hashtag Tools
    "Instagram Hashtag Generator": "instagram-hashtag-generator.html",
    "LinkedIn Hashtag Generator": "linkedin-hashtag-generator.html",
    "Facebook Hashtag Generator": "facebook-hashtag-generator.html",
    "Pinterest Hashtag Generator": "pinterest-hashtag-generator.html",
    "AI Hashtag Generator": "ai-hashtag-generator.html",
    "SEO Hashtags Generator": "seo-hashtags-generator.html",
    // Animal Pregnancy
    "Dog Pregnancy Calculator": "dog-pregnancy-calculator.html",
    "Cat Pregnancy Calculator": "cat-pregnancy-calculator.html",
    "Cow Pregnancy Calculator": "cow-pregnancy-calculator.html",
    "Rabbit Pregnancy Calculator": "rabbit-pregnancy-calculator.html",
    "Goat Pregnancy Calculator": "goat-pregnancy-calculator.html",
    "Horse Pregnancy Calculator": "horse-pregnancy-calculator.html",
    "Sheep Pregnancy Calculator": "sheep-pregnancy-calculator.html",
    "Pig Pregnancy Calculator": "pig-pregnancy-calculator.html",
    // Developer & Security
    "MD5 Hash Generator": "md5-generator.html",
    "SHA-256 Hash Generator": "sha256-generator.html",
    "SHA-1 Hash Generator": "sha1-generator.html",
    "Base64 Encoder/Decoder": "base64-encoder-decoder.html",
    "URL Encoder/Decoder": "url-encoder-decoder.html",
    "HTML Encoder/Decoder": "html-encoder-decoder.html",
    // Color Tools
    "Color Palette Generator": "color-palette-generator.html",
    "Color Shades Generator": "color-shades-generator.html",
    "Color Gradient Maker": "color-gradient-maker.html",
    "Color Contrast Checker": "color-contrast-checker.html",
    "Color Name Finder": "color-name-finder.html",
    "Random Color Picker": "random-color-picker.html",
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
    "YouTube Thumbnail Downloader": "youtube-thumbnail-downloader.html",
    "Currency Converter": "currency-converter.html",
    // Health & Fitness
    "BMI Calculator": "bmi-calculator.html",
    "BMR Calculator": "bmr-calculator.html",
    "Calorie Calculator": "calorie-calculator.html",
    "TDEE Calculator": "tdee-calculator.html",
    // Financial
    "EMI Calculator": "emi-calculator.html",
    "Loan Calculator": "loan-calculator.html",
    "Zakat Calculator": "zakat-calculator.html",
    "SIP Calculator": "sip-calculator.html",
    // Text & Writing
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
    // Fun Tools
    "Spin The Wheel": "spin-the-wheel.html",
    "Yes/No Wheel": "yes-no-wheel.html",
    "Decision Roulette": "decision-roulette.html",
    "Random Name Picker": "random-name-picker.html",
    "Random Number Generator": "random-number-generator.html",
    "Prize Wheel": "prize-wheel.html",
    "Task Spinner": "task-spinner.html",
    "Art Roulette": "art-roulette-seo.html",
    "Chore Wheel": "chore-wheel-seo.html",
    "Country Picker Wheel": "country-picker-wheel-seo.html",
    "Decision Wheel": "decision-wheel.html",
    "Dinner Spinner": "dinner-spinner.html",
    "Icebreaker Wheel": "icebreaker-wheel-seo.html",
    "Random Fact Wheel": "random-fact-wheel-seo.html",
    "Zodiac Wheel": "zodiac-wheel.html",
    "Twister Spinner": "twister-spinner-seo.html",
    "Truth or Dare Generator": "truth-or-dare-generator.html",
    "Sketch or Dare": "sketch-or-dare-seo.html",
    "Hot Seat Challenge": "hot-seat-challenge-seo.html",
    "Holiday Activity Wheel": "holiday-wheel.html",
    "Food Picker Wheel": "food-picker-wheel.html",
    "Drink Picker Wheel": "drink-wheel.html",
    "Exercise Wheel": "exercise-wheel.html"
};

function getUrl(toolName) {
    if (toolUrlMap[toolName]) {
        return "https://freeonlinetools203.com/" + toolUrlMap[toolName];
    }
    return "https://freeonlinetools203.com/" + toolName.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w\-]/g, '') + '.html';
}

// =========================================================================
// RENDER DASHBOARD (FIXED – now includes all categories including catSeo)
// =========================================================================
function renderDashboard() {
    const container = document.getElementById('toolsContainer');
    if (!container) return;
    // Order categories as desired – include all keys
    const orderedCategoryKeys = ["catPop","catSeo","catHash","catDev","catFin","catFun","catPreg","catColor","catHealth","catText","catPdf","catImage"];
    // Ensure all keys are included
    for (const key of Object.keys(toolsDatabase)) {
        if (!orderedCategoryKeys.includes(key)) orderedCategoryKeys.push(key);
    }
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
// GENERATE MOBILE MENU DYNAMICALLY (so that all tools appear)
// =========================================================================
function generateMobileMenu() {
    let html = `<ul class="mobile-nav">
      <li><a href="https://freeonlinetools203.com/index.html">🏠 Home</a></li>
      <li>
        <a href="#" class="mobile-dropdown-toggle" id="mobileToolsToggle">🛠️ All Tools</a>
        <div class="mobile-dropdown-content" id="mobileToolsContent">`;

    // Add each category and its tools
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
// POPULATE FOOTER (unchanged)
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
// NAVBAR CSS (unchanged)
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
.dropdown-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:20px}
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
// NAVBAR HTML (DESKTOP MENU REMAINS UNCHANGED – already includes all tools)
// =========================================================================
const navbarHTML = `
<div class="megamenu-container">
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
        <div class="mega-dropdown">
          <div class="dropdown-scroll">
            <div class="dropdown-grid">
              <div class="dropdown-column">
              <h4>🔍 SEO Tools</h4>
<a href="https://freeonlinetools203.com/keyword-density-checker.html">Keyword Density Checker</a>
<a href="https://freeonlinetools203.com/meta-tags-generator.html">Meta Tags Generator</a>
<a href="https://freeonlinetools203.com/meta-tag-analyzer.html">Meta Tag Analyzer</a>
<a href="https://freeonlinetools203.com/broken-link-checker.html">Broken Link Checker</a>
<a href="https://freeonlinetools203.com/free-backlink-checker.html">Free Backlink Checker</a>
<a href="https://freeonlinetools203.com/google-index-checker.html">Google Index Checker</a>
<a href="https://freeonlinetools203.com/seo-analyzer.html">SEO Analyzer</a>
<a href="https://freeonlinetools203.com/seo-score-checker.html">SEO Score Checker</a>
<a href="https://freeonlinetools203.com/seo-title-generator.html">SEO Title Generator</a>
<a href="https://freeonlinetools203.com/serp-snippet-preview.html">SERP Snippet Preview</a>
<a href="https://freeonlinetools203.com/readability-checker.html">Readability Checker</a>
<a href="https://freeonlinetools203.com/heading-structure-checker.html">Heading Structure Checker</a>
<a href="https://freeonlinetools203.com/image-alt-analyzer.html">Image Alt Analyzer</a>
<a href="https://freeonlinetools203.com/xml-sitemap-generator.html">XML Sitemap Generator</a>
<a href="https://freeonlinetools203.com/ultrasound-scanner.html">🩺 Ultrasound Scanner</a>
                <h4>📱 Social Media Hashtag</h4>
                <a href="https://freeonlinetools203.com/instagram-hashtag-generator.html">Instagram Hashtag Generator</a>
                <a href="https://freeonlinetools203.com/linkedin-hashtag-generator.html">LinkedIn Hashtag Generator</a>
                <a href="https://freeonlinetools203.com/facebook-hashtag-generator.html">Facebook Hashtag Generator</a>
                <a href="https://freeonlinetools203.com/pinterest-hashtag-generator.html">Pinterest Hashtag Generator</a>
                <a href="https://freeonlinetools203.com/ai-hashtag-generator.html">AI Hashtag Generator</a>
                <a href="https://freeonlinetools203.com/seo-hashtags-generator.html">SEO Hashtags Generator</a>
              </div>
              <div class="dropdown-column">
                <h4>🐾 Animal Pregnancy</h4>
                <a href="https://freeonlinetools203.com/dog-pregnancy-calculator.html">Dog Pregnancy Calculator</a>
                <a href="https://freeonlinetools203.com/cat-pregnancy-calculator.html">Cat Pregnancy Calculator</a>
                <a href="https://freeonlinetools203.com/cow-pregnancy-calculator.html">Cow Pregnancy Calculator</a>
                <a href="https://freeonlinetools203.com/rabbit-pregnancy-calculator.html">Rabbit Pregnancy Calculator</a>
                <a href="https://freeonlinetools203.com/goat-pregnancy-calculator.html">Goat Pregnancy Calculator</a>
                <a href="https://freeonlinetools203.com/horse-pregnancy-calculator.html">Horse Pregnancy Calculator</a>
                <a href="https://freeonlinetools203.com/sheep-pregnancy-calculator.html">Sheep Pregnancy Calculator</a>
                <a href="https://freeonlinetools203.com/pig-pregnancy-calculator.html">Pig Pregnancy Calculator</a>
                <h4>🔐 Developer & Security</h4>
                <a href="https://freeonlinetools203.com/md5-generator.html">MD5 Hash Generator</a>
                <a href="https://freeonlinetools203.com/sha256-generator.html">SHA-256 Hash Generator</a>
                <a href="https://freeonlinetools203.com/sha1-generator.html">SHA-1 Hash Generator</a>
                <a href="https://freeonlinetools203.com/base64-encoder-decoder.html">Base64 Encoder/Decoder</a>
                <a href="https://freeonlinetools203.com/url-encoder-decoder.html">URL Encoder/Decoder</a>
                <a href="https://freeonlinetools203.com/html-encoder-decoder.html">HTML Encoder/Decoder</a>
              </div>
              <div class="dropdown-column">
                <h4>🎨 Color Tools</h4>
                <a href="https://freeonlinetools203.com/color-palette-generator.html">Color Palette Generator</a>
                <a href="https://freeonlinetools203.com/color-shades-generator.html">Color Shades Generator</a>
                <a href="https://freeonlinetools203.com/color-gradient-maker.html">Color Gradient Maker</a>
                <a href="https://freeonlinetools203.com/color-contrast-checker.html">Color Contrast Checker</a>
                <a href="https://freeonlinetools203.com/color-name-finder.html">Color Name Finder</a>
                <a href="https://freeonlinetools203.com/random-color-picker.html">Random Color Picker</a>
                <h4>📊 Popular Calculators</h4>
                <a href="https://freeonlinetools203.com/unit-converter.html">Unit Converter</a>
                <a href="https://freeonlinetools203.com/age-calculator.html">Age Calculator</a>
                <a href="https://freeonlinetools203.com/age-difference-calculator.html">Age Difference Calculator</a>
                <a href="https://freeonlinetools203.com/discount-calculator.html">Discount Calculator</a>
                <a href="https://freeonlinetools203.com/profit-loss-calculator.html">Profit & Loss Calculator</a>
                <a href="https://freeonlinetools203.com/gpa-calculator.html">GPA Calculator</a>
                <a href="https://freeonlinetools203.com/gst-calculator.html">GST Calculator</a>
                <a href="https://freeonlinetools203.com/percentage-calculator.html">Percentage Calculator</a>
                <a href="https://freeonlinetools203.com/date-calculator.html">Date Calculator</a>
                <a href="https://freeonlinetools203.com/qr-code-generator.html">QR Code Generator</a>
                <a href="https://freeonlinetools203.com/youtube-thumbnail-downloader.html">YouTube Thumbnail Downloader</a>
                <a href="https://freeonlinetools203.com/currency-converter.html">Currency Converter</a>
              </div>
              <div class="dropdown-column">
                <h4>🏃 Health & Fitness</h4>
                <a href="https://freeonlinetools203.com/bmi-calculator.html">BMI Calculator</a>
                <a href="https://freeonlinetools203.com/bmr-calculator.html">BMR Calculator</a>
                <a href="https://freeonlinetools203.com/calorie-calculator.html">Calorie Calculator</a>
                <a href="https://freeonlinetools203.com/tdee-calculator.html">TDEE Calculator</a>
                <h4>💰 Financial Tools</h4>
                <a href="https://freeonlinetools203.com/emi-calculator.html">EMI Calculator</a>
                <a href="https://freeonlinetools203.com/loan-calculator.html">Loan Calculator</a>
                <a href="https://freeonlinetools203.com/sip-calculator.html">SIP Calculator</a>
                <a href="https://freeonlinetools203.com/zakat-calculator.html">Zakat Calculator</a>
                <h4>📝 Text & Writing</h4>
                <a href="https://freeonlinetools203.com/word-counter.html">Word Counter</a>
                <a href="https://freeonlinetools203.com/line-counter.html">Line Counter</a>
                <a href="https://freeonlinetools203.com/text-case-converter.html">Text Case Converter</a>
                <a href="https://freeonlinetools203.com/password-generator.html">Password Generator</a>
                <a href="https://freeonlinetools203.com/password-checker.html">Password Strength Checker</a>
              </div>
              <div class="dropdown-column">
                <h4>📄 PDF Tools</h4>
                <a href="https://freeonlinetools203.com/pdf-merger.html">PDF Merger</a>
                <a href="https://freeonlinetools203.com/pdf-splitter.html">PDF Splitter</a>
                <a href="https://freeonlinetools203.com/pdf-to-image.html">PDF to Image</a>
                <a href="https://freeonlinetools203.com/pdf-to-jpg.html">PDF to JPG</a>
                <a href="https://freeonlinetools203.com/pdf-to-png.html">PDF to PNG</a>
                <a href="https://freeonlinetools203.com/pdf-to-bmp.html">PDF to BMP</a>
                <a href="https://freeonlinetools203.com/pdf-to-webp.html">PDF to WEBP</a>
                <a href="https://freeonlinetools203.com/pdf-to-tiff.html">PDF to TIFF</a>
                <a href="https://freeonlinetools203.com/pdf-to-word.html">PDF to Word</a>
                <a href="https://freeonlinetools203.com/pdf-to-excel.html">PDF to Excel</a>
                <a href="https://freeonlinetools203.com/pdf-to-text.html">PDF to Text</a>
                <a href="https://freeonlinetools203.com/pdf-rotator.html">PDF Rotator</a>
                <h4>🖼️ Image Tools</h4>
                <a href="https://freeonlinetools203.com/image-color-extractor.html">Image Color Extractor</a>
                <a href="https://freeonlinetools203.com/image-converter.html">Image Converter</a>
                <a href="https://freeonlinetools203.com/image-cropper.html">Image Cropper</a>
                <a href="https://freeonlinetools203.com/image-resizer.html">Image Resizer</a>
                <a href="https://freeonlinetools203.com/image-to-pdf.html">Image to PDF</a>
                <a href="https://freeonlinetools203.com/image-upscaler.html">Image Upscaler</a>
                <a href="https://freeonlinetools203.com/image-compressor.html">Image Compressor</a>
                <h4>🎲 Fun Tools</h4>
                <a href="https://freeonlinetools203.com/spin-the-wheel.html">🎡 Spin The Wheel</a>
                <a href="https://freeonlinetools203.com/yes-no-wheel.html">✅ Yes/No Wheel</a>
                <a href="https://freeonlinetools203.com/decision-roulette.html">🎯 Decision Roulette</a>
                <a href="https://freeonlinetools203.com/random-name-picker.html">🏷️ Random Name Picker</a>
                <a href="https://freeonlinetools203.com/random-number-generator.html">🔢 Random Number Generator</a>
                <a href="https://freeonlinetools203.com/prize-wheel.html">🏆 Prize Wheel</a>
                <a href="https://freeonlinetools203.com/task-spinner.html">📋 Task Spinner</a>
                <a href="https://freeonlinetools203.com/art-roulette-seo.html">🎨 Art Roulette</a>
                <a href="https://freeonlinetools203.com/chore-wheel-seo.html">🧹 Chore Wheel</a>
                <a href="https://freeonlinetools203.com/country-picker-wheel-seo.html">🌍 Country Picker Wheel</a>
                <a href="https://freeonlinetools203.com/decision-wheel.html">🤔 Decision Wheel</a>
                <a href="https://freeonlinetools203.com/dinner-spinner.html">🍽️ Dinner Spinner</a>
                <a href="https://freeonlinetools203.com/icebreaker-wheel-seo.html">🗣️ Icebreaker Wheel</a>
                <a href="https://freeonlinetools203.com/random-fact-wheel-seo.html">📚 Random Fact Wheel</a>
                <a href="https://freeonlinetools203.com/zodiac-wheel.html">♈ Zodiac Wheel</a>
                <a href="https://freeonlinetools203.com/twister-spinner-seo.html">🌀 Twister Spinner</a>
                <a href="https://freeonlinetools203.com/truth-or-dare-generator.html">💬 Truth or Dare Generator</a>
                <a href="https://freeonlinetools203.com/sketch-or-dare-seo.html">✏️ Sketch or Dare</a>
                <a href="https://freeonlinetools203.com/hot-seat-challenge-seo.html">🔥 Hot Seat Challenge</a>
                <a href="https://freeonlinetools203.com/holiday-wheel.html">🎄 Holiday Activity Wheel</a>
                <a href="https://freeonlinetools203.com/food-picker-wheel.html">🍕 Food Picker Wheel</a>
                <a href="https://freeonlinetools203.com/drink-wheel.html">🍹 Drink Picker Wheel</a>
                <a href="https://freeonlinetools203.com/exercise-wheel.html">🏋️ Exercise Wheel</a>
              </div>
            </div>
          </div>
        </div>
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
// PAGE ONLOAD (INITIALIZATION)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Insert navbar CSS and HTML
    document.head.insertAdjacentHTML('beforeend', navbarCSS);
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // Generate dynamic mobile menu content (so that all tools appear)
    const mobileMenuDiv = document.getElementById('mobileMenu');
    if (mobileMenuDiv) {
        mobileMenuDiv.innerHTML = generateMobileMenu();
    }
    
    // Render dashboard
    renderDashboard();
    populateFooter();
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }
    
    // Mobile dropdown toggle inside dynamically generated content
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
