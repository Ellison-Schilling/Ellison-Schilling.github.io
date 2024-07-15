document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    mobileMenu.addEventListener('click', function() {
        body.classList.toggle('menu-active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    const carousel = document.querySelector('.carousel');
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
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

=======
    const carousel = document.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    function showItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);
});
>>>>>>> parent of 92130c8 (Fixed bug hopefullt)
