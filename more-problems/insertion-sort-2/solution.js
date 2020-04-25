'use strict';

function insertionSort2(length, array) {
    for (const line of insertionSort2Gen(length, array)) {
        console.log(line);
    }
}

function* insertionSort2Gen(length, array) {
    for (let i = 2; i <= array.length; i++) {
        sortLastElement(i, array);
        yield arrayToString(array);
    }
}

function sortLastElement(length, array) {
    // the last element will be at array[length - 1]
    const unsortedElement = array[length - 1];

    for (let i = length - 2; i >= 0; i--) {
        if (unsortedElement > array[i]) {
            array[i + 1] = unsortedElement;
            return;
        } else {
            array[i + 1] = array[i];
        }
    }

    array[0] = unsortedElement;
}

function arrayToString(array) {
    return array.join(' ');
}

module.exports = {
    insertionSort2Gen,
    sortLastElement,
};
