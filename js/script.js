'use strict'

const navBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const body = document.body;

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