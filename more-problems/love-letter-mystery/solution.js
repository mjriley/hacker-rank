'use strict';

const theLoveLetterMystery = (input) => {
    let totalChanges = 0;

    const length = input.length;
    const half = (length - 1) / 2;
    for (let i = 0; i < half; i++) {
        const left = input[i];
        const right = input[length - 1 - i];

        totalChanges += Math.abs(left.charCodeAt(0) - right.charCodeAt(0));
    }

    return totalChanges;
};

module.exports = {
    theLoveLetterMystery,
};
