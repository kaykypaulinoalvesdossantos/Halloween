/* ========================= SHOW MENU ========================= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ===== MENU SHOW ==== */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ===== MENU HIDDEN ==== */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ========================= REMOVE MENU MOBILE ========================= */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========================= HOME SWIPER ========================= */
let homeSwiper = new Swiper(".home-swiper", {
    soaceBetween: 30,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
})



/* ========================= CHANGE BACKGROUND HEADER ========================= */

/* ========================= NEW SWIPER ========================= */

/* ========================= SCROLL SECTIONS ACTIVE LINK ========================= */

/* ========================= SHOW SCROLL UP ========================= */
