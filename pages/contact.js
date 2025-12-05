// Contact Page Module
class ContactPage {
    constructor() {
        this.name = 'contact';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get contact page content
    getContent() {
        const t = this.getTranslation();
        return `
            <div class="page-header">
                <div class="container">
                    <h1 data-translate="contact.title">${t.contact?.title || 'Contact Us'}</h1>
                    <p data-translate="contact.subtitle">${t.contact?.subtitle || 'Get in touch with us for any queries or business inquiries'}</p>
                </div>
            </div>
            <section class="page-section">
                <div class="container">
                    <div class="contact-page-content">
                        <div class="contact-info-section">
                            <div class="contact-details">
                                <h2 data-translate="contact.getInTouch">${t.contact?.getInTouch || 'Get In Touch'}</h2>
                                <p data-translate="contact.description">${t.contact?.description || "We'd love to hear from you. Contact us through any of the following ways:"}</p>

                                <div class="contact-item-large">
                                    <div class="contact-icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h3 data-translate="contact.office">${t.contact?.office || 'Our Office'}</h3>
                                        <p data-translate="footer.address">Amardeep Estate, 4, Khokhra Rd, opposite Anupam Cinema Road, Amraiwadi, Ahmedabad, Gujarat 380021</p>
                                    </div>
                                </div>

                                <div class="contact-item-large">
                                    <div class="contact-icon">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h3 data-translate="contact.callUs">${t.contact?.callUs || 'Call Us'}</h3>
                                        <p><a href="tel:+918048074046" style="color: inherit; text-decoration: none;">+91 (804) 807-4046</a></p>
                                    </div>
                                </div>

                                <div class="contact-item-large">
                                    <div class="contact-icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h3 data-translate="contact.emailUs">${t.contact?.emailUs || 'Email Us'}</h3>
                                        <p><a href="mailto:shrigurukrupa@yahoo.co.uk" style="color: inherit; text-decoration: none;">shrigurukrupa@yahoo.co.uk</a></p>
                                    </div>
                                </div>

                                <div class="contact-item-large">
                                    <div class="contact-icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h3 data-translate="contact.businessHours">${t.contact?.businessHours || 'Business Hours'}</h3>
                                        <p data-translate="contact.hours">${t.contact?.hours || 'Monday - Friday: 9:00 AM - 6:00 PM'}<br>
                                        ${t.contact?.saturday || 'Saturday: 9:00 AM - 2:00 PM'}<br>
                                        ${t.contact?.sunday || 'Sunday: Closed'}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="social-media-section">
                                <h3 data-translate="contact.followUs">${t.contact?.followUs || 'Follow Us'}</h3>
                                <div class="social-media-links">
                                    <a href="https://www.facebook.com/shrigurukrupa" target="_blank" class="social-link facebook">
                                        <i class="fab fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                    <a href="https://wa.me/918048074046" target="_blank" class="social-link whatsapp">
                                        <i class="fab fa-whatsapp"></i>
                                        <span>WhatsApp</span>
                                    </a>
                                    <a href="https://www.linkedin.com/company/shrigurukrupa-surgical" target="_blank" class="social-link linkedin">
                                        <i class="fab fa-linkedin-in"></i>
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>

                            <div class="enquiry-cta">
                                <h3 data-translate="contact.needQuote">${t.contact?.needQuote || 'Need a Quote?'}</h3>
                                <p data-translate="contact.quoteText">${t.contact?.quoteText || 'Submit a detailed enquiry for specific product requirements and pricing.'}</p>
                                <a href="javascript:void(0)" onclick="showPage('enquiry')" class="btn btn-primary btn-large">
                                    <i class="fas fa-paper-plane"></i>
                                    <span data-translate="contact.submitEnquiry">${t.contact?.submitEnquiry || 'Submit Enquiry'}</span>
                                </a>
                            </div>
                        </div>

                        <div class="contact-map-section">
                            <h2 data-translate="contact.findUsHere">${t.contact?.findUsHere || 'Find Us Here'}</h2>
                            <div class="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8374825!2d72.6284235!3d23.0258748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c6f09b5bd5%3A0x789abc123def4567!2sKhokhra%20Rd%2C%20Amraiwadi%2C%20Ahmedabad%2C%20Gujarat%20380021%2C%20India!5e0!3m2!1sen!2sus!4v1733425678901!5m2!1sen!2sus"
                                    width="100%"
                                    height="450"
                                    style="border:0; border-radius: 12px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <div class="map-directions">
                                <a href="https://maps.google.com/?q=Amardeep+Estate+4+Khokhra+Rd+Amraiwadi+Ahmedabad+Gujarat+380021" target="_blank" class="btn btn-primary">
                                    <i class="fas fa-directions"></i>
                                    <span data-translate="contact.getDirections">${t.contact?.getDirections || 'Get Directions'}</span>
                                </a>
                            </div>

                            <div class="contact-features">
                                <div class="feature-card">
                                    <div class="feature-icon">
                                        <i class="fas fa-shipping-fast"></i>
                                    </div>
                                    <h4 data-translate="contact.fastDelivery">${t.contact?.fastDelivery || 'Fast Delivery'}</h4>
                                    <p data-translate="contact.deliveryText">${t.contact?.deliveryText || 'Quick shipping across India and international locations.'}</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">
                                        <i class="fas fa-headset"></i>
                                    </div>
                                    <h4 data-translate="contact.support247">${t.contact?.support247 || '24/7 Support'}</h4>
                                    <p data-translate="contact.supportText">${t.contact?.supportText || 'Round-the-clock customer support for all your queries.'}</p>
                                </div>
                                <div class="feature-card">
                                    <div class="feature-icon">
                                        <i class="fas fa-certificate"></i>
                                    </div>
                                    <h4 data-translate="contact.qualityAssured">${t.contact?.qualityAssured || 'Quality Assured'}</h4>
                                    <p data-translate="contact.qualityText">${t.contact?.qualityText || 'ISO certified products with international quality standards.'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize contact page
    init() {
        console.log('Contact page initialized');
        this.initInteractiveFeatures();
    }

    // Initialize interactive features
    initInteractiveFeatures() {
        // Add hover effects to social media links
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
            });
            link.addEventListener('mouseleave', (e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add animation to feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });

        // Track contact interactions
        this.trackContactInteractions();
    }

    // Track contact interactions for analytics
    trackContactInteractions() {
        // Track phone clicks
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Phone contact attempted');
                if (window.trackEvent) {
                    window.trackEvent('contact_phone_click', { method: 'phone' });
                }
            });
        });

        // Track email clicks
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Email contact attempted');
                if (window.trackEvent) {
                    window.trackEvent('contact_email_click', { method: 'email' });
                }
            });
        });

        // Track social media clicks
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const platform = e.currentTarget.className.split(' ').find(c =>
                    ['facebook', 'whatsapp', 'linkedin'].includes(c)
                );
                console.log(`Social media click: ${platform}`);
                if (window.trackEvent) {
                    window.trackEvent('social_media_click', { platform });
                }
            });
        });

        // Track map interactions
        const mapIframe = document.querySelector('.map-container iframe');
        if (mapIframe) {
            mapIframe.addEventListener('load', () => {
                console.log('Map loaded successfully');
                if (window.trackEvent) {
                    window.trackEvent('map_loaded');
                }
            });
        }
    }

    // Cleanup when leaving contact page
    destroy() {
        console.log('Contact page destroyed');
    }
}

// Make ContactPage available globally
window.ContactPage = ContactPage;