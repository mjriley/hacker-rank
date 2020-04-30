'use strict';

function countingSort(input) {
    return countingSortImpl(input);
}

function countingSortImpl(input, max = 100) {
    const counts = generateCounts(input, max);
    return createdSortedAraryFromCounts(counts);
}

function generateCounts(input, max) {
    const counts = new Array(max);
    counts.fill(0);

    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        counts[value]++;
    }

    return counts;
}

function createdSortedAraryFromCounts(counts) {
    const result = [];
    for (let value = 0; value < counts.length; value++) {
        for (let repetitions = counts[value]; repetitions > 0; repetitions--) {
            result.push(value);
        }
    }

    return result;
}

module.exports = {
    countingSortImpl,
};
