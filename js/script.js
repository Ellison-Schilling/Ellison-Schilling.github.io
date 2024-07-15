document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    mobileMenu.addEventListener('click', function() {
        body.classList.toggle('menu-active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownTitle = document.querySelector('.dropdown-title');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownTitle.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
    });
});