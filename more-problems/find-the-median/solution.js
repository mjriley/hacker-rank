'use strict';

function findMedian(input) {
    input.sort((a, b) => a - b);
    const middle = Math.floor(input.length / 2);

    return input[middle];
}

module.exports = {
    findMedian,
};
