// Создаем переменную для LI Родителя accordeon__item
const accoItem = document.querySelectorAll('.accordeon__item');
// Создаем переменную для скрытого контента на который нужен модификатор
const accoContent = document.querySelectorAll('.accordeon__content');

// Вешаем трекер ивента и добавляем модификатор на accoContent по клику
for (let index = 0; index < accoItem.length; index++) {
  // Создаем переменную которая позволит проверять каждый отдельный элемент LI
  const element = accoItem[index];
  const trigger = accoContent[index];
  // Создаем событие на элементах которые будем ослеживать
  element.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < accoItem.length; i++) {
      if (i !== index) {
        accoContent[i].classList.remove('accordeon__content--reveal');
      }
    }

    if (trigger.classList.contains('accordeon__content--reveal')) {
      trigger.classList.remove('accordeon__content--reveal');
    } else {
      trigger.classList.add('accordeon__content--reveal');
    };
  });
};