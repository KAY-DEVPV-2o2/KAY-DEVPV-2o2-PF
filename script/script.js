// Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header);
window.onscroll = function() {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}

// Smooth scrolling for all anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        new bootstrap.Collapse(menuToggle).toggle();
    });
});

// Hero section text and button animations
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-overlay h1');
    const heroDesc = document.querySelector('.hero-overlay p');
    const heroBtn = document.querySelector('.hero-overlay a.btn-primary');

    // Adding animation classes to trigger animations
    heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
    heroDesc.classList.add('animate__animated', 'animate__fadeInUp');
    heroBtn.classList.add('animate__animated', 'animate__bounceIn');

    // Adding glow effects for hero section text on hover
    heroTitle.addEventListener('mouseover', () => {
        heroTitle.style.boxShadow = '0 0 20px #0d00ff';
        heroTitle.style.textShadow = '0 0 10px #0d00ff';
    });

    heroTitle.addEventListener('mouseout', () => {
        heroTitle.style.boxShadow = 'none';
        heroTitle.style.textShadow = 'none';
    });

    heroDesc.addEventListener('mouseover', () => {
        heroDesc.style.boxShadow = '0 0 20px #0d00ff';
        heroDesc.style.textShadow = '0 0 10px #0d00ff';
    });

    heroDesc.addEventListener('mouseout', () => {
        heroDesc.style.boxShadow = 'none';
        heroDesc.style.textShadow = 'none';
    });

    heroBtn.addEventListener('mouseover', () => {
        heroBtn.style.boxShadow = '0 0 20px #0d00ff';
    });

    heroBtn.addEventListener('mouseout', () => {
        heroBtn.style.boxShadow = 'none';
    });
});
