'use strict';

function countSort(input) {
    console.log(countingSortImpl(input));
}

const MAX_VALUE = 100;

function countingSortImpl(input) {
    const values = createEmptyArrays(MAX_VALUE);

    replaceHalfWithCharacter(input);
    for (let i = 0; i < input.length; i++) {
        const [value, payload] = input[i];
        values[value].push(payload);
    }

    return flatten(values).join(' ');
}

function flatten(input) {
    return input.reduce((acc, current) => acc.concat(current), []);
}

function createEmptyArrays(length) {
    const result = new Array(length);
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array();
    }

    return result;
}

const STRING_INDEX = 1;
const REPLACEMENT_CHAR = '-';

function replaceHalfWithCharacter(input) {
    const half = input.length / 2;
    for (let i = 0; i < half; i++) {
        input[i][STRING_INDEX] = REPLACEMENT_CHAR;
    }
}

module.exports = {
    countingSortImpl,
};
