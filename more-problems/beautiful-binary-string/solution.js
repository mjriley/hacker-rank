'use strict';

// The challenge of this is mainly dealing with overlapping 'unbeautiful' strings in an optimal fashion.
// For example, to prevent '010' being in a string, we could change it to '110', '000', or '011' with 1 change.
// However, if we proceed from left to right, it appears optimal to always change the rightmost character,
// because that will prevent the trailing 0 from being used as a leading 0 in another pattern.
// Using this strategy, we can just iterate through the string until we find a pattern, record
// a single required change for that pattern (where the last 0 would become a 1) and then continue on.
// This should run in O(n) time with O(1) space.

const PATTERN = '010';
const PATTERN_LENGTH = PATTERN.length;
const NOT_FOUND = -1;

const beautifulBinaryString = (inputString) => {
    let numChanges = 0;
    for (let i = 0; i <= inputString.length - PATTERN_LENGTH; i++) {
        const foundIndex = inputString.indexOf(PATTERN, i);
        if (foundIndex !== NOT_FOUND) {
            numChanges++;
            i = foundIndex + PATTERN_LENGTH - 1; // -1 to account for the loop's natural increment
        }
    }

    return numChanges;
};

module.exports = {
    beautifulBinaryString,
};
