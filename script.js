// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close nav when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations (fade-in-up class)
const fadeElements = document.querySelectorAll('.fade-in-up');

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// Project Tabs Logic
const projectTabs = document.querySelectorAll('.project-tab');
const projectCards = document.querySelectorAll('.pcard');

projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        projectTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Hide all project cards
        projectCards.forEach(card => card.classList.remove('active'));
        
        // Show targeted card
        const targetId = tab.getAttribute('data-target');
        const targetCard = document.getElementById(targetId);
        if (targetCard) {
            targetCard.classList.add('active');
        }
    });
});

// Certificate Lightbox Logic
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const certImages = document.querySelectorAll('.cert-img img');

    certImages.forEach(img => {
        img.addEventListener('click', () => {
            const certCard = img.closest('.cert-card');
            const title = certCard.querySelector('.cert-title').innerText;
            lightboxImg.src = img.src;
            if (lightboxTitle) lightboxTitle.innerText = title;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop scrolling
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Resume scrolling
        }
    });
}
