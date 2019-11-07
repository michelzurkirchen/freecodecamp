const isAlphanumeric = (character) => { return (/[a-z|A-Z|\d]/).test(character) }

const palindrome = (str) => {
  let startIndex = 0;
  let endIndex = str.length - 1;
  let startCharacter = '';
  let endCharacter = '';

  while (startIndex < endIndex) {
    startCharacter = str[startIndex];
    while (!isAlphanumeric(startCharacter)) {
      startIndex++;
      startCharacter = str[startIndex];
    }

    endCharacter = str[endIndex];
    while (!isAlphanumeric(endCharacter)) {
      endIndex--;
      endCharacter = str[endIndex];
    }

    if (startCharacter.toLowerCase() != endCharacter.toLowerCase()) {
      return false;
    }

    startIndex++;
    endIndex--;
  }

  return true;
  }
