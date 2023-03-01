export function validation(input, regexp) {
  let isValid = false;
  if (regexp.test(input)) {
    isValid = true;
  } else {
    throw new Error('Вы ввели некоректные данные');
  }
  return isValid;
}
