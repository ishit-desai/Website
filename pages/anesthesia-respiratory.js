// Anesthesia & Respiratory Product Category Page
class AnesthesiaRespiratoryPage {
    constructor() {
        this.name = 'anesthesia-respiratory';
        this.products = this.getProductsData();
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get products data for Anesthesia & Respiratory category
    getProductsData() {
        return [
            // Nebulizer Kit
            {
                id: 'nebulizer-kit',
                name: 'Nebulizer Kit',
                description: 'Complete nebulizer kit for efficient medication delivery and respiratory therapy treatments',
                image: 'assets/products/nebulizer-kit.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Complete nebulizer system', 'Efficient medication delivery', 'Easy to assemble', 'Sterile and disposable', 'Compatible with standard medications']
            },
            // Hi-Concentration Mask
            {
                id: 'hi-concentration-mask',
                name: 'Hi-Concentration Mask',
                description: 'High-concentration oxygen mask designed for maximum oxygen delivery in critical care situations',
                image: 'assets/products/hi-concentration-mask.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['High oxygen concentration delivery', 'Non-rebreathing design', 'Reservoir bag included', 'One-way valve system', 'Transparent clear mask']
            },
            // Multiflow Venturi Mask
            {
                id: 'multiflow-venturi-mask',
                name: 'Multiflow Venturi Mask',
                description: 'Precision oxygen delivery mask with multiple flow settings for controlled oxygen concentration',
                image: 'assets/products/multiflow-venturi-mask.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Multiple concentration settings', 'Accurate oxygen mixing', 'Color-coded valves', 'Clear visual markings', 'Precise flow control']
            },
            // Guedel Airway
            {
                id: 'guedel-airway',
                name: 'Guedel Airway',
                description: 'Oropharyngeal airways for effective airway management and patient ventilation support',
                image: 'assets/products/guedel-airway.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Color-coded sizing system', 'Smooth rounded edges', 'Radio-opaque line', 'Various sizes available', 'Easy insertion design']
            },
            // Catheter Mount
            {
                id: 'catheter-mount',
                name: 'Catheter Mount',
                description: 'Flexible catheter mount connector for secure and reliable ventilation circuit connections',
                image: 'assets/products/catheter-mount.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Flexible design', 'Secure connections', 'Low dead space', 'Kink-resistant material', 'Standard fittings']
            },
            // T-Oxygenator
            {
                id: 't-oxygenator',
                name: 'T-Oxygenator',
                description: 'T-piece oxygen delivery system for controlled oxygen administration and ventilation support',
                image: 'assets/products/t-oxygenator.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['T-piece design', 'Controlled oxygen delivery', 'Minimal dead space', 'Easy connectivity', 'Precise gas flow']
            },
            // BVF Filter
            {
                id: 'bvf-filter',
                name: 'BVF Filter',
                description: 'Bacterial and viral filtration filter for protection and clean air delivery in respiratory systems',
                image: 'assets/products/bvf-filter.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Bacterial filtration', 'Viral filtration', 'Low resistance design', 'High efficiency filtration', 'Compact size']
            },
            // HME Filter
            {
                id: 'hme-filter',
                name: 'HME Filter',
                description: 'Heat and moisture exchanger filter for optimal humidity and temperature control in breathing circuits',
                image: 'assets/products/hme-filter.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Heat and moisture exchange', 'Low dead space volume', 'Hydrophobic membrane', 'Bacterial filtration', 'Optimal humidity control']
            },
            // HME-BVF Filter
            {
                id: 'hme-bvf-filter',
                name: 'HME-BVF Filter',
                description: 'Combined heat moisture exchanger and bacterial viral filter for complete respiratory protection',
                image: 'assets/products/hme-bvf-filter.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Heat and moisture exchange', 'Bacterial and viral filtration', 'Dual function design', 'Low resistance', 'Compact integrated unit']
            },
            // Nasal Oxygen Cannula
            {
                id: 'nasal-oxygen-cannula',
                name: 'Nasal Oxygen Cannula',
                description: 'Comfortable nasal oxygen cannula for continuous oxygen therapy and patient comfort',
                image: 'assets/products/nasal-oxygen-cannula.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Soft nasal prongs', 'Adjustable headstrap', 'Kink-resistant tubing', 'Patient comfort design', 'Various sizes available']
            },
            // Oxygen Tubing
            {
                id: 'oxygen-tubing',
                name: 'Oxygen Tubing',
                description: 'Standard oxygen tubing for reliable oxygen delivery and connection in medical oxygen systems',
                image: 'assets/products/oxygen-tubing.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Medical grade PVC', 'Kink-resistant design', 'Standard connectors', 'Various lengths available', 'Clear transparent tubing']
            },
            // Oxygen Tubing Coiled
            {
                id: 'oxygen-tubing-coiled',
                name: 'Oxygen Tubing Coiled',
                description: 'Coiled oxygen tubing design for space-saving and flexible oxygen delivery applications',
                image: 'assets/products/oxygen-tubing-coiled.jpg',
                category: 'Anesthesia & Respiratory Products',
                specifications: ['Coiled space-saving design', 'Flexible and extendable', 'Prevents tangling', 'Standard fittings', 'Durable construction']
            }
        ];
    }

    // Get page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1>Anesthesia & Respiratory Products</h1>
                    <p>Complete anesthesia equipment and respiratory supplies for surgical and critical care procedures</p>
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
window.AnesthesiaRespiratoryPage = AnesthesiaRespiratoryPage;