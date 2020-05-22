'use strict';

/* Analysis: we iterate through the letters in our string, at worse-case, twice (once for building the letterCounts hashmap,
    and then again for walking through each letter in that hashmap). We could also consider it being three times if we count splitting
    the initial string into an array. That still would only be O(3n), which is just O(n).
    For space complexity, since we are allocating a hashmap of our input, our space complexity is debateably O(n).
    The hashmap can only contain lowercase characters, so, at max, it contains 26 characters. When our input is relatively small,
    the space complexity should be considered O(n). For large inputs, however, their length will dwarf 26, which will let us consider
    the space complexity is as O(1).
*/

const gameOfThrones = (input) => {
    const letterCounts = {};
    input.split('').forEach((letter) => {
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    });

    let unmatchedCharacters = 0;
    for (const letter in letterCounts) {
        if (letterCounts[letter] % 2 === 1) {
            unmatchedCharacters++;
        }
    }

    return unmatchedCharacters <= 1 ? 'YES' : 'NO';
};

module.exports = {
    gameOfThrones,
};
