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
        this.initForm();
        this.prefillProductInfo();
    }

    // Initialize enquiry form functionality
    initForm() {
        const form = document.getElementById('enquiryForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitForm(form);
            });

            // Clear validation messages when form is reset
            form.addEventListener('reset', () => {
                setTimeout(() => {
                    this.clearAllValidationMessages();
                }, 10);
            });
        }
    }

    // Submit enquiry form
    submitForm(form) {
        // Get form data (with compatibility check)
        const data = {};

        // Check if FormData is supported (IE10+)
        if (window.FormData) {
            const formData = new FormData(form);
            for (let [key, value] of formData.entries()) {
                data[key] = value ? value.trim() : '';
            }
        } else {
            // Fallback for older browsers
            const inputs = form.querySelectorAll('input, select, textarea');
            for (let i = 0; i < inputs.length; i++) {
                const input = inputs[i];
                if (input.name) {
                    data[input.name] = input.value ? input.value.trim() : '';
                }
            }
        }

        // Validate required fields BEFORE showing loading state
        if (!this.validateRequiredFields(data)) {
            return; // Stop if validation fails - validateRequiredFields handles scrolling and messaging
        }

        // Show loading state (mobile-optimized)
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        const t = this.getTranslation();

        // Mobile-friendly loading state
        submitButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t.enquiry?.sending || 'Sending...'}`;
        submitButton.disabled = true;

        // Prevent accidental double-taps on mobile
        submitButton.style.pointerEvents = 'none';
        setTimeout(() => {
            if (submitButton) {
                submitButton.style.pointerEvents = 'auto';
            }
        }, 1000);

        // Check if this is a product-specific enquiry
        const enquiryProduct = sessionStorage.getItem('enquiryProduct');

        // Mobile-specific timeout to prevent stuck loading state (15 seconds max)
        const mobileTimeout = setTimeout(() => {
            this.fallbackToMailto(data, enquiryProduct);
            if (submitButton) {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                submitButton.style.pointerEvents = 'auto';
            }
        }, 15000);

        // Try modern email sending, with fallback
        this.sendEmailAutomatically(data, enquiryProduct)
            .then(result => {
                clearTimeout(mobileTimeout);
                if (result && result.success) {
                    // Clear all validation messages first
                    this.clearAllValidationMessages();

                    // Show success message
                    this.showNotification(t.enquiry?.thankYou || 'Thank you for your enquiry! We will get back to you within 24 hours.', 'success');

                    // Reset form on success
                    form.reset();

                    // Clear product enquiry if it was set
                    if (enquiryProduct) {
                        sessionStorage.removeItem('enquiryProduct');
                    }
                } else {
                    // Fallback to mailto if service fails
                    this.fallbackToMailto(data, enquiryProduct);
                }
            })
            .catch(error => {
                clearTimeout(mobileTimeout);
                // Fallback to mailto on any error
                this.fallbackToMailto(data, enquiryProduct);
            })
            .finally(() => {
                // Restore button state (mobile-friendly)
                if (submitButton) {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.pointerEvents = 'auto'; // Restore mobile touch
                }
            });
    }

    // Pre-fill form with product information if available
    prefillProductInfo() {
        const enquiryProduct = sessionStorage.getItem('enquiryProduct');
        if (enquiryProduct) {
            // Add product name to the message field
            const messageField = document.getElementById('message');
            if (messageField) {
                const t = this.getTranslation();
                const prefillText = t.enquiry?.productPrefill || `I am interested in ${enquiryProduct}. Please provide more information about pricing, availability, and specifications.`;
                messageField.value = prefillText.replace('${enquiryProduct}', enquiryProduct);
            }

            // Try to auto-select appropriate product category
            const productField = document.getElementById('product');
            if (productField) {
                const productLower = enquiryProduct.toLowerCase();

                if (productLower.includes('infusion') || productLower.includes('iv') || productLower.includes('transfusion')) {
                    productField.value = 'medical-equipment';
                } else if (productLower.includes('surgical') || productLower.includes('instrument')) {
                    productField.value = 'surgical-instruments';
                } else if (productLower.includes('mask') || productLower.includes('glove') || productLower.includes('disposable')) {
                    productField.value = 'disposables';
                } else {
                    productField.value = 'medical-equipment';
                }
            }

            // Show notification that form was pre-filled
            setTimeout(() => {
                const t = this.getTranslation();
                this.showNotification(
                    t.enquiry?.formPrefilled || `Form pre-filled for "${enquiryProduct}". Please complete the remaining details.`,
                    'info',
                    3000
                );
            }, 500);
        }
    }

    // Safe fallback to original mailto method
    fallbackToMailto(formData, productName = null) {
        try {
            // Create email content (same as original)
            let emailContent = `New ${productName ? 'Product Specific' : 'General'} Enquiry from Shri Gurukrupa Surgical Website\n\n`;
            emailContent += `Customer Details:\n`;
            emailContent += `- Name: ${formData.name}\n`;
            emailContent += `- Email: ${formData.email}\n`;
            emailContent += `- Phone: ${formData.phone}\n`;
            emailContent += `- Company: ${formData.company || 'Not provided'}\n`;
            emailContent += `- City: ${formData.city || 'Not provided'}\n\n`;

            if (productName) {
                emailContent += `Product Information:\n`;
                emailContent += `- Specific Product: ${productName}\n`;
                emailContent += `- Category: ${formData.product}\n`;
                emailContent += `- Quantity: ${formData.quantity || 'Not specified'}\n\n`;
            } else {
                emailContent += `Product Information:\n`;
                emailContent += `- Category: ${formData.product}\n`;
                emailContent += `- Quantity: ${formData.quantity || 'Not specified'}\n\n`;
            }

            emailContent += `Message:\n${formData.message}\n\n`;
            emailContent += `---\n`;
            emailContent += `Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n`;
            emailContent += `Website: shrigurukrupa-surgical.com`;

            // Create mailto link
            const subject = productName ?
                `Product Enquiry: ${productName} - ${formData.name}` :
                `Website Enquiry - ${formData.name}`;

            const mailtoLink = `mailto:shrigurukrupa54@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;

            // Mobile-friendly email client opening
            try {
                // Try to open email client - works on all mobile devices
                if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    // Mobile device - use window.open for better compatibility
                    window.open(mailtoLink);
                } else {
                    // Desktop - use location.href
                    window.location.href = mailtoLink;
                }
            } catch (error) {
                // Ultimate fallback - copy to clipboard or show link
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(`Email: shrigurukrupa54@gmail.com\nSubject: ${subject}\n\n${emailContent}`);
                    this.showNotification('Email details copied to clipboard. Please paste in your email app.', 'info');
                } else {
                    this.showNotification('Please email us at: shrigurukrupa54@gmail.com', 'info');
                }
            }

            // Clear validation messages
            this.clearAllValidationMessages();

            // Show success message with translation support
            const t = this.getTranslation();
            this.showNotification(t.enquiry?.emailClientOpened || 'Your email client has been opened. Please send the pre-filled email.', 'success');

            // Reset form
            const form = document.getElementById('enquiryForm');
            if (form) form.reset();

            // Clear product enquiry if it was set
            if (productName) {
                sessionStorage.removeItem('enquiryProduct');
            }

        } catch (error) {
            // Ultimate fallback - just show contact info
            const t = this.getTranslation();
            this.showNotification(t.enquiry?.contactDirectly || 'Please contact us directly at shrigurukrupa54@gmail.com or call +91-982-504-8962', 'info');
        }
    }

    // Send email automatically using web service
    async sendEmailAutomatically(formData, productName = null) {
        try {
            // Check browser compatibility
            if (!window.fetch || !window.Promise) {
                throw new Error('Browser compatibility issue');
            }
            // Prepare email data
            const emailData = {
                to: 'shrigurukrupa54@gmail.com',
                from: formData.email,
                subject: productName ?
                    `Product Enquiry: ${productName} - ${formData.name}` :
                    `Website Enquiry - ${formData.name}`,
                html: this.generateEmailHTML(formData, productName),
                text: this.generateEmailText(formData, productName)
            };

            // Try multiple email services for reliability
            const services = [
                () => this.sendViaWeb3Forms(emailData),
                () => this.sendViaFormspree(emailData),
                () => this.sendViaFormSubmit(emailData)
            ];

            // Try each service until one succeeds
            for (const service of services) {
                try {
                    const result = await service();
                    if (result.success) {
                        return result;
                    }
                } catch (error) {
                    // Continue to next service
                }
            }

            // If all services fail, return failure
            return { success: false, message: 'All email services unavailable' };

        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    // Send via Web3Forms (mobile-optimized)
    async sendViaWeb3Forms(emailData) {
        try {
            // Mobile-friendly timeout using Promise.race
            const fetchPromise = fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'bd9f4fd8-4b6f-4d6e-9c3f-2e8a7b6c5d9e',
                    name: emailData.text.match(/Name: ([^\n]+)/)?.[1] || 'Website Visitor',
                    email: emailData.from,
                    subject: emailData.subject,
                    message: emailData.text,
                    to: 'shrigurukrupa54@gmail.com',
                    from_name: 'Shri Gurukrupa Surgical Website',
                    replyto: emailData.from
                })
            });

            // Timeout promise for mobile networks (8 seconds)
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Request timeout')), 8000);
            });

            const response = await Promise.race([fetchPromise, timeoutPromise]);
            const result = await response.json();

            if (result.success) {
                return { success: true, service: 'Web3Forms' };
            }
            return { success: false };
        } catch (error) {
            return { success: false };
        }
    }

    // Send via Formspree (mobile-optimized backup)
    async sendViaFormspree(emailData) {
        try {
            const fetchPromise = fetch('https://formspree.io/f/mbjnbgyk', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: emailData.text.match(/Name: ([^\n]+)/)?.[1] || 'Unknown',
                    email: emailData.from,
                    phone: emailData.text.match(/Phone: ([^\n]+)/)?.[1] || 'Not provided',
                    message: emailData.text,
                    subject: emailData.subject,
                    _replyto: emailData.from
                })
            });

            // 6 second timeout for backup service
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Timeout')), 6000);
            });

            const response = await Promise.race([fetchPromise, timeoutPromise]);
            if (response.ok) {
                return { success: true, service: 'Formspree' };
            }
            return { success: false };
        } catch (error) {
            return { success: false };
        }
    }

    // Send via FormSubmit (mobile-optimized final backup)
    async sendViaFormSubmit(emailData) {
        try {
            const fetchPromise = fetch('https://formsubmit.co/shrigurukrupa54@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: emailData.text.match(/Name: ([^\n]+)/)?.[1] || 'Website Visitor',
                    email: emailData.from,
                    subject: emailData.subject,
                    message: emailData.text,
                    _replyto: emailData.from,
                    _captcha: 'false'
                })
            });

            // 5 second timeout for final backup
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Timeout')), 5000);
            });

            const response = await Promise.race([fetchPromise, timeoutPromise]);
            if (response.ok) {
                return { success: true, service: 'FormSubmit' };
            }
            return { success: false };
        } catch (error) {
            return { success: false };
        }
    }


    // Generate email HTML content
    generateEmailHTML(formData, productName = null) {
        let html = `
            <h2>New ${productName ? 'Product Specific' : 'General'} Enquiry</h2>
            <p><strong>From:</strong> Shri Gurukrupa Surgical Website</p>

            <h3>Customer Details:</h3>
            <ul>
                <li><strong>Name:</strong> ${formData.name}</li>
                <li><strong>Email:</strong> ${formData.email}</li>
                <li><strong>Phone:</strong> ${formData.phone}</li>
                <li><strong>Company:</strong> ${formData.company || 'Not provided'}</li>
                <li><strong>City:</strong> ${formData.city || 'Not provided'}</li>
            </ul>
        `;

        if (productName) {
            html += `
                <h3>Product Information:</h3>
                <ul>
                    <li><strong>Specific Product:</strong> ${productName}</li>
                    <li><strong>Category:</strong> ${formData.product}</li>
                    <li><strong>Quantity:</strong> ${formData.quantity || 'Not specified'}</li>
                </ul>
            `;
        } else {
            html += `
                <h3>Product Information:</h3>
                <ul>
                    <li><strong>Category:</strong> ${formData.product}</li>
                    <li><strong>Quantity:</strong> ${formData.quantity || 'Not specified'}</li>
                </ul>
            `;
        }

        html += `
            <h3>Message:</h3>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>

            <hr>
            <p><small>
                Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br>
                Website: shrigurukrupa-surgical.com
            </small></p>
        `;

        return html;
    }

    // Generate email text content
    generateEmailText(formData, productName = null) {
        let text = `New ${productName ? 'Product Specific' : 'General'} Enquiry from Shri Gurukrupa Surgical Website\n\n`;
        text += `Customer Details:\n`;
        text += `- Name: ${formData.name}\n`;
        text += `- Email: ${formData.email}\n`;
        text += `- Phone: ${formData.phone}\n`;
        text += `- Company: ${formData.company || 'Not provided'}\n`;
        text += `- City: ${formData.city || 'Not provided'}\n\n`;

        if (productName) {
            text += `Product Information:\n`;
            text += `- Specific Product: ${productName}\n`;
            text += `- Category: ${formData.product}\n`;
            text += `- Quantity: ${formData.quantity || 'Not specified'}\n\n`;
        } else {
            text += `Product Information:\n`;
            text += `- Category: ${formData.product}\n`;
            text += `- Quantity: ${formData.quantity || 'Not specified'}\n\n`;
        }

        text += `Message:\n${formData.message}\n\n`;
        text += `---\n`;
        text += `Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n`;
        text += `Website: shrigurukrupa-surgical.com`;

        return text;
    }

    // Validate required fields with proper scrolling and highlighting
    validateRequiredFields(data) {
        const t = this.getTranslation();
        const requiredFields = [
            { name: 'name', label: t.enquiry?.fullName || 'Full Name' },
            { name: 'email', label: t.enquiry?.email || 'Email Address' },
            { name: 'phone', label: t.enquiry?.phone || 'Phone Number' },
            { name: 'product', label: t.enquiry?.productCategory || 'Product Category' },
            { name: 'message', label: t.enquiry?.message || 'Message' }
        ];

        // Clear all existing validation messages first
        this.clearAllValidationMessages();

        let hasValidationErrors = false;
        let firstErrorField = null;

        // Check for missing required fields
        const missingFields = requiredFields.filter(field =>
            !data[field.name] || data[field.name].trim().length === 0
        );

        if (missingFields.length > 0) {
            hasValidationErrors = true;
            firstErrorField = document.getElementById(missingFields[0].name);

            // Show validation messages for ALL missing fields
            missingFields.forEach(field => {
                this.showFieldValidationMessage(field.name, `${field.label} is required`, 'error');
            });

            // Show general error message
            const fieldNames = missingFields.map(field => field.label).join(', ');
            this.showNotification(`Please fill in: ${fieldNames}`, 'error');
        }

        // Validate email format if email is provided
        if (data.email && data.email.trim().length > 0 && !this.isValidEmail(data.email)) {
            hasValidationErrors = true;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('email');
            }
            this.showFieldValidationMessage('email', 'Please enter a valid email address', 'error');
            this.showNotification('Please enter a valid email address', 'error');
        }

        // Validate phone format if phone is provided
        if (data.phone && data.phone.trim().length > 0 && !this.isValidPhone(data.phone)) {
            hasValidationErrors = true;
            if (!firstErrorField) {
                firstErrorField = document.getElementById('phone');
            }
            this.showFieldValidationMessage('phone', 'Please enter a valid phone number (10 digits)', 'error');
            this.showNotification('Please enter a valid phone number (10 digits)', 'error');
        }

        // If there are validation errors, scroll to first error field
        if (hasValidationErrors && firstErrorField) {
            // For missing fields, pass all missing fields for highlighting
            // For other validation errors, pass just the specific field
            const fieldsToHighlight = missingFields.length > 0 ? missingFields : [{ name: firstErrorField.id, label: 'Field' }];
            this.scrollToFieldAndHighlight(firstErrorField, fieldsToHighlight);
            return false;
        }

        // All validation passed
        return true;
    }

    // Scroll to field and highlight it (works on all devices)
    scrollToFieldAndHighlight(fieldElement, missingFields) {
        // Remove existing highlights first
        const allInputs = document.querySelectorAll('input, select, textarea');
        allInputs.forEach(input => {
            input.style.borderColor = '';
            input.style.borderWidth = '';
            input.style.boxShadow = '';
            input.style.backgroundColor = '';
            input.style.animation = '';
        });

        // Highlight missing fields with mobile-friendly styling
        missingFields.forEach(field => {
            const element = document.getElementById(field.name);
            if (element) {
                // Enhanced highlighting for better visibility
                element.style.borderColor = '#ff4444';
                element.style.borderWidth = '2px';
                element.style.boxShadow = '0 0 8px rgba(255, 68, 68, 0.6)';
                element.style.backgroundColor = 'rgba(255, 68, 68, 0.05)';

                // Add shake animation for mobile attention
                element.style.animation = 'shake 0.5s ease-in-out';
            }
        });

        // Calculate scroll position (mobile-friendly)
        const headerHeight = 120; // Account for sticky headers/navigation
        const extraSpace = 50; // Extra space above field for better visibility
        const fieldRect = fieldElement.getBoundingClientRect();
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Calculate the absolute position of the field
        const fieldAbsoluteTop = currentScroll + fieldRect.top;

        // Target position should show the field with proper spacing from top
        const targetScroll = Math.max(0, fieldAbsoluteTop - headerHeight - extraSpace);


        // Smooth scroll to field (works on all browsers)
        this.smoothScrollTo(targetScroll);

        // Focus the field after scroll completes (longer delay for proper scrolling)
        setTimeout(() => {
            fieldElement.focus();

            // For mobile devices, ensure keyboard doesn't hide the field
            if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                setTimeout(() => {
                    const newFieldRect = fieldElement.getBoundingClientRect();
                    if (newFieldRect.top < 120) { // If field is too close to top after keyboard opens
                        this.smoothScrollTo(window.pageYOffset - 80);
                    }
                }, 400);
            }

            // Clear highlights after 5 seconds
            setTimeout(() => {
                missingFields.forEach(field => {
                    const element = document.getElementById(field.name);
                    if (element) {
                        element.style.borderColor = '';
                        element.style.borderWidth = '';
                        element.style.boxShadow = '';
                        element.style.backgroundColor = '';
                        element.style.animation = '';
                    }
                });
            }, 5000);
        }, 900); // Longer delay to ensure scroll animation completes
    }

    // Cross-browser smooth scroll
    smoothScrollTo(targetPosition) {
        // Ensure target position is valid
        if (targetPosition < 0) targetPosition = 0;

        const startPosition = window.pageYOffset || document.documentElement.scrollTop;
        const distance = targetPosition - startPosition;

        // If already at target, no need to scroll
        if (Math.abs(distance) < 5) return;

        const duration = 800; // 800ms animation for better visibility
        let start = null;

        // Use modern smooth scroll if available (better performance)
        if ('scrollBehavior' in document.documentElement.style) {
            try {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                return;
            } catch (error) {
                // Fallback to manual animation
            }
        }

        // Fallback animation for older browsers or if modern scroll fails
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);

            // Use easeInOutCubic for smooth animation
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const currentPosition = startPosition + distance * easeInOutCubic;
            window.scrollTo(0, currentPosition);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Email validation
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Phone validation
    isValidPhone(phone) {
        const cleanPhone = phone.replace(/[\s\-\(\)+]/g, '');
        return /^(91)?[6789]\d{9}$/.test(cleanPhone);
    }

    // Show notification
    showNotification(message, type = 'info') {
        if (window.showNotification) {
            window.showNotification(message, type);
        } else {
            alert(message);
        }
    }

    // Show field-specific validation message
    showFieldValidationMessage(fieldName, message, type = 'error') {
        const field = document.getElementById(fieldName);
        if (!field) return;

        // Remove existing validation message for this field
        this.clearFieldValidationMessage(fieldName);

        // Create validation message element
        const messageElement = document.createElement('div');
        messageElement.className = `field-validation-message ${type}`;
        messageElement.id = `${fieldName}-validation-message`;
        messageElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;

        // Insert message after the field (or after form-group)
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            formGroup.appendChild(messageElement);
        } else {
            // Fallback: insert after the field itself
            field.parentNode.insertBefore(messageElement, field.nextSibling);
        }

        // Add error class to form group for styling
        if (formGroup) {
            formGroup.classList.add('has-validation-error');
        }

        // Auto-remove message when field gets focus/input
        const removeMessageOnInput = () => {
            this.clearFieldValidationMessage(fieldName);
            field.removeEventListener('input', removeMessageOnInput);
            field.removeEventListener('focus', removeMessageOnInput);
            field.removeEventListener('change', removeMessageOnInput);
        };

        field.addEventListener('input', removeMessageOnInput);
        field.addEventListener('focus', removeMessageOnInput);
        field.addEventListener('change', removeMessageOnInput);
    }

    // Clear validation message for specific field
    clearFieldValidationMessage(fieldName) {
        const messageElement = document.getElementById(`${fieldName}-validation-message`);
        if (messageElement) {
            messageElement.remove();
        }

        // Remove error class from form group
        const field = document.getElementById(fieldName);
        if (field) {
            const formGroup = field.closest('.form-group');
            if (formGroup) {
                formGroup.classList.remove('has-validation-error');
            }
        }
    }

    // Clear all validation messages
    clearAllValidationMessages() {
        // Remove all validation message elements
        const validationMessages = document.querySelectorAll('.field-validation-message');
        validationMessages.forEach(message => message.remove());

        // Remove error classes from all form groups
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('has-validation-error');
        });

        // Clear field highlighting
        const allInputs = document.querySelectorAll('input, select, textarea');
        allInputs.forEach(input => {
            input.style.borderColor = '';
            input.style.borderWidth = '';
            input.style.boxShadow = '';
            input.style.backgroundColor = '';
            input.style.animation = '';
        });
    }

    // Cleanup when leaving enquiry page
    destroy() {
        // Cleanup complete
    }
}

// Make EnquiryPage available globally
window.EnquiryPage = EnquiryPage;