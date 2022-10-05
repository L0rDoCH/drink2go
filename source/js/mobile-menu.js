const navMainToggle = document.querySelector('.menu__toggle');
const navMainBurger = document.querySelector('.menu__toggle-burger');
const navMainMenu = document.querySelector('.menu__main-menu-wrapper');

navMainToggle.classList.add('menu__toggle--JS-menu');
navMainMenu.classList.add('menu__main-menu-wrapper--close');

navMainToggle.addEventListener('click', function () {
  if (navMainBurger.classList.contains('menu__toggle-burger--close')) {
    navMainBurger.classList.remove('menu__toggle-burger--close');
    navMainMenu.classList.add('menu__main-menu-wrapper--close');
  } else {
    navMainBurger.classList.add('menu__toggle-burger--close');
    navMainMenu.classList.remove('menu__main-menu-wrapper--close');
  }
});
