'use strict';

const alternatingCharacters = (input) => {
    let numDeletions = 0;

    let lastChar = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] === lastChar) {
            numDeletions++;
        }
        lastChar = input[i];
    }

    return numDeletions;
};

module.exports = { alternatingCharacters };
