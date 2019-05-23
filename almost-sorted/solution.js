'use strict';

/* Observations:
There are three scenarios the array can be in:
1) It is sorted, but contains 2 elements that are out of order
2) It is sorted, but contains a segment that is reversed
3) It cannot be sorted

I tried to avoid iterating through the array multiple times, but it seemed easiest to just
treat each scenario separately. We can identify:
- array is sorted - O(n)
- array has a swap - O(n)
- array has a reversed segment - O(n)

So the result is therefore O(3n), which is O(n)

NOTE: There is substantial room for code cleanup in this solution. It took longer than
a typical problem, so I'm leaving it as is, as the solution works.
*/

function almostSorted(array) {
    const result = almostSortedImpl(array);
    console.log(result.join('\n'));
}

function almostSortedImpl(array) {
    if (isSorted(array)) {
        return ['yes'];
    }

    const reversed = identifyReversedSegment(array);
    if (reversed.found) {
        // handle the edge case where the reversed segment is just 2 elements
        if (reversed.end - reversed.start === 1) {
            return ['yes', `swap ${reversed.start} ${reversed.end}`];
        }

        return ['yes', `reverse ${reversed.start} ${reversed.end}`];
    }

    const swapped = identifySwappedElements(array);
    if (swapped.found) {
        return ['yes', `swap ${swapped.left} ${swapped.right}`];
    }

    return ['no'];
}

function isSorted(array) {
    const length = array.length;

    for (let i = 1; i < length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }

    return true;
}

function identifySwappedElements(array) {
    const length = array.length;

    // iterate through the elemnents until one is found out of order
    const result = {
        left: -1,
        right: -1,
        found: false
    };

    // the left element is going to be too big, the right element is going to be too small

    let i = 1;
    while (i < length && array[i] > array[i - 1]) {
        i++;
    }

    if (i >= length) {
        return result;
    }

    result.left = i - 1;

    i++;

    while (i < length && array[i] > array[i - 1]) {
        i++;
    }

    if (i >= length) {
        return result;
    }

    result.right = i;

    //  now ensure the remainder of the elements are sorted
    i += 2;
    for (; i < length; i++) {
        if (array[i] < array[i - 1]) {
            return result;
        }
    }

    // finally, ensure the two swaps would lead to a fully sorted array
    if (result.left > 0 && array[result.right] < array[result.left - 1]) {
        return result;
    }

    if (array[result.right] > array[result.left + 1]) {
        return result;
    }

    if (array[result.left] < array[result.right - 1]) {
        return result;
    }

    if (
        result.right < length - 1 &&
        array[result.left] > array[result.right + 1]
    ) {
        return result;
    }

    result.found = true;
    result.left++;
    result.right++;
    return result;
}

function identifyReversedSegment(array) {
    const result = {
        start: -1,
        end: -1,
        found: false
    };

    const length = array.length;

    // iterate through the elements of the initial sorted sequence
    let i = 1;
    while (i < length && array[i] > array[i - 1]) {
        i++;
    }

    // we've run into a potential reversed segment. Start it at the previous index
    result.start = i - 1;

    while (i < length && array[i] < array[i - 1]) {
        i++;
    }

    result.end = i - 1;

    // we're finished with our reversed segment, now make sure whatever remains is sorted
    i++;
    for (; i < length; i++) {
        if (array[i] < array[i - 1]) {
            result.found = false;
            return result;
        }
    }

    // now make sure our reversed segment fits within the 2 sorted segments
    if (result.start > 0 && array[result.end] <= array[result.start - 1]) {
        result.found = false;
        return result;
    }

    if (
        result.end < length - 1 &&
        array[result.start] >= array[result.end + 1]
    ) {
        result.found = false;
        return result;
    }

    result.found = true;
    result.start++;
    result.end++;
    return result;
}

module.exports = {
    almostSortedImpl,
    isSorted,
    identifyReversedSegment,
    identifySwappedElements
};
