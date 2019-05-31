'use strict';

/* Observations:
This is a very simple problem if we're willing to use a secondary array for the rotation.
In this case, each element simply moves to index: ((i - d) + length) % length.

Given that the bounds of the problem state that, at most, 10^5 elements exist, that is a big enough number
to seriously consider avoiding allocating additional storage.

We can handle this simply, in-place, if we're satisfied rotating one element at a time. In that situation, 
we keep a temp element to hold the left most element of the array, and then, starting from index 1, we move that element to i-1.
The downside of this approach is its pretty redundant and possibly computationally intensive.
For a 10^5 element array, having to left-rotate by 10^5 elements, would mean 10^10 individual element rotations.

We could try to leverage the latter solution to rotate more than 1 element at a time, but the issue is that the numRotation elements will
be overwritten. In the case of rotating by 1, we technically create temp storage to hold that 1 element. When we rotate by numRotation,
we need to hold numRotation elements in memory. As numRotation can be the size of the array itself,
we aren't gaining anything over simply instantiating a separate array to return.
Technically, we only have to store half the array, at worst case -- if we need to rotate by more than half the array,
we handle rotation from the other direction and then are rotating by less than half.
Worst case would still require O(numRotation/2) elements, which is simplified to O(numRotation), so it's basically the same.

With that in mind, I'm going to go with the separate storage rather than doing single rotations, as I think it's more generally applicable,
and I prefer not mutating when possible.
*/

function leftRotate(elements, rotations) {
    const length = elements.length;
    const result = new Array(length);

    let i = 0;
    for (i = 0; i < length; i++) {
        const source = (i + rotations) % length;
        const destination = i;
        result[destination] = elements[source];
    }

    return result;
}

module.exports = {
    leftRotate
};
