// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('toolsDropdown');
    const dropBtn = document.getElementById('toolsBtn');
    const dropdownContent = document.getElementById('dropdownContent');
    
    if (!dropdown || !dropBtn) return;
    
    // Function to close all category accordions
    function closeAllCategories() {
        document.querySelectorAll('.dropdown-category.active').forEach(cat => {
            cat.classList.remove('active');
            const targetId = cat.getAttribute('data-cat');
            if (targetId) {
                const toolsDiv = document.getElementById(targetId + 'Tools');
                if (toolsDiv) toolsDiv.classList.remove('show');
            }
        });
    }
    
    // Close dropdown and reset categories
    function closeDropdown() {
        dropdown.classList.remove('open');
        closeAllCategories();
    }
    
    function openDropdown() {
        dropdown.classList.add('open');
    }
    
    // Toggle dropdown on button click
    dropBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (dropdown.classList.contains('open')) {
            closeDropdown();
        } else {
            openDropdown();
        }
    });
    
    // Prevent clicks inside dropdown content from closing it
    if (dropdownContent) {
        dropdownContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
            closeDropdown();
        }
    });
    
    // Accordion functionality for categories
    const categories = document.querySelectorAll('.dropdown-category');
    categories.forEach(category => {
        category.addEventListener('click', function(e) {
            e.stopPropagation();
            const catId = this.getAttribute('data-cat');
            if (catId) {
                const toolsDiv = document.getElementById(catId + 'Tools');
                if (toolsDiv) {
                    // If this category is already active, close it; otherwise close all and open this one
                    const isActive = this.classList.contains('active');
                    closeAllCategories();
                    if (!isActive) {
                        this.classList.add('active');
                        toolsDiv.classList.add('show');
                    }
                } else {
                    // Fallback: look for next sibling
                    const nextDiv = this.nextElementSibling;
                    if (nextDiv && nextDiv.classList.contains('category-tools')) {
                        const wasActive = this.classList.contains('active');
                        closeAllCategories();
                        if (!wasActive) {
                            this.classList.add('active');
                            nextDiv.classList.add('show');
                        }
                    }
                }
            } else {
                // Fallback for any category without data-cat
                const nextDiv = this.nextElementSibling;
                if (nextDiv && nextDiv.classList.contains('category-tools')) {
                    const wasActive = this.classList.contains('active');
                    closeAllCategories();
                    if (!wasActive) {
                        this.classList.add('active');
                        nextDiv.classList.add('show');
                    }
                }
            }
        });
    });
    
    // Set button cursor
    dropBtn.style.cursor = 'pointer';
    
    // Keyboard support for the dropdown button
    dropBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            dropBtn.click();
        }
    });
    
    // Close dropdown on window resize to avoid positioning issues
    window.addEventListener('resize', function() {
        if (dropdown.classList.contains('open')) {
            closeDropdown();
        }
    });
});
