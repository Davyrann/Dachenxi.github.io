/* ============================================================================
   DelapanBit.my.id - JavaScript
   Developer Portfolio (Google Antigravity Aesthetic)
   ============================================================================ */

// CONFIGURATION
const CONFIG = {
    particleCount: 20,
    scrollAnimationThreshold: 0.1,
    navbarScrollThreshold: 40,
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initParticles();
    initScrollAnimations();
    initSmoothScroll();
    initScrollSpy();

    console.log('⚡ Davyran Developer Portfolio initialized with Google Antigravity aesthetic.');
});

// NAVBAR FUNCTIONALITY
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > CONFIG.navbarScrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// MOBILE MENU
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Buka menu');
        });
    });
}

// SCROLL SPY
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');

    if (sections.length === 0 || links.length === 0) return;

    const setActive = (id) => {
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    }, { rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60)) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) setActive(lastSection.id);
        } else if (window.scrollY < 80) {
            const firstSection = sections[0];
            if (firstSection) setActive(firstSection.id);
        }
    }, { passive: true });
}

// PARTICLE ANIMATION (Subtle Monochromatic Float)
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < CONFIG.particleCount; i++) {
        createParticle(particlesContainer, i);
    }
}

function createParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 14;
    const duration = Math.random() * 12 + 10;
    const opacity = Math.random() * 0.2 + 0.05;

    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        bottom: -15px;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${opacity};
    `;

    container.appendChild(particle);
}

// SCROLL REVEAL ANIMATIONS
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: CONFIG.scrollAnimationThreshold,
        rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

// SMOOTH SCROLL WITH ACCESSIBILITY
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                if (!targetElement.hasAttribute('tabindex')) {
                    targetElement.setAttribute('tabindex', '-1');
                }
                targetElement.focus({ preventScroll: true });
            }
        });
    });
}
