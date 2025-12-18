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
                description: 'Cost-effective IV infusion set designed for basic fluid delivery with reliable performance',
                image: 'assets/products/iv-set-carewell-economic.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Sterile and pyrogen-free', 'Latex-free construction', 'Standard drip chamber', 'Roller clamp for flow control', 'Luer slip connector']
            },
            // IV Sets - BLESSING® (Economic)
            {
                id: 'iv-set-blessing-economic',
                name: 'IV Set - BLESSING®',
                subtitle: 'Economic',
                description: 'Reliable and affordable IV set from BLESSING® range for routine infusion procedures',
                image: 'assets/products/iv-set-blessing-economic.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Single use disposable', 'Non-toxic PVC tubing', 'Drop size: 20 drops/ml', 'Standard spike', 'Safe and effective']
            },
            // IV Sets - BLESSING® (Delux - Paper Pouch)
            {
                id: 'iv-set-blessing-delux',
                name: 'IV Set - BLESSING®',
                subtitle: 'Delux - Paper Pouch',
                description: 'Premium IV set from BLESSING® range with enhanced packaging and superior quality components',
                image: 'assets/products/iv-set-blessing-delux.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Premium paper pouch packaging', 'Enhanced sterility assurance', 'Improved flow regularity', 'Kink-resistant tubing', 'Quality tested components']
            },
            // IV Sets - Sayft-NV® (Super Delux)
            {
                id: 'iv-set-sayft-nv-super-delux',
                name: 'IV Set - Sayft-NV®',
                subtitle: 'Super Delux',
                description: 'Top-tier IV set with advanced safety features and superior performance characteristics',
                image: 'assets/products/iv-set-sayft-nv-super-delux.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Advanced needle safety features', 'Ultra-smooth flow control', 'Premium grade materials', 'Enhanced patient comfort', 'Superior durability']
            },
            // Blood Transfusion Set
            {
                id: 'blood-transfusion-set',
                name: 'Blood Transfusion Set',
                description: 'Specialized set designed for safe and efficient blood transfusion procedures',
                image: 'assets/products/blood-transfusion-set.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Blood compatible materials', 'Inline filter for safety', 'Precise flow control', 'Anti-hemolysis design', 'Sterile and ready to use']
            },
            // Measured Volume Set (Doctor Super Delux)
            {
                id: 'measured-volume-set-doctor-super-delux',
                name: 'Measured Volume Set',
                subtitle: 'Doctor Super Delux',
                description: 'Precision volume control set ideal for pediatric care and critical dosing applications',
                image: 'assets/products/measured-volume-set-doctor.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['100ml/150ml graduated chamber', 'Precise volume measurement', 'Child-safe design', 'Doctor recommended quality', 'Ultra-clear chamber visibility']
            },
            // IV Set (Vented)
            {
                id: 'iv-set-vented',
                name: 'IV Set',
                subtitle: 'Vented',
                description: 'Vented IV set designed for efficient air elimination and smooth fluid flow',
                image: 'assets/products/iv-set-vented.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Built-in air vent', 'Prevents air locks', 'Smooth continuous flow', 'Standard connections', 'Reliable performance']
            },
            // IV Set (Vented with Luer Lock)
            {
                id: 'iv-set-vented-luer-lock',
                name: 'IV Set',
                subtitle: 'Vented with Luer Lock',
                description: 'Advanced vented IV set with secure Luer Lock connection for enhanced safety',
                image: 'assets/products/iv-set-vented-luer-lock.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Built-in air venting system', 'Secure Luer Lock connector', 'Enhanced connection safety', 'Prevents accidental disconnection', 'Professional grade quality']
            },
            // IV Set (Vented with Luer Lock with 'Y' connection)
            {
                id: 'iv-set-vented-luer-y-connection',
                name: 'IV Set',
                subtitle: 'Vented with Luer Lock with \'Y\' connection',
                description: 'Multi-port IV set with Y-connection for simultaneous medication administration',
                image: 'assets/products/iv-set-vented-luer-y.jpg',
                category: 'Infusion & Transfusion Products',
                specifications: ['Y-injection port included', 'Dual medication capability', 'Secure Luer Lock system', 'Vented for optimal flow', 'Multi-functional design']
            },
            // Microdrip Set
            {
                id: 'microdrip-set',
                name: 'Microdrip Set',
                description: 'Precision microdrip infusion set for accurate low-volume fluid delivery',
                image: 'assets/products/microdrip-set.jpg',
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

    // Render individual product card
    renderProductCard(product) {
        return `
            <div class="product-item-card">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image"
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