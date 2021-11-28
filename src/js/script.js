// ----------------------------------------------------
// - MENU ---------------------------------------------
// ----------------------------------------------------

const hamburger = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

// ----------------------------------------------------
// - PERCENT ------------------------------------------
// ----------------------------------------------------

const values = document.querySelectorAll('.skills__level-percent'),
    lines = document.querySelectorAll('.skills__level-up');

values.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});