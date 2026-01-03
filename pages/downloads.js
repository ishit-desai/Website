// Downloads Page Module
class DownloadsPage {
    constructor() {
        this.name = 'downloads';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get page content
    getContent() {
        const t = this.getTranslation();

        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="downloads.title">${t.downloads?.title || 'Downloads'}</h1>
                    <p data-translate="downloads.subtitle">Download our comprehensive SGS products catalogue</p>
                </div>
            </div>

            <section class="page-section">
                <div class="container">
                    <div class="downloads-content-single">

                        <div class="download-hero">
                            <div class="download-hero-content">
                                <div class="download-icon-large">
                                    <i class="fas fa-file-pdf"></i>
                                </div>
                                <div class="download-details">
                                    <h2>SGS Products Catalogue</h2>
                                    <p>Complete catalogue featuring all Shri Gurukrupa Surgical products and medical equipment with detailed specifications and technical information.</p>

                                    <div class="download-features">
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>Complete Product Range</span>
                                        </div>
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>Technical Specifications</span>
                                        </div>
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>Updated 2025</span>
                                        </div>
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>High Quality Images</span>
                                        </div>
                                    </div>

                                    <div class="download-actions">
                                        <button class="download-btn-primary" onclick="window.downloadsPage.downloadSGSCatalogue()">
                                            <i class="fas fa-download"></i>
                                            <span>Download SGS Catalogue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="download-cta">
                            <h3 data-translate="common.needQuote">Need a Quote?</h3>
                            <p data-translate="common.contactForPricing">Contact us for detailed pricing information and bulk orders.</p>
                            <button class="btn btn-primary" onclick="showPage('enquiry')" data-translate="nav.enquiry">Get Quote</button>
                        </div>

                    </div>
                </div>
            </section>
        `;
    }

    // Download SGS Catalogue function - Show form first
    downloadSGSCatalogue() {
        this.showDownloadForm();
    }

    // Show download form modal
    showDownloadForm() {
        const modalHtml = `
            <div id="downloadFormModal" class="modal-overlay" style="display: flex;">
                <div class="modal-content" style="max-width: 500px;">
                    <div class="modal-header">
                        <h2>Download SGS Catalogue</h2>
                        <button class="modal-close" onclick="window.downloadsPage.closeDownloadForm()">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p style="margin-bottom: 25px; color: #64748b;">Please provide your details to download our catalogue:</p>
                        <form id="downloadForm" class="enquiry-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="downloadName">Full Name *</label>
                                    <input type="text" id="downloadName" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="downloadPhone">Phone Number *</label>
                                    <input type="tel" id="downloadPhone" name="phone" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="downloadEmail">Email Address *</label>
                                    <input type="email" id="downloadEmail" name="email" required>
                                </div>
                                <div class="form-group">
                                    <label for="downloadCompany">Company/Organization</label>
                                    <input type="text" id="downloadCompany" name="company">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="downloadPurpose">Purpose of Download</label>
                                <select id="downloadPurpose" name="purpose">
                                    <option value="">Select Purpose</option>
                                    <option value="product_research">Product Research</option>
                                    <option value="quotation">Request Quotation</option>
                                    <option value="procurement">Procurement</option>
                                    <option value="comparison">Price Comparison</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onclick="window.downloadsPage.closeDownloadForm()">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="window.downloadsPage.submitDownloadForm()">
                            <i class="fas fa-download"></i> Download Catalogue
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        document.body.classList.add('modal-open');
    }

    // Close download form modal
    closeDownloadForm() {
        const modal = document.getElementById('downloadFormModal');
        if (modal) {
            modal.remove();
            document.body.classList.remove('modal-open');
        }
    }

    // Submit download form and send to WhatsApp
    async submitDownloadForm() {
        const form = document.getElementById('downloadForm');
        const formData = new FormData(form);

        // Get form values
        const name = formData.get('name')?.trim();
        const phone = formData.get('phone')?.trim();
        const email = formData.get('email')?.trim();
        const company = formData.get('company')?.trim() || 'Not specified';
        const purpose = formData.get('purpose') || 'Not specified';

        // Validate required fields
        if (!name || !phone || !email) {
            alert('Please fill in all required fields (Name, Phone, Email)');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Validate phone format (basic validation)
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,15}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number');
            return;
        }

        // Show loading
        const submitBtn = document.querySelector('.modal-footer .btn-primary');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;

        // Prepare WhatsApp message
        const message = `🏥 *New Catalogue Download Request*

📋 *User Details:*
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
🏢 *Company:* ${company}
🎯 *Purpose:* ${purpose}

📅 *Downloaded on:* ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}
📄 *Document:* SGS Products Catalogue

_This message was auto-generated from shrigurukrupasurgical.com_`;

        try {
            // Send to WhatsApp (open WhatsApp with pre-filled message)
            const whatsappNumber = '919925648962'; // +91 99256 48962
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');

            // Wait a moment then trigger download
            setTimeout(() => {
                // Close modal
                this.closeDownloadForm();

                // Trigger actual download
                window.open('Catalogue SGS Ahmedabad.pdf', '_blank', 'noopener,noreferrer');

                // Show success message
                this.showSuccessMessage();
            }, 1000);

        } catch (error) {
            console.error('Error:', error);
            alert('There was an error processing your request. Please try again.');

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    // Show success message
    showSuccessMessage() {
        const notification = document.createElement('div');
        notification.className = 'notification notification-success';
        notification.innerHTML = `
            <div class="notification-content">
                <span><i class="fas fa-check-circle"></i> Your download has started! We've also sent your details via WhatsApp.</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);

        // Close button functionality
        notification.querySelector('.notification-close').onclick = () => {
            notification.remove();
        };
    }

    // Initialize downloads page
    init() {
        // Store reference for download functions
        window.downloadsPage = this;

        // Update translations
        if (window.updatePageText) {
            setTimeout(() => window.updatePageText(), 100);
        }
    }

    // Cleanup
    destroy() {
        if (window.downloadsPage === this) {
            delete window.downloadsPage;
        }
    }
}

// Make available globally
window.DownloadsPage = DownloadsPage;