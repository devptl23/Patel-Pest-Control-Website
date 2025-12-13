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

    // Testimonial Carousel
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        const testimonials = carousel.querySelectorAll('.testimonial');
        const leftArrow = carousel.querySelector('.carousel-arrow-left');
        const rightArrow = carousel.querySelector('.carousel-arrow-right');
        const dotsContainer = carousel.parentElement.querySelector('.carousel-dots');
        let currentIndex = 0;
        let autoPlayInterval;

        // Create dots
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Go to review ${index + 1}`);
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.carousel-dot');

        function showSlide(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showSlide(currentIndex);
        }

        function goToSlide(index) {
            currentIndex = index;
            showSlide(currentIndex);
            resetAutoPlay();
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }

        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        // Event listeners
        leftArrow.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });

        rightArrow.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoPlay();
            }
        });

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // Touch/Swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left
                nextSlide();
                resetAutoPlay();
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe right
                prevSlide();
                resetAutoPlay();
            }
        }

        // Start auto-play
        startAutoPlay();
    }
});
