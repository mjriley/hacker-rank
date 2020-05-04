'use strict';

// Strategy:
// this seems like a problem perfectly suited to a stack. We'll push on characters until the character to be
// pushed on matches the top of the stack. At that point, we'll pop the top, decline to push on the current character,
// and set the character to search for to be the new top.
// At every iteration, our stack always contains the 'super reduced' string, up to the current character.
// Thus, once we reach the end of the string, we have our final result, and can return it.
// Since we can process this in a single iteration of the string, our runtime is O(n).
// Our storage complexity is also O(n), since the worst case is that there are no duplicates, and thus
// we end up duplicating our entire string in the stack variable.

const EMPTY_MESSAGE = 'Empty String';

function superReducedString(s) {
    const stack = [];
    let top = null;

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (currentChar === top) {
            stack.pop();
            top = stack.length === 0 ? null : stack[stack.length - 1];
        } else {
            stack.push(currentChar);
            top = currentChar;
        }
    }

    if (stack.length === 0) {
        return EMPTY_MESSAGE;
    } else {
        return stack.join('');
    }
}

module.exports = {
    superReducedString,
};
