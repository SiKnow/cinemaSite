const close = document.querySelector('.navigation-close');
const burger = document.querySelector('.burger-btn');
const menu = document.querySelector('.navigation-js');

burger.addEventListener('click', () => {
    menu.style.right = '0';
});

close.addEventListener('click', () => {
    menu.style.right = '';
});