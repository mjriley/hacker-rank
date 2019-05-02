'use strict';

/* Observations:
The straightforward approach seems to suggest that we should actually rotate the array num rotation times.
However, that's inefficient and not required, because the result asked for is not the actual rotated array, but just specific indices.
If an array is rotated n times, where n is the size of the array, then it doesn't rotate at all. Thus, we are really asked to compute 
numRotations % array.length rotations.
Each element will then be shifted that many times, so if we reverse this for every requested index, we can find our answer.
For example, given the numbers from the problem: [3, 4, 5] rotated 2 times and looking at indices [1, 2]:
index 1 was shifted 2 rotations to the right, so if we look 2 rotations to the left, we'll get our answer. 
1 shifted once to the left is 0, and once again (wrapping around) is 2. So our first result is at index 2 of the initial array, which is 5.
index 2 was also shifted 2 rotations to the right, so 2 rotations to the left means it was at index 0 in our initial array, or 3.
So, our answer is [5, 3].

We can express the left rotation formula as: (requestedIndex - numRotations + array.length) % array.length
That formula can be executed in O(1) time for any element, so our answer is done in O(m) time, where m is the number of requested indices
*/

function circularArrayRotation(array, numRotations, requestedIndices) {
    return requestedIndices.map(index =>
        getRotatedElement(index, array, numRotations)
    );
}

function getRotatedElement(index, array, numLeftRotations) {
    const length = array.length;
    const normalizedRotations = numLeftRotations % length;
    let rotatedIndex = index - normalizedRotations;
    if (rotatedIndex < 0) {
        rotatedIndex += length;
    }
    return array[rotatedIndex];
}

module.exports = {
    circularArrayRotation,
    getRotatedElement
};
