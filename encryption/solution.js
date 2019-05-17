'use strict';

/* Observations:
This just seems like a multi-step problem. It requires:
- Removing spaces from a string -- O(n)
- Finding the floor and ceiling of the square root of a number. Because the length of the string is bounded by the floor of its square root
on the left, and the ceiling on the right, and the product of row * col must be greater than or equal to the sqrt, it means
our columns will always be the ceiling of the sqrt. I'm not sure if the floor of a sqrt * the ceiling of a sqrt is always >= the sqrt,
so we'll check whether that condition will hold. If so, then we'll use the floor as the row count. Otherwise, it will also be the ceiling.
- Filling that matrix with the string - O(n)
- Mapping each matrix column to a string - O(n)
- Joining all those strings

The final runtime should be bounded by O(n)
*/

function encryption(raw) {
    const trimmed = removeSpaces(raw);
    const matrix = createCharacterGrid(trimmed);

    const columnWords = matrix[0].map((_, i) => getColString(matrix, i));

    return columnWords.join(' ');
}

function removeSpaces(input) {
    return input.replace(/\s/g, '');
}

function getRowAndColumnCount(length) {
    const sqrt = Math.sqrt(length);

    const ceil = Math.ceil(sqrt);
    const floor = Math.floor(sqrt);

    const cols = Math.ceil(sqrt);
    const rows = floor * ceil >= length ? floor : ceil;

    return {
        cols,
        rows
    };
}

function createCharacterGrid(input) {
    const length = input.length;
    const { rows, cols } = getRowAndColumnCount(length);
    const matrix = createMatrix(rows, cols);

    for (let i = 0; i < length; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;
        matrix[row][col] = input[i];
    }

    return matrix;
}

function createMatrix(rows, cols) {
    const matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols);
    }

    return matrix;
}

function getColString(matrix, colIndex) {
    return matrix.map(row => row[colIndex]).join('');
}

module.exports = {
    encryption,
    getRowAndColumnCount,
    removeSpaces,
    createCharacterGrid,
    getColString
};
