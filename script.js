// Header Hide

const header = document.getElementById('header');
const logo = document.getElementById('headerLogo');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 300) {
    header.classList.add('header-hide');
    logo.classList.add('header-logo-hide');
  } else {
    header.classList.remove('header-hide');
  }
  lastScrollY = currentScrollY;
});

const themeSwitcher = document.getElementById('darkModeBtn');
const body = document.getElementById('body');

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeSwitcher.classList.toggle('sun');
});
