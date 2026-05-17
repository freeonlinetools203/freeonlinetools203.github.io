// =========================================================================
// CENTRALIZED TOOLS DATABASE (Home page dashboard ke liye)
// =========================================================================
const toolsDatabase = {
    catSeo: { name: "🔍 SEO Tools", tools: ["Keyword Density Checker", "Meta Tags Generator", "Meta Tag Analyzer"] },
    catHash: { name: "📱 Social Hashtag Tools", tools: ["Instagram Hashtag Generator", "LinkedIn Hashtag Generator", "Facebook Hashtag Generator"] },
    catPreg: { name: "🐾 Animal Pregnancy", tools: ["Dog Pregnancy Calculator", "Cat Pregnancy Calculator", "Cow Pregnancy Calculator"] },
    catPop: { name: "📊 Popular Calculators", tools: ["Unit Converter", "Age Calculator", "Age Difference Calculator", "Discount Calculator", "gpa-cgpa-calculator.html", "QR Code Generator", "YouTube Thumbnail Downloader", "Currency Converter"] },
    catHealth: { name: "🏃‍♂️ Health & Fitness", tools: ["BMI Calculator", "BMR Calculator", "Calorie Calculator"] },
    catFin: { name: "💰 Financial Tools", tools: ["EMI Calculator", "Loan Calculator", "Zakat Calculator"] },
    catText: { name: "📝 Text Tools", tools: ["Word Counter", "Text Case Converter", "Password Generator", "Password Strength Checker"] },
    catPdf: { name: "📄 PDF Tools", tools: ["PDF Merger", "PDF Splitter", "PDF to Image", "PDF to JPG", "PDF to PNG"] },
    catImage: { name: "🖼️ Image Tools", tools: ["Image Color Extractor", "Image Converter", "Image Cropper", "Image Resizer"] }
};

// URL friendly string banane ke liye system
function getUrl(toolName) {
    if (toolName.endsWith('.html')) return toolName; // agar pehle se .html hai
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

// 2. CATEGORIES FILTER BAR GENERATION
function renderCategoriesBar() {
    const barContainer = document.getElementById('categoriesBarContainer');
    if (!barContainer) return;

    let html = `<div class="category-wrapper"><button class="cat-btn active" data-category="all">🌐 All</button></div>`;
    
    for (const [key, category] of Object.entries(toolsDatabase)) {
        html += `
            <div class="category-wrapper">
                <button class="cat-btn" data-category="${key}">${category.name.split(' ')[1] || category.name}</button>
                <button class="cat-dropdown-btn" data-category="${key}">▶</button>
            </div>`;
    }
    barContainer.innerHTML = html;
    setupCategoryButtonsLogic();
}

// 3. HOME PAGE FILTER ACTION
function filterDashboard(categoryId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (categoryId === 'all') {
            section.style.display = 'block';
        } else {
            section.style.display = section.getAttribute('data-category') === categoryId ? 'block' : 'none';
        }
    });
}

// =========================================================================
// NAVBAR & MOBILE FILTER WINDOW LOGIC (COMPLETE & FIXED)
// =========================================================================
function setupNavbarLogic() {
    const dropdown = document.getElementById('toolsDropdown');
    const btn = document.getElementById('toolsBtn');
    
    if (btn && dropdown) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });
    }

    // Dropdown Categories Accordion inside Navbar
    document.querySelectorAll('.dropdown-category').forEach(cat => {
        cat.addEventListener('click', function(e) {
            e.stopPropagation();
            const catId = this.getAttribute('data-cat');
            if (catId) {
                const toolsDiv = document.getElementById(catId + 'Tools');
                if (toolsDiv) {
                    const isActive = this.classList.contains('active');
                    
                    // Close all other subcategories
                    document.querySelectorAll('.dropdown-category').forEach(c => c.classList.remove('active'));
                    document.querySelectorAll('.category-tools').forEach(t => t.classList.remove('show'));
                    
                    if (!isActive) {
                        this.classList.add('active');
                        toolsDiv.classList.add('show');
                    }
                }
            }
        });
    });

    // Global Click to Close Navbar Dropdown
    document.addEventListener('click', (e) => {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
            document.querySelectorAll('.dropdown-category').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.category-tools').forEach(t => t.classList.remove('show'));
        }
    });
}

// Category Buttons Logic (Main page filtering and floating windows)
function setupCategoryButtonsLogic() {
    // Main filter buttons click
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterDashboard(category);
            closeFloatingDropdown(); // close if window open
        });
    });
    
    // Triangle "▶" buttons click (opens mobile floating window)
    document.querySelectorAll('.cat-dropdown-btn').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            const categoryId = this.getAttribute('data-category');
            const categoryData = toolsDatabase[categoryId];
            if (categoryData) {
                openFloatingDropdown(categoryData);
            }
        });
    });

    // Handle close actions for the floating window
    handleFloatingDropdownActions();
}

// Open the floating mobile filter window
function openFloatingDropdown(categoryData) {
    const dropdown = document.getElementById('floatingDropdown');
    const overlay = document.getElementById('dropdownOverlay') || createOverlay();
    const titleSpan = document.getElementById('dropdownTitle');
    const contentDiv = document.getElementById('floatingDropdownContent');
    
    if (dropdown && overlay && titleSpan && contentDiv) {
        titleSpan.textContent = categoryData.name;
        contentDiv.innerHTML = categoryData.tools.map(tool => `<a href="${getUrl(tool)}" class="floating-tool-item">🔧 ${tool}</a>`).join('');
        
        dropdown.classList.add('show');
        overlay.classList.add('show');
    }
}

// Handles closing when close button, overlay are clicked
function handleFloatingDropdownActions() {
    // 1. Close button "×" click (FIXED)
    const closeBtn = document.querySelector('.close-dropdown');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeFloatingDropdown);
    }

    // 2. Overlay click (also FIXED)
    const overlay = document.getElementById('dropdownOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeFloatingDropdown);
    }
}

// Core function to close the floating Mobile/Triangle filter window
function closeFloatingDropdown() {
    const dropdown = document.getElementById('floatingDropdown');
    const overlay = document.getElementById('dropdownOverlay');
    if (dropdown) dropdown.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
}

// Creates the dark background overlay if it doesn't exist
function createOverlay() {
    let overlay = document.getElementById('dropdownOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'dropdownOverlay';
        overlay.className = 'dropdown-overlay';
        document.body.appendChild(overlay);
        // Important: add click listener here too to be safe
        overlay.addEventListener('click', closeFloatingDropdown);
    }
    return overlay;
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
    // Initialize standard page components
    renderDashboard();
    renderCategoriesBar();
    populateFooter();
    createOverlay(); // ensures overlay exists

    // FETCH AND LOAD NAVBAR.HTML (Centralized menu)
    fetch("navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("Navbar network response was not ok");
            return response.text();
        })
        .then(htmlContent => {
            const placeholder = document.getElementById("navbar-placeholder");
            if (placeholder) {
                placeholder.innerHTML = htmlContent;
                setupNavbarLogic(); // Activate navbar buttons after loading html
            }
        })
        .catch(err => console.error("Error loading navbar:", err));
});
