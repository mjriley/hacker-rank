'use strict';

// observations:
// the length of the string, at best, is 2 times the second-most frequently occuring character
// However, neither of the most frequently occuring characters are necessarily part of the alternating string.
// We could try to brute force the problem, by doing a double-iteration through the string.
// The first iteration would choose the the first alternating character,
// and the second iteration would handle the second alternating character.
// that inner loop would then proceed, ignoring other characters, until it couldn't alternate
// between the two characters chosen.
// i.e. for abcabxb', first loop would choose 'a',
// second loop would choose 'b'
// we'd know the next letter to look for would be 'a', skip over 'c', and find it
// then we'd look for 'b', find it, and look for 'a' again. We'd skip over 'x', and then, upon
// encountering another 'b', end our search with a length of 4.
// keeping track of the maximum length recorded this way would yield a solution in n^2 time.

function alternate(input) {
    let maxLength = 0;

    const occurenceMap = getOccurenceMap(input);

    let first = '';
    let second = '';
    let nextChar = '';

    let currentLength = 0;

    for (let i = 0; i < input.length - 1; i++) {
        first = input[i];

        if (occurenceMap[first] !== i) {
            // keep scanning, we processed this character already
            continue;
        }

        for (let j = i + 1; j < input.length; j++) {
            second = input[j];

            if (second === first) {
                // done processing this character
                break;
            }

            if (occurenceMap[second] !== j) {
                // skip this second choice, because it isn't the first occurence of this character
                continue;
            }

            currentLength = 2;

            nextChar = first;
            for (let k = j + 1; k < input.length; k++) {
                if (input[k] !== first && input[k] !== second) {
                    // ignore
                    continue;
                }

                if (input[k] !== nextChar) {
                    // this wouldn't be a valid sequence,
                    // and no further sequences will be valid, so break
                    currentLength = 0;
                    break;
                } else {
                    // extend the length of this sequence, and then set the next character to look for
                    currentLength++;
                    nextChar = currentLength % 2 == 0 ? first : second;
                }
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

function getOccurenceMap(input) {
    const result = {};

    for (let i = input.length - 1; i >= 0; i--) {
        const char = input[i];
        result[char] = i;
    }

    return result;
}

module.exports = {
    alternate,
    getOccurenceMap,
};
