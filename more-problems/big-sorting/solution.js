'use strict';

/* Observations:
Obviously, the fundamental challenge here is dealing with numbers that are this large.
Fortunately, this problem isn't asking to do any mathematical operations on these operations, merely be able to compare them.
I think we can do this lexically.
First, we can take a look at lengths. Strings with longer lengths will always be greater than strings with less lengths,
because we are guaranteed no leading zeroes.
Second, if two strings have the same lengths, a straight lexical comparison should suffice,
as lexical comparison processes left to right.
*/

function bigSorting(inputs) {
    return inputs.sort(sortBig);
}

function sortBig(left, right) {
    const lengthDiff = left.length - right.length;
    if (lengthDiff !== 0) {
        return lengthDiff;
    }

    if (left === right) {
        return 0;
    }

    return left < right ? -1 : 1;
}

module.exports = {
    sortBig,
    bigSorting,
};
