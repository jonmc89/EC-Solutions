const themeSwitcher = document.getElementById('darkModeBtn');
const themeSwitcherMobile = document.getElementById('darkModeBtnMobile');
const body = document.getElementById('body');

const mobileBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show-mobile-nav');
  mobileBtn.classList.toggle('close-menu-button');
});

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('show-mobile-nav');
  });
});

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeSwitcher.classList.toggle('sun');
});

themeSwitcherMobile.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeSwitcherMobile.classList.toggle('sun');
});
