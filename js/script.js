document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    mobileMenu.addEventListener('click', function() {
        body.classList.toggle('menu-active');
    });
});