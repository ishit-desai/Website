// Infrastructure Page Module
class InfrastructurePage {
    constructor() {
        this.name = 'infrastructure';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get infrastructure page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="infrastructure.title">${t.infrastructure?.title || 'Our Infrastructure'}</h1>
                    <p data-translate="infrastructure.subtitle">${t.infrastructure?.subtitle || 'State-of-the-art facilities and advanced manufacturing capabilities'}</p>
                </div>
            </div>

            <section class="page-section">
                <div class="container">
                    <div class="infrastructure-content">

                        <div class="infrastructure-intro">
                            <h2 data-translate="infrastructure.overview">${t.infrastructure?.overview || 'Infrastructure Overview'}</h2>
                            <p data-translate="infrastructure.description">${t.infrastructure?.description || 'Shri Gurukrupa Surgical operates from a modern manufacturing facility equipped with cutting-edge technology and advanced production systems. Our infrastructure is designed to maintain the highest quality standards while ensuring efficient production and timely delivery.'}</p>
                        </div>

                        <div class="infrastructure-grid">
                            <div class="infrastructure-item">
                                <div class="infrastructure-icon">
                                    <i class="fas fa-industry"></i>
                                </div>
                                <h3 data-translate="infrastructure.manufacturing">${t.infrastructure?.manufacturing || 'Manufacturing Facility'}</h3>
                                <p data-translate="infrastructure.manufacturingDesc">${t.infrastructure?.manufacturingDesc || 'Modern 50,000 sq ft manufacturing facility with advanced machinery and automated production lines for precision manufacturing.'}</p>
                            </div>

                            <div class="infrastructure-item">
                                <div class="infrastructure-icon">
                                    <i class="fas fa-microscope"></i>
                                </div>
                                <h3 data-translate="infrastructure.qualityLab">${t.infrastructure?.qualityLab || 'Quality Control Laboratory'}</h3>
                                <p data-translate="infrastructure.qualityLabDesc">${t.infrastructure?.qualityLabDesc || 'Fully equipped quality control laboratory with latest testing equipment to ensure all products meet international standards.'}</p>
                            </div>

                            <div class="infrastructure-item">
                                <div class="infrastructure-icon">
                                    <i class="fas fa-warehouse"></i>
                                </div>
                                <h3 data-translate="infrastructure.warehouse">${t.infrastructure?.warehouse || 'Warehouse & Storage'}</h3>
                                <p data-translate="infrastructure.warehouseDesc">${t.infrastructure?.warehouseDesc || 'Climate-controlled warehouse with advanced inventory management systems for optimal storage and quick dispatch.'}</p>
                            </div>

                            <div class="infrastructure-item">
                                <div class="infrastructure-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <h3 data-translate="infrastructure.cleanroom">${t.infrastructure?.cleanroom || 'Clean Room Facilities'}</h3>
                                <p data-translate="infrastructure.cleanroomDesc">${t.infrastructure?.cleanroomDesc || 'ISO-certified clean room environments for sterile product manufacturing with controlled air filtration systems.'}</p>
                            </div>

                            <div class="infrastructure-item">
                                <div class="infrastructure-icon">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <h3 data-translate="infrastructure.machinery">${t.infrastructure?.machinery || 'Advanced Machinery'}</h3>
                                <p data-translate="infrastructure.machineryDesc">${t.infrastructure?.machineryDesc || 'Latest German and Japanese machinery for precision manufacturing, injection molding, and automated assembly processes.'}</p>
                            </div>

                            <div class="infrastructure-item">
                                <div class="infrastructure-icon">
                                    <i class="fas fa-user-tie"></i>
                                </div>
                                <h3 data-translate="infrastructure.team">${t.infrastructure?.team || 'Skilled Workforce'}</h3>
                                <p data-translate="infrastructure.teamDesc">${t.infrastructure?.teamDesc || 'Highly trained technical team and skilled workforce with extensive experience in medical device manufacturing.'}</p>
                            </div>
                        </div>

                        <div class="infrastructure-highlights">
                            <h2 data-translate="infrastructure.features">${t.infrastructure?.features || 'Key Features'}</h2>
                            <div class="highlights-grid">
                                <div class="highlight-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-translate="infrastructure.feature1">${t.infrastructure?.feature1 || 'ISO 9001:2015 Certified Facility'}</span>
                                </div>
                                <div class="highlight-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-translate="infrastructure.feature2">${t.infrastructure?.feature2 || '24/7 Production Capability'}</span>
                                </div>
                                <div class="highlight-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-translate="infrastructure.feature3">${t.infrastructure?.feature3 || 'Automated Quality Control Systems'}</span>
                                </div>
                                <div class="highlight-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-translate="infrastructure.feature4">${t.infrastructure?.feature4 || 'Environment-Friendly Processes'}</span>
                                </div>
                                <div class="highlight-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-translate="infrastructure.feature5">${t.infrastructure?.feature5 || 'Real-time Production Monitoring'}</span>
                                </div>
                                <div class="highlight-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span data-translate="infrastructure.feature6">${t.infrastructure?.feature6 || 'Advanced Safety & Security Systems'}</span>
                                </div>
                            </div>
                        </div>

                        <div class="infrastructure-cta">
                            <h3 data-translate="common.needQuote">${t.common?.needQuote || 'Need a Quote?'}</h3>
                            <p data-translate="infrastructure.ctaText">${t.infrastructure?.ctaText || 'Get in touch to learn more about our manufacturing capabilities and how we can support your requirements.'}</p>
                            <button class="btn btn-primary" onclick="showPage('enquiry')" data-translate="nav.enquiry">${t.nav?.enquiry || 'Get Quote'}</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize infrastructure page
    init() {
        // Update page translations
        if (window.updatePageText) {
            setTimeout(() => window.updatePageText(), 100);
        }

        // Add animation to infrastructure items
        const items = document.querySelectorAll('.infrastructure-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });

        // Add animation to highlight items
        const highlights = document.querySelectorAll('.highlight-item');
        highlights.forEach((highlight, index) => {
            setTimeout(() => {
                highlight.style.opacity = '1';
                highlight.style.transform = 'translateX(0)';
            }, 500 + (index * 100));
        });
    }

    // Cleanup when leaving infrastructure page
    destroy() {
        // Cleanup complete
    }
}

// Make InfrastructurePage available globally
window.InfrastructurePage = InfrastructurePage;