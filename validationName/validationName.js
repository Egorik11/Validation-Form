export function validationName(inputName) {
  const name = inputName;
  const nameRegexp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
  validation(name, nameRegexp);
}
