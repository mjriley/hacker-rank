'use strict';

/* Observations:
For a string of length n, there exist, at maximum, n distinct 'uniform' substrings.
I.e. if the string is all different characters, each of those is its own uniform substring.
If two of the same character are next to each other, that's still 2 possible substrings, one of length one, and one of length two.
We can get less total substrings if repeated, non-contiguous substrings occur within the same string.

But, given that worst-case number of substrings we should expect is n, it makes sense to compute all possible substring lengths
and store them in a lookup table. To do so, we iterate through the string a single time (O(n)), storing true/false values
in the lookup table for each uniform sum (O(1)).

Then, determine whether a given query exists in the string is a simple lookup, O(1).
Were we to compute the lookup table each time, for each query, our runtime would end up being
O(n*m), where n is the length of the string, and m is the number of queries.
However, since we can use O(n) storage space to keep the lookup table in memory,
our runtime becomes O(n+m) instead.
*/

function weightedUniformStrings(input, queries) {
    const lookupTable = createLookupTable(input);

    return queries.map((query) =>
        typeof lookupTable[query] !== 'undefined' ? 'Yes' : 'No'
    );
}

function getWeight(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

function createLookupTable(input) {
    const table = {};

    let lastChar = '';
    let currentSum = 0;
    for (let i = 0; i < input.length; i++) {
        const currentChar = input[i];
        if (currentChar !== lastChar) {
            currentSum = 0;
        }
        currentSum += getWeight(currentChar);
        lastChar = currentChar;
        table[currentSum] = true;
    }

    return table;
}

module.exports = {
    weightedUniformStrings,
};
