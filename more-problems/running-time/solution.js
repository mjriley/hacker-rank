'use strict';

function runningTime(input) {
    let numShifts = 0;

    for (let i = 1; i < input.length; i++) {
        const unsorted = input[i];
        let j = i - 1;
        for (; j >= 0 && input[j] > unsorted; j--) {
            input[j + 1] = input[j];
            numShifts++;
        }

        input[j + 1] = unsorted;
    }

    return numShifts;
}

module.exports = {
    runningTime,
};
