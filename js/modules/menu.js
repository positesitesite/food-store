/*jshint esversion: 6 */

const accoItem = document.querySelectorAll('.accordeon__item');
const accoContent = document.querySelectorAll('.accordeon__content');

const iconElement = document.querySelectorAll('.accordeon__indicator-icon');

// Вешаем трекер ивента и добавляем модификатор на accoContent по клику
for (let index = 0; index < accoItem.length; index++) {
  // Создаем переменную которая позволит проверять каждый отдельный элемент LI
  const element = accoItem[index];
  const trigger = accoContent[index];
  const icon = iconElement[index];
  // Создаем событие на элементах которые будем ослеживать
  element.addEventListener('click', function(e) {
    e.preventDefault();

    for (let i = 0; i < accoItem.length; i++) {
      if (i !== index) {
        accoContent[i].classList.remove('accordeon__content--reveal');

        // icon.classList.remove('accordeon__indicator-icon--active');
      }
      
      if (trigger.classList.contains('accordeon__content--reveal')) {
        trigger.classList.remove('accordeon__content--reveal');
        // icon.classList.remove('accordeon__indicator-icon--active');
      } else {
        trigger.classList.add('accordeon__content--reveal');
        // icon.classList.add('accordeon__indicator-icon--active');
      }
    }
  });
}