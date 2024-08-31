document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar text color change on scroll
    const header = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add('navbar-dark');
            header.classList.add('bg-dark'); // Make sure navbar stays dark
            navLinks.forEach(link => link.style.color = '#ffffff'); // White text color
        } else {
            header.classList.remove('navbar-dark');
            header.classList.remove('bg-dark'); // Remove dark background
            navLinks.forEach(link => link.style.color = ''); // Reset to default
        }
    };

    // Add fade-in effect for hero-overlay elements when they are scrolled into view
    const heroOverlay = document.querySelector('.hero-overlay');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroOverlay.classList.add('fade-in');
            } else {
                heroOverlay.classList.remove('fade-in'); // Optional: Remove class when not in view
            }
        });
    }, { threshold: 0.1 });

    if (heroOverlay) {
        observer.observe(heroOverlay);
    }
    
    // Optional: Adding a function to handle additional animations or interactions
    const heroText = document.querySelectorAll('.hero-overlay h1, .hero-overlay p');
    heroText.forEach(text => {
        text.addEventListener('mouseover', () => {
            text.style.textShadow = '0 0 20px #00ffff, 0 0 30px #00ffff';
            text.style.transition = 'text-shadow 0.3s ease';
        });
        text.addEventListener('mouseout', () => {
            text.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff';
        });
    });
});
