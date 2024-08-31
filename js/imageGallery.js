document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const images = imageContainer.querySelectorAll('img');
    const navButtons = document.querySelectorAll('.image-nav-btn');

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        navButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    navButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showImage(index);
        });
    });
});