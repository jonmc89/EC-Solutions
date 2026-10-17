const themeSwitcher = document.getElementById('darkModeBtn');
const themeSwitcherMobile = document.getElementById('darkModeBtnMobile');
const body = document.getElementById('body');

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeSwitcher.classList.toggle('sun');
});

themeSwitcherMobile.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeSwitcherMobile.classList.toggle('sun');
});
