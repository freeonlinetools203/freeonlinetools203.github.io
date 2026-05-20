// =========================================================================
// CENTRALIZED TOOLS DATABASE - COMPLETE (All Tools Added)
// =========================================================================
const toolsDatabase = {
    catSeo: {
        name: "🔍 SEO Tools",
        tools: [
            "Keyword Density Checker",
            "Meta Tags Generator",
            "Meta Tag Analyzer"
        ]
    },
    catHash: {
        name: "📱 Social Media Hashtag Tools",
        tools: [
            "Instagram Hashtag Generator",
            "LinkedIn Hashtag Generator",
            "Facebook Hashtag Generator",
            "Pinterest Hashtag Generator",
            "AI Hashtag Generator",
            "SEO Hashtags Generator"
        ]
    },
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
    },
    catDev: {
        name: "🔐 Developer & Security Tools",
        tools: [
            "MD5 Hash Generator",
            "SHA-256 Hash Generator",
            "SHA-1 Hash Generator",
            "Base64 Encoder/Decoder",
            "URL Encoder/Decoder",
            "HTML Encoder/Decoder"
        ]
    },
    catColor: {
        name: "🎨 Color Tools",
        tools: [
            "Color Palette Generator",
            "Color Shades Generator",
            "Color Gradient Maker",
            "Color Contrast Checker",
            "Color Name Finder",
            "Random Color Picker"
        ]
    },
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
            "YouTube Thumbnail Downloader",
            "Currency Converter"
        ]
    },
    catHealth: {
        name: "🏃‍♂️ Health & Fitness",
        tools: [
            "BMI Calculator",
            "BMR Calculator",
            "Calorie Calculator",
            "TDEE Calculator"
        ]
    },
    catFin: {
        name: "💰 Financial Tools",
        tools: [
            "EMI Calculator",
            "Loan Calculator",
            "Zakat Calculator"
        ]
    },
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
    catImage: {
        name: "🖼️ Image Tools",
        tools: [
            "Image Color Extractor",
            "Image Converter",
            "Image Cropper",
            "Image Resizer",
            "Image to PDF",
            "Image Upscaler",
            "Image Compressor"
        ]
    },
    catFun: {
        name: "🎲 Random & Fun Tools",
        tools: [
            "Spin The Wheel",
            "Random Color Picker",
            "Yes/No Wheel",
            "Decision Roulette",
            "Random Name Picker",
            "Random Number Generator",
            "Prize Wheel",
            "Task Spinner"
        ]
    }
};

// URL friendly HTML string generator (handles spaces and existing .html)
function getUrl(toolName) {
    if (toolName.endsWith('.html')) return toolName;
    // Special case for GPA Calculator (file is gpa-calculator.html)
    if (toolName === "GPA Calculator") return "gpa-calculator.html";
    return toolName.toLowerCase().trim()
        .replace(/ /g, '-')
        .replace(/[^\w\-]/g, '') + '.html';
}

// 1. HOME PAGE CARDS RENDER SYSTEM
function renderDashboard() {
    const container = document.getElementById('toolsContainer');
    if (!container) return;

    let html = '';
    for (const [key, category] of Object.entries(toolsDatabase)) {
        html += `
            <div class="section" data-category="${key}" id="section_${key}">
                <h2>${category.name}</h2>
                <div class="tools-grid">
                    ${category.tools.map(tool => `
                        <div class="tool-card">
                            <a href="${getUrl(tool)}">${tool}</a>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    }
    container.innerHTML = html;
}

// Footer popular tools population (using first 6 from Popular Calculators)
function populateFooter() {
    const footerCol = document.getElementById('footerPopularTools');
    if (!footerCol) return;
    const popularTools = toolsDatabase.catPop.tools.slice(0, 6);
    let html = '<h4>Popular Tools</h4>';
    popularTools.forEach(tool => {
        html += `<a href="${getUrl(tool)}">${tool}</a>`;
    });
    footerCol.innerHTML = html;
}

// =========================================================================
// PAGE ONLOAD TRIGGERS
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    populateFooter();

    // FETCH AND LOAD NAVBAR.HTML (unchanged, same as before)
    fetch("navbar.html")
    .then(response => {
        if (!response.ok) throw new Error("Navbar network response was not ok");
        return response.text();
    })
    .then(htmlContent => {
        const placeholder = document.getElementById("navbar-placeholder");

        if (placeholder) {
            placeholder.innerHTML = htmlContent;

            const scripts = placeholder.querySelectorAll("script");

            scripts.forEach(oldScript => {
                const newScript = document.createElement("script");

                if (oldScript.src) {
                    newScript.src = oldScript.src;
                } else {
                    newScript.textContent = oldScript.textContent;
                }

                document.body.appendChild(newScript);
            });
        }
    })
    .catch(err => console.error("Error loading navbar:", err));
});
