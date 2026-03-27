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
            {
                id: 'mucus-extractor',
                name: 'Mucus Extractor',
                subtitle: '',
                description: 'Neonatal and infant mucus extractor with graduated collection chamber (0-20ml) for safe and effective airway clearance and suction procedures',
                image: 'assets/products/Urology and Gastroenterology/Mucus Extractor.jpeg',
                category: 'Urology & Gastroenterology Products',
                specifications: [
                    'Graduated collection chamber (0-20ml markings)',
                    'Green color-coded design',
                    'Clear measurement visibility',
                    'Soft suction catheter tip',
                    'Safe for neonatal use',
                    'Gentle airway clearance',
                    'Single-use sterile',
                    'Non-toxic medical grade'
                ]
            },
            {
                id: 'urine-bag',
                name: 'Urine Bag',
                subtitle: '',
                description: 'Graduated urine collection bag with clear measurement markings for accurate urine output monitoring in catheterized patients',
                image: 'assets/products/Urology and Gastroenterology/Urine Bag.jpeg',
                category: 'Urology & Gastroenterology Products',
                specifications: [
                    'Clear graduated volume markings',
                    'Accurate measurement scale',
                    'Sterile and single-use',
                    'Secure tube connections',
                    'Drainage valve included',
                    'Transparent for easy monitoring',
                    'Standard catheter compatibility',
                    'Leak-proof design'
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
                    <h1>Urology & Gastroenterology Products</h1>
                    <p>Specialized products for urinary tract and digestive system procedures and interventions</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="seo-content-block">
                        <h2>Professional Medical Urology & Gastroenterology Solutions</h2>
                        <p>Our medical grade urology and gastroenterology products are designed for healthcare professionals requiring reliable, sterile, and safe solutions for urinary and digestive system procedures. From neonatal mucus extraction to urinary catheter systems, we provide comprehensive solutions for clinical care.</p>
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
        if (product.name.toLowerCase().includes('mucus extractor')) {
            altText += ' - Neonatal and infant mucus extractor with graduated chamber for safe airway clearance';
        } else if (product.name.toLowerCase().includes('urine bag')) {
            altText += ' - Graduated urine collection bag with measurement markings for catheterized patients';
        } else {
            altText += ' - Medical equipment for urology and gastroenterology procedures';
        }

        altText += ' | Shri Gurukrupa Surgical - ISO certified medical device manufacturer';
        return altText;
    }

    // Render individual product card
    renderProductCard(product) {
        const hasImage = product.image && !product.image.includes('coming_soon');
        const productId = product.id || product.name.replace(/\s+/g, '-').toLowerCase();

        return `
            <div class="product-item-card ${hasImage ? 'has-real-image' : ''}" onclick="window.openUrologyProductModal('${productId}')">
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
            <div id="urologyProductModal" class="product-modal">
                <div class="product-modal-content">
                    <button class="product-modal-close" onclick="window.closeUrologyProductModal()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="product-modal-body">
                        <div class="product-modal-image-section">
                            <img id="urologyModalProductImage" src="" alt="" class="product-modal-image">
                        </div>
                        <div class="product-modal-info-section">
                            <h2 id="urologyModalProductName" class="product-modal-name"></h2>
                            <p id="urologyModalProductSubtitle" class="product-modal-subtitle"></p>
                            <p id="urologyModalProductDescription" class="product-modal-description"></p>

                            <div class="product-modal-specifications">
                                <h3>Key Features:</h3>
                                <ul id="urologyModalProductSpecs"></ul>
                            </div>

                            <div class="product-modal-contact-section">
                                <h3 class="contact-heading">Contact Us About This Product</h3>
                                <div class="product-modal-contact-buttons">
                                    <a href="https://wa.me/919925648962?text=Hi, I'm interested in " class="product-contact-btn whatsapp-btn" id="urologyModalWhatsAppBtn" target="_blank" rel="noopener">
                                        <i class="fab fa-whatsapp"></i>
                                        <span>WhatsApp</span>
                                    </a>
                                    <a href="tel:+919825048962" class="product-contact-btn call-btn">
                                        <i class="fas fa-phone"></i>
                                        <span>Call Now</span>
                                    </a>
                                    <a href="mailto:shrigurukrupa54@gmail.com?subject=Product Enquiry: " class="product-contact-btn email-btn" id="urologyModalEmailBtn">
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
        window.urologyProducts = this.products;

        // Add global modal functions
        window.openUrologyProductModal = (productId) => {
            const product = this.products.find(p => (p.id || p.name.replace(/\s+/g, '-').toLowerCase()) === productId);
            if (!product) return;

            // Populate modal content
            document.getElementById('urologyModalProductImage').src = product.image;
            document.getElementById('urologyModalProductImage').alt = this.generateSEOAltText(product);
            document.getElementById('urologyModalProductName').textContent = product.name;
            document.getElementById('urologyModalProductSubtitle').textContent = product.subtitle || '';
            document.getElementById('urologyModalProductDescription').textContent = product.description;

            // Populate specifications
            const specsHtml = product.specifications.map(spec => `<li>${spec}</li>`).join('');
            document.getElementById('urologyModalProductSpecs').innerHTML = specsHtml;

            // Update WhatsApp and Email links with product name
            const productName = encodeURIComponent(product.name);
            const whatsappBtn = document.getElementById('urologyModalWhatsAppBtn');
            const emailBtn = document.getElementById('urologyModalEmailBtn');

            if (whatsappBtn) {
                whatsappBtn.href = `https://wa.me/919925648962?text=Hi, I'm interested in ${productName}`;
            }
            if (emailBtn) {
                emailBtn.href = `mailto:shrigurukrupa54@gmail.com?subject=Product Enquiry: ${productName}`;
            }

            // Show modal
            document.getElementById('urologyProductModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        };

        window.closeUrologyProductModal = () => {
            document.getElementById('urologyProductModal').style.display = 'none';
            document.body.style.overflow = '';
        };

        // Close modal on outside click
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('urologyProductModal');
            if (e.target === modal) {
                window.closeUrologyProductModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                window.closeUrologyProductModal();
            }
        });
    }
}

// Make page available globally
window.UrologyGastroenterologyPage = UrologyGastroenterologyPage;
