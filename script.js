// =========================================================================
// CENTRALIZED TOOLS DATABASE (Saare Tools Full Database Ke Saath)
// =========================================================================
const toolsDatabase = {
    catSeo: { 
        name: "🔍 SEO Tools", 
        tools: ["Keyword Density Checker", "Meta Tags Generator", "Meta Tag Analyzer"] 
    },
    catHash: { 
        name: "📱 Social Tools", 
        tools: ["Instagram Hashtag Generator", "LinkedIn Hashtag Generator", "Facebook Hashtag Generator", "Twitter Hashtag Generator", "TikTok Hashtag Generator"] 
    },
    catPreg: { 
        name: "🐾 Animal Tools", 
        tools: ["Goat Pregnancy Calculator", "Horse Pregnancy Calculator", "Sheep Pregnancy Calculator", "Pig Pregnancy Calculator", "Dog Pregnancy Calculator", "Cat Pregnancy Calculator", "Cow Pregnancy Calculator"] 
    },
    catPop: { 
        name: "📊 Popular Tools", 
        tools: ["Unit Converter", "Age Calculator", "Age Difference Calculator", "Discount Calculator", "gpa-cgpa-calculator.html", "QR Code Generator", "YouTube Thumbnail Downloader", "Currency Converter", "Percentage Calculator", "Scientific Calculator", "Simple Calculator"] 
    },
    catHealth: { 
        name: "🏃‍♂️ Health Tools", 
        tools: ["BMI Calculator", "BMR Calculator", "Calorie Calculator", "Body Fat Calculator", "Water Intake Calculator"] 
    },
    catFin: { 
        name: "💰 Financial Tools", 
        tools: ["EMI Calculator", "Loan Calculator", "Zakat Calculator", "Compound Interest Calculator", "Simple Interest Calculator", "GST Calculator"] 
    },
    catText: { 
        name: "📝 Text Tools", 
        tools: ["Word Counter", "Text Case Converter", "Password Generator", "Password Strength Checker", "Find and Replace Text", "Binary to Text Converter", "Text to Binary Converter"] 
    },
    catPdf: { 
        name: "📄 PDF Tools", 
        tools: ["PDF Merger", "PDF Splitter", "PDF to Image", "PDF to JPG", "PDF to PNG"] 
    },
    catImage: { 
        name: "🖼️ Image Tools", 
        tools: ["Image Color Extractor", "Image Converter", "Image Cropper", "Image Resizer", "JPG to PNG Converter", "PNG to JPG Converter", "WebP to JPG Converter"] 
    },
    catDev: {
        name: "💻 Developer Tools",
        tools: ["MD5 Hash Generator", "SHA-256 Hash Generator", "SHA-1 Hash Generator", "Base64 Encoder/Decoder", "URL Encoder/Decoder", "HTML Encoder/Decoder"]
    },
    catColor: {
        name: "🎨 Color Tools",
        tools: ["Color Palette Generator", "Color Shades Generator", "Color Gradient Maker", "Color Contrast Checker"]
    }
};

// URL friendly HTML string banane ka system
function getUrl(toolName) {
    if (toolName.endsWith('.html')) return toolName; 
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

// Footer links population
function populateFooter() {
    const footerCol = document.getElementById('footerPopularTools');
    if (!footerCol) return;
    const popularTools = toolsDatabase.catPop.tools.slice(0, 4);
    
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

    // FETCH AND LOAD NAVBAR.HTML
    fetch("navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("Navbar network response was not ok");
            return response.text();
        })
        .then(htmlContent => {
            const placeholder = document.getElementById("navbar-placeholder");
            if (placeholder) {
                placeholder.innerHTML = htmlContent;
            }
        })
        .catch(err => console.error("Error loading navbar:", err));
});
