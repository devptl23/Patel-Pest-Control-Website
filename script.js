document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Toggle hamburger to X (optional animation)
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        }
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        });
    });

    // Click Tracking for Phone Calls
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function () {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            const buttonText = this.textContent.trim();

            console.log('Phone Click Tracked:', {
                phone: phoneNumber,
                button: buttonText,
                location: this.className,
                timestamp: new Date().toISOString()
            });

            // If you add Google Analytics later, use:
            // gtag('event', 'phone_call', {
            //     'event_category': 'conversion',
            //     'event_label': buttonText,
            //     'phone_number': phoneNumber
            // });
        });
    });

    // Click Tracking for SMS
    document.querySelectorAll('a[href^="sms:"]').forEach(link => {
        link.addEventListener('click', function () {
            const phoneNumber = this.getAttribute('href').split('?')[0].replace('sms:', '');
            const buttonText = this.textContent.trim();

            console.log('SMS Click Tracked:', {
                phone: phoneNumber,
                button: buttonText,
                location: this.className,
                timestamp: new Date().toISOString()
            });

            // If you add Google Analytics later, use:
            // gtag('event', 'sms_click', {
            //     'event_category': 'conversion',
            //     'event_label': buttonText,
            //     'phone_number': phoneNumber
            // });
        });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Smooth Scroll for Anchor Links (Polyfill-like behavior for Safari if needed, but CSS handles most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
