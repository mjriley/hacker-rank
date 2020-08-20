'use strict';

/* Observations:
The basic idea is to keep two indices, one for the left side and one for the right side, and a corresponding sum for each.
While more than 1 element remains, we will process the element that corresponds to the lower sum.
When there is only 1 element remaining (i.e. the difference between the left and right index is 1), we will compare the sums.
If the sums are equal, then that remaining element's index is our answer.
If they are not equal, then no answer was possible.

One possible concern is overflow. Because an array can have 10^5 elements, and because each element can be 2 * 10^4, it is important to make
sure that our sums will not overflow number bounds. Thus, the largest sum possible is 2 * 10^4 * 10^5, which is 2 * 10^9. Javascript can handle
integers up to 2^53 - 1, or 9007199254740991. This is will beyond 10^9, so we're safe.

Because we process every element in the array only once, our runtime is O(n), where n is the size of the array.
We keep track of only two sums and two indices, so our storage complexity is O(1).
*/

const balancedSums = (input) => (balancedSumsImpl(input) ? 'YES' : 'NO');

const balancedSumsImpl = (input) => {
    if (input.length === 0) {
        return false;
    }

    let leftIndex = 0;
    let rightIndex = input.length - 1;

    let leftSum = 0;
    let rightSum = 0;

    while (rightIndex > leftIndex) {
        if (leftSum + input[leftIndex] < rightSum + input[rightIndex]) {
            leftSum += input[leftIndex];
            leftIndex++;
        } else {
            rightSum += input[rightIndex];
            rightIndex--;
        }
    }

    return leftSum === rightSum;
};

module.exports = {
    balancedSums,
};
