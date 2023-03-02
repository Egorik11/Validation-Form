function validationName(inputName) {
  const name = inputName;
  const nameRegexp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
  return validation(name, nameRegexp);
}

function validationNumberPhone(numberPhone) {
  const phone = numberPhone;
  const phoneRegexp =
    /^\+?\d{1,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/;
  return validation(phone, phoneRegexp);
}

function validationEmail(inputEmail) {
  const email = inputEmail;
  const phoneRegexp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return validation(email, phoneRegexp);
}

function validation(input, regexp) {
  let isValid = false;
  if (regexp.test(input)) {
    isValid = true;
  } else {
    return isValid;
  }
  return isValid;
}
