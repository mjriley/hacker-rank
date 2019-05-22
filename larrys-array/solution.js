'use strict';

/* Observations:
The problem statement doesn't mention that the indices can wrap, so I assume that the only way index 0 can be sorted
is if it rotates with indices 1 and 2, for example. With that in mind, this seems like a problem that should be suitable for reduction:
find a way to rotate 1 to index 0. Now return the answer for the tail of those elements.

I have to make sure that sorting the first element won't invalidate a potential solution by performing bad rotates in the process.
I don't think rotating elements can invalidate a solution, but I'm not sure how to verify this.

From the example provided, it seems like we can progress from the start of the array inward, sorting the starting element each time.
Once we get to last remaining 3 element, we check if they can be rotated in order. If they can't, then the answer isn't possible.

Again, this might be correct, but I'm not sure how to prove it.
One approach might be to look at what we're trying to prove.
If sorting the first element to index 0 could invalidate the process, then we'd have, for some sorted
A B C D
that
A B D C
can be sorted.

We know that B D C cannot be sorted, just by doing the 2 rotations available to us.
BDC -- not sorted
CBD -- not sorted
DCB -- not sorted

So, can moving A into that last block of 3, and then back into a sorted position, ever change the ordering of those elements?
It doesn't seem like we can ever do that. Again, I still can't formally prove it, but I think, based on the examples, that this is correct.
Assuming that is correct, I know how to solve it in a relatively straight-forward manner, so I'd like to start with that and make sure the
implementation works.

Functions needed:
1) RotateElementIntoPosition
2) CanBeSorted -- determines whether a triplet can be sorted in order

So, we use RotateElementIntoPosition on an ever-shrinking array, until we're left with 3 elements. Then, we return the result of CanBeSorted

Implementing RotateElementIntoPosition requires first finding the specified element, forming a triplet that includes that element, rotating
that triplet to have the desired element in the left-most position, and then continually re-forming a triplet including the desired element,
rotating it into the left-most position until it reaches the specified index
 */

const YES = 'YES';
const NO = 'NO';

function larrysArray(array) {
    const length = array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    if (max !== length || min !== 1) {
        return NO;
    }

    for (let i = 1; i <= length - 3; i++) {
        rotateIntoPosition(array, i);
    }

    return canBeSorted(array, length - 3) ? YES : NO;
}

function rotateIntoPosition(array, value) {
    const desiredIndex = value - 1;

    let currentIndex = array.indexOf(value);

    while (array[desiredIndex] !== value) {
        let rotationIndex = Math.max(currentIndex - 2, desiredIndex);
        rotateToLeft(array, rotationIndex, value);
        currentIndex = rotationIndex;
    }
}

function rotateToLeft(array, startingIndex, value) {
    while (array[startingIndex] !== value) {
        rotateTriplet(array, startingIndex);
    }
}

function rotateTriplet(array, startingIndex) {
    let stored = array[startingIndex];
    array[startingIndex] = array[startingIndex + 1];
    array[startingIndex + 1] = array[startingIndex + 2];
    array[startingIndex + 2] = stored;
}

function canBeSorted(array, startingIndex = 0) {
    const triplet = new Array(3);
    triplet[0] = array[startingIndex];
    triplet[1] = array[startingIndex + 1];
    triplet[2] = array[startingIndex + 2];

    const sortedTriplet = triplet.slice(0).sort();

    // test all 3 rotations
    if (
        triplet[0] === sortedTriplet[0] &&
        triplet[1] === sortedTriplet[1] &&
        triplet[2] === sortedTriplet[2]
    ) {
        return true;
    }

    if (
        triplet[1] === sortedTriplet[0] &&
        triplet[2] === sortedTriplet[1] &&
        triplet[0] === sortedTriplet[2]
    ) {
        return true;
    }

    if (
        triplet[2] === sortedTriplet[0] &&
        triplet[0] === sortedTriplet[1] &&
        triplet[1] === sortedTriplet[2]
    ) {
        return true;
    }

    return false;
}

module.exports = {
    larrysArray,
    YES,
    NO,
    canBeSorted,
    rotateToLeft,
    rotateIntoPosition
};
