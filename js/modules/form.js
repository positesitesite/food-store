const Myform = document.querySelector('.form'); // Доступ к тегу форм
let form = new FormData;
Myform.addEventListener('submit', e => { // Запрещаем перезагрузку сраницы при нажатии на кнопку
  e.preventDefault();
  if (validateForm(Myform)) {
    const data = {
      name: Myform.elements.name.value,
      phone: Myform.elements.phone.value,
      comment: 'comment',
      street: Myform.elements.street.value,
      house: Myform.elements.house.value,
      apartment: Myform.elements.apartment.value,
      floor: Myform.elements.floor.value,
      to: 'b1and@mail.ru'
    };
    for (const key in data) {
      form.append(key, data[key]);
    }

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = processReqChange;
  function processReqChange() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log(JSON.parse(xhr.response));
      } else {
        console.error('error');
      }
    }
  }
  xhr.open('POST', "https://webdev-api.loftschool.com/sendmail");
  xhr.send(form);

  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.street)) {
    valid = false;
  }
  if (!validateField(form.elements.house)) {
    valid = false;
  }
  if (!validateField(form.elements.building)) {
    valid = false;
  }
  if (!validateField(form.elements.apartment)) {
    valid = false;
  }
  if (!validateField(form.elements.floor)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}

