// ===================================
// YAALI - SHADOWS OF THE WING
// Game Pitch Website JavaScript
// ===================================

// === PARTICLE SYSTEM ===
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(212, 175, 55, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';

        particlesContainer.appendChild(particle);
    }
}

// Particle float animation (added via CSS)
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === NAVBAR SCROLL EFFECT ===
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// === MOBILE MENU TOGGLE ===
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// === SMOOTH SCROLL WITH OFFSET ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === TIMELINE PHASE TOGGLE ===
window.togglePhase = function (header) {
    const phase = header.parentElement;
    const allPhases = document.querySelectorAll('.timeline-phase');

    // Close all other phases
    allPhases.forEach(p => {
        if (p !== phase && p.classList.contains('active')) {
            p.classList.remove('active');
        }
    });

    // Toggle current phase
    phase.classList.toggle('active');
};

// === PARALLAX EFFECT ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// === INTERSECTION OBSERVER FOR ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animateElements = document.querySelectorAll(`
    .overview-card,
    .location-card,
    .yaali-card,
    .mechanic-card,
    .character-card,
    .feature-item,
    .download-card
`);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// === HERO SCROLL INDICATOR ===
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const overviewSection = document.getElementById('overview');
        if (overviewSection) {
            overviewSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// === YAALI CARD GLOW EFFECT ===
document.querySelectorAll('.yaali-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// === INITIALIZE ON LOAD ===
window.addEventListener('DOMContentLoaded', () => {
    createParticles();

    // Add entrance animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }

    // Preload images (if you add real images later)
    const imageUrls = [
        // Add your image URLs here when you have them
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});

// === PERFORMANCE OPTIMIZATION ===
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-based animations here
    });
});

// === EASTER EGG: YAALI WING PATTERN ===
let clickCount = 0;
const logo = document.querySelector('.nav-logo');

if (logo) {
    logo.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 5) {
            // Create wing pattern effect
            const wing = document.createElement('div');
            wing.textContent = '🦅';
            wing.style.position = 'fixed';
            wing.style.fontSize = '5rem';
            wing.style.left = '50%';
            wing.style.top = '50%';
            wing.style.transform = 'translate(-50%, -50%)';
            wing.style.animation = 'wingSpread 2s ease-out forwards';
            wing.style.zIndex = '9999';
            wing.style.pointerEvents = 'none';

            document.body.appendChild(wing);

            const wingStyle = document.createElement('style');
            wingStyle.textContent = `
                @keyframes wingSpread {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0);
                    }
                    50% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(2);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(3);
                    }
                }
            `;
            document.head.appendChild(wingStyle);

            setTimeout(() => {
                wing.remove();
                wingStyle.remove();
            }, 2000);

            clickCount = 0;
        }
    });
}

// === CONSOLE MESSAGE ===
console.log(`
%c╔═══════════════════════════════════════════╗
║                                           ║
║     YAALI - SHADOWS OF THE WING          ║
║     When fear takes form, wings rise.     ║
║                                           ║
╚═══════════════════════════════════════════╝
`, 'color: #d4af37; font-size: 14px; font-weight: bold;');

console.log('%cInterested in the code? This website was built with vanilla HTML, CSS, and JavaScript.', 'color: #cd7f32; font-size: 12px;');
