'use strict';

/* Unless I'm missing something, splitting the string into two contiguous subsegments
is unnecessary. For two strings to be anagrams of each other, they need to have the same length.
So, any odd-length string is automatically not possible. For even length strings, because the strings
have to be contiguous, we have no choice but to split them at the middle,
which means the problem could have just provided us with two strings.
*/

const NOT_POSSIBLE = -1;

const anagram = (input) => {
    if (input.length % 2 === 1) {
        return NOT_POSSIBLE;
    }

    const left = input.substring(0, input.length / 2);
    const right = input.substring(input.length / 2);

    return changesRequired(left, right);
};

const changesRequired = (left, right) => {
    let totalChanges = 0;

    const charCounts = {};
    left.split('').forEach((letter) => {
        charCounts[letter] = charCounts[letter] || 0;
        charCounts[letter]++;
    });

    right.split('').forEach((letter) => {
        if (charCounts[letter]) {
            charCounts[letter]--;
        } else {
            // could be 0 or undefined, but either means a substitution needs to be made
            totalChanges++;
        }
    });

    return totalChanges;
};

module.exports = {
    anagram,
};
