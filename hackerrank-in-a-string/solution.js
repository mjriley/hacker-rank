'use strict';

/* Observations:
The straight-forward way seems like the optimal way. We keep track of an index that tracks how many
characters of 'hackerrank' have been matched, and then we iterate through the input string,
increasing the hackerrank index whenever a character is matched.
If we ever reach a point where the index is the length of hackerrank, we return true
Otherwise, we return false
Because we only do a single iteration through the string, the algorithm runs in O(n) time,
with O(1) space required.
*/

const TARGET_STRING = 'hackerrank';

function hackerrankInString(input) {
    return hackerrankInStringImpl(input) ? 'YES' : 'NO';
}

function hackerrankInStringImpl(input) {
    let searchIndex = 0;
    const searchLength = TARGET_STRING.length;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === TARGET_STRING[searchIndex]) {
            searchIndex++;
            if (searchIndex === searchLength) {
                return true;
            }
        }
    }

    return false;
}

module.exports = {
    hackerrankInStringImpl,
};
