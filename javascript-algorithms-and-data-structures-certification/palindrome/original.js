function palindrome(str) {
  const alphaNumeric = str.replace(/\W/gi, "").replace(/_/g, "");
  const regular = alphaNumeric.toLowerCase();
  const reverse = regular.split('').reverse().join('');
  return regular == reverse;
}
