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
                name: 'CAREWELL™ Infusion Set',
                subtitle: '',
                description: 'Cost-effective disposable IV infusion set with sterile medical grade tubing, 20 drops/ml drip rate, and reliable drip chamber for basic intravenous fluid delivery',
                image: 'assets/Carewell Infusion Set.jpeg',
                category: 'Infusion & Transfusion Products',
                specifications: [
                    '21G vein needle for easy insertion',
                    'ISO 9001 certified quality',
                    'Sterile EO (Ethylene Oxide) sterilization',
                    'Non-toxic, non-pyrogenic medical grade PVC',
                    'Latex-free construction',
                    '20 drops/ml standard drip chamber',
                    'Roller clamp for precise flow control',
                    'As per IS 12655 (Part-4) standards',
                    'Single use disposable'
                ],
                technicalDetails: {
                    dropRate: '20 drops/ml = 1± 0.1ml',
                    needleSize: '21G',
                    sterilization: 'E.O.GAS Sterile',
                    standard: 'IS 12655 (Part-4)',
                    packaging: '1 piece per pack'
                }
            },
            // IV Sets - BLESSING® (Economic)
            {
                id: 'iv-set-blessing-economic',
                name: 'BLESSING® Infusion Set',
                subtitle: '',
                description: 'Premium IV infusion set with built-in air vent system and latex components for enhanced flexibility and smooth fluid delivery',
                image: 'assets/Infusion Set with Vented Chamber.jpeg',
                category: 'Infusion & Transfusion Products',
                specifications: [
                    'Built-in airvent system prevents air locks',
                    'Natural rubber latex for flexibility',
                    'ISO 13485:2016 certified',
                    'Non-toxic, pyrogen-free medical grade tubing',
                    'DEHP-free PVC construction',
                    'Made with natural rubber latex',
                    'Precision flow control with regulator',
                    'Sterile EO (Ethylene Oxide)',
                    'Gravity feed only - for single use'
                ],
                technicalDetails: {
                    dropRate: '20 drops/ml',
                    sterilization: 'Sterile EO',
                    standard: 'ISO 13485:2016, As per IS 12655',
                    packaging: '1 unit',
                    mfgLicense: 'MFG/MD/2020/000189'
                }
            },
            // IV Sets - BLESSING® (Delux - Paper Pouch)
            {
                id: 'iv-set-precision',
                name: 'Precision Infusion Set',
                subtitle: '',
                description: 'Professional-grade IV infusion set with graduated flow regulator for precise fluid delivery control and accurate dosing in clinical settings',
                image: 'assets/Precision Infusion Set.jpeg',
                category: 'Infusion & Transfusion Products',
                specifications: [
                    'Blue graduated dial flow regulator (0-10 scale)',
                    'Clear drip chamber for visual monitoring',
                    'Professional medical grade construction',
                    'Precise flow rate control',
                    'Kink-resistant tubing',
                    'Luer lock connector',
                    'Y-injection port included',
                    'Sterile and single-use',
                    'Ideal for controlled infusion therapy'
                ],
                technicalDetails: {
                    flowControl: 'Graduated dial regulator (0-10)',
                    connector: 'Luer Lock',
                    features: 'Y-injection port, roller clamp',
                    application: 'General IV therapy, controlled infusion'
                }
            },
            // IV Sets - Sayft-NV® (Super Delux)
            {
                id: 'iv-set-sayft-nv-super-delux',
                name: 'Sayft® Infusion Set',
                subtitle: '',
                description: 'Premium Sayft® IV set with advanced dial flow regulator, ISO certified quality, and superior safety features for precise intravenous therapy',
                image: 'assets/Precision Infusion Set With Regulator.jpeg',
                category: 'Infusion & Transfusion Products',
                specifications: [
                    'Advanced dial flow regulator for precise control',
                    'ISO 13485:2016 certified quality',
                    'Made in India with premium materials',
                    'Non-toxic, pyrogen-free DEHP-free PVC tubing',
                    'Not made with natural rubber latex',
                    'Gravity feed only system',
                    '20 drops of distilled water = 1.0 ± 0.3 ml (1.0 ± 0.1g)',
                    'As per IS 12655 standards',
                    'Single use disposable with enhanced safety'
                ],
                technicalDetails: {
                    dropRate: '20 drops/ml ±10%',
                    sterilization: 'Sterile EO',
                    standard: 'ISO 13485:2016, IS 12655',
                    packaging: '1 unit',
                    mfgLicense: 'MFG/MD/2020/000189',
                    needleSize: '21G'
                }
            },
            // Blood Transfusion Set
            {
                id: 'blood-transfusion-set',
                name: 'Blood Transfusion Set',
                subtitle: '',
                description: 'Specialized blood administration set designed for safe blood transfusion procedures with inline 170 micron filter, anti-hemolysis design, and precision flow control',
                image: 'assets/Blood Transfusion Set.jpeg',
                category: 'Infusion & Transfusion Products',
                specifications: [
                    '170 needle 19G for blood administration',
                    'Inline blood filter for safety',
                    'ISO 9001 certified manufacturing',
                    'Sterile EO (Ethylene Oxide) sterilization',
                    'Non-toxic, non-pyrogenic construction',
                    'For single use only',
                    'Spike, chamber, tube, regulator, and injection site',
                    'Precise flow control with regulator',
                    'As per IS 0824 standards',
                    'Gravity feed only system'
                ],
                technicalDetails: {
                    needleSize: '19G (170 needle)',
                    filter: 'Inline blood filter',
                    sterilization: 'Sterile EO',
                    standard: 'AS PER IS 0824',
                    packaging: '1 unit',
                    mfgLicense: 'MFG/MD/22/1000185'
                }
            },
            // Microdrip Set
            {
                id: 'microdrip-set',
                name: 'Microdrip Infusion Set',
                subtitle: '',
                description: 'Precision microdrip infusion set with 60 drops/ml for accurate low-volume fluid delivery, ideal for pediatric care, critical dosing, and neonatal applications',
                image: 'assets/Micro Drip Infusion Set.jpeg',
                category: 'Infusion & Transfusion Products',
                specifications: [
                    '60 drops/ml precision microdrip chamber',
                    'Ideal for pediatric and neonatal use',
                    'Accurate low-volume delivery',
                    'Clear drip chamber for visual monitoring',
                    'Yellow roller clamp for flow control',
                    'Sterile and single-use disposable',
                    'Superior flow precision',
                    'Medical grade PVC tubing',
                    'Perfect for critical care applications'
                ],
                technicalDetails: {
                    dropRate: '60 drops/ml (microdrip)',
                    application: 'Pediatric, neonatal, critical care',
                    flowControl: 'Roller clamp',
                    packaging: 'Single unit sterile'
                }
            },
            // Sayft-NV® Standard Set
            {
                id: 'sayft-nv-standard',
                name: 'Sayft-NV® Infusion Set',
                subtitle: '',
                description: 'ISO 9001 certified Sayft-NV® infusion set with gravity feed system, 20 drops/ml flow rate, and superior quality assurance for routine IV therapy',
                image: 'assets/Sayft Super Delux Infusion Set.jpeg',
                category: 'Infusion & Transfusion Products',
                specifications: [
                    'ISO 9001 certified quality',
                    'AS Per IS 12655 standards compliant',
                    'Non-toxic, non-pyrogenic construction',
                    '20 drops of distilled water = 1.0 ± 0.1ml (1.0 ± 0.1g)',
                    'E.O.GAS sterile packaging',
                    'Needle size: 21G',
                    'Gravity feed only system',
                    'Turquoise roller clamp for flow control',
                    'For single use only'
                ],
                technicalDetails: {
                    dropRate: '20 drops/ml',
                    needleSize: '21G',
                    sterilization: 'E.O. GAS Sterile',
                    standard: 'IS 12655, ISO 9001',
                    packaging: '1 unit',
                    mfgLicense: 'MFG/MD/2020/000189'
                }
            },
            // Veterinary Infusion Set
            {
                id: 'veterinary-infusion-set',
                name: 'Veterinary Infusion Set',
                subtitle: '',
                description: 'Specialized infusion set designed for veterinary applications with unique blue butterfly clamp, clear drip chamber, and durable construction for animal healthcare',
                image: 'assets/Veterinary Infusion Set.jpeg',
                category: 'Infusion & Transfusion Products',
                specifications: [
                    'Designed specifically for veterinary use',
                    'Blue butterfly clamp for easy handling',
                    'Clear drip chamber for flow monitoring',
                    'Durable medical grade construction',
                    'Precision flow control',
                    'Sterile and single-use',
                    'Suitable for small to large animals',
                    'Pink catheter adapter',
                    'Professional veterinary quality'
                ],
                technicalDetails: {
                    application: 'Veterinary medicine',
                    features: 'Butterfly clamp, clear chamber',
                    packaging: 'Single unit sterile'
                }
            },
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
        const hasImage = product.image && !product.image.includes('coming_soon');
        const productId = product.id || product.name.replace(/\s+/g, '-').toLowerCase();

        return `
            <div class="product-item-card ${hasImage ? 'has-real-image' : ''}" onclick="window.openProductModal('${productId}')">
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
            <div id="productModal" class="product-modal">
                <div class="product-modal-content">
                    <button class="product-modal-close" onclick="window.closeProductModal()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="product-modal-body">
                        <div class="product-modal-image-section">
                            <img id="modalProductImage" src="" alt="" class="product-modal-image">
                        </div>
                        <div class="product-modal-info-section">
                            <h2 id="modalProductName" class="product-modal-name"></h2>
                            <p id="modalProductSubtitle" class="product-modal-subtitle"></p>
                            <p id="modalProductDescription" class="product-modal-description"></p>

                            <div class="product-modal-specifications">
                                <h3>Key Features:</h3>
                                <ul id="modalProductSpecs"></ul>
                            </div>

                            <button class="btn btn-primary product-modal-enquiry-btn" onclick="window.closeProductModal(); window.openProductEnquiry(document.getElementById('modalProductName').textContent);">
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
        window.infusionProducts = this.products;

        // Add global modal functions
        window.openProductModal = (productId) => {
            const product = this.products.find(p => (p.id || p.name.replace(/\s+/g, '-').toLowerCase()) === productId);
            if (!product) return;

            // Populate modal content
            document.getElementById('modalProductImage').src = product.image;
            document.getElementById('modalProductImage').alt = this.generateSEOAltText(product);
            document.getElementById('modalProductName').textContent = product.name;
            document.getElementById('modalProductSubtitle').textContent = product.subtitle || '';
            document.getElementById('modalProductDescription').textContent = product.description;

            // Populate specifications
            const specsHtml = product.specifications.map(spec => `<li>${spec}</li>`).join('');
            document.getElementById('modalProductSpecs').innerHTML = specsHtml;

            // Show modal
            document.getElementById('productModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        };

        window.closeProductModal = () => {
            document.getElementById('productModal').style.display = 'none';
            document.body.style.overflow = '';
        };

        // Close modal on outside click
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('productModal');
            if (e.target === modal) {
                window.closeProductModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                window.closeProductModal();
            }
        });
    }
}

// Make page available globally
window.InfusionTransfusionPage = InfusionTransfusionPage;