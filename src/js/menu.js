const burgerMenuBtn = document.querySelector('[burger-menu-btn]');
const mobileMenuRef = document.querySelector('[data-menu]');
const mobileListRef = document.querySelector('.mobile__list');
const bodyRef = document.querySelector('[data-body]');

let isOpenMenu = false;

const toggleClass = () => {
  const expanded =
    burgerMenuBtn.getAttribute('aria-expanded') === 'true' || false;

  burgerMenuBtn.classList.toggle('is-active');
  burgerMenuBtn.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
  bodyRef.classList.toggle('is-fixed');

  isOpenMenu = !isOpenMenu;
};

const openMenu = () => {
  toggleClass();
  mobileListRef.addEventListener('click', toggleClass);
};

const closeMenu = () => {
  toggleClass();
  mobileListRef.removeEventListener('click', toggleClass);
};

burgerMenuBtn.addEventListener('click', () => {
  if (!isOpenMenu) {
    openMenu();
  } else {
    closeMenu();
  }
});
