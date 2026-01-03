// Home Page Module
class HomePage {
    constructor() {
        this.name = 'home';
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    // Get home page content
    getContent() {
        const t = this.getTranslation();
        return `
            <!-- About Section -->
            <section class="about page-section">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2 data-translate="home.aboutSection">About</h2>
                            <p data-translate="about.description1">Shri Gurukrupa Surgical has been a trusted supplier of premium surgical products for over 25 years, committed to supporting healthcare professionals with quality equipment and instruments.</p>
                            <p data-translate="about.description2">Our state-of-the-art manufacturing facility is equipped with the latest technology, and our team of experienced professionals is dedicated to maintaining the highest quality standards for all our products.</p>

                            <div class="learn-more-section">
                                <a href="javascript:void(0)" onclick="showPage('about')" class="btn btn-primary" data-translate="about.learnMore">Learn More</a>
                            </div>
                        </div>
                        <div class="about-image">
                            <!-- Image Carousel -->
                            <div class="carousel-wrapper">
                                <div class="carousel-track" id="carouselTrack">
                                    <div class="carousel-slide active">
                                        <img src="assets/products/test.jpg" alt="Shri Gurukrupa Surgical - Image 1">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="assets/products/test.jpg" alt="Shri Gurukrupa Surgical - Image 2">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="assets/products/test.jpg" alt="Shri Gurukrupa Surgical - Image 3">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="assets/products/test.jpg" alt="Shri Gurukrupa Surgical - Image 4">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="assets/products/test.jpg" alt="Shri Gurukrupa Surgical - Image 5">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="assets/products/test.jpg" alt="Shri Gurukrupa Surgical - Image 6">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="assets/products/test.jpg" alt="Shri Gurukrupa Surgical - Image 7">
                                    </div>
                                </div>

                                <!-- Navigation Arrows -->
                                <button class="carousel-nav carousel-prev" id="carouselPrev">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="carousel-nav carousel-next" id="carouselNext">
                                    <i class="fas fa-chevron-right"></i>
                                </button>

                                <!-- Dot Indicators -->
                                <div class="carousel-indicators" id="carouselIndicators">
                                    <button class="indicator active" data-slide="0"></button>
                                    <button class="indicator" data-slide="1"></button>
                                    <button class="indicator" data-slide="2"></button>
                                    <button class="indicator" data-slide="3"></button>
                                    <button class="indicator" data-slide="4"></button>
                                    <button class="indicator" data-slide="5"></button>
                                    <button class="indicator" data-slide="6"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize home page
    init() {
        this.initCarousel();
    }

    // Initialize carousel functionality
    initCarousel() {
        this.currentSlide = 0;
        this.totalSlides = 7;
        this.autoSlideInterval = null;

        // Get carousel elements
        this.carouselTrack = document.getElementById('carouselTrack');
        this.prevButton = document.getElementById('carouselPrev');
        this.nextButton = document.getElementById('carouselNext');
        this.indicators = document.querySelectorAll('.indicator');
        this.slides = document.querySelectorAll('.carousel-slide');

        if (!this.carouselTrack) return;

        // Add event listeners
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.manualNextSlide());

        // Add indicator event listeners
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch/swipe support for mobile
        this.addTouchSupport();

        // Start auto-scroll
        this.startAutoSlide();

        // Pause auto-scroll on hover
        this.carouselTrack.addEventListener('mouseenter', () => this.pauseAutoSlide());
        this.carouselTrack.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    // Add touch support for mobile
    addTouchSupport() {
        let startX = 0;
        let moveX = 0;

        this.carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.carouselTrack.addEventListener('touchmove', (e) => {
            moveX = e.touches[0].clientX;
        });

        this.carouselTrack.addEventListener('touchend', () => {
            const diffX = startX - moveX;
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }

    // Go to next slide (used by auto-scroll)
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }

    // Manual next slide with seamless wrap
    manualNextSlide() {
        const newSlide = (this.currentSlide + 1) % this.totalSlides;

        // Check if we're wrapping from last slide to slide 0
        if (this.currentSlide === this.totalSlides - 1 && newSlide === 0) {
            // Disable transition temporarily for seamless wrap
            this.disableTransition();
            this.currentSlide = newSlide;
            this.updateCarousel();
            // Re-enable transition after a brief delay
            setTimeout(() => this.enableTransition(), 50);
        } else {
            this.currentSlide = newSlide;
            this.updateCarousel();
        }

        // Reset auto-scroll timer when user manually navigates
        this.resetAutoSlide();
    }

    // Go to previous slide
    prevSlide() {
        const newSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;

        // Check if we're wrapping from slide 0 to last slide
        if (this.currentSlide === 0 && newSlide === this.totalSlides - 1) {
            // Disable transition temporarily for seamless wrap
            this.disableTransition();
            this.currentSlide = newSlide;
            this.updateCarousel();
            // Re-enable transition after a brief delay
            setTimeout(() => this.enableTransition(), 50);
        } else {
            this.currentSlide = newSlide;
            this.updateCarousel();
        }

        // Reset auto-scroll timer when user manually navigates
        this.resetAutoSlide();
    }

    // Go to specific slide
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
        // Reset auto-scroll timer when user manually navigates
        this.resetAutoSlide();
    }

    // Reset auto-slide timer (restart the countdown)
    resetAutoSlide() {
        this.pauseAutoSlide();
        this.startAutoSlide();
    }

    // Disable carousel transition temporarily
    disableTransition() {
        this.carouselTrack.style.transition = 'none';
    }

    // Re-enable carousel transition
    enableTransition() {
        this.carouselTrack.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    // Update carousel display
    updateCarousel() {
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });

        // Move carousel track - calculate percentage for 7 slides
        const slideWidth = 100 / this.totalSlides; // 14.285714% per slide
        const translateX = -this.currentSlide * slideWidth;
        this.carouselTrack.style.transform = `translateX(${translateX}%)`;
    }

    // Start auto-slide
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 6000); // 6 seconds per slide (increased from 4)
    }

    // Pause auto-slide
    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    // Cleanup when leaving home page
    destroy() {
        this.pauseAutoSlide();
    }
}

// Make HomePage available globally
window.HomePage = HomePage;