'use strict';

const funnyString = (input) => {
    return funnyStringImpl(input) ? 'Funny' : 'Not Funny';
};

const funnyStringImpl = (input) => {
    const reversed = input.split('').reverse();
    return isEqualArrays(
        getDifferences(input.split('')),
        getDifferences(reversed)
    );
};

const getDifferences = (letters) => {
    const numbers = letters.map((letter) => letter.charCodeAt(0));
    const result = numbers
        .slice(1) // remove the first element
        .map((number, index) => Math.abs(number - numbers[index])); // get the difference between the current element and the previous

    return result;
};

const isEqualArrays = (left, right) => {
    if (left.length !== right.length) {
        return false;
    }

    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            return false;
        }
    }

    return true;
};

module.exports = {
    funnyString,
    funnyStringImpl,
};
