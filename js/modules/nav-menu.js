const hamburgerMenu = document.querySelector('#hamburger-menu');
const navHiddenList = document.querySelector('#nav__hidden-list');
const navHiddenBtn = document.querySelector('#nav__hidden-btn');
// const body = document.body;


hamburgerMenu.addEventListener('click', (e) => {
  e.preventDefault();

  navHiddenList.classList.add('nav__hidden-list--reveal');
  document.body.classList.add('body__closed');
  return navHiddenList;
});

navHiddenBtn.addEventListener('click', (e) => {
  e.preventDefault();

  navHiddenList.classList.remove('nav__hidden-list--reveal');
  document.body.classList.remove('body__closed');
  return navHiddenList;

});
