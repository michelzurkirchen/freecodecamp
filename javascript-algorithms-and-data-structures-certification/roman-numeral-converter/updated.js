function convertToRoman(num) {
    let numRemainder = num;
    let romanNumeral = '';
    let digit = 0;
    let currentNumber = 0;
    let currentNumeral = '';

    function clear() {
        digit = 0;
        currentNumber = 0;
        currentNumeral = '';
    }

    if (numRemainder >= 1000) {
        digit = Number(String(numRemainder)[0]);
        currentNumber = digit * 1000;

        while (digit > 0) {
            currentNumeral += 'M';
            digit--;
        }

        numRemainder -= currentNumber;
        romanNumeral += currentNumeral;
        clear();
    }

    if (numRemainder >= 100 && numRemainder < 1000) {
        digit = Number(String(numRemainder)[0]);
        currentNumber = digit * 100;

        while (digit > 0) {
            currentNumeral += 'C';
            digit--;
        }
        currentNumeral = currentNumeral.replace("CCCCCCCCC","CM").replace("CCCCCCCC","DCCC").replace("CCCCCCC","DCC").replace("CCCCCC","DC").replace("CCCCC","D").replace("CCCC","CD")

        numRemainder -= currentNumber;
        romanNumeral += currentNumeral;

        clear();
    }

    if (numRemainder >= 10 && numRemainder < 100) {
        digit = Number(String(numRemainder)[0]);
        currentNumber = digit * 10;

        while (digit > 0) {
            currentNumeral += 'X';
            digit--;
        }
        currentNumeral = currentNumeral.replace("XXXXXXXXX","XC").replace("XXXXXXXX","LXXX").replace("XXXXXXX","LXX").replace("XXXXXX","LX").replace("XXXXX","L").replace("XXXX","XL")

        numRemainder -= currentNumber;
        romanNumeral += currentNumeral;

        clear();
    }

    if (numRemainder >= 1 && numRemainder < 10) {
        digit = Number(String(numRemainder)[0]);
        currentNumber = digit * 1;

        while (digit > 0) {
            currentNumeral += 'I';
            digit--;
        }
        currentNumeral = currentNumeral.replace("IIIIIIIII","IX").replace("IIIIIIII","VIII").replace("IIIIIII","VII").replace("IIIIII","VI").replace("IIIII","V").replace("IIII","IV")

        numRemainder -= currentNumber;
        romanNumeral += currentNumeral;

        clear();
    }

    return romanNumeral;
}
