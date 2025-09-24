'use strict'

const navBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const body = document.body;
const menuItems = document.querySelectorAll('.menu-list__item');

navBtn.addEventListener('click', function () {
    navBtn.classList.toggle('nav__toggle-line--open');
    navMenu.classList.toggle('nav-list--open');
    overlay.classList.toggle('overlay--show');
    body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', function () {
    overlay.classList.remove('overlay--show');
    navMenu.classList.remove('nav-list--open');
    navBtn.classList.remove('nav__toggle-line--open');
    body.classList.remove('no-scroll');
});


for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function () {
        document.querySelector('.menu-list__item--active').classList.remove('menu-list__item--active');
        menuItems[i].classList.add('menu-list__item--active');

        document.querySelector('.menu-foods__wrapper--show').classList.remove('menu-foods__wrapper--show');
        let menuId = menuItems[i].getAttribute('menu-id');
        document.querySelector(menuId).classList.add('menu-foods__wrapper--show');
    });
}