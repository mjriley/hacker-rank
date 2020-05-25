'use strict';

const isValid = (input) => (isValidImpl(input) ? 'YES' : 'NO');

const isValidImpl = (input) => {
    const letterCounts = generateCounts(input);
    const countCounts = generateOccurences(letterCounts);

    const keys = Object.keys(countCounts).map((key) => parseInt(key, '10'));

    if (keys.length === 1) {
        // all the same character
        return true;
    } else if (keys.length > 2) {
        return false;
    }

    if (
        (keys[0] === 1 && countCounts[keys[0]] === 1) ||
        (keys[1] === 1 && countCounts[keys[1]] === 1)
    ) {
        // we can remove that single occurence and be left with equal occurences
        return true;
    }

    if (Math.abs(keys[0] - keys[1]) > 1) {
        return false;
    }

    if (keys[0] > keys[1]) {
        return countCounts[keys[0]] === 1;
    } else {
        return countCounts[keys[1]] === 1;
    }
};

const generateCounts = (input) => {
    const letterCounts = {};

    input.split('').forEach((letter) => {
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    });

    return letterCounts;
};

const generateOccurences = (letterCounts) => {
    const countCounts = {};

    for (const letter in letterCounts) {
        const occurences = letterCounts[letter];
        countCounts[occurences] = countCounts[occurences] || 0;
        countCounts[occurences]++;
    }

    return countCounts;
};

module.exports = {
    isValid,
};
