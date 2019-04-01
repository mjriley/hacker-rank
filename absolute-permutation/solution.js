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
        for (let i = 1; i <= numbers; i++) {
            let index = 0;

            if (i > difference) {
                index = i - difference - 1;
            } else {
                index = difference + i - 1;
            }

            if (typeof result[index] !== 'undefined') {
                return IMPOSSIBLE;
            }

            result[index] = i;
        }
    }

    return result;
}

module.exports = {
    absolutePermutation
};
