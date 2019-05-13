'use strict';

/* Observations:
An 'equalized' array is one in which all elements are the same.
Because there is no way to modify elements other than delete them,
it means that the final 'equalized' array will have a length equal to the most populous
element in the original array. Identifying that is pretty easy:
- Create an array to keep track of how many times each element has been found in the input array.
- Since each element in the array is between 1 and 100, it means the count array needs to hold 100 elements.
- Iterate through the input array, updating element counts -- O(n)
- Then, find the maximum count of any one element -- O(1)
- Return the number of elements in the input array minus the count of the most populous element -- O(1).

Thus, the problem is solved in O(n) + O(1) + O(1) time, or O(n) time.
*/

function equalizeArray(numbers) {
    const counts = getEntryCounts(numbers);

    const maxCount = counts.reduce((total, count) => Math.max(total, count));

    return numbers.length - maxCount;
}

function getEntryCounts(numbers) {
    const counts = new Array(100);
    counts.fill(0);

    numbers.forEach(entry => {
        counts[entry - 1]++;
    });

    return counts;
}

module.exports = {
    equalizeArray
};
