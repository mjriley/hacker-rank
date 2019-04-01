// Observations
// When the difference is 0, the problem is trivial -- simply return the permutation values, in order
// Otherwise, the driving factor for this task is handling the value that equals the difference.
// Because 0 is not a legal index, the only way for Value - Index = Abs(difference) is if Index is 2 * Value
// Thus, when the difference asked for is greater than half the number of values, the task is impossible.
// Otherwise, if the value is greater than the difference, the index is:
// index = value - difference
// And for values less than the difference, the index is:
// index = value + difference
// It is still possible, in these circumstances, for the problem to be impossible.
// I could not figure out an O(1) way to determine this,
// so every time we generate an index for a value, we check if a value at that index already exists.
// If so, a conflict exists and this problem isn't possible.

const IMPOSSIBLE = [-1];

function absolutePermutation(numbers, difference) {
    if (difference > numbers / 2) {
        return IMPOSSIBLE;
    }

    const result = new Array(numbers);

    if (difference === 0) {
        // create an ordered array
        for (let i = 1; i <= numbers; i++) {
            result[i - 1] = i;
        }
    } else {
        // handle the left side first -- all those values that are less than or equal to the difference
        // those values are forced to be placed at index (value + difference)
        let index = 0;
        for (let i = 1; i <= difference; i++) {
            index = i + difference;

            // no need to check for collisions yet, as they aren't possible
            result[index - 1] = i;
        }

        for (let i = numbers; i > difference; i--) {
            // iterate downwards now
            // first, we'll hit values that can only have one index, because the other is illegal
            // when the multi-index values are hit, any collision will allow us to return an error
            if (i + difference > numbers) {
                // only 1 index is possible
                index = i - difference;

                if (typeof result[index - 1] !== 'undefined') {
                    return IMPOSSIBLE;
                }

                result[index - 1] = i;
            } else {
                // 2 indices are possible, check each
                index = i + difference;

                if (typeof result[index - 1] === 'undefined') {
                    result[index - 1] = i;
                } else {
                    index = i - difference;
                    if (typeof result[index - 1] !== 'undefined') {
                        return IMPOSSIBLE;
                    }

                    result[index - 1] = i;
                }
            }
        }
    }

    return result;
}

module.exports = {
    absolutePermutation
};
