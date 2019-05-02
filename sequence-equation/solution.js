'use strict';

/* Observations:
The problem definition is hard to wrap my head around, so I want to restate it:
I need to fill each cell of an array with the index of the target array that will then be able to be indexed in that target array again to yield
the initial index requested.

So, if the requested index is 1, we first need to find the index of the source array with value 1. Then, we need to find that index within the source array again.
That is our answer.

That would be the brute force approach, but it's time complexity would be O(n^2) -- each index would require searching the entire source array.
Each search takes O(n) time, and because we do it for n indices, twice, we end up with O(2n^2), or just O(n^2).
I think we can likely do this more efficiently.

We could essentially invert the source array, creating where the indices map to where they can be found in the source array.
That can be done in O(n) time, since each of the values in the source array is unique and encompassing -- we simply iterate through each element
in the source array, and record it's index in the inverted array we're creating.

Once we have that lookup table, it becomes O(1) to find our answer for a given index: Lookup[Lookup[x]]
Since we need to do this for n indices, and we already have the overhead of creating the lookup, it becomes O(n + n), or simply O(n)
*/

function permutationEquation(array) {
    const lookup = createLookupArray(array);

    const length = array.length;
    let result = new Array(length);

    for (let i = 0; i < length; i++) {
        result[i] = lookup[lookup[i] - 1];
    }

    return result;
}

function createLookupArray(sourceArray) {
    const length = sourceArray.length;
    const lookup = new Array(length);

    for (let i = 0; i < length; i++) {
        const value = sourceArray[i] - 1;
        lookup[value] = i + 1;
    }

    return lookup;
}

module.exports = {
    permutationEquation,
    createLookupArray
};
