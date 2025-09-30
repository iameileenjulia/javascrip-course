'use strict';

// modal elements
const modalEl = document.querySelector('.modal');

// overlay element
const overlayEl = document.querySelector('.overlay');

// close modal button
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal buttons
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('open modal buttons:', btnsOpenModalEl.length);
const openModal = function () {
    // remove hidden classname in modal
    modalEl.classList.remove('hidden');
    // remove hidden classname in overlay
    overlayEl.classList.remove('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
    // add hidden classname in modal
    modalEl.classList.add('hidden');
    // add hidden classname in overlay
    overlayEl.classList.add('hidden');
}