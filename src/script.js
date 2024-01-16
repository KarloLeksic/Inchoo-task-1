const mobileMenuEl = document.querySelector('#mobile-menu');
const openMenuBtn = document.querySelector('#open-menu-icon');
const closeMenuBtn = document.querySelector('#close-menu-icon');

// Open mobile menu
openMenuBtn.addEventListener('click', () => {
    mobileMenuEl.classList.add('shown');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenuEl.classList.remove('shown');
});
