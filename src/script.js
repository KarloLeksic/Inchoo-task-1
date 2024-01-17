const mobileMenuEl = document.querySelector('#mobile-menu');
const openMenuBtn = document.querySelector('#open-menu-icon');
const closeMenuBtn = document.querySelector('#close-menu-icon');
const bodyEl = document.querySelector('body');

// Open mobile menu
openMenuBtn.addEventListener('click', () => {
    mobileMenuEl.classList.add('shown');
    bodyEl.classList.add('nav-open');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenuEl.classList.remove('shown');
    bodyEl.classList.remove('nav-open');
});
