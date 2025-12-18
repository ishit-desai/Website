// Miscellaneous Product Category Page
class MiscellaneousPage {
    constructor() {
        this.name = 'miscellaneous';
        this.products = this.getProductsData();
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get products data for Miscellaneous category
    getProductsData() {
        return [
            // Latex Examination Gloves
            {
                id: 'latex-examination-gloves',
                name: 'Latex Examination Gloves',
                description: 'High-quality latex examination gloves for medical procedures and patient examination',
                image: 'assets/products/latex-examination-gloves.jpg',
                category: 'Miscellaneous Products',
                specifications: ['Natural latex material', 'Powder-free options', 'Ambidextrous design', 'Various sizes available', 'Excellent tactile sensitivity']
            },
            // Latex Surgical Gloves
            {
                id: 'latex-surgical-gloves',
                name: 'Latex Surgical Gloves',
                description: 'Sterile latex surgical gloves designed for surgical procedures and operations',
                image: 'assets/products/latex-surgical-gloves.jpg',
                category: 'Miscellaneous Products',
                specifications: ['Sterile surgical grade', 'Superior puncture resistance', 'Anatomical fit', 'Enhanced grip texture', 'Single use disposable']
            },
            // Head Rest N-95 Face Mask
            {
                id: 'head-rest-n95-face-mask',
                name: 'Head Rest N-95 Face Mask',
                description: 'N-95 respirator mask with head rest straps for secure fit and maximum protection',
                image: 'assets/products/head-rest-n95-face-mask.jpg',
                category: 'Miscellaneous Products',
                specifications: ['95% particle filtration efficiency', 'Head rest strap design', 'Secure facial seal', 'Comfortable long-term wear', 'NIOSH approved']
            },
            // Ear Loop N-95 Face Mask
            {
                id: 'ear-loop-n95-face-mask',
                name: 'Ear Loop N-95 Face Mask',
                description: 'N-95 respirator mask with convenient ear loop design for easy wearing and removal',
                image: 'assets/products/ear-loop-n95-face-mask.jpg',
                category: 'Miscellaneous Products',
                specifications: ['95% particle filtration efficiency', 'Convenient ear loop design', 'Easy to wear and remove', 'Comfortable ear straps', 'High-quality filtration']
            },
            // Head Rest N-95 Face Mask (Second variant)
            {
                id: 'head-rest-n95-face-mask-v2',
                name: 'Head Rest N-95 Face Mask',
                description: 'Premium N-95 respirator mask with adjustable head rest straps for enhanced comfort and protection',
                image: 'assets/products/head-rest-n95-face-mask-v2.jpg',
                category: 'Miscellaneous Products',
                specifications: ['Premium filtration material', 'Adjustable head straps', 'Enhanced comfort padding', 'Superior breathability', 'Extended wear design']
            },
            // 3 Ply Mask Face
            {
                id: '3-ply-mask-face',
                name: '3 Ply Mask Face',
                description: '3-layer disposable face mask providing effective protection for everyday use',
                image: 'assets/products/3-ply-mask-face.jpg',
                category: 'Miscellaneous Products',
                specifications: ['3-layer protection system', 'Fluid resistant outer layer', 'Comfortable ear loops', 'Disposable single use', 'Breathable design']
            }
        ];
    }

    // Get page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1>Miscellaneous Medical Products</h1>
                    <p>Additional medical supplies including surgical instruments, face masks, and general medical equipment</p>
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
window.MiscellaneousPage = MiscellaneousPage;