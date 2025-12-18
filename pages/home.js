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
                    <h1 data-translate="home.title">${t.home?.title || 'Welcome to Shri Gurukrupa Surgical'}</h1>
                    <p data-translate="home.subtitle">${t.home?.subtitle || 'A Legacy of Quality Since 1992'}</p>
                </div>
            </div>

            <!-- About Section -->
            <section class="about page-section">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2 data-translate="about.title">About Shri Gurukrupa Surgical</h2>
                            <p data-translate="about.description1">Shri Gurukrupa Surgical has been a trusted supplier of premium surgical products for over 25 years, committed to supporting healthcare professionals with quality equipment and instruments.</p>
                            <p data-translate="about.description2">Our state-of-the-art manufacturing facility is equipped with the latest technology, and our team of experienced professionals is dedicated to maintaining the highest quality standards for all our products.</p>

                            <div class="learn-more-section">
                                <a href="javascript:void(0)" onclick="showPage('about')" class="btn btn-primary" data-translate="about.learnMore">Learn More</a>
                            </div>
                        </div>
                        <div class="about-image">
                            <img src="assets/about-image.jpg" alt="Shri Gurukrupa Surgical" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" style="max-width: 100%; border-radius: 15px;">
                            <div class="image-fallback" style="display: none; background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; height: 400px; border-radius: 15px; align-items: center; justify-content: center; font-size: 24px; font-weight: 600; text-align: center;">
                                <div>
                                    <i class="fas fa-user-md" style="font-size: 48px; margin-bottom: 20px; display: block;"></i>
                                    Shri Gurukrupa<br>Surgical
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize home page
    init() {
        // Home page initialization complete
    }

    // Cleanup when leaving home page
    destroy() {
        // Cleanup complete
    }
}

// Make HomePage available globally
window.HomePage = HomePage;