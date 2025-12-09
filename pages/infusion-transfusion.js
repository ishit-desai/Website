// Infusion & Transfusion Page Module
class InfusionTransfusionPage {
    constructor() {
        this.name = 'infusion-transfusion';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get infusion & transfusion page content
    getContent() {
        const t = this.getTranslation();
        const infusionProducts = [
            { key: 'ivCannula', name: t.infusionProducts?.ivCannula?.name || "IV Cannula", description: t.infusionProducts?.ivCannula?.description || "Sterile intravenous cannulas for safe vascular access" },
            { key: 'ivSets', name: t.infusionProducts?.ivSets?.name || "IV Administration Sets", description: t.infusionProducts?.ivSets?.description || "Complete IV fluid administration systems with precise flow control" },
            { key: 'pumps', name: t.infusionProducts?.pumps?.name || "Infusion Pumps", description: t.infusionProducts?.pumps?.description || "Electronic infusion pumps for accurate medication delivery" },
            { key: 'catheters', name: t.infusionProducts?.catheters?.name || "IV Catheters", description: t.infusionProducts?.catheters?.description || "Central and peripheral IV catheters for various clinical needs" },
            { key: 'stopcocks', name: t.infusionProducts?.stopcocks?.name || "Three-Way Stopcocks", description: t.infusionProducts?.stopcocks?.description || "Multi-port connectors for IV line management" },
            { key: 'extensions', name: t.infusionProducts?.extensions?.name || "Extension Lines", description: t.infusionProducts?.extensions?.description || "IV extension tubing for flexible patient care" },
            { key: 'pressureBags', name: t.infusionProducts?.pressureBags?.name || "Pressure Bags", description: t.infusionProducts?.pressureBags?.description || "IV pressure infusion bags for rapid fluid delivery" },
            { key: 'poles', name: t.infusionProducts?.poles?.name || "IV Poles & Stands", description: t.infusionProducts?.poles?.description || "Mobile and stationary IV equipment support systems" }
        ];

        const transfusionProducts = [
            { key: 'bloodSets', name: t.transfusionProducts?.bloodSets?.name || "Blood Transfusion Sets", description: t.transfusionProducts?.bloodSets?.description || "Sterile blood administration sets with inline filters" },
            { key: 'bloodBags', name: t.transfusionProducts?.bloodBags?.name || "Blood Bags", description: t.transfusionProducts?.bloodBags?.description || "FDA approved blood collection and storage bags" },
            { key: 'plasmaSets', name: t.transfusionProducts?.plasmaSets?.name || "Plasma Transfer Sets", description: t.transfusionProducts?.plasmaSets?.description || "Specialized equipment for plasma separation and transfer" },
            { key: 'warmers', name: t.transfusionProducts?.warmers?.name || "Blood Warmers", description: t.transfusionProducts?.warmers?.description || "Temperature control systems for safe blood transfusion" },
            { key: 'cuffs', name: t.transfusionProducts?.cuffs?.name || "Blood Pressure Cuffs", description: t.transfusionProducts?.cuffs?.description || "Manual and automated blood pressure monitoring" },
            { key: 'filters', name: t.transfusionProducts?.filters?.name || "Transfusion Filters", description: t.transfusionProducts?.filters?.description || "Leukocyte reduction and microaggregate filters" },
            { key: 'tubes', name: t.transfusionProducts?.tubes?.name || "Blood Collection Tubes", description: t.transfusionProducts?.tubes?.description || "Vacuum tubes for blood sample collection" },
            { key: 'apheresis', name: t.transfusionProducts?.apheresis?.name || "Apheresis Sets", description: t.transfusionProducts?.apheresis?.description || "Complete systems for therapeutic apheresis procedures" }
        ];

        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="products.infusionTransfusion.title">${t.products?.infusionTransfusion?.title || 'Infusion & Transfusion'}</h1>
                    <p data-translate="products.infusionTransfusion.description">${t.products?.infusionTransfusion?.description || 'Complete range of infusion and transfusion products for safe fluid delivery and blood transfusion procedures'}</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2 data-translate="infusionProducts.features">${t.infusionProducts?.features || 'Product Features'}</h2>
                            <ul class="about-features">
                                <li data-translate="infusionProducts.medicalGrade">${t.infusionProducts?.medicalGrade || 'Medical Grade Materials'}</li>
                                <li data-translate="infusionProducts.sterile">${t.infusionProducts?.sterile || 'Sterile & Single-Use Design'}</li>
                                <li data-translate="infusionProducts.certified">${t.infusionProducts?.certified || 'FDA & CE Certified'}</li>
                                <li data-translate="infusionProducts.biocompatible">${t.infusionProducts?.biocompatible || 'Biocompatible Components'}</li>
                                <li data-translate="infusionProducts.leakProof">${t.infusionProducts?.leakProof || 'Leak-Proof Connections'}</li>
                                <li data-translate="infusionProducts.flowControl">${t.infusionProducts?.flowControl || 'Precise Flow Control'}</li>
                            </ul>

                            <h2 data-translate="infusionProducts.title">${t.infusionProducts?.title || 'Infusion Products'}</h2>
                            <div class="services-grid" style="margin-top: 30px;">
                                ${infusionProducts.map(item => `
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <i class="fas fa-tint"></i>
                                        </div>
                                        <h3 data-translate="infusionProducts.${item.key}.name">${item.name}</h3>
                                        <p data-translate="infusionProducts.${item.key}.description">${item.description}</p>
                                    </div>
                                `).join('')}
                            </div>

                            <h2 style="margin-top: 60px;" data-translate="transfusionProducts.title">${t.transfusionProducts?.title || 'Transfusion Products'}</h2>
                            <div class="services-grid" style="margin-top: 30px;">
                                ${transfusionProducts.map(item => `
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <i class="fas fa-heartbeat"></i>
                                        </div>
                                        <h3 data-translate="transfusionProducts.${item.key}.name">${item.name}</h3>
                                        <p data-translate="transfusionProducts.${item.key}.description">${item.description}</p>
                                    </div>
                                `).join('')}
                            </div>

                            <div style="margin-top: 40px; text-align: center;">
                                <a href="javascript:void(0)" onclick="showPage('enquiry')" class="btn btn-primary" data-translate="common.getQuote">${t.common?.getQuote || 'Get Quote'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize infusion transfusion page
    init() {
        // Page initialization complete
    }

    // Cleanup when leaving page
    destroy() {
        // Cleanup complete
    }
}

// Make InfusionTransfusionPage available globally
window.InfusionTransfusionPage = InfusionTransfusionPage;