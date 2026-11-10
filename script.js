const themeSwitcher = document.getElementById('darkModeBtn');
const themeSwitcherMobile = document.getElementById('darkModeBtnMobile');
const themeSwitchers = [themeSwitcher, themeSwitcherMobile].filter(Boolean);
const body = document.body;

const mobileBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileBtn && mobileNav) {
  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('show-mobile-nav');
    mobileBtn.classList.toggle('close-menu-button');
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('show-mobile-nav');
    });
  });
}

themeSwitchers.forEach((switcher) => {
  switcher.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeSwitchers.forEach((themeSwitcher) => {
      themeSwitcher.classList.toggle('sun', isDarkMode);
    });
  });
});
