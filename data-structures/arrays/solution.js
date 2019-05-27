'use strict';

/* Observations:
Reversing an array is pretty basic. I was tempted to reverse in-place, iterating through half the elements and swapping
each with its opposite half, but in lieu of requirements, it seemed better to generate a distinct array.
Using unshift may also be inefficient (as opposed to allocating the entire array upfront and then placing elements in reverse
order, but I think its more straightforward this way.
*/

function reverseArray(array) {
    const length = array.length;
    let result = [];

    for (let i = 0; i < length; i++) {
        result.unshift(array[i]);
    }

    return result;
}

module.exports = {
    reverseArray
};
