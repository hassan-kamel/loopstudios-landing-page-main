const _menuElement = document.querySelector('[class="menu"]');
const _menuMob = document.querySelector('[class="mob-links"]');
const _menuMobLinks = document.querySelectorAll('.mob-links ul li');
const _menuMobLinksUL = document.querySelector('.mob-links ul ');
console.log('_menuMobLinksUL: ', _menuMobLinksUL);
console.log(_menuMobLinks);
const _menuCheck = document.getElementById('menu-check');

_menuElement.addEventListener('click', (e) => {
  if (_menuMob.style.width == '100vw') {
    _menuMob.style.width = '0';
    _menuMob.style.height = '0';
    // _menuMobLinksUL.width = '0';

    _menuMob.style.transition = 'all  0.5s ease-in';
    for (let i = 0; i < _menuMobLinks.length; i++) {
      _menuMobLinks[i].style.opacity = '1';
      _menuMobLinks[i].style.animation = `hideLinks 2s forwards `;
    }
  } else {
    _menuMob.style.width = '100vw';
    _menuMob.style.height = '100vh';

    _menuMob.style.transition = 'width 0.5s ease-in-out';
    for (let i = 0; i < _menuMobLinks.length; i++) {
      _menuMobLinks[i].style.opacity = '0';
      _menuMobLinks[i].style.animation = `moveLinks 0.5s forwards ${
        i / 5 + 0.5
      }s`;
    }
  }
});
