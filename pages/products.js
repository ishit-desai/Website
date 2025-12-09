// Products Page Module
class ProductsPage {
    constructor() {
        this.name = 'products';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get products page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="products.title">${t.products?.title || 'Our Products'}</h1>
                    <p data-translate="products.subtitle">${t.products?.subtitle || 'We supply premium surgical products and medical equipment to healthcare professionals worldwide'}</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="services-grid">
                        <div class="service-card" onclick="showPage('infusion-transfusion')">
                            <div class="service-icon">
                                <i class="fas fa-tint"></i>
                            </div>
                            <h3 data-translate="products.infusionTransfusion.title">${t.products?.infusionTransfusion?.title || 'Infusion & Transfusion'}</h3>
                            <p data-translate="products.infusionTransfusion.description">${t.products?.infusionTransfusion?.description || 'Complete range of infusion and transfusion products for safe fluid delivery and blood transfusion procedures.'}</p>
                            <a href="javascript:void(0)" onclick="showPage('infusion-transfusion')" class="btn btn-primary" data-translate="common.viewProducts">${t.common?.viewProducts || 'View Products'}</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize products page
    init() {
        // Products page initialization complete
    }

    // Cleanup when leaving products page
    destroy() {
        // Cleanup complete
    }
}

// Make ProductsPage available globally
window.ProductsPage = ProductsPage;