function rot13(str) {
  let arr = str.split('');

  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  for (let i in arr) {
    const letter = arr[i];

    if (letter.match(/\w/)) {
      const position = alphabet.indexOf(letter) + 1;
      let newPosition = position + 13;
    if (newPosition > 26) {
      newPosition-= 26;
      }
    arr[i] = alphabet[newPosition - 1];
    }
  }
  const result = arr.join('');
  return result;
}
