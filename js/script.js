'use strict'

const navBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const body = document.body;
const numberBtn = document.querySelector('.home-content__quantity-numbers');
const plusBtn = document.querySelector('.home-content__quantity-plus');
const minusBtn = document.querySelector('.home-content__quantity-minus');
const menuItems = document.querySelectorAll('.menu-list__item');

// Add scripts for hamburger menu
navBtn.addEventListener('click', function () {
    navBtn.classList.toggle('nav__toggle-line--open');
    navMenu.classList.toggle('nav-list--open');
    overlay.classList.toggle('overlay--show');
    body.classList.toggle('no-scroll');
});

// Add scripts overlay
overlay.addEventListener('click', function () {
    overlay.classList.remove('overlay--show');
    navMenu.classList.remove('nav-list--open');
    navBtn.classList.remove('nav__toggle-line--open');
    body.classList.remove('no-scroll');
});

// Add scripts for quantity buttons
let count = 3;
plusBtn.addEventListener('click', function () {
    if (count < 50) {
        count++;
        numberBtn.textContent = count;
    }
});


minusBtn.addEventListener('click', function () {
    if (count > 1) {
        count--;
        numberBtn.textContent = count;
    }
});

// Add scripts for Menu Foods
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function () {
        document.querySelector('.menu-list__item--active').classList.remove('menu-list__item--active');
        menuItems[i].classList.add('menu-list__item--active');

        document.querySelector('.menu-foods__wrapper--show').classList.remove('menu-foods__wrapper--show');
        let menuId = menuItems[i].getAttribute('menu-id');
        document.querySelector(menuId).classList.add('menu-foods__wrapper--show');
    });
}