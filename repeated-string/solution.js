'use strict';

const TARGET_CHAR = 'a';

function repeatedString(input, numChars) {
    const length = input.length;
    const fullIterations = Math.floor(numChars / length);
    const partialIterations = numChars % length;

    const count = getTargetCount(input);

    const partialCount = getTargetCount(input, partialIterations);

    return count * fullIterations + partialCount;
}

function getTargetCount(input, numChars = -1) {
    const searchLength = numChars === -1 ? input.length : numChars;

    let count = 0;

    for (let i = 0; i < searchLength; i++) {
        if (input[i] === TARGET_CHAR) {
            count++;
        }
    }

    return count;
}

module.exports = {
    repeatedString
};
