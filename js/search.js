// Search functionality
class SearchEngine {
    constructor() {
        this.searchData = [];
        this.initSearchData();
        this.setupSearchBox();
    }

    // Initialize search data
    initSearchData() {
        this.searchData = [
            // Products
            {
                title: "Infusion & Transfusion",
                description: "Complete range of infusion and transfusion products for safe fluid delivery and blood transfusion procedures",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["infusion", "transfusion", "IV", "cannula", "blood", "bags", "catheters", "pumps", "administration", "sets"]
            },
            // General pages
            {
                title: "About Shrigurukrupa Surgical",
                description: "Learn about our surgical products manufacturing, history, and commitment to quality",
                page: "about",
                category: "page",
                keywords: ["about", "history", "manufacturing", "quality", "surgical", "products"]
            },
            {
                title: "Enquiry",
                description: "Get in touch with our sales team for quotes and inquiries",
                page: "enquiry",
                category: "page",
                keywords: ["enquiry", "contact", "phone", "address", "location", "email", "quote", "inquiry"]
            },
            // Product categories
            {
                title: "Infusion & Transfusion Products",
                description: "Complete range of IV and blood transfusion medical products",
                page: "infusion-transfusion",
                category: "topic",
                keywords: ["IV", "intravenous", "blood", "transfusion", "fluid", "delivery", "medical", "products"]
            }
        ];
    }

    // Setup search box functionality
    setupSearchBox() {
        const searchInput = document.getElementById('searchInput');
        const searchBox = document.querySelector('.search-box');

        if (searchInput && searchBox) {
            // Create search results container
            const searchResults = document.createElement('div');
            searchResults.className = 'search-results';
            searchResults.id = 'searchResults';
            searchBox.appendChild(searchResults);

            // Add event listeners
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });

            searchInput.addEventListener('focus', (e) => {
                if (e.target.value.trim()) {
                    this.handleSearch(e.target.value);
                }
            });

            // Hide search results when clicking outside
            document.addEventListener('click', (e) => {
                if (!searchBox.contains(e.target)) {
                    this.hideSearchResults();
                }
            });

            // Handle Enter key
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleEnterKey();
                }
            });
        }
    }

    // Handle search input
    handleSearch(query) {
        const trimmedQuery = query.trim().toLowerCase();
        const searchResults = document.getElementById('searchResults');

        if (!searchResults) return;

        if (trimmedQuery.length < 2) {
            this.hideSearchResults();
            return;
        }

        const results = this.searchData.filter(item => {
            // Search in title
            if (item.title.toLowerCase().includes(trimmedQuery)) {
                return true;
            }

            // Search in description
            if (item.description.toLowerCase().includes(trimmedQuery)) {
                return true;
            }

            // Search in keywords
            return item.keywords.some(keyword =>
                keyword.toLowerCase().includes(trimmedQuery)
            );
        });

        this.displaySearchResults(results, trimmedQuery);
    }

    // Display search results
    displaySearchResults(results, query) {
        const searchResults = document.getElementById('searchResults');

        if (!searchResults) return;

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item">
                    <div class="search-result-title">No results found</div>
                    <div class="search-result-description">Try searching for services, doctors, or health topics</div>
                </div>
            `;
        } else {
            // Limit results to top 5
            const limitedResults = results.slice(0, 5);

            searchResults.innerHTML = limitedResults.map(result => `
                <div class="search-result-item" onclick="this.selectResult('${result.page}')">
                    <div class="search-result-title">${this.highlightText(result.title, query)}</div>
                    <div class="search-result-description">${this.highlightText(result.description, query)}</div>
                </div>
            `).join('');

            // Add click handlers
            const resultItems = searchResults.querySelectorAll('.search-result-item');
            resultItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    this.selectResult(limitedResults[index].page);
                });
            });
        }

        this.showSearchResults();
    }

    // Highlight search terms in text
    highlightText(text, query) {
        if (!query) return text;

        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    // Select a search result
    selectResult(page) {
        this.hideSearchResults();
        document.getElementById('searchInput').value = '';

        // Navigate to the selected page
        if (window.showPage) {
            window.showPage(page);
        }
    }

    // Show search results
    showSearchResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.style.display = 'block';
        }
    }

    // Hide search results
    hideSearchResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.style.display = 'none';
        }
    }

    // Handle Enter key press
    handleEnterKey() {
        const searchResults = document.getElementById('searchResults');
        const firstResult = searchResults?.querySelector('.search-result-item');

        if (firstResult) {
            firstResult.click();
        }
    }

    // Add new search data (for dynamic content)
    addSearchData(item) {
        this.searchData.push(item);
    }

    // Update search data based on current language
    updateSearchData() {
        if (window.translations && window.currentLanguage) {
            const lang = window.currentLanguage;
            const trans = window.translations[lang];

            // Update service translations
            this.searchData.forEach(item => {
                if (item.category === 'service') {
                    switch (item.page) {
                        case 'emergency':
                            if (trans.services?.emergency) {
                                item.title = trans.services.emergency.title;
                                item.description = trans.services.emergency.description;
                            }
                            break;
                        case 'surgery':
                            if (trans.services?.surgery) {
                                item.title = trans.services.surgery.title;
                                item.description = trans.services.surgery.description;
                            }
                            break;
                        case 'pediatrics':
                            if (trans.services?.pediatrics) {
                                item.title = trans.services.pediatrics.title;
                                item.description = trans.services.pediatrics.description;
                            }
                            break;
                        case 'cardiology':
                            if (trans.services?.cardiology) {
                                item.title = trans.services.cardiology.title;
                                item.description = trans.services.cardiology.description;
                            }
                            break;
                    }
                }
            });
        }
    }
}

// Global search function (called from search button)
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        searchEngine.handleSearch(searchInput.value);
    }
}

// Initialize search engine when DOM is loaded
let searchEngine;
document.addEventListener('DOMContentLoaded', function() {
    searchEngine = new SearchEngine();
});

// Update search data when language changes
document.addEventListener('languageChanged', function() {
    if (searchEngine) {
        searchEngine.updateSearchData();
    }
});

// Make search functions available globally
window.performSearch = performSearch;
window.searchEngine = searchEngine;