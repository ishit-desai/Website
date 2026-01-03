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

    // Get products data - 4 main categories
    getProductsData() {
        return [
            {
                id: 'infusion-transfusion',
                category: 'infusionTransfusion',
                title: 'Infusion & Transfusion',
                description: 'Complete range of infusion and transfusion products for safe fluid delivery and blood procedures',
                image: 'assets/products/coming_soon.jpg',
                subcategories: [
                    {
                        name: 'Infusion Therapy',
                        items: [
                            { key: 'infusionSetsEconomy', name: 'Infusion Sets - Economy Models' },
                            { key: 'infusionSetsPremium', name: 'Infusion Sets - Premium Models' },
                            { key: 'infusionSetsUltra', name: 'Infusion Sets - Ultra Models' },
                            { key: 'infusionSetsLuerLock', name: 'Infusion Sets with Luer Lock' },
                            { key: 'infusionSetsAirvented', name: 'Airvented Infusion Sets' },
                            { key: 'buretteSet', name: 'Burette Set' },
                            { key: 'extensionLine', name: 'Extension Line' },
                            { key: 'pressureMonitoringLines', name: 'Pressure Monitoring Lines' },
                            { key: 'threeWayStopcock', name: '3 Way Stopcock' }
                        ]
                    }
                ]
            },
            {
                id: 'anesthesia-respiratory',
                category: 'anesthesiaRespiratory',
                title: 'Anesthesia & Respiratory',
                description: 'Complete anesthesia equipment and respiratory supplies for surgical and critical care procedures',
                image: 'assets/products/coming_soon.jpg',
                subcategories: [
                    {
                        name: 'Anesthesia Equipment',
                        items: [
                            { key: 'nasalOxygenCatheter', name: 'Nasal Oxygen Catheter' },
                            { key: 'oxygenMaskNonRebreathing', name: 'Non-Rebreathing Oxygen Mask' },
                            { key: 'nasalOxygenCannula', name: 'Nasal Oxygen Cannula' },
                            { key: 'guedelAirways', name: 'Guedel Airways' },
                            { key: 'nebulizerMaskTubing', name: 'Nebulizer Mask with Tubing' },
                            { key: 'venturiMask', name: 'Venturi Mask' },
                            { key: 'manualResuscitationAmbuBag', name: 'Manual Resuscitation (Ambu Bag)' },
                            { key: 'bainCircuit', name: 'Bain Circuit' },
                            { key: 'breathingCircuitVentilatorHME', name: 'Breathing Circuit/HME Filter' },
                            { key: 'ventilatorCircuit', name: 'Ventilator Circuit' },
                            { key: 'hmeFilterBVFilter', name: 'HME Filter/BV Filter' },
                            { key: 'nebulizerKitTMouth', name: 'Nebulizer Kit with T Mouth' },
                            { key: 'highConcentrationOxygenMask', name: 'High Concentration Oxygen Mask' }
                        ]
                    }
                ]
            },
            {
                id: 'urology-gastroenterology',
                category: 'urologyGastroenterology',
                title: 'Urology & Gastroenterology',
                description: 'Specialized products for urinary tract and digestive system procedures and interventions',
                image: 'assets/products/coming_soon.jpg',
                subcategories: [
                    {
                        name: 'Urology',
                        items: [
                            { key: 'urinaryCatheters', name: 'Urinary Catheters' },
                            { key: 'urologyStents', name: 'Urology Stents' },
                            { key: 'nephrostomySets', name: 'Nephrostomy Sets' },
                            { key: 'cystitisSets', name: 'Cystitis Sets' },
                            { key: 'urodynamics', name: 'Urodynamics Equipment' },
                            { key: 'biopsyNeedles', name: 'Biopsy Needles' },
                            { key: 'urologyLaser', name: 'Urology Laser Systems' },
                            { key: 'cystoscopes', name: 'Cystoscopes' },
                            { key: 'lithotripsy', name: 'Lithotripsy Equipment' },
                            { key: 'urologyBaskets', name: 'Urology Retrieval Baskets' }
                        ]
                    },
                    {
                        name: 'Gastroenterology',
                        items: [
                            { key: 'feedingTube', name: 'Feeding Tube' },
                            { key: 'rylesTube', name: 'Ryle\'s Tube' },
                            { key: 'yanakaurSuctionSet', name: 'Yankaur Suction Set' }
                        ]
                    }
                ]
            },
            {
                id: 'miscellaneous',
                category: 'miscellaneous',
                title: 'Miscellaneous',
                description: 'Additional medical supplies including surgical instruments, face masks, and general medical equipment',
                image: 'assets/products/coming_soon.jpg',
                subcategories: [
                    {
                        name: 'Surgery',
                        items: [
                            { key: 'closedWoundSuctionUnit', name: 'Closed Wound Suction Unit' },
                            { key: 'skinStapler', name: 'Skin Stapler' }
                        ]
                    },
                    {
                        name: 'Face Masks',
                        items: [
                            { key: 'earLoopMask', name: 'Ear Loop Mask' },
                            { key: 'n95FaceMask', name: 'N-95 Face Mask' }
                        ]
                    },
                    {
                        name: 'General Medical',
                        items: [
                            { key: 'infantMucusExtractor', name: 'Infant Mucus Extractor' },
                            { key: 'umbilicalCordClamp', name: 'Umbilical Cord Clamp' },
                            { key: 'respiratoryExerciser', name: 'Respiratory Exerciser' }
                        ]
                    }
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
        const title = categoryData.title || product.title;
        const description = categoryData.description || product.description;

        return `
            <div class="product-card" onclick="showPage('${product.id}')">
                <h3 data-translate="products.${product.category}.title">${title}</h3>
                <p data-translate="products.${product.category}.description">${description}</p>
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