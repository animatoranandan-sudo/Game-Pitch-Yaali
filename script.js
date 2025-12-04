document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sceneCards = document.querySelectorAll('.scene-card');
    sceneCards.forEach(card => {
        observer.observe(card);
    });

    // Smooth scroll for the hero arrow
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', () => {
        document.getElementById('prologue').scrollIntoView({ behavior: 'smooth' });
    });
});
