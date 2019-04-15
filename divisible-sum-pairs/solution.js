'use strict';

/* Observations:
I can't think of any great way to do this other than brute-forcing it -- at which point it is essentially
a O(n^2) problem.
For each index of n (up until n-1), determine how many numbers plus the original index are divisible by k.
*/

function divisibleSumPairs(length, divisor, array) {
    let total = 0;
    for (let i = 0; i < length - 1; i++) {
        total += getDivisibleAddends(i, array, divisor);
    }

    return total;
}

function getDivisibleAddends(startingIndex, array, divisor) {
    const num = array[startingIndex];
    let total = 0;

    for (let i = startingIndex + 1; i < array.length; i++) {
        if ((array[i] + num) % divisor === 0) {
            total++;
        }
    }

    return total;
}

module.exports = {
    divisibleSumPairs
};
