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
            {
                id: 'yankauer-suction-set',
                name: 'Yankauer Suction Set',
                subtitle: '',
                description: 'Rigid suction catheter with Y-port thumb control and bulbous angled tip for effective oropharyngeal suctioning procedures in surgical and emergency settings',
                image: 'assets/products/Miscellaneous/Yankauer Suction Set.jpeg',
                category: 'Miscellaneous Products',
                specifications: [
                    'Rigid clear suction tip',
                    'Green thumb-control Y-port',
                    'Bulbous angled tip design',
                    'Flexible transparent tubing',
                    'Green connector fittings',
                    'Effective oropharyngeal suctioning',
                    'Standard suction connection',
                    'Single-use disposable'
                ]
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
                    <div class="seo-content-block">
                        <h2>Professional Medical Equipment & Supplies</h2>
                        <p>Our miscellaneous medical products range includes essential surgical instruments, protective equipment, and specialized medical supplies designed for healthcare professionals. Each product meets stringent quality standards and provides reliable performance in clinical settings.</p>
                    </div>

                    ${this.renderAllProducts()}
                    ${this.renderProductModal()}
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
        if (product.name.toLowerCase().includes('yankauer') || product.name.toLowerCase().includes('suction')) {
            altText += ' - Rigid suction catheter with Y-port control for effective oropharyngeal suctioning';
        } else if (product.name.toLowerCase().includes('gloves')) {
            altText += ' - Medical examination and surgical gloves for healthcare procedures and patient safety';
        } else if (product.name.toLowerCase().includes('mask') || product.name.toLowerCase().includes('face')) {
            altText += ' - Medical face masks for infection control and respiratory protection';
        } else {
            altText += ' - Medical supplies and surgical instruments for healthcare facilities';
        }

        altText += ' | Shri Gurukrupa Surgical - ISO certified medical device manufacturer';
        return altText;
    }

    // Render individual product card
    renderProductCard(product) {
        const hasImage = product.image && !product.image.includes('coming_soon');
        const productId = product.id || product.name.replace(/\s+/g, '-').toLowerCase();

        return `
            <div class="product-item-card ${hasImage ? 'has-real-image' : ''}" onclick="window.openMiscProductModal('${productId}')">
                <div class="product-image-container">
                    <img src="${product.image}"
                         alt="${this.generateSEOAltText(product)}"
                         class="product-image"
                         width="350"
                         height="350"
                         loading="lazy"
                         onload="this.parentElement.classList.add('has-image')"
                         onerror="this.src='assets/products/medical-placeholder.svg'; this.parentElement.classList.add('no-image')">
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <h3 class="product-name">${product.name}</h3>
                        ${product.subtitle ? `<p class="product-subtitle">${product.subtitle}</p>` : '<div class="product-subtitle-spacer"></div>'}
                    </div>
                    <p class="product-description-short">${product.description}</p>
                    <button class="btn btn-secondary product-view-btn">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `;
    }

    // Render product modal
    renderProductModal() {
        return `
            <div id="miscProductModal" class="product-modal">
                <div class="product-modal-content">
                    <button class="product-modal-close" onclick="window.closeMiscProductModal()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="product-modal-body">
                        <div class="product-modal-image-section">
                            <img id="miscModalProductImage" src="" alt="" class="product-modal-image">
                        </div>
                        <div class="product-modal-info-section">
                            <h2 id="miscModalProductName" class="product-modal-name"></h2>
                            <p id="miscModalProductSubtitle" class="product-modal-subtitle"></p>
                            <p id="miscModalProductDescription" class="product-modal-description"></p>

                            <div class="product-modal-specifications">
                                <h3>Key Features:</h3>
                                <ul id="miscModalProductSpecs"></ul>
                            </div>

                            <button class="btn btn-primary product-modal-enquiry-btn" onclick="window.closeMiscProductModal(); window.openProductEnquiry(document.getElementById('miscModalProductName').textContent);">
                                <i class="fas fa-envelope"></i> Enquire Now
                            </button>
                        </div>
                    </div>
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

        // Store products data globally for modal access
        window.miscProducts = this.products;

        // Add global modal functions
        window.openMiscProductModal = (productId) => {
            const product = this.products.find(p => (p.id || p.name.replace(/\s+/g, '-').toLowerCase()) === productId);
            if (!product) return;

            // Populate modal content
            document.getElementById('miscModalProductImage').src = product.image;
            document.getElementById('miscModalProductImage').alt = this.generateSEOAltText(product);
            document.getElementById('miscModalProductName').textContent = product.name;
            document.getElementById('miscModalProductSubtitle').textContent = product.subtitle || '';
            document.getElementById('miscModalProductDescription').textContent = product.description;

            // Populate specifications
            const specsHtml = product.specifications.map(spec => `<li>${spec}</li>`).join('');
            document.getElementById('miscModalProductSpecs').innerHTML = specsHtml;

            // Show modal
            document.getElementById('miscProductModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        };

        window.closeMiscProductModal = () => {
            document.getElementById('miscProductModal').style.display = 'none';
            document.body.style.overflow = '';
        };

        // Close modal on outside click
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('miscProductModal');
            if (e.target === modal) {
                window.closeMiscProductModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                window.closeMiscProductModal();
            }
        });
    }
}

// Make page available globally
window.MiscellaneousPage = MiscellaneousPage;
