export function validationName(inputName) {
  const name = inputName;
  const nameRegexp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
  validation(name, nameRegexp);
}

export function validationNumberPhone(numberPhone) {
  const phone = numberPhone;
  const phoneRegexp = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
  validation(phone, phoneRegexp);
}

export function validationEmail(inputEmail) {
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
