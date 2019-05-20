'use strict';

function kaprekarNumbers(start, end) {
    const foundNumbers = kaprekarNumbersImpl(start, end);
    const result = foundNumbers.join(' ');

    if (result.length === 0) {
        console.log('INVALID RANGE');
    } else {
        console.log(result);
    }
}

function kaprekarNumbersImpl(start, end) {
    const foundNumbers = [];

    for (let i = start; i <= end; i++) {
        if (isKaprekar(i)) {
            foundNumbers.push(i);
        }
    }

    return foundNumbers;
}

function isKaprekar(number) {
    const square = number * number;
    const originalDigits = number.toString().length;

    const squareString = square.toString();

    const numDigits = squareString.length;

    let leftString = squareString.substring(0, numDigits - originalDigits);
    if (!leftString) {
        // handle the edge case for 1, where there is no left digit
        leftString = '0';
    }

    const rightString = squareString.substring(
        numDigits - originalDigits,
        numDigits
    );

    const left = parseInt(leftString, 10);
    const right = parseInt(rightString, 10);

    if (left + right === number) {
        return true;
    }

    return false;
}

module.exports = {
    isKaprekar,
    kaprekarNumbersImpl
};
