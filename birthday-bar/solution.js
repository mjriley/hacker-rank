'use strict';

/* Observations:
This is basically searching thru an array and finding all the values equal to the day specified.
We just have an extra hoop to jump through first, where we translates the squares into the sums of the i - month - 1 squares around them.
I.e for a length of 4 squares, we'll start iteration at square 4, and sum the first four squares on square 4. Square 5 will be squares 1-5, etc.
As we are progressing one square at a time, we can keep a rolling sum, to be more efficient
*/

function birthday(squares, day, month) {
    let rollingSum = 0;
    let firstSquare = 0;
    let matchesFound = 0;

    for (let i = 0; i < month - 1; i++) {
        rollingSum += squares[i];
    }

    for (let i = month - 1; i < squares.length; i++) {
        rollingSum = rollingSum - firstSquare + squares[i];
        firstSquare = squares[i - (month - 1)];

        if (rollingSum === day) {
            matchesFound++;
        }
    }

    return matchesFound;
}

module.exports = {
    birthday
};
