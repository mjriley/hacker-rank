'use strict';

/* When the problem statement says a string CAN be as small as a single letter,
and then asks to only return whether or not a shared substring EXISTS, all we need to do
is determine if a single character occurs in both strings. A longer substring than 1 letter
might exist, but by definition, all the letters in that substring would also exist in both strings.

So, we can run through one string, marking the presence of each letter.
Then, we run through the next string -- if we ever find a letter that was present
in the first string, we return true, otherwise return false.

If left has length L and right has length R, the runtime is then O(L + R). 
Given that strings can have 10^5 characters, the space complexity is just O(26) (for each letter), so it is constant -- O(1)
More efficient solutions can choose the small of those strings, or even stop
once all 26 letters have been evaluated, but I don't think that complexity is needed here.
*/

const twoStrings = (left, right) => {
    const leftLetters = {};
    left.split('').forEach((letter) => (leftLetters[letter] = true));
    return right.split('').some((letter) => leftLetters[letter] === true)
        ? 'YES'
        : 'NO';
};

module.exports = {
    twoStrings,
};
