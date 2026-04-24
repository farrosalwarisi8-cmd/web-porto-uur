// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.add('hidden');
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h2, .bg-white, .bg-gradient-to-br, .bg-gradient-to-r');
    elements.forEach(el => {
        observer.observe(el);
    });
});

// Desktop Navbar Active Link with Underline
const desktopLinks = document.querySelectorAll('.hidden.md\\:flex a.link');

// Smooth active link on scroll
const navItems = document.querySelectorAll('a[href^="#"]');

function updateActiveLink() {
    let current = '';
    
    navItems.forEach(item => {
        const section = document.querySelector(item.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = item.getAttribute('href');
            }
        }
    });

    navItems.forEach(item => {
        item.classList.remove('link-active');
        if (item.getAttribute('href') === current) {
            item.classList.add('link-active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Scroll to top animation
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Add scroll event for navbar shadow
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Button interaction
const demoButtons = document.querySelectorAll('button:not(#hamburger)');

demoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        // Add some visual feedback
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'white';
        navbar.style.backdropFilter = 'none';
    }
});

// Initialize animations on page load
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.animate-fade-in-up, .animate-float, .animate-slide-in-left, .animate-slide-in-right');
    heroElements.forEach((el, index) => {
        if (!el.style.animationDelay) {
            el.style.animationDelay = (index * 0.1) + 's';
        }
    });
});