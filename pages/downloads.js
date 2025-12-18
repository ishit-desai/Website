// Downloads Page Module
class DownloadsPage {
    constructor() {
        this.name = 'downloads';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get page content
    getContent() {
        const t = this.getTranslation();

        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="downloads.title">${t.downloads?.title || 'Downloads'}</h1>
                    <p data-translate="downloads.subtitle">Download our comprehensive SGS products catalogue</p>
                </div>
            </div>

            <section class="page-section">
                <div class="container">
                    <div class="downloads-content-single">

                        <div class="download-hero">
                            <div class="download-hero-content">
                                <div class="download-icon-large">
                                    <i class="fas fa-file-pdf"></i>
                                </div>
                                <div class="download-details">
                                    <h2>SGS Products Catalogue</h2>
                                    <p>Complete catalogue featuring all Shri Gurukrupa Surgical products and medical equipment with detailed specifications and technical information.</p>

                                    <div class="download-features">
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>Complete Product Range</span>
                                        </div>
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>Technical Specifications</span>
                                        </div>
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>Updated 2025</span>
                                        </div>
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>High Quality Images</span>
                                        </div>
                                    </div>

                                    <div class="download-actions">
                                        <button class="download-btn-primary" onclick="window.downloadsPage.downloadSGSCatalogue()">
                                            <i class="fas fa-download"></i>
                                            <span>Download SGS Catalogue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="download-cta">
                            <h3 data-translate="common.needQuote">Need a Quote?</h3>
                            <p data-translate="common.contactForPricing">Contact us for detailed pricing information and bulk orders.</p>
                            <button class="btn btn-primary" onclick="showPage('enquiry')" data-translate="nav.enquiry">Get Quote</button>
                        </div>

                    </div>
                </div>
            </section>
        `;
    }

    // Download SGS Catalogue function
    downloadSGSCatalogue() {
        // Open PDF in new window/tab and let user decide how to save it
        window.open('Catalogue SGS Ahmedabad.pdf', '_blank', 'noopener,noreferrer');
    }

    // Initialize downloads page
    init() {
        // Store reference for download functions
        window.downloadsPage = this;

        // Update translations
        if (window.updatePageText) {
            setTimeout(() => window.updatePageText(), 100);
        }
    }

    // Cleanup
    destroy() {
        if (window.downloadsPage === this) {
            delete window.downloadsPage;
        }
    }
}

// Make available globally
window.DownloadsPage = DownloadsPage;