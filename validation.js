function validationName(inputName) {
  const name = inputName;
  const nameRegexp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
  validation(name, nameRegexp);
}

function validationNumberPhone(numberPhone) {
  const phone = numberPhone;
  const phoneRegexp =
    /^\+?\d{1,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/;
  validation(phone, phoneRegexp);
}

function validationEmail(inputEmail) {
  const email = inputEmail;
  const phoneRegexp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  validation(email, phoneRegexp);
}

function validation(input, regexp) {
  let isValid = false;
  if (regexp.test(input)) {
    isValid = true;
  } else {
    throw new Error('Вы ввели некоректные данные');
  }
  return isValid;
}
