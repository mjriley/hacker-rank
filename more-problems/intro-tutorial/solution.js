'use strict';

/* The relevant distinction between this problem and normal search problems, is that 
this input is already sorted. If the input was unsorted, then the best we could do to find
an element would be O(n), since every element would need to be sorted.
However, with sorted input, we can essentially 'triangulate' to find where in the array
the value is -- constantly divide the remaining array into 2 halves, and determine which half
the value needs to be in, then repeat with that half, until we are down to a single element.
This approach will find our answer in O(ln n) time */

function introTutorial(value, inputs) {
    let startOfRange = 0;
    let endOfRange = inputs.length;
    while (startOfRange < endOfRange) {
        // find the middle
        const middle =
            startOfRange + Math.floor((endOfRange - startOfRange) / 2);
        if (inputs[middle] === value) {
            return middle;
        }

        if (value < inputs[middle]) {
            endOfRange = middle;
        } else {
            startOfRange = middle + 1;
        }
    }

    throw 'Value not found!';
}

module.exports = {
    introTutorial,
};
