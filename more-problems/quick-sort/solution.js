'use strict';

function quickSort(input) {
    const pivot = input[0];

    const left = [];
    const right = [];

    for (let i = 1; i < input.length; i++) {
        if (input[i] < pivot) {
            left.push(input[i]);
        } else {
            // guaranteed unique elements, so this means
            // all other elements are greater
            right.push(input[i]);
        }
    }

    const result = left.concat([pivot], right);
    return result;
}

module.exports = {
    quickSort,
};
