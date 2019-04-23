'use strict';

/* Observations:
We could brute-force this problem:
For every number, finding how many numbers are equal to or +1 of it, and find how many numbers are equal to or -1 of it.
Keeping track of the maximum found, this would give us our answer in n^2 time.
However, we can do better, as the input domain is relatively small.
If we iterate through the array, creating a map to store the counts of every number encountered,
we can then iterate through that count map to figure out what pair of key, key+1 (or key, key -1) yield the greatest sum.
This would require O(n) time to iterate through the array, and then O(distinct n) to determine the maximum -- 
so still bounded by O(n). Finding the number of elements that would be included for a given number would then be done in constant time.

Note that the count object structure should differ depending on the expected input. Going with an object is better when the numbers are sparse
over the domain. If we expect the entire domain to be represented, it would be more efficient to use an array.
*/

function pickingNumbers(numbers) {
    const counts = {};

    numbers.forEach(number => {
        counts[number] = counts[number] || 0;
        counts[number]++;
    });

    let max = 0;

    Object.entries(counts).forEach(([key, value]) => {
        let currentKey = parseInt(key, 10);
        let size = value;

        const sizeMinus = size + (counts[currentKey - 1] || 0);
        const sizePlus = size + (counts[currentKey + 1] || 0);

        max = Math.max(max, sizeMinus, sizePlus);
    });

    return max;
}

module.exports = {
    pickingNumbers
};
