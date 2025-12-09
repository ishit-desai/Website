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

    // Get downloads page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="downloads.title">${t.downloads?.title || 'Downloads'}</h1>
                    <p data-translate="downloads.subtitle">${t.downloads?.subtitle || 'Download our product catalogues, brochures, and technical documentation'}</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="downloads-content">
                        <div class="downloads-header">
                            <h2 data-translate="downloads.catalogues">${t.downloads?.catalogues || 'Product Catalogues'}</h2>
                            <p data-translate="downloads.catalogueDescription">${t.downloads?.catalogueDescription || 'Browse and download our comprehensive product catalogues with detailed specifications and pricing information.'}</p>
                        </div>

                        <div class="downloads-grid">
                            <div class="download-item">
                                <div class="download-icon">
                                    <i class="fas fa-file-pdf"></i>
                                </div>
                                <div class="download-content">
                                    <h3 data-translate="downloads.mainCatalogue">${t.downloads?.mainCatalogue || 'Main Product Catalogue'}</h3>
                                    <p data-translate="downloads.mainCatalogueDesc">${t.downloads?.mainCatalogueDesc || 'Complete catalogue featuring all our surgical products and medical equipment with detailed specifications.'}</p>
                                    <div class="download-meta">
                                        <span class="file-size">PDF • 2.5 MB</span>
                                        <span class="last-updated" data-translate="downloads.updated">${t.downloads?.updated || 'Updated: Dec 2024'}</span>
                                    </div>
                                    <a href="javascript:void(0)" onclick="alert('Catalogue will be available soon. Please contact us for more information.')" class="btn btn-primary download-btn">
                                        <i class="fas fa-download"></i>
                                        <span data-translate="downloads.download">${t.downloads?.download || 'Download PDF'}</span>
                                    </a>
                                </div>
                            </div>

                            <div class="download-item">
                                <div class="download-icon">
                                    <i class="fas fa-file-pdf"></i>
                                </div>
                                <div class="download-content">
                                    <h3 data-translate="downloads.infusionCatalogue">${t.downloads?.infusionCatalogue || 'Infusion & Transfusion Catalogue'}</h3>
                                    <p data-translate="downloads.infusionCatalogueDesc">${t.downloads?.infusionCatalogueDesc || 'Specialized catalogue for infusion and transfusion products with technical specifications.'}</p>
                                    <div class="download-meta">
                                        <span class="file-size">PDF • 1.8 MB</span>
                                        <span class="last-updated" data-translate="downloads.updated">${t.downloads?.updated || 'Updated: Dec 2024'}</span>
                                    </div>
                                    <a href="javascript:void(0)" onclick="alert('Catalogue will be available soon. Please contact us for more information.')" class="btn btn-primary download-btn">
                                        <i class="fas fa-download"></i>
                                        <span data-translate="downloads.download">${t.downloads?.download || 'Download PDF'}</span>
                                    </a>
                                </div>
                            </div>

                            <div class="download-item">
                                <div class="download-icon">
                                    <i class="fas fa-file-pdf"></i>
                                </div>
                                <div class="download-content">
                                    <h3 data-translate="downloads.certifications">${t.downloads?.certifications || 'Certifications & Quality Standards'}</h3>
                                    <p data-translate="downloads.certificationsDesc">${t.downloads?.certificationsDesc || 'ISO certifications, quality standards, and compliance documentation.'}</p>
                                    <div class="download-meta">
                                        <span class="file-size">PDF • 0.8 MB</span>
                                        <span class="last-updated" data-translate="downloads.updated">${t.downloads?.updated || 'Updated: Dec 2024'}</span>
                                    </div>
                                    <a href="javascript:void(0)" onclick="alert('Certifications will be available soon. Please contact us for more information.')" class="btn btn-primary download-btn">
                                        <i class="fas fa-download"></i>
                                        <span data-translate="downloads.download">${t.downloads?.download || 'Download PDF'}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="downloads-help">
                            <div class="help-card">
                                <div class="help-icon">
                                    <i class="fas fa-question-circle"></i>
                                </div>
                                <div class="help-content">
                                    <h3 data-translate="downloads.needHelp">${t.downloads?.needHelp || 'Need Help?'}</h3>
                                    <p data-translate="downloads.helpText">${t.downloads?.helpText || 'If you need assistance with downloads or have questions about our products, please contact us.'}</p>
                                    <a href="javascript:void(0)" onclick="showPage('contact')" class="btn btn-secondary">
                                        <i class="fas fa-headset"></i>
                                        <span data-translate="downloads.contactSupport">${t.downloads?.contactSupport || 'Contact Support'}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="downloads-info">
                            <h3 data-translate="downloads.downloadInfo">${t.downloads?.downloadInfo || 'Download Information'}</h3>
                            <ul class="info-list">
                                <li data-translate="downloads.infoItem1">${t.downloads?.infoItem1 || 'All catalogues are in PDF format for easy viewing and printing'}</li>
                                <li data-translate="downloads.infoItem2">${t.downloads?.infoItem2 || 'Files are regularly updated with latest product information'}</li>
                                <li data-translate="downloads.infoItem3">${t.downloads?.infoItem3 || 'No registration required for downloads'}</li>
                                <li data-translate="downloads.infoItem4">${t.downloads?.infoItem4 || 'For bulk orders, please contact us for special pricing'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize downloads page
    init() {
        this.initDownloadTracking();
    }

    // Track download clicks for analytics
    initDownloadTracking() {
        const downloadButtons = document.querySelectorAll('.download-btn');
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const fileName = e.currentTarget.href.split('/').pop();
                console.log(`Download initiated: ${fileName}`);

                // Track download event
                if (window.trackEvent) {
                    window.trackEvent('file_download', {
                        file_name: fileName,
                        file_type: 'pdf',
                        download_source: 'downloads_page'
                    });
                }

                // Show download notification
                if (window.showNotification) {
                    const t = this.getTranslation();
                    window.showNotification(
                        t.downloads?.downloadStarted || 'Download started successfully!',
                        'success'
                    );
                }
            });
        });
    }

    // Cleanup when leaving downloads page
    destroy() {
        // Cleanup complete
    }
}

// Make DownloadsPage available globally
window.DownloadsPage = DownloadsPage;