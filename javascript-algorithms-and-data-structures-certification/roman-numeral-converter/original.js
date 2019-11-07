function convertToRoman(num) {
    let remainder = num;
    let result = '';
    let digit = 0;
    let fullNum = 0;
    let sign = '';

    const clear = () => {
        digit = 0;
        fullNum = 0;
        sign = '';
    }

    if (remainder >= 1000) {
        digit = Number(String(remainder)[0]);
        fullNum = digit * 1000;

        while (digit > 0) {
            sign += 'M';
            digit--;
        }

        remainder -= fullNum;
        result += sign;
        clear();
    }

    if (remainder >= 100 && remainder < 1000) {
        digit = Number(String(remainder)[0]);
        fullNum = digit * 100;

        while (digit > 0) {
            sign += 'C';
            digit--;
        }
        sign = sign.replace("CCCCCCCCC","CM").replace("CCCCCCCC","DCCC").replace("CCCCCCC","DCC").replace("CCCCCC","DC").replace("CCCCC","D").replace("CCCC","CD")

        remainder -= fullNum;
        result += sign;

        clear();
    }

    if (remainder >= 10 && remainder < 100) {
        digit = Number(String(remainder)[0]);
        fullNum = digit * 10;

        while (digit > 0) {
            sign += 'X';
            digit--;
        }
        sign = sign.replace("XXXXXXXXX","XC").replace("XXXXXXXX","LXXX").replace("XXXXXXX","LXX").replace("XXXXXX","LX").replace("XXXXX","L").replace("XXXX","XL")

        remainder -= fullNum;
        result += sign;

        clear();
    }

    if (remainder >= 1 && remainder < 10) {
        digit = Number(String(remainder)[0]);
        fullNum = digit * 1;

        while (digit > 0) {
            sign += 'I';
            digit--;
        }
        sign = sign.replace("IIIIIIIII","IX").replace("IIIIIIII","VIII").replace("IIIIIII","VII").replace("IIIIII","VI").replace("IIIII","V").replace("IIII","IV")

        remainder -= fullNum;
        result += sign;

        clear();
    }

    return result;
}
