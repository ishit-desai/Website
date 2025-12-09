// Products Page Module
class ProductsPage {
    constructor() {
        this.name = 'products';
        this.products = this.getProductsData();
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get products data
    getProductsData() {
        return [
            {
                id: 'infusion-therapy',
                category: 'infusionTherapy',
                items: [
                    { key: 'infusionSetsEconomy' },
                    { key: 'infusionSetsPremium' },
                    { key: 'infusionSetsUltra' },
                    { key: 'infusionSetsLuerLock' },
                    { key: 'infusionSetsAirvented' },
                    { key: 'buretteSet' },
                    { key: 'extensionLine' },
                    { key: 'pressureMonitoringLines' },
                    { key: 'threeWayStopcock' }
                ]
            },
            {
                id: 'anaesthesia',
                category: 'anaesthesia',
                items: [
                    { key: 'nasalOxygenCatheter' },
                    { key: 'oxygenMaskNonRebreathing' },
                    { key: 'nasalOxygenCannula' },
                    { key: 'guedelAirways' },
                    { key: 'nebulizerMaskTubing' },
                    { key: 'venturiMask' },
                    { key: 'manualResuscitationAmbuBag' },
                    { key: 'bainCircuit' },
                    { key: 'breathingCircuitVentilatorHME' },
                    { key: 'ventilatorCircuit' },
                    { key: 'hmeFilterBVFilter' },
                    { key: 'nebulizerKitTMouth' },
                    { key: 'highConcentrationOxygenMask' }
                ]
            },
            {
                id: 'urology',
                category: 'urology',
                items: [
                    { key: 'urinaryCatheters' },
                    { key: 'urologyStents' },
                    { key: 'nephrostomySets' },
                    { key: 'cystitisSets' },
                    { key: 'urodynamics' },
                    { key: 'biopsyNeedles' },
                    { key: 'urologyLaser' },
                    { key: 'cystoscopes' },
                    { key: 'lithotripsy' },
                    { key: 'urologyBaskets' }
                ]
            },
            {
                id: 'dialysis',
                category: 'dialysis',
                items: [
                    { key: 'haemodialysisCatheter' },
                    { key: 'bloodLineHaemodialysis' }
                ]
            },
            {
                id: 'gastroenterology',
                category: 'gastroenterology',
                items: [
                    { key: 'feedingTube' },
                    { key: 'rylesTube' },
                    { key: 'yanakaurSuctionSet' }
                ]
            },
            {
                id: 'surgery',
                category: 'surgery',
                items: [
                    { key: 'closedWoundSuctionUnit' },
                    { key: 'skinStapler' }
                ]
            },
            {
                id: 'face-mask',
                category: 'faceMask',
                items: [
                    { key: 'earLoopMask' },
                    { key: 'n95FaceMask' }
                ]
            },
            {
                id: 'general',
                category: 'general',
                items: [
                    { key: 'infantMucusExtractor' },
                    { key: 'umbilicalCordClamp' },
                    { key: 'respiratoryExerciser' }
                ]
            }
        ];
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
                    <div class="products-grid">
                        ${this.products.map(product => this.renderProductCard(product, t)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    // Render product card
    renderProductCard(product, t) {
        const categoryData = t.products?.[product.category] || {};
        const title = categoryData.title || product.category;
        const description = categoryData.description || 'Premium quality medical products';

        return `
            <div class="product-card" onclick="showPage('${product.id}')">
                <h3 data-translate="products.${product.category}.title">${title}</h3>
                <p data-translate="products.${product.category}.description">${description}</p>
                <div class="product-count">${product.items.length} Products</div>
                <button class="btn btn-primary" data-translate="common.viewProducts">View Products</button>
            </div>
        `;
    }

    // Removed unused modal functions

    // Initialize products page
    init() {
        // Update translations
        if (window.updatePageText) {
            setTimeout(() => window.updatePageText(), 100);
        }
    }
}

// Make ProductsPage available globally
window.ProductsPage = ProductsPage;