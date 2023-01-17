const navSlide = () => {
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelector('.nav-links');

    overlay.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}