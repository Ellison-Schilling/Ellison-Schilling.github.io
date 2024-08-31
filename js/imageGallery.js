document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const images = imageContainer.querySelectorAll('img');
    const navButtons = document.querySelectorAll('.image-nav-btn');

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
                img.style.display = 'block';
            } else {
                img.classList.remove('active');
                img.style.display = 'none';
            }
        });
        navButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            showImage(index);
        });
    });

    // Show the first image by default
    showImage(0);
});