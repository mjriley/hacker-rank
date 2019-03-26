'use strict';

const tens = {
    1: 'ten',
    2: 'twenty'
};

const eleven_to_nineteen = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
};

const digits = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};

function numberToWord(number) {
    if (number >= 10) {
        if (number >= 11 && number <= 19) {
            return eleven_to_nineteen[number];
        }

        const tensDigit = Math.floor(number / 10);
        const singleDigit = number % 10;

        let result = tens[tensDigit];
        if (singleDigit !== 0) {
            result += ' ' + digits[singleDigit];
        }

        return result;
    }

    return digits[number];
}

function timeInWords(hours, minutes) {
    if (minutes === 0) {
        return numberToWord(hours) + " o' clock";
    }

    if (minutes <= 30) {
        return `${getMinutesString(minutes)} past ${numberToWord(hours)}`;
    }

    return `${getMinutesString(60 - minutes)} to ${numberToWord(hours + 1)}`;
}

function getMinutesString(minutes) {
    if (minutes === 15) {
        return 'quarter';
    }

    if (minutes === 30) {
        return 'half';
    }

    if (minutes === 1) {
        return numberToWord(minutes) + ' minute';
    }

    return numberToWord(minutes) + ' minutes';
}

module.exports = {
    numberToWord,
    timeInWords
};
