'use strict';

/* Observations:
This is another problem where 'substring' is misleading. Because a substring can be a single character,
and because we pay no cost for appending substrings, there is no reason to even think about
the complexity is finding maximum length substrings -- all substrings that we care about are single letter substrings.
This task boils down to paying a cost to insert new characters, and then appending 'substrings' to the end
whenever we encounter a character that we've already used.

The runtime will be O(n), since we iterate through the string a single time.
The storage complexity will be O(26) or O(1), since we need to create a set of the lowercase letters
*/

const NEW_CHAR_COST = 1;

const stringConstruction = (input) => {
    let totalCost = 0;
    const usedCharacters = {};

    input.split('').forEach((letter) => {
        if (!usedCharacters[letter]) {
            totalCost += NEW_CHAR_COST;
        }

        usedCharacters[letter] = true;
    });

    return totalCost;
};

module.exports = {
    stringConstruction,
};
