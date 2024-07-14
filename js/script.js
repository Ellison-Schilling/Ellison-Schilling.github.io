document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    mobileMenu.addEventListener('click', function() {
        body.classList.toggle('menu-active');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.mobile-nav');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('menu-active');
        nav.classList.toggle('menu-active');
    });

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.closest('.has-submenu');
            parent.classList.toggle('open');
        });
    });
});