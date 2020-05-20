'use strict';

const NOT_FOUND = -1;

const palindromeIndex = (letters) => {
    let left = 0;
    let right = letters.length - 1;

    while (left < right) {
        if (letters[left] !== letters[right]) {
            if (isPalindrome(letters, left + 1, right + 1)) {
                return left;
            } else if (isPalindrome(letters, left, right)) {
                return right;
            } else {
                return NOT_FOUND;
            }
        }
        left++;
        right--;
    }

    return NOT_FOUND;
};

const isPalindrome = (letters, startIndex, endIndex) => {
    startIndex = startIndex || 0;
    endIndex = endIndex || letters.length;

    let left = startIndex;
    let right = endIndex - 1;
    while (left < right) {
        if (letters[left] !== letters[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

module.exports = {
    palindromeIndex,
};
