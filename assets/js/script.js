let menuButton = document.querySelector('.menu__button');
let mobileMenu = document.querySelector('.header__menu__mobile');

const menuToggle = () => {
    if (mobileMenu.classList.contains('menu__open')) {
        mobileMenu.classList.remove('menu__open');
    } else {
        mobileMenu.classList.add('menu__open');
    }
    console.log('clicou')
}

