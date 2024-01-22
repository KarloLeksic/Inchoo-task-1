const mobileMenuEl = document.querySelector('#menu');
const openMenuBtn = document.querySelector('#open-menu-icon');
const closeMenuBtn = document.querySelector('#close-menu-icon');
const bodyEl = document.querySelector('body');
const overlay = document.querySelector('#overlay');

// Open mobile menu
openMenuBtn.addEventListener('click', () => {
    // Show mobile menu
    mobileMenuEl.classList.add('shown');

    // Disable scroll
    bodyEl.classList.add('nav-open');

    // Add overlay
    overlay.classList.add('active');

});

// Close mobile menu
closeMenuBtn.addEventListener('click', () => {
    mobileMenuEl.classList.remove('shown');
    bodyEl.classList.remove('nav-open');
    overlay.classList.remove('active');
});

// Swiper for companies in the initiative
const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 24,

    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,

            grid: {
                fill: 'row',
                rows: 2,
            },
        }
    }
});