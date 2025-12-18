// Simple client-side router
class Router {
    constructor() {
        this.routes = {};
        this.currentPage = 'home';
        this.init();
    }

    // Add a route
    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    // Initialize router
    init() {
        // Load default routes
        this.loadDefaultRoutes();

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.navigateTo(e.state.page, false);
            } else {
                this.navigateTo('home', false);
            }
        });

        // Load initial page and ensure correct navigation highlighting
        let initialPage = this.getPageFromURL();

        // If no URL hash, check session storage for last page
        if (!initialPage) {
            const storedPage = window.sessionStorage.getItem('currentPage');
            if (storedPage && this.routes[storedPage]) {
                initialPage = storedPage;
            } else {
                initialPage = 'home';
            }
        }

        // Navigate to the initial page
        this.navigateTo(initialPage, false);

        // Force update active navigation after DOM is ready with multiple attempts
        // This is crucial for page refreshes to show correct active tab
        setTimeout(() => {
            if (!this.updateActiveNav(initialPage)) {
                // If first attempt failed, try again immediately
                setTimeout(() => this.updateActiveNav(initialPage), 50);
            }
        }, 100);

        // Additional backup navigation update - important for refresh scenarios
        setTimeout(() => {
            this.updateActiveNav(initialPage);
        }, 1000);
    }

    // Get page from URL hash
    getPageFromURL() {
        const hash = window.location.hash.substring(1);
        // If there's a hash and it's a valid route, return it
        if (hash && this.routes[hash]) {
            return hash;
        }
        // If no hash, default to home
        return hash || null;
    }

    // Navigate to a page
    navigateTo(page, updateHistory = true) {
        if (this.routes[page]) {
            this.currentPage = page;

            // Store current page in a way that survives page refreshes
            window.sessionStorage.setItem('currentPage', page);

            // Update URL and history
            if (updateHistory) {
                const url = page === 'home' ? '#' : `#${page}`;
                history.pushState({ page: page }, '', url);
            }

            // Load page content first
            this.routes[page]();

            // Update active navigation with multiple attempts to ensure it works
            setTimeout(() => {
                this.updateActiveNav(page);
            }, 50);

            // Additional backup navigation update
            setTimeout(() => {
                if (!this.updateActiveNav(page)) {
                    // If still failed, try again with a longer delay
                    setTimeout(() => {
                        this.updateActiveNav(page);
                    }, 500);
                }
            }, 200);

            // Scroll to top
            window.scrollTo(0, 0);

            // Update page title and meta tags
            this.updatePageMeta(page);

            // Close mobile menu if open
            this.closeMobileMenu();
        }
    }

    // Close mobile menu
    closeMobileMenu() {
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (navMenu && menuToggle) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }

    // Update active navigation item
    updateActiveNav(page) {
        // Remove active class from all nav items first
        const navItems = document.querySelectorAll('.nav-menu a');
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // Get the nav-menu container first, then search within it
        const navMenu = document.querySelector('.nav-menu');
        if (!navMenu) {
            return false;
        }

        // Search for the specific link within the nav-menu container
        const onclickSelector = `a[onclick="showPage('${page}')"]`;
        let activeItem = navMenu.querySelector(onclickSelector);

        if (activeItem) {
            activeItem.classList.add('active');
            return true;
        }

        // Fallback: Try data-translate attribute
        const translateMap = {
            'home': 'nav.home',
            'products': 'nav.products',
            'about': 'nav.about',
            'infrastructure': 'nav.infrastructure',
            'achievements': 'nav.achievements',
            'contact': 'nav.contact',
            'downloads': 'nav.downloads',
            'enquiry': 'nav.enquiry'
        };

        const translateKey = translateMap[page];
        if (translateKey) {
            const translateSelector = `a[data-translate="${translateKey}"]`;
            activeItem = navMenu.querySelector(translateSelector);

            if (activeItem) {
                activeItem.classList.add('active');
                return true;
            }
        }

        // Last resort: Manual search through all links
        const manualNavLinks = navMenu.querySelectorAll('a');
        for (let link of manualNavLinks) {
            const onclick = link.getAttribute('onclick');

            if (onclick && onclick.includes(`showPage('${page}')`)) {
                link.classList.add('active');
                return true;
            }
        }

        return false;
    }

    // Update page meta information
    updatePageMeta(page) {
        const pageTitles = {
            home: 'Shrigurukrupa Surgical - Surgical Products & Equipment',
            products: 'Our Products - Shrigurukrupa Surgical',
            about: 'About Us - Shrigurukrupa Surgical',
            infrastructure: 'Our Infrastructure - Shrigurukrupa Surgical',
            achievements: 'Our Achievements - Shrigurukrupa Surgical',
            contact: 'Contact Us - Shrigurukrupa Surgical',
            downloads: 'Downloads - Shrigurukrupa Surgical',
            enquiry: 'Product Enquiry - Shrigurukrupa Surgical',
            'surgical-instruments': 'Surgical Instruments - Shrigurukrupa Surgical',
            'medical-equipment': 'Medical Equipment - Shrigurukrupa Surgical',
            'disposables': 'Disposables - Shrigurukrupa Surgical',
            'orthopedic': 'Orthopedic Products - Shrigurukrupa Surgical'
        };

        document.title = pageTitles[page] || 'Shrigurukrupa Surgical - Surgical Products & Equipment';
    }

    // Load default routes
    loadDefaultRoutes() {
        this.addRoute('home', () => this.loadPage('home'));
        this.addRoute('products', () => this.loadPage('products'));
        this.addRoute('about', () => this.loadPage('about'));
        this.addRoute('infrastructure', () => this.loadPage('infrastructure'));
        this.addRoute('achievements', () => this.loadPage('achievements'));
        this.addRoute('contact', () => this.loadPage('contact'));
        this.addRoute('downloads', () => this.loadPage('downloads'));
        this.addRoute('enquiry', () => this.loadPage('enquiry'));

        // Product category routes
        this.addRoute('infusion-therapy', () => this.loadPage('infusion-therapy'));
        this.addRoute('anaesthesia', () => this.loadPage('anaesthesia'));
        this.addRoute('urology', () => this.loadPage('urology'));
        this.addRoute('dialysis', () => this.loadPage('dialysis'));
        this.addRoute('gastroenterology', () => this.loadPage('gastroenterology'));
        this.addRoute('surgery', () => this.loadPage('surgery'));
        this.addRoute('face-mask', () => this.loadPage('face-mask'));
        this.addRoute('general', () => this.loadPage('general'));
    }

    // Load page content
    loadPage(page) {
        const mainContent = document.getElementById('mainContent');

        if (!mainContent) {
            return;
        }

        // Show loading spinner
        this.showLoading();

        // Simulate loading delay for better UX
        setTimeout(() => {
            mainContent.innerHTML = this.getPageContent(page);
            this.hideLoading();

            // Update translations after loading new content
            setTimeout(() => {
                if (window.updatePageText) {
                    window.updatePageText();
                }
            }, 50);

            // Initialize any page-specific functionality
            this.initPageScripts(page);
        }, 300);
    }

    // Show loading spinner
    showLoading() {
        document.getElementById('loadingSpinner').style.display = 'flex';
    }

    // Hide loading spinner
    hideLoading() {
        document.getElementById('loadingSpinner').style.display = 'none';
    }

    // Get page content based on page name
    getPageContent(page) {
        // Use modular page system
        const pageClasses = {
            'home': window.HomePage,
            'products': window.ProductsPage,
            'about': window.AboutPage,
            'infrastructure': window.InfrastructurePage,
            'achievements': window.AchievementsPage,
            'contact': window.ContactPage,
            'downloads': window.DownloadsPage,
            'enquiry': window.EnquiryPage,
            'infusion-therapy': window.InfusionTherapyPage,
            'anaesthesia': window.AnaesthesiaPage,
            'urology': window.UrologyPage,
            'dialysis': window.DialysisPage,
            'gastroenterology': window.GastroenterologyPage,
            'surgery': window.SurgeryPage,
            'face-mask': window.FaceMaskPage,
            'general': window.GeneralPage
        };

        if (pageClasses[page]) {
            const pageInstance = new pageClasses[page]();
            return pageInstance.getContent();
        } else {
            return this.getNotFoundContent();
        }
    }

    // Initialize page-specific scripts
    initPageScripts(page) {
        const pageClasses = {
            'home': window.HomePage,
            'products': window.ProductsPage,
            'about': window.AboutPage,
            'infrastructure': window.InfrastructurePage,
            'achievements': window.AchievementsPage,
            'contact': window.ContactPage,
            'downloads': window.DownloadsPage,
            'enquiry': window.EnquiryPage,
            'infusion-therapy': window.InfusionTherapyPage,
            'anaesthesia': window.AnaesthesiaPage,
            'urology': window.UrologyPage,
            'dialysis': window.DialysisPage,
            'gastroenterology': window.GastroenterologyPage,
            'surgery': window.SurgeryPage,
            'face-mask': window.FaceMaskPage,
            'general': window.GeneralPage
        };

        if (pageClasses[page]) {
            const pageInstance = new pageClasses[page]();
            if (typeof pageInstance.init === 'function') {
                pageInstance.init();
            }
        }
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }


    // Show notification
    showNotification(message, type = 'info') {
        if (window.showNotification) {
            window.showNotification(message, type);
        } else {
            alert(message);
        }
    }


    // Initialize contact form (keeping for backward compatibility)
    initContactForm() {
        this.initEnquiryForm();
    }
}

// Initialize router
const router = new Router();

// Global function to show pages (used by navigation)
function showPage(page) {
    if (router) {
        router.navigateTo(page);
    }
}

// Make router available globally
window.router = router;
window.showPage = showPage;