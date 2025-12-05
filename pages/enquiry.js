// Enquiry Page Module
class EnquiryPage {
    constructor() {
        this.name = 'enquiry';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get enquiry page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="enquiry.title">${t.enquiry?.title || 'Product Enquiry'}</h1>
                    <p data-translate="enquiry.subtitle">${t.enquiry?.subtitle || 'Get detailed information about our surgical products and equipment'}</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="enquiry-content-centered">
                        <div class="enquiry-info-centered">
                            <h2 data-translate="enquiry.formTitle">${t.enquiry?.formTitle || 'Submit Your Enquiry'}</h2>
                            <p data-translate="enquiry.formSubtitle">${t.enquiry?.formSubtitle || "We're here to help you with all your surgical product requirements. Please fill out the form below and we'll get back to you within 24 hours."}</p>
                        </div>

                        <div class="enquiry-form-container">
                            <form id="enquiryForm" class="enquiry-form">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="name"><span data-translate="enquiry.fullName">${t.enquiry?.fullName || 'Full Name'}</span> <span data-translate="enquiry.required">*</span></label>
                                        <input type="text" id="name" name="name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><span data-translate="enquiry.email">${t.enquiry?.email || 'Email Address'}</span> <span data-translate="enquiry.required">*</span></label>
                                        <input type="email" id="email" name="email" required>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="phone"><span data-translate="enquiry.phone">${t.enquiry?.phone || 'Phone Number'}</span> <span data-translate="enquiry.required">*</span></label>
                                        <input type="tel" id="phone" name="phone" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="company" data-translate="enquiry.company">${t.enquiry?.company || 'Company/Organization'}</label>
                                        <input type="text" id="company" name="company">
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="product"><span data-translate="enquiry.productCategory">${t.enquiry?.productCategory || 'Product Category'}</span> <span data-translate="enquiry.required">*</span></label>
                                        <select id="product" name="product" required>
                                            <option value="" data-translate="enquiry.selectCategory">${t.enquiry?.selectCategory || 'Select Product Category'}</option>
                                            <option value="surgical-instruments" data-translate="enquiry.surgicalInstruments">${t.enquiry?.surgicalInstruments || 'Surgical Instruments'}</option>
                                            <option value="medical-equipment" data-translate="enquiry.medicalEquipment">${t.enquiry?.medicalEquipment || 'Medical Equipment'}</option>
                                            <option value="disposables" data-translate="enquiry.disposables">${t.enquiry?.disposables || 'Disposables'}</option>
                                            <option value="orthopedic" data-translate="enquiry.orthopedic">${t.enquiry?.orthopedic || 'Orthopedic Products'}</option>
                                            <option value="other" data-translate="enquiry.other">${t.enquiry?.other || 'Other'}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="quantity" data-translate="enquiry.quantity">${t.enquiry?.quantity || 'Quantity Required'}</label>
                                        <input type="text" id="quantity" name="quantity" placeholder="${t.enquiry?.quantityPlaceholder || 'e.g. 100 units'}" data-translate-placeholder="enquiry.quantityPlaceholder">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="message"><span data-translate="enquiry.message">${t.enquiry?.message || 'Message / Product Details'}</span> <span data-translate="enquiry.required">*</span></label>
                                    <textarea id="message" name="message" rows="6" required placeholder="${t.enquiry?.messagePlaceholder || 'Please provide details about the specific products you are interested in, quantities, delivery requirements, or any other relevant information...'}" data-translate-placeholder="enquiry.messagePlaceholder"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="city" data-translate="enquiry.city">${t.enquiry?.city || 'City/Location'}</label>
                                    <input type="text" id="city" name="city" placeholder="${t.enquiry?.cityPlaceholder || 'Your city or delivery location'}" data-translate-placeholder="enquiry.cityPlaceholder">
                                </div>

                                <div class="form-actions">
                                    <button type="submit" class="btn btn-primary btn-large">
                                        <i class="fas fa-paper-plane"></i>
                                        <span data-translate="enquiry.submit">${t.enquiry?.submit || 'Submit Enquiry'}</span>
                                    </button>
                                    <button type="reset" class="btn btn-secondary">
                                        <i class="fas fa-redo"></i>
                                        <span data-translate="enquiry.reset">${t.enquiry?.reset || 'Reset Form'}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize enquiry form
    init() {
        console.log('Enquiry page initialized');
        this.initForm();
    }

    // Initialize enquiry form functionality
    initForm() {
        const form = document.getElementById('enquiryForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitForm(form);
            });
        }
    }

    // Submit enquiry form
    submitForm(form) {
        // Get form data
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        const t = this.getTranslation();
        submitButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t.enquiry?.sending || 'Sending...'}`;
        submitButton.disabled = true;

        // Simulate email sending (since we can't actually send emails from frontend)
        setTimeout(() => {
            // Generate email content
            const emailContent = `
New Product Enquiry from Shrigurukrupa Surgical Website

Customer Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Company: ${data.company || 'Not provided'}
- City: ${data.city || 'Not provided'}

Product Information:
- Category: ${data.product}
- Quantity: ${data.quantity || 'Not specified'}

Message:
${data.message}

---
This enquiry was submitted from the Shrigurukrupa Surgical website.
            `;

            // In a real application, this would send to your email service
            console.log('Enquiry submitted:', emailContent);

            // Show success message
            this.showNotification(t.enquiry?.thankYou || 'Thank you for your enquiry! We will get back to you within 24 hours.', 'success');

            // Reset form
            form.reset();

            // Restore button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;

        }, 2000);
    }

    // Show notification
    showNotification(message, type = 'info') {
        if (window.showNotification) {
            window.showNotification(message, type);
        } else {
            alert(message);
        }
    }

    // Cleanup when leaving enquiry page
    destroy() {
        console.log('Enquiry page destroyed');
    }
}

// Make EnquiryPage available globally
window.EnquiryPage = EnquiryPage;