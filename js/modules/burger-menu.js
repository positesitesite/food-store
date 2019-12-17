const burgerMenu = document.querySelector('#burgerMenu');
const burgerMenuList = document.querySelector('#burgerMenuList');
const burgerMenuClose = document.querySelector('#burgerMenuClose');
const width = document.documentElement.clientWidth;


if (width >= 768) {
  burgerMenu.addEventListener('mouseover', (e) => {
    e.preventDefault();
    burgerMenuList.classList.add('burger__composition-list--reveal');
    return burgerMenuList;
  });

  burgerMenu.addEventListener('mouseout', (e) => {
    e.preventDefault();
    burgerMenuList.classList.remove('burger__composition-list--reveal');
    return burgerMenuList;
  });
} else {
  burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenuList.classList.add('burger__composition-list--reveal');
    return burgerMenuList;
  });

  burgerMenuClose.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenuList.classList.remove('burger__composition-list--reveal');
    return burgerMenuList;
  });
}
  