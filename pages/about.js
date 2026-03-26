// About Page Module
class AboutPage {
    constructor() {
        this.name = 'about';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get about page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="about.title">${t.about?.title || 'About Shri Gurukrupa Surgical'}</h1>
                    <p data-translate="about.subtitle">${t.about?.subtitle || 'Your Trusted Partner in Advanced Surgical Solutions & Medical Excellence'}</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2 data-translate="about.story">${t.about?.story || 'Our Story'}</h2>
                            <p data-translate="about.description1">${t.about?.description1 || 'Shri Gurukrupa Surgical has been a trusted supplier of premium surgical products for over 35 years, committed to supporting healthcare professionals with quality equipment and instruments.'}</p>
                            <p data-translate="about.description2">${t.about?.description2 || 'Our state-of-the-art manufacturing facility is equipped with the latest technology, and our team of experienced professionals is dedicated to maintaining the highest quality standards for all our products.'}</p>

                            <h2 data-translate="about.mission">${t.about?.mission || 'Our Mission'}</h2>
                            <p data-translate="about.missionText">${t.about?.missionText || 'To provide healthcare professionals worldwide with reliable, high-quality surgical products that meet the highest industry standards, enabling them to deliver exceptional patient care.'}</p>

                            <h2 data-translate="about.vision">${t.about?.vision || 'Our Vision'}</h2>
                            <p data-translate="about.visionText">${t.about?.visionText || 'To be the leading supplier of surgical products in India and globally, recognized for our commitment to quality, innovation, and customer satisfaction.'}</p>

                            <h2 data-translate="about.commitment">${t.about?.commitment || 'Our Commitment'}</h2>
                            <p data-translate="about.commitmentText">${t.about?.commitmentText || 'We are committed to continuous improvement, investing in advanced manufacturing technologies, and maintaining strict quality control processes to ensure our products meet international standards.'}</p>

                            <div class="about-cta-container">
                                <a href="javascript:void(0)" onclick="showPage('enquiry')" class="btn btn-primary" data-translate="nav.contactUs">${t.nav?.contactUs || 'Get in Touch'}</a>
                            </div>
                        </div>
                        <div class="about-image">
                            <img src="assets/About Page Image.jpeg" alt="Shri Gurukrupa Surgical State-of-the-Art Manufacturing Facility in Ahmedabad - ISO Certified Medical Equipment Production" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" class="about-facility-image">
                            <div class="about-image-fallback">
                                <div>
                                    <i class="fas fa-industry"></i>
                                    Modern Manufacturing<br>Facility
                                </div>
                            </div>

                            <div class="about-why-choose-box">
                                <h3 data-translate="about.whyChoose">${t.about?.whyChoose || 'Why Choose Us?'}</h3>
                                <ul class="about-why-choose-list">
                                    <li>
                                        <i class="fas fa-check-circle"></i>
                                        <span data-translate="about.experience">${t.about?.experience || '35+ Years of Experience'}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check-circle"></i>
                                        <span data-translate="about.quality">${t.about?.quality || 'Premium Quality Products'}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check-circle"></i>
                                        <span data-translate="about.trusted">${t.about?.trusted || 'Trusted by Healthcare Professionals'}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check-circle"></i>
                                        <span data-translate="about.pricing">${t.about?.pricing || 'Competitive Pricing'}</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-check-circle"></i>
                                        <span data-translate="about.service">${t.about?.service || 'Excellent Customer Service'}</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Make in India Logo Section -->
                            <div class="about-logo-container">
                                <img src="assets/Make In India logo.jpeg" alt="Make in India Logo - Supporting Indian Manufacturing Excellence - Shri Gurukrupa Surgical Proud Indian Medical Equipment Manufacturer" class="about-logo-image">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Team and Founder Section -->
            <section class="team-section page-section team-section-gradient">
                <div class="container">
                    <div class="team-image-container">
                        <div class="team-image-wrapper">
                            <img src="assets/Team and Founder.jpeg" alt="Shri Gurukrupa Surgical Founder with Professional Team - 35+ Years of Medical Equipment Manufacturing Excellence in Ahmedabad, Gujarat" class="team-image">
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize about page
    init() {
        // Page initialization complete
    }

    // Cleanup when leaving about page
    destroy() {
        // Cleanup complete
    }
}

// Make AboutPage available globally
window.AboutPage = AboutPage;