document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    function showItem(index) {
        // Remove 'active' class from all items
        items.forEach(item => item.classList.remove('active'));
        // Add 'active' class to the current item
        items[index].classList.add('active');
        // Move the carousel to show the current item
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

    // Initialize the carousel
    showItem(currentIndex);
});
