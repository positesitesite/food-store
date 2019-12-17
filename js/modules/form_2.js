const myForm = document.querySelector('.form');
const send = document.querySelector('#submit-btn');

send.addEventListener('click', (e) => {
  e.preventDefault();

  if (validateForm(myForm)) {
    let data = new FormData;
    data = {
      name: myForm.elements.name.value,
      phone: myForm.elements.phone.value,
      street: myForm.elements.street.value,
      house: myForm.elements.house.value,
      building: myForm.elements.building.value,
      apartment: myForm.elements.apartment.value,
      floor: myForm.elements.floor.value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail'); //https://webdev-api.loftschool.com/sendmail
    xhr.onload = () => {
      console.log(xhr.response)
    };
    xhr.send(data); 
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

