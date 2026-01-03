// Urology Page Module
class UrologyPage {
    constructor() {
        this.name = 'urology';
        this.products = this.getProductsData();
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get products data for this category
    getProductsData() {
        return [
            { key: 'urinaryCatheters', image: 'assets/products/coming_soon.jpg' },
            { key: 'urologyStents', image: 'assets/products/coming_soon.jpg' },
            { key: 'nephrostomySets', image: 'assets/products/coming_soon.jpg' },
            { key: 'cystitisSets', image: 'assets/products/coming_soon.jpg' },
            { key: 'urodynamics', image: 'assets/products/coming_soon.jpg' },
            { key: 'biopsyNeedles', image: 'assets/products/coming_soon.jpg' },
            { key: 'urologyLaser', image: 'assets/products/coming_soon.jpg' },
            { key: 'cystoscopes', image: 'assets/products/coming_soon.jpg' },
            { key: 'lithotripsy', image: 'assets/products/coming_soon.jpg' },
            { key: 'urologyBaskets', image: 'assets/products/coming_soon.jpg' }
        ];
    }

    // Get page content
    getContent() {
        const t = this.getTranslation();
        const categoryData = t.products?.urology || {};

        return `
            <div class="page-header">
                <div class="container">
                    <nav class="breadcrumb">
                        <a href="javascript:void(0)" onclick="showPage('home')" data-translate="nav.home">Home</a>
                        <span>/</span>
                        <a href="javascript:void(0)" onclick="showPage('products')" data-translate="nav.products">Products</a>
                        <span>/</span>
                        <span data-translate="products.urology.title">${categoryData.title || 'Urology'}</span>
                    </nav>
                    <h1 data-translate="products.urology.title">${categoryData.title || 'Urology'}</h1>
                    <p data-translate="products.urology.description">${categoryData.description || 'Specialized urology products for urinary tract procedures and interventions.'}</p>
                </div>
            </div>

            <section class="page-section">
                <div class="container">
                    <div class="category-products-grid">
                        ${this.products.map(product => this.renderProductItem(product, t)).join('')}
                    </div>

                    <div class="category-cta">
                        <h3 data-translate="common.needQuote">Need a Quote?</h3>
                        <p data-translate="common.contactForPricing">Contact us for detailed pricing information and bulk orders.</p>
                        <button class="btn btn-primary" onclick="showPage('enquiry')" data-translate="nav.enquiry">Get Quote</button>
                    </div>
                </div>
            </section>
        `;
    }

    // Render individual product item
    renderProductItem(product, t) {
        const categoryData = t.products?.urology || {};
        const productData = categoryData[product.key] || {};
        const name = productData.name || product.key;
        const description = productData.description || 'High-quality urology equipment';

        return `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.image}" alt="${name}" onerror="this.src='assets/products/medical-placeholder.svg'">
                    <div class="product-overlay">
                        <button class="btn btn-primary" onclick="showPage('enquiry')" data-translate="common.getQuote">Get Quote</button>
                    </div>
                </div>
                <div class="product-details">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <div class="product-features">
                        <span class="feature-tag" data-translate="infusionProducts.sterile">Sterile & Single-Use</span>
                        <span class="feature-tag" data-translate="infusionProducts.certified">FDA & CE Certified</span>
                        <span class="feature-tag" data-translate="infusionProducts.medicalGrade">Medical Grade</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize page
    init() {
        if (window.updatePageText) {
            setTimeout(() => window.updatePageText(), 100);
        }
    }
}

window.UrologyPage = UrologyPage;