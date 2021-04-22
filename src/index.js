import './scss/style.scss';

(() => {
    'use strict';

    let mobileMenu = document.getElementById('gsweb-mobile-menu');
    let desktopMenu = document.getElementById('gsweb-desktop-menu');
    let logoMobile = document.querySelector('.logo-mobile');
    let closeMobileMenu = document.querySelector('.gsweb-menu-close');

    mobileMenu.addEventListener('click', ()=>{
        desktopMenu.classList.add('active');
        logoMobile.classList.add('visible-mobile');
    });
    closeMobileMenu.addEventListener('click', ()=>{
        desktopMenu.classList.remove('active');
        logoMobile.classList.remove('visible-mobile');
    });
})();