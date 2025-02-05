
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) { // Animiraj kad sekcija dođe u 80% visine prozora
            section.classList.add('fade-in');
        }
    });
});
