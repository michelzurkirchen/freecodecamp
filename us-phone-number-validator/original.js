function telephoneCheck(str) {
  const regex = RegExp("^(1\\s?)?([0-9]{3}|\\([0-9]{3}\\))(\\s|-)?[0-9]{3}(\\s|-)?[0-9]{4}$");
  return regex.test(str);
}
