// Home Page Module
class HomePage {
    constructor() {
        this.name = 'home';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get home page content
    getContent() {
        const t = this.getTranslation();
        return `
            <!-- Hero Banner -->
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="home.title">${t.home?.title || 'Welcome to Shrigurukrupa Surgical'}</h1>
                    <p data-translate="home.subtitle">${t.home?.subtitle || 'Your Trusted Partner in Quality Surgical Products & Equipment'}</p>
                </div>
            </div>

            <!-- About Section -->
            <section class="about page-section">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2 data-translate="about.title">About Shrigurukrupa Surgical</h2>
                            <h3 data-translate="about.subtitle">Excellence in Surgical Products Since 1995</h3>
                            <p data-translate="about.description1">Shrigurukrupa Surgical has been a trusted supplier of premium surgical products for over 25 years, committed to supporting healthcare professionals with quality equipment and instruments.</p>
                            <p data-translate="about.description2">Our state-of-the-art manufacturing facility is equipped with the latest technology, and our team of experienced professionals is dedicated to maintaining the highest quality standards for all our products.</p>

                            <div class="learn-more-section">
                                <a href="javascript:void(0)" onclick="showPage('about')" class="btn btn-primary" data-translate="about.learnMore">Learn More</a>
                            </div>
                        </div>
                        <div class="about-image">
                            <img src="assets/about-image.jpg" alt="Shrigurukrupa Surgical" onerror="this.src='https://via.placeholder.com/500x400/3b82f6/ffffff?text=Shrigurukrupa+Surgical'">
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize home page
    init() {
        // Any home-specific initialization can go here
        console.log('Home page initialized');
    }

    // Cleanup when leaving home page
    destroy() {
        // Cleanup code if needed
        console.log('Home page destroyed');
    }
}

// Make HomePage available globally
window.HomePage = HomePage;