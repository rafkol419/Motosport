// Skripta za paralelni skrol (parallax) efekt
window.addEventListener('scroll', () => {
    const parallax = document.getElementById('parallax');
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

