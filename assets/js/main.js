/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('site-menu');
const navToggle = document.getElementById('menu-toggle');
const navClose = document.getElementById('menu-close');

// Toggle menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Close menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.menu-link');

function linkAction() {
    const navMenu = document.getElementById('site-menu');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== GSAP ANIMATION ===============*/
