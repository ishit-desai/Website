// Achievements Page Module
class AchievementsPage {
    constructor() {
        this.name = 'achievements';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get achievements page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="achievements.title">${t.achievements?.title || 'Our Achievements'}</h1>
                    <p data-translate="achievements.subtitle">${t.achievements?.subtitle || 'Recognitions, certifications, and milestones that define our excellence'}</p>
                </div>
            </div>

            <section class="page-section">
                <div class="container">
                    <div class="achievements-content">

                        <div class="achievements-intro">
                            <h2 data-translate="achievements.overview">${t.achievements?.overview || 'Our Journey of Excellence'}</h2>
                            <p data-translate="achievements.description">${t.achievements?.description || 'Over the years, Shri Gurukrupa Surgical has achieved significant milestones and earned prestigious certifications that reflect our commitment to quality, innovation, and customer satisfaction. Our achievements stand as testimony to our dedication to excellence in the medical industry.'}</p>
                        </div>

                        <div class="achievements-stats">
                            <div class="stat-item">
                                <div class="stat-number" data-translate="achievements.yearsExperience">${t.achievements?.yearsExperience || '30+'}</div>
                                <div class="stat-label" data-translate="achievements.yearsLabel">${t.achievements?.yearsLabel || 'Years of Excellence'}</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number" data-translate="achievements.productsRange">${t.achievements?.productsRange || '500+'}</div>
                                <div class="stat-label" data-translate="achievements.productsLabel">${t.achievements?.productsLabel || 'Medical Products'}</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number" data-translate="achievements.clientsServed">${t.achievements?.clientsServed || '1000+'}</div>
                                <div class="stat-label" data-translate="achievements.clientsLabel">${t.achievements?.clientsLabel || 'Satisfied Clients'}</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number" data-translate="achievements.countriesReach">${t.achievements?.countriesReach || '25+'}</div>
                                <div class="stat-label" data-translate="achievements.countriesLabel">${t.achievements?.countriesLabel || 'Countries Served'}</div>
                            </div>
                        </div>

                        <div class="achievements-grid">
                            <div class="achievement-item">
                                <div class="achievement-icon">
                                    <i class="fas fa-certificate"></i>
                                </div>
                                <h3 data-translate="achievements.iso">${t.achievements?.iso || 'ISO 9001:2015 Certification'}</h3>
                                <p data-translate="achievements.isoDesc">${t.achievements?.isoDesc || 'Internationally recognized quality management system certification ensuring consistent quality in all our processes.'}</p>
                                <div class="achievement-year" data-translate="achievements.isoYear">${t.achievements?.isoYear || 'Certified since 2018'}</div>
                            </div>

                            <div class="achievement-item">
                                <div class="achievement-icon">
                                    <i class="fas fa-award"></i>
                                </div>
                                <h3 data-translate="achievements.exportExcellence">${t.achievements?.exportExcellence || 'Export Excellence Award'}</h3>
                                <p data-translate="achievements.exportDesc">${t.achievements?.exportDesc || 'Recognition for outstanding export performance and quality products in international markets.'}</p>
                                <div class="achievement-year" data-translate="achievements.exportYear">${t.achievements?.exportYear || 'Received 2023'}</div>
                            </div>

                            <div class="achievement-item">
                                <div class="achievement-icon">
                                    <i class="fas fa-check-shield"></i>
                                </div>
                                <h3 data-translate="achievements.ce">${t.achievements?.ce || 'CE Marking Compliance'}</h3>
                                <p data-translate="achievements.ceDesc">${t.achievements?.ceDesc || 'European Conformity marking for medical devices ensuring compliance with EU safety and health requirements.'}</p>
                                <div class="achievement-year" data-translate="achievements.ceYear">${t.achievements?.ceYear || 'Approved 2020'}</div>
                            </div>

                            <div class="achievement-item">
                                <div class="achievement-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <h3 data-translate="achievements.quality">${t.achievements?.quality || 'Best Quality Supplier'}</h3>
                                <p data-translate="achievements.qualityDesc">${t.achievements?.qualityDesc || 'Awarded by major healthcare institutions for consistent quality and reliable supply chain management.'}</p>
                                <div class="achievement-year" data-translate="achievements.qualityYear">${t.achievements?.qualityYear || '2019-2024'}</div>
                            </div>

                            <div class="achievement-item">
                                <div class="achievement-icon">
                                    <i class="fas fa-globe"></i>
                                </div>
                                <h3 data-translate="achievements.global">${t.achievements?.global || 'Global Market Presence'}</h3>
                                <p data-translate="achievements.globalDesc">${t.achievements?.globalDesc || 'Successfully expanded operations to serve clients across multiple continents with consistent quality standards.'}</p>
                                <div class="achievement-year" data-translate="achievements.globalYear">${t.achievements?.globalYear || 'Ongoing since 2015'}</div>
                            </div>

                            <div class="achievement-item">
                                <div class="achievement-icon">
                                    <i class="fas fa-leaf"></i>
                                </div>
                                <h3 data-translate="achievements.green">${t.achievements?.green || 'Green Manufacturing Initiative'}</h3>
                                <p data-translate="achievements.greenDesc">${t.achievements?.greenDesc || 'Recognition for implementing sustainable and environment-friendly manufacturing processes.'}</p>
                                <div class="achievement-year" data-translate="achievements.greenYear">${t.achievements?.greenYear || 'Implemented 2022'}</div>
                            </div>
                        </div>

                        <div class="achievements-timeline">
                            <h2 data-translate="achievements.milestones">${t.achievements?.milestones || 'Key Milestones'}</h2>
                            <div class="timeline">
                                <div class="timeline-item">
                                    <div class="timeline-year">1992</div>
                                    <div class="timeline-content">
                                        <h4 data-translate="achievements.milestone1">${t.achievements?.milestone1 || 'Company Established'}</h4>
                                        <p data-translate="achievements.milestone1Desc">${t.achievements?.milestone1Desc || 'Founded Shri Gurukrupa Surgical with a vision to provide quality medical products.'}</p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-year">2000</div>
                                    <div class="timeline-content">
                                        <h4 data-translate="achievements.milestone2">${t.achievements?.milestone2 || 'Manufacturing Facility Expansion'}</h4>
                                        <p data-translate="achievements.milestone2Desc">${t.achievements?.milestone2Desc || 'Expanded manufacturing capabilities to meet growing demand.'}</p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-year">2015</div>
                                    <div class="timeline-content">
                                        <h4 data-translate="achievements.milestone3">${t.achievements?.milestone3 || 'International Export Launch'}</h4>
                                        <p data-translate="achievements.milestone3Desc">${t.achievements?.milestone3Desc || 'Started exporting products to international markets.'}</p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-year">2018</div>
                                    <div class="timeline-content">
                                        <h4 data-translate="achievements.milestone4">${t.achievements?.milestone4 || 'ISO Certification Achieved'}</h4>
                                        <p data-translate="achievements.milestone4Desc">${t.achievements?.milestone4Desc || 'Obtained ISO 9001:2015 certification for quality management.'}</p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-year">2025</div>
                                    <div class="timeline-content">
                                        <h4 data-translate="achievements.milestone5">${t.achievements?.milestone5 || 'Digital Transformation'}</h4>
                                        <p data-translate="achievements.milestone5Desc">${t.achievements?.milestone5Desc || 'Launched digital platform and modernized operations for enhanced customer experience.'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="achievements-cta">
                            <h3 data-translate="common.needQuote">${t.common?.needQuote || 'Need a Quote?'}</h3>
                            <p data-translate="achievements.ctaText">${t.achievements?.ctaText || 'Partner with an award-winning company committed to excellence in medical products and services.'}</p>
                            <button class="btn btn-primary" onclick="showPage('enquiry')" data-translate="nav.enquiry">${t.nav?.enquiry || 'Get Quote'}</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize achievements page
    init() {
        // Update page translations
        if (window.updatePageText) {
            setTimeout(() => window.updatePageText(), 100);
        }

        // Add animation to stats
        const stats = document.querySelectorAll('.stat-item');
        stats.forEach((stat, index) => {
            setTimeout(() => {
                stat.style.opacity = '1';
                stat.style.transform = 'scale(1)';
            }, index * 150);
        });

        // Add animation to achievement items
        const items = document.querySelectorAll('.achievement-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        });

        // Add animation to timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 800 + (index * 300));
        });
    }

    // Cleanup when leaving achievements page
    destroy() {
        // Cleanup complete
    }
}

// Make AchievementsPage available globally
window.AchievementsPage = AchievementsPage;