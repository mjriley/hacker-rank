'use strict';

/* Observations:
The high-level algorithm is straight-forward:
- iterate through the array, for each element:
 - increment its value by d, check if that value is in the array.
   - if no, a triplet doesn't exist for this start.
   - if yes, increment that one by d, and check if that value is in the array.
     - if no, a triplet doesn't exist.
     - if yes, we've found a triplet; increment our found triplets by 1
- return the total count of triplets found

The interesting bit of the problem is how to approach searching for the additional elements of the triplet.
If we search one-by-one, we can stop when the value we find is greater than the one searched for.
As d is capped at 20, we'd perform, at worst, 40 iterations to check for the 2nd and 3rd element of the triplet.
This isn't nothing, but it would still technically be considered constant time.

However, the maximum of any value in the array is 2 * 10^4. If we're willing to allocate an array 
with that many entries, then we can iterate through the input values, recording the presence of every integer.
With that in place, checking for the existence of an element is constant and fast -- just index into the lookup array.

That said, it is likely overkill. With a worst case of d = 20, brute-forcing the lookup shouldn't drastically affect the runtime.
*/

const NOT_FOUND = -1;

function beautifulTriplets(distance, array) {
    let numTriplets = 0;

    array.forEach((value, index) => {
        const secondValue = value + distance;
        const secondIndex = sortedExists(array, secondValue, index + 1);
        if (secondIndex !== NOT_FOUND) {
            const thirdValue = secondValue + distance;
            if (
                sortedExists(array, thirdValue, secondIndex + 1) !== NOT_FOUND
            ) {
                numTriplets++;
            }
        }
    });

    return numTriplets;
}

function sortedExists(array, value, startingIndex) {
    const length = array.length;

    for (let i = startingIndex; i < length; i++) {
        if (array[i] === value) {
            return i;
        } else if (array[i] > value) {
            break;
        }
    }

    return NOT_FOUND;
}

module.exports = {
    beautifulTriplets,
    sortedExists
};
