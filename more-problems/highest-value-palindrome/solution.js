'use strict';

/*
Notes:
With infinite changes, we would just change every digit to a '9' and be done.
We can look at the input string in pairs, starting from outside-in, working towards the middle.
For example, with the number 01230:
0 pairs with 0
1 pairs with 3
2 pairs with itself

These pairs allow us to determine if a palindrome is possible -- if the number of unmatched pairs
is greater than the number of changes allowed, then the exercise is not possible.
If the number of unmatched pairs is equal to the number of changes made,
then for each pair, we need to make the smaller number equivalent to the higher number, and we have our result.
If the number of unmatched pairs is greater than the number of changes made,
then we are free to maximize the pairs where we change both values to 9.
Since numbers with larger leading digits are always greater than smaller leading digits,
this means procesing pairs from left-to-right.

Thus a basic idea for what we're doing:
Split the string into unmatched pairs. If the number of unmatched pairs is greater than
the number of changes, return -1.
While there are pairs, and the number of changes to be made exceeds the number of pairs:
- take the left-most pair and change both digits to 9.
If neither of those digits were originally 9, reduces changes by 2, otherwise reduce by 1

If any pairs remain, and the number of changes equals the number of pairs, change every min digit to the max digit

Return the string.

Runtime:
- We run through half the array to determine mismatched pairs -- O(n/2) = O(n)
- We run through half the array to change digits -- O(n/2) = O(n)
So the runtime is O(n).

Space complexity:
This implementation is using O(n) extra space, to use an array of characters and transform the characters into numbers.
With mutable strings, this could be done using O(1) storage space.
*/

const NOT_POSSIBLE = -1;

const highestValuePalindrome = (input, length, maxChanges) => {
    const digits = input.split('').map((letter) => parseInt(letter, 10));

    let remainingMismatches = getMismatchedPairCount(digits);
    if (remainingMismatches > maxChanges) {
        return NOT_POSSIBLE;
    }

    let remainingChanges = maxChanges;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const left = digits[i];
        const right = digits[length - 1 - i];

        if (left !== right) {
            remainingMismatches--;
        }

        // attempt to maximize both digits
        let changesRequired = 0;
        if (left !== 9) changesRequired++;
        if (right !== 9) changesRequired++;
        if (remainingChanges - changesRequired >= remainingMismatches) {
            digits[i] = 9;
            digits[length - 1 - i] = 9;
            remainingChanges -= changesRequired;
        } else if (left !== right) {
            const max = Math.max(left, right);
            digits[i] = max;
            digits[length - 1 - i] = max;
            remainingChanges--;
        }
    }

    if (remainingChanges > 0 && length % 2 == 1) {
        // maximize a middle digit
        const middle = (length - 1) / 2;
        digits[middle] = 9;
    }

    return digits.join('');
};

const getMismatchedPairCount = (input) => {
    let numFound = 0;

    const length = input.length;
    const half = Math.floor(length / 2);

    for (let i = 0; i < half; i++) {
        const left = input[i];
        const right = input[length - 1 - i];
        if (left !== right) {
            numFound++;
        }
    }

    return numFound;
};

module.exports = {
    highestValuePalindrome,
};
