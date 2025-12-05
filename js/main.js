// Main JavaScript file - handles initialization and common functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScrolling();
    initLazyLoading();
    initHeaderScroll();
    initDropdownMenus();

    // Update search data when language changes
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            // Dispatch custom event for search engine
            document.dispatchEvent(new CustomEvent('languageChanged'));
        });
    }

    // Force home tab activation after everything else is loaded
    initActiveNavigation();

    // Additional safety net - wait for router to finish
    setTimeout(() => {
        initActiveNavigation();
    }, 1000);
});

// Final backup - after window is fully loaded including images, scripts, etc.
window.addEventListener('load', function() {
    setTimeout(() => {
        activateHomeTab();
    }, 100);
});

// Ensure Home tab is active on page load
function initActiveNavigation() {
    // Immediate activation
    activateHomeTab();

    // Delayed activation as backup
    setTimeout(() => {
        activateHomeTab();
    }, 100);

    // Final backup after all scripts loaded
    setTimeout(() => {
        activateHomeTab();
    }, 500);
}

function activateHomeTab() {
    // Only activate home tab if we're actually on the home page
    // Check if router exists and what page we're on
    if (window.router && window.router.currentPage && window.router.currentPage !== 'home') {
        return false;
    }

    // Also check URL hash
    const hash = window.location.hash.substring(1);
    if (hash && hash !== 'home' && hash !== '') {
        return false;
    }

    // Remove active from all tabs first
    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.classList.remove('active');
    });

    // Find home tab by multiple selectors - prioritize navigation menu
    const homeSelectors = [
        '.nav-menu a[onclick="showPage(\'home\')"]', // Most specific
        '.nav-menu [data-translate="nav.home"]',     // Fallback 1
        '[onclick="showPage(\'home\')"]',            // Fallback 2
        '.nav-menu a:first-child'                   // Last resort
    ];

    for (let selector of homeSelectors) {
        const homeTab = document.querySelector(selector);
        if (homeTab && homeTab.closest('.nav-menu')) { // Ensure it's in nav menu
            homeTab.classList.add('active');

            // Force style update
            homeTab.style.cssText = homeTab.style.cssText;

            return true;
        }
    }

    return false;
}

// Header scroll effects
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    });
}

// Enhanced Dropdown Menu functionality - Click + Hover like MediPlus
function initDropdownMenus() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        let hoverTimer;
        let isClickOpen = false;

        if (!dropdownToggle || !dropdownMenu) return;

        // Handle click functionality
        dropdownToggle.addEventListener('click', function(e) {
            // Only prevent default if it's the products dropdown with submenu
            if (dropdown.classList.contains('dropdown')) {
                e.preventDefault();
                e.stopPropagation();

                // Toggle dropdown
                const isCurrentlyOpen = dropdown.classList.contains('dropdown-active');

                // Close all other dropdowns
                closeAllDropdowns();

                if (!isCurrentlyOpen) {
                    openDropdown(dropdown);
                    isClickOpen = true;
                } else {
                    closeDropdown(dropdown);
                    isClickOpen = false;
                }
            }
        });

        // Handle hover functionality (additional to click)
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimer);
            if (!isClickOpen) {
                openDropdown(dropdown);
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            if (!isClickOpen) {
                hoverTimer = setTimeout(() => {
                    closeDropdown(dropdown);
                }, 100);
            }
        });

        // Handle dropdown item clicks
        const dropdownItems = dropdown.querySelectorAll('.dropdown-menu a');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                // Close dropdown when item is clicked
                closeDropdown(dropdown);
                isClickOpen = false;
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });

    function openDropdown(dropdown) {
        dropdown.classList.add('dropdown-active');
        const arrow = dropdown.querySelector('.dropdown-arrow');
        if (arrow) {
            arrow.style.transform = 'rotate(180deg)';
        }
    }

    function closeDropdown(dropdown) {
        dropdown.classList.remove('dropdown-active');
        const arrow = dropdown.querySelector('.dropdown-arrow');
        if (arrow) {
            arrow.style.transform = 'rotate(0deg)';
        }
    }

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            closeDropdown(dropdown);
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    if (navMenu && menuToggle) {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }
}

// Close mobile menu
function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    if (navMenu && menuToggle) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's a router navigation
            if (href === '#' || this.hasAttribute('onclick')) {
                return;
            }

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
});

// Form validation helper
function validateForm(formElement) {
    const requiredFields = formElement.querySelectorAll('[required]');
    let isValid = true;
    let firstInvalidField = null;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;

            if (!firstInvalidField) {
                firstInvalidField = field;
            }
        } else {
            field.classList.remove('error');

            // Additional validation for email fields
            if (field.type === 'email' && !isValidEmail(field.value)) {
                field.classList.add('error');
                isValid = false;

                if (!firstInvalidField) {
                    firstInvalidField = field;
                }
            }
        }
    });

    // Focus on first invalid field
    if (firstInvalidField) {
        firstInvalidField.focus();
        firstInvalidField.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    return isValid;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone number formatting helper
function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumberString;
}

// Date formatting helper
function formatDate(date, locale = 'en-US') {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(date).toLocaleDateString(locale, options);
}

// Show notification/alert
function showNotification(message, type = 'info', duration = 5000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after duration
    if (duration > 0) {
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, duration);
    }

    return notification;
}

// Loading state helper
function setLoadingState(element, isLoading) {
    if (isLoading) {
        element.classList.add('loading');
        element.disabled = true;

        // Store original text
        if (!element.dataset.originalText) {
            element.dataset.originalText = element.textContent;
        }

        element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    } else {
        element.classList.remove('loading');
        element.disabled = false;

        // Restore original text
        if (element.dataset.originalText) {
            element.textContent = element.dataset.originalText;
        }
    }
}

// Cookie helper functions
function setCookie(name, value, days = 30) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Local storage helper with error handling
function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
        return false;
    }
}

function getLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.warn('Could not read from localStorage:', e);
        return defaultValue;
    }
}

// Debounce function for search and other input handlers
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Analytics helper (placeholder for future implementation)
function trackEvent(eventName, properties = {}) {
    // This would integrate with Google Analytics, Mixpanel, etc.
    console.log('Event tracked:', eventName, properties);

    // Example Google Analytics 4 tracking:
    // gtag('event', eventName, properties);
}

// Error reporting helper
function reportError(error, context = '') {
    console.error('Error reported:', error, context);

    // This would integrate with error tracking services like Sentry
    // Sentry.captureException(error, { extra: { context } });
}

// Performance monitoring helper
function measurePerformance(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();

    console.log(`${name} took ${end - start} milliseconds.`);

    return result;
}

// Make utility functions available globally
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.scrollToTop = scrollToTop;
window.validateForm = validateForm;
window.isValidEmail = isValidEmail;
window.formatPhoneNumber = formatPhoneNumber;
window.formatDate = formatDate;
window.showNotification = showNotification;
window.setLoadingState = setLoadingState;
window.setCookie = setCookie;
window.getCookie = getCookie;
window.deleteCookie = deleteCookie;
window.setLocalStorage = setLocalStorage;
window.getLocalStorage = getLocalStorage;
window.debounce = debounce;
window.throttle = throttle;
window.trackEvent = trackEvent;
window.reportError = reportError;
window.measurePerformance = measurePerformance;
window.activateHomeTab = activateHomeTab;