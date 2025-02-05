
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        if (sectionTop < window.innerHeight - sectionHeight / 4) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
