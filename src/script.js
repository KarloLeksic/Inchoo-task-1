const mobileMenuEl = document.querySelector('#menu');
const openMenuBtn = document.querySelector('#open-menu-icon');
const closeMenuBtn = document.querySelector('#close-menu-icon');
const bodyEl = document.querySelector('body');
const overlay = document.querySelector('#overlay');

// Open mobile menu
openMenuBtn.addEventListener('click', () => {
    mobileMenuEl.classList.add('shown');
    bodyEl.classList.add('nav-open');
    overlay.classList.add('active');

});

closeMenuBtn.addEventListener('click', () => {
    mobileMenuEl.classList.remove('shown');
    bodyEl.classList.remove('nav-open');
    overlay.classList.remove('active');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});