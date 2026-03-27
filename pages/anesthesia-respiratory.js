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
            {
                id: '3-ball-spirometer',
                name: '3-Ball Spirometer',
                subtitle: '',
                description: 'Three-chamber incentive spirometer with blue, yellow, and red balls for lung function testing, respiratory therapy, and breathing exercises to improve pulmonary capacity',
                image: 'assets/products/Anesthesia and Respiratory/3-Ball Spirometer.jpeg',
                category: 'Anesthesia & Respiratory Products',
                specifications: [
                    '3 color-coded balls (blue, yellow, red)',
                    'Visual feedback for breathing exercises',
                    'Corrugated flexible tube with mouthpiece',
                    'Clear graduated chambers',
                    'Encourages deep breathing and lung expansion',
                    'Ideal for post-operative recovery',
                    'Easy to use and clean',
                    'Portable and lightweight'
                ]
            },
            {
                id: 'catheter-mount',
                name: 'Catheter Mount',
                subtitle: '',
                description: 'Flexible turquoise catheter mount connector with corrugated design for secure and reliable ventilation circuit connections in anesthesia and critical care',
                image: 'assets/products/Anesthesia and Respiratory/Catheter Mount.jpeg',
                category: 'Anesthesia & Respiratory Products',
                specifications: [
                    'Flexible corrugated design',
                    'Turquoise medical-grade material',
                    'Swivel connections for easy positioning',
                    'Low dead space',
                    'Kink-resistant material',
                    'Standard 15mm/22mm fittings',
                    'Secure connections',
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
                    <h1>Anesthesia & Respiratory Products</h1>
                    <p>Complete range of anesthesia and respiratory products for surgical and critical care procedures</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="seo-content-block">
                        <h2>Professional Anesthesia & Respiratory Solutions</h2>
                        <p>Our medical grade anesthesia and respiratory products are designed for healthcare professionals requiring reliable equipment for surgical procedures, critical care, and respiratory therapy. From incentive spirometers to ventilation connectors, we provide comprehensive solutions for patient care.</p>
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
        if (product.name.toLowerCase().includes('spirometer')) {
            altText += ' - Incentive spirometer for lung function testing and respiratory therapy exercises';
        } else if (product.name.toLowerCase().includes('catheter mount')) {
            altText += ' - Flexible catheter mount connector for ventilation circuit connections in anesthesia';
        } else {
            altText += ' - Medical equipment for anesthesia and respiratory therapy';
        }

        altText += ' | Shri Gurukrupa Surgical - ISO certified medical device manufacturer';
        return altText;
    }

    // Render individual product card
    renderProductCard(product) {
        const hasImage = product.image && !product.image.includes('coming_soon');
        const productId = product.id || product.name.replace(/\s+/g, '-').toLowerCase();

        return `
            <div class="product-item-card ${hasImage ? 'has-real-image' : ''}" onclick="window.openAnesthesiaProductModal('${productId}')">
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
            <div id="anesthesiaProductModal" class="product-modal">
                <div class="product-modal-content">
                    <button class="product-modal-close" onclick="window.closeAnesthesiaProductModal()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="product-modal-body">
                        <div class="product-modal-image-section">
                            <img id="anesthesiaModalProductImage" src="" alt="" class="product-modal-image">
                        </div>
                        <div class="product-modal-info-section">
                            <h2 id="anesthesiaModalProductName" class="product-modal-name"></h2>
                            <p id="anesthesiaModalProductSubtitle" class="product-modal-subtitle"></p>
                            <p id="anesthesiaModalProductDescription" class="product-modal-description"></p>

                            <div class="product-modal-specifications">
                                <h3>Key Features:</h3>
                                <ul id="anesthesiaModalProductSpecs"></ul>
                            </div>

                            <div class="product-modal-contact-section">
                                <h3 class="contact-heading">Contact Us About This Product</h3>
                                <div class="product-modal-contact-buttons">
                                    <a href="https://wa.me/919925648962?text=Hi, I'm interested in " class="product-contact-btn whatsapp-btn" id="anesthesiaModalWhatsAppBtn" target="_blank" rel="noopener">
                                        <i class="fab fa-whatsapp"></i>
                                        <span>WhatsApp</span>
                                    </a>
                                    <a href="tel:+919825048962" class="product-contact-btn call-btn">
                                        <i class="fas fa-phone"></i>
                                        <span>Call Now</span>
                                    </a>
                                    <a href="mailto:shrigurukrupa54@gmail.com?subject=Product Enquiry: " class="product-contact-btn email-btn" id="anesthesiaModalEmailBtn">
                                        <i class="fas fa-envelope"></i>
                                        <span>Email</span>
                                    </a>
                                    <a href="https://www.indiamart.com/shri-gurukrupa-surgical/" class="product-contact-btn indiamart-btn" target="_blank" rel="noopener">
                                        <i class="fas fa-store"></i>
                                        <span>IndiaMART</span>
                                    </a>
                                </div>
                            </div>
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
        window.anesthesiaProducts = this.products;

        // Add global modal functions
        window.openAnesthesiaProductModal = (productId) => {
            const product = this.products.find(p => (p.id || p.name.replace(/\s+/g, '-').toLowerCase()) === productId);
            if (!product) return;

            // Populate modal content
            document.getElementById('anesthesiaModalProductImage').src = product.image;
            document.getElementById('anesthesiaModalProductImage').alt = this.generateSEOAltText(product);
            document.getElementById('anesthesiaModalProductName').textContent = product.name;
            document.getElementById('anesthesiaModalProductSubtitle').textContent = product.subtitle || '';
            document.getElementById('anesthesiaModalProductDescription').textContent = product.description;

            // Populate specifications
            const specsHtml = product.specifications.map(spec => `<li>${spec}</li>`).join('');
            document.getElementById('anesthesiaModalProductSpecs').innerHTML = specsHtml;

            // Update WhatsApp and Email links with product name
            const productName = encodeURIComponent(product.name);
            const whatsappBtn = document.getElementById('anesthesiaModalWhatsAppBtn');
            const emailBtn = document.getElementById('anesthesiaModalEmailBtn');

            if (whatsappBtn) {
                whatsappBtn.href = `https://wa.me/919925648962?text=Hi, I'm interested in ${productName}`;
            }
            if (emailBtn) {
                emailBtn.href = `mailto:shrigurukrupa54@gmail.com?subject=Product Enquiry: ${productName}`;
            }

            // Show modal
            document.getElementById('anesthesiaProductModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        };

        window.closeAnesthesiaProductModal = () => {
            document.getElementById('anesthesiaProductModal').style.display = 'none';
            document.body.style.overflow = '';
        };

        // Close modal on outside click
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('anesthesiaProductModal');
            if (e.target === modal) {
                window.closeAnesthesiaProductModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                window.closeAnesthesiaProductModal();
            }
        });
    }
}

// Make page available globally
window.AnesthesiaRespiratoryPage = AnesthesiaRespiratoryPage;
