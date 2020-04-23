'use strict';

function insertionSort1(length, numbers) {
    for (const line of insertionSortGen(length, numbers)) {
        console.log(line);
    }
}

function* insertionSortGen(length, numbers) {
    if (length === 1) {
        yield arrayToString(numbers);
        return;
    }

    const unsortedNum = numbers[length - 1];

    for (let i = length - 2; i >= -1; i--) {
        if (i === -1 || unsortedNum > numbers[i]) {
            numbers[i + 1] = unsortedNum;
            yield arrayToString(numbers);
            break;
        } else {
            numbers[i + 1] = numbers[i];
            yield arrayToString(numbers);
        }
    }
}

function arrayToString(array) {
    return array.join(' ');
}

module.exports = {
    insertionSortGen,
};
