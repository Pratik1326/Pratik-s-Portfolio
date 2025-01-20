document.addEventListener('DOMContentLoaded', function () {
    // Create particles
    const particles = document.querySelector('.particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 15 + 5}s linear infinite`;
        particle.style.opacity = Math.random() * 0.5;
        particles.appendChild(particle);
    }

    // Make the floating robot more interactive
    const robot = document.querySelector('.robot');
    robot.addEventListener('mouseenter', () => {
        robot.style.transform = 'translateY(-50%) scale(1.2)';
    });
    robot.addEventListener('mouseleave', () => {
        robot.style.transform = 'translateY(-50%) scale(1)';
    });

    // Section animations
    const sections = document.querySelectorAll('section');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    // Initial check
    handleScroll();

    // Scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Header parallax effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        header.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a back-to-top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.textContent = '↑';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
});
