'use strict';

/* Observations:
The key observation for this task is realizing that the sum of any 2 numbers, x and y, is divisible evenly by k
if, and only if, (x mod k) + (y mod k) is evenly divisible by k. Using this equation, we can simplify our list
into remainders after division by k, keeping track of how many we have for each remainder. For example, if k was 5,
both 1 and 6 would map to '1', but we'd keep track that we had 2 results at that spot.
Once the list has been simplified into remainders, the next task if figuring out which remainders are safe to include
in the list so that a combination of any 2 won't be divisible by k. As was stated earlier, the combination of 2 numbers is
only divisible by k when the sum of the remainders is divisible by k. So, for any remainder 'slot' there exists exactly
one other remainder slot that would cause even divisions by k: (k - remainder) % (k). Including numbers from both slots
would cause conflict, so we can only choose one slot or the other. Since we are looking for the largest subset, we will
always choose the slot with more members. There are two pseudo-exceptions to this:
1) the '0' slot
2) the k/2 slot, if k is even
In both of these cases, two numbers from the same slot will produce a number evenly divisible by k, and so when this occurs,
we can only use one of the numbers in these slots.

For time complexity, we're doing two main operations:
1) mapping the given numbers to their remainders: O(n) time, where n is the length of our numbers
2) determining the 'best' slot for each pair of numbers summing to k: O(k/2)
So, our final time complexity would be O(n + k)
*/

function nonDivisibleSubset(divisor, numbers) {
    const remainderCounts = getRemainderCounts(divisor, numbers);

    let maxLength = 0;

    for (let i = 0; i <= divisor / 2; i++) {
        if (i === 0) {
            if (remainderCounts[i] > 0) {
                maxLength += 1;
            }
        } else if (i === divisor / 2) {
            if (remainderCounts[i] > 0) {
                maxLength += 1;
            }
        } else {
            // find the 'complement', and then take whichever is larger
            const complement = divisor - i;
            maxLength += Math.max(
                remainderCounts[i],
                remainderCounts[complement]
            );
        }
    }

    return maxLength;
}

function getRemainderCounts(divisor, numbers) {
    const numNumbers = numbers.length;
    const remainderCounts = new Array(divisor).fill(0);

    for (let i = 0; i < numNumbers; i++) {
        const remainder = numbers[i] % divisor;
        remainderCounts[remainder]++;
    }

    return remainderCounts;
}

module.exports = {
    nonDivisibleSubset
};
