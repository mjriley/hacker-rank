'use strict';

function countingSort(input) {
    return countingSortImpl(input);
}

function countingSortImpl(input, maxValue = 99) {
    const counts = new Array(maxValue + 1);
    counts.fill(0);

    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        counts[value]++;
    }

    return counts;
}

module.exports = {
    countingSortImpl,
};
