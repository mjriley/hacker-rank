'use strict';

/* Observations:
This problem seems to rely on sorting.
A word whose letters are in reverse order is the 'greatest' version of those characters.
In that case, return 'no answer'. The challenge is how to determine what the next word in the sequence should be.
We can think of the ordering of the characters within a word like 'significant bits' -- the leftmost characters are most significant,
the rightmost one are the least. What I mean by that is that increasing a character in a more significant position will create a larger number
than switching one in a less significant position -- i.e. for 12345, 13245 is going to be greater than 12354.
I think we can use this logic, plus noticing that reversed strings are 'max' strings, to iterate over a string right to left.
Once we find a character that is less than the previous one, we can just swap those two, and that should be our answer.
For example, starting from 12345, we start by looking at 5. We see that the character next to it, 4, is less than 5, so we can swap the two.
The produced number, 12354, is the appropriate next number in the sequence. However, if we were to continue with this, the next number, 3 is less than 5,
so it should produce 12534, when the correct answer is 12435.

Let's adjust the formula:
- Iterate from the right until we find a number that is less than the previous number.
- Find the minimum of the numbers we've analyzed, excluding the current character.
- The next number in the sequence is achieved by using the untouched left portion, replacing the current character with the min character found
 in the previous step, and then appending the sorted sequence of the remaining characters
*/

function biggerIsGreater(word) {
    const length = word.length;
    const sortedChars = [];
    sortedChars[0] = word[length - 1]; // start with the rightmost character

    // find the first character that is already sorted
    for (let i = length - 2; i >= 0; i--) {
        const currentChar = word[i];
        const prevChar = word[i + 1];
        if (currentChar < prevChar) {
            // find the first character in the sorted string that is greater than the current character
            // replace that character with this one
            const targetIndex = sortedChars.findIndex(
                value => currentChar < value
            );
            const targetChar = sortedChars[targetIndex];
            // we've found our target character -- assemble the final string
            sortedChars[targetIndex] = currentChar;
            return word.substring(0, i) + targetChar + sortedChars.join('');
        } else {
            sortedChars.push(currentChar);
        }
    }

    return 'no answer';
}

module.exports = {
    biggerIsGreater
};
