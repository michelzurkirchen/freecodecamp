const palindrome = (str) => {
  let startIndex = 0;
  let endIndex = str.length - 1;
  let startCharacter = '';
  let endCharacter = '';

  while (startIndex < endIndex) {
    startCharacter = str[startIndex];
    while (!(/[a-z|A-Z|\d]/).test(startCharacter)) {
      startIndex++;
      startCharacter = str[startIndex];
    }

    endCharacter = str[endIndex];
    while (!(/[a-z|A-Z|\d]/).test(endCharacter)) {
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
