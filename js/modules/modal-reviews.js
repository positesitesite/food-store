const reviewsContent = document.querySelectorAll('.reviews__hover-text');
const reviewsItems = document.querySelectorAll('.reviews__item');
const modalContent = document.querySelector('.modal__content');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close-button');

for (i = 0; i < reviewsItems.length; i++) {
  let trigger = reviewsItems[i];
  let element = reviewsContent[i];

  trigger.addEventListener('click', (e) => {
    e.preventDefault();

    modal.classList.add('modal--active');
    document.body.classList.add('body__closed');
    modalContent.textContent = element.textContent;
  });

  btnClose.addEventListener('click', (e) => {
    e.preventDefault();

    document.body.classList.remove('body__closed');
    modal.classList.remove('modal--active');
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      btnClose.click();
    }
  })

};



