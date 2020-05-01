'use strict';

const closestNumbers = (input) => {
    input.sort((left, right) => left - right);

    let difference = input[1] - input[0];
    let result = [input[0], input[1]];

    for (let i = 2; i < input.length; i++) {
        const newDiff = input[i] - input[i - 1];
        if (newDiff < difference) {
            difference = newDiff;
            result = [input[i - 1], input[i]];
        } else if (newDiff === difference) {
            result.push(input[i - 1]);
            result.push(input[i]);
        }
    }

    return result;
};

module.exports = {
    closestNumbers,
};
