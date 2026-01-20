// Infusion & Transfusion Product Category Page
class InfusionTransfusionPage {
    constructor() {
        this.name = 'infusion-transfusion';
        this.products = this.getProductsData();
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get products data for Infusion & Transfusion category
    getProductsData() {
        return [
            // IV Sets - CAREWELL™
            {
                id: 'iv-set-carewell-economic',
                name: 'IV Set - CAREWELL™',
                subtitle: 'Economic',
                description: 'Cost-effective disposable IV infusion set with sterile medical grade tubing, gravity feed mechanism, and reliable drip chamber for basic intravenous fluid delivery and parenteral therapy',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Sterile and pyrogen-free', 'Latex-free construction', 'Standard drip chamber', 'Roller clamp for flow control', 'Luer slip connector']
            },
            // IV Sets - BLESSING® (Economic)
            {
                id: 'iv-set-blessing-economic',
                name: 'IV Set - BLESSING®',
                subtitle: 'Economic',
                description: 'Reliable and affordable IV set from BLESSING® range for routine infusion procedures',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Single use disposable', 'Non-toxic PVC tubing', 'Drop size: 20 drops/ml', 'Standard spike', 'Safe and effective']
            },
            // IV Sets - BLESSING® (Delux - Paper Pouch)
            {
                id: 'iv-set-blessing-delux',
                name: 'IV Set - BLESSING®',
                subtitle: 'Delux - Paper Pouch',
                description: 'Premium IV set from BLESSING® range with enhanced packaging and superior quality components',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Premium paper pouch packaging', 'Enhanced sterility assurance', 'Improved flow regularity', 'Kink-resistant tubing', 'Quality tested components']
            },
            // IV Sets - Sayft-NV® (Super Delux)
            {
                id: 'iv-set-sayft-nv-super-delux',
                name: 'IV Set - Sayft-NV®',
                subtitle: 'Super Delux',
                description: 'Top-tier IV set with advanced safety features and superior performance characteristics',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Advanced needle safety features', 'Ultra-smooth flow control', 'Premium grade materials', 'Enhanced patient comfort', 'Superior durability']
            },
            // Blood Transfusion Set
            {
                id: 'blood-transfusion-set',
                name: 'Blood Transfusion Set',
                description: 'Specialized BT set (Blood Transfusion Set) designed for safe and efficient blood administration procedures with inline filters, anti-hemolysis tubing, and precise flow control for hospital blood banks',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Blood compatible materials', 'Inline filter for safety', 'Precise flow control', 'Anti-hemolysis design', 'Sterile and ready to use']
            },
            // Measured Volume Set (Doctor Super Delux)
            {
                id: 'measured-volume-set-doctor-super-delux',
                name: 'Measured Volume Set',
                subtitle: 'Doctor Super Delux',
                description: 'Precision MV set (Measured Volume Set) with graduated burette chamber ideal for pediatric infusion, critical dosing applications, and controlled volume administration in ICU and NICU settings',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['100ml/150ml graduated chamber', 'Precise volume measurement', 'Child-safe design', 'Doctor recommended quality', 'Ultra-clear chamber visibility']
            },
            // IV Set (Vented)
            {
                id: 'iv-set-vented',
                name: 'IV Set',
                subtitle: 'Vented',
                description: 'Vented IV set designed for efficient air elimination and smooth fluid flow',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Built-in air vent', 'Prevents air locks', 'Smooth continuous flow', 'Standard connections', 'Reliable performance']
            },
            // IV Set (Vented with Luer Lock)
            {
                id: 'iv-set-vented-luer-lock',
                name: 'IV Set',
                subtitle: 'Vented with Luer Lock',
                description: 'Advanced vented IV set with secure Luer Lock connection for enhanced safety',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Built-in air venting system', 'Secure Luer Lock connector', 'Enhanced connection safety', 'Prevents accidental disconnection', 'Professional grade quality']
            },
            // IV Set (Vented with Luer Lock with 'Y' connection)
            {
                id: 'iv-set-vented-luer-y-connection',
                name: 'IV Set',
                subtitle: 'Vented with Luer Lock with \'Y\' connection',
                description: 'Multi-port IV set with Y-connection for simultaneous medication administration',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Y-injection port included', 'Dual medication capability', 'Secure Luer Lock system', 'Vented for optimal flow', 'Multi-functional design']
            },
            // Microdrip Set
            {
                id: 'microdrip-set',
                name: 'Microdrip Set',
                description: 'Precision microdrip infusion set (60 drops/ml) with micro drip chamber for accurate low-volume fluid delivery, ideal for pediatric sets and critical care applications requiring controlled infusion rates',
                image: 'assets/products/coming_soon.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['60 drops/ml precision', 'Microdrip chamber design', 'Accurate low-volume delivery', 'Ideal for pediatric use', 'Superior flow control']
            }
        ];
    }

    // Get page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1>Infusion & Transfusion Products</h1>
                    <p>Complete range of infusion and transfusion products for safe fluid delivery and blood procedures</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="seo-content-block">
                        <h2>Professional Medical Infusion & Transfusion Solutions</h2>
                        <p>Our medical grade infusion and transfusion products are designed for healthcare professionals requiring reliable, sterile, and safe fluid delivery systems. From basic gravity feed IV sets to sophisticated measured volume burette sets, we provide comprehensive solutions for intravenous therapy, blood administration, and parenteral drug delivery.</p>
                    </div>

                    ${this.renderAllProducts()}
                </div>
            </section>
        `;
    }

    // Render all products in a clean grid without category divisions
    renderAllProducts() {
        return `
            <div class="products-grid">
                ${this.products.map(product => this.renderProductCard(product)).join('')}
            </div>
        `;
    }

    // Generate SEO-optimized alt text for product images
    generateSEOAltText(product) {
        let altText = product.name;
        if (product.subtitle) {
            altText += ` ${product.subtitle}`;
        }

        // Add relevant medical keywords based on product type
        if (product.name.toLowerCase().includes('iv set')) {
            altText += ' - Disposable IV infusion set with sterile medical grade tubing for intravenous therapy';
        } else if (product.name.toLowerCase().includes('blood transfusion')) {
            altText += ' - BT set for blood administration procedures with inline filters and anti-hemolysis design';
        } else if (product.name.toLowerCase().includes('measured volume')) {
            altText += ' - MV set with graduated burette chamber for pediatric infusion and controlled dosing';
        } else if (product.name.toLowerCase().includes('microdrip')) {
            altText += ' - Precision microdrip infusion set (60 drops/ml) for accurate low-volume fluid delivery';
        } else {
            altText += ' - Medical equipment for infusion and transfusion procedures';
        }

        altText += ' | Shri Gurukrupa Surgical - ISO certified medical device manufacturer';
        return altText;
    }

    // Render individual product card
    renderProductCard(product) {
        return `
            <div class="product-item-card">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${this.generateSEOAltText(product)}" class="product-image"
                         onload="this.parentElement.classList.add('has-image')"
                         onerror="this.src='assets/products/medical-placeholder.svg'; this.parentElement.classList.add('no-image')">
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <h3 class="product-name">${product.name}</h3>
                        ${product.subtitle ? `<p class="product-subtitle">${product.subtitle}</p>` : '<div class="product-subtitle-spacer"></div>'}
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-specifications">
                        <h4>Key Features:</h4>
                        <ul>
                            ${product.specifications.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                    </div>
                    <button class="btn btn-primary product-enquiry-btn" onclick="openProductEnquiry('${product.name}')">
                        <i class="fas fa-envelope"></i> Enquire Now
                    </button>
                </div>
            </div>
        `;
    }

    // Initialize page
    init() {
        // Update translations if available
        if (window.updatePageText) {
            setTimeout(() => window.updatePageText(), 100);
        }
    }
}

// Make page available globally
window.InfusionTransfusionPage = InfusionTransfusionPage;