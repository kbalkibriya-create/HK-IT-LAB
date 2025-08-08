document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add some interactive features here, e.g., animations
    // const heroSection = document.getElementById('hero');
    // heroSection.style.opacity = 0;
    // setTimeout(() => {
    //     heroSection.style.transition = 'opacity 1s ease-in';
    //     heroSection.style.opacity = 1;
    // }, 500);
});
