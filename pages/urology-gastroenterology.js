// Urology & Gastroenterology Product Category Page
class UrologyGastroenterologyPage {
    constructor() {
        this.name = 'urology-gastroenterology';
        this.products = this.getProductsData();
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get products data for Urology & Gastroenterology category
    getProductsData() {
        return [
            // Cord Clamp
            {
                id: 'cord-clamp',
                name: 'Cord Clamp',
                description: 'Medical cord clamp for secure clamping and cutting of umbilical cords during delivery procedures',
                image: 'assets/products/coming_soon.jpg',
                category: 'Urology & Gastroenterology Products',
                specifications: ['Secure clamping mechanism', 'Safe cutting design', 'Sterile single use', 'Easy application', 'Medical grade materials']
            },
            // Yankauer Suction Set
            {
                id: 'yankauer-suction-set',
                name: 'Yankauer Suction Set',
                description: 'Professional suction set designed for effective oral and pharyngeal suctioning in medical procedures',
                image: 'assets/products/coming_soon.jpg',
                category: 'Urology & Gastroenterology Products',
                specifications: ['Curved tip design', 'Large bore opening', 'Thumb control valve', 'Rigid construction', 'Effective suction performance']
            },
            // Urine Collection Container
            {
                id: 'urine-collection-container',
                name: 'Urine Collection Container',
                description: 'Sterile collection container for urine sample collection and laboratory analysis procedures',
                image: 'assets/products/coming_soon.jpg',
                category: 'Urology & Gastroenterology Products',
                specifications: ['Sterile collection system', 'Leak-proof design', 'Clear volume markings', 'Secure lid closure', 'Laboratory compatible']
            },
            // Mucus Extractor
            {
                id: 'mucus-extractor',
                name: 'Mucus Extractor',
                description: 'Medical device for safe and effective extraction of mucus from airways and respiratory passages',
                image: 'assets/products/coming_soon.jpg',
                category: 'Urology & Gastroenterology Products',
                specifications: ['Safe suction control', 'Flexible catheter design', 'Easy operation', 'Sterile disposable', 'Effective mucus removal']
            },
            // Urine Bag DELUX
            {
                id: 'urine-bag-delux',
                name: 'Urine Bag DELUX',
                description: 'Deluxe urine collection bag with enhanced features for extended patient comfort and reliability',
                image: 'assets/products/coming_soon.jpg',
                category: 'Urology & Gastroenterology Products',
                specifications: ['Enhanced comfort design', 'Anti-reflux valve', 'Large capacity', 'Secure attachment', 'Quality drainage system']
            },
            // Urine Bag PREMIUM
            {
                id: 'urine-bag-premium',
                name: 'Urine Bag PREMIUM',
                description: 'Premium grade urine collection bag offering superior quality and advanced features for optimal performance',
                image: 'assets/products/coming_soon.jpg',
                category: 'Urology & Gastroenterology Products',
                specifications: ['Premium quality materials', 'Advanced anti-reflux system', 'Maximum capacity', 'Superior attachment system', 'Professional grade construction']
            }
        ];
    }

    // Get page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1>Urology & Gastroenterology Products</h1>
                    <p>Specialized products for urinary tract and digestive system procedures and interventions</p>
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

    // Generate SEO-optimized alt text for product images
    generateSEOAltText(product) {
        let altText = product.name;

        // Add relevant medical keywords based on product type
        if (product.name.toLowerCase().includes('catheter')) {
            altText += ' - Medical urinary catheter for urology procedures and bladder management';
        } else if (product.name.toLowerCase().includes('feeding tube') || product.name.toLowerCase().includes('ryle')) {
            altText += ' - Medical feeding tube for enteral nutrition and gastroenterology procedures';
        } else if (product.name.toLowerCase().includes('suction')) {
            altText += ' - Medical suction equipment for fluid removal and surgical procedures';
        } else if (product.name.toLowerCase().includes('drainage')) {
            altText += ' - Medical drainage system for post-operative and therapeutic fluid management';
        } else if (product.name.toLowerCase().includes('collection')) {
            altText += ' - Medical collection container for laboratory sample collection and analysis';
        } else if (product.name.toLowerCase().includes('extractor')) {
            altText += ' - Medical mucus extractor for airway clearance and respiratory care';
        } else {
            altText += ' - Urology and gastroenterology medical equipment for specialized healthcare procedures';
        }

        altText += ' | Shri Gurukrupa Surgical - ISO certified medical device manufacturer Ahmedabad';
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
window.UrologyGastroenterologyPage = UrologyGastroenterologyPage;