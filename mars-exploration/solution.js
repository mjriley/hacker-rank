'use strict';

/* 
Observations:
Since the string is only meant to contain 'SOS' repeated, we know what the letter at each index should be:
- mod 0: 'S'
- mod 1: 'O'
- mod 2: 'S'
Iterate through the string, recording each character that doesn't match the expected one
So, the runtime will be linear, O(n)
*/

const EXPECTED_CHARS = 'SOS';

function marsExploration(input) {
    let changedCharacters = 0;
    for (let i = 0; i < input.length; i++) {
        const modIndex = i % 3;
        if (input[i] !== EXPECTED_CHARS[modIndex]) {
            changedCharacters++;
        }
    }

    return changedCharacters;
}

module.exports = {
    marsExploration,
};
