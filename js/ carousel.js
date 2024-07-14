document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentSlide = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('current-slide');
            } else {
                slide.classList.remove('current-slide');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Optional: Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});