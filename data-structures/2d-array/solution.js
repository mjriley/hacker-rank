'use strict';

/* Observations:
we could increment through the matrix, but let's treat this functionally.
We can create an iterator to transform the matrix into a series of 9x9 matrices.
Then, we can simply feed that sequence through the reduce function to achieve our maximum.
This is essentially the same algorithm as doing the iteration by hand, 
but it should be more readable.

Finally, there is also the question of how to compute the hourglass sum.
The most efficient way would be to keep track of our current coordinates
and let the algorithm touch the entire matrix. This is less intuitive,
harder to read, and breaks data abstraction, but is likely the most efficient.
A more straight-forward approach is to create a function just to process
9x9 matrices. This means our iteration has to constantly create new matrices,
but I think it's worth the readability and simplicity.

Note also that this implementation is inefficient in javascript, because
mapping isn't natively supported by generators. If this is a concern,
we can put in extra code to support both map and reduce to support
the iteration required.
*/

const HOURGLASS_HEIGHT = 3;
const HOURGLASS_WIDTH = 3;

function hourglassSum(matrix) {
    const values = [...getMatrices(matrix)].map(hourglassValue);

    return Math.max(...values);
}

function hourglassValue(matrix) {
    const add = (total, element) => total + element;

    return matrix[0].reduce(add) + matrix[1][1] + matrix[2].reduce(add);
}

function* getMatrices(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;

    for (let j = 0; j <= height - HOURGLASS_HEIGHT; j++) {
        for (let i = 0; i <= width - HOURGLASS_WIDTH; i++) {
            yield createHourglassGrid(matrix, i, j);
        }
    }
}

function createHourglassGrid(fullMatrix, startingRow, startingColumn) {
    const grid = createMatrix(HOURGLASS_WIDTH, HOURGLASS_WIDTH);

    for (let y = 0; y < HOURGLASS_HEIGHT; y++) {
        for (let x = 0; x < HOURGLASS_WIDTH; x++) {
            grid[y][x] = fullMatrix[startingColumn + y][startingRow + x];
        }
    }

    return grid;
}

function createMatrix(width, height) {
    const matrix = new Array(height);
    for (let i = 0; i < width; i++) {
        matrix[i] = new Array(width);
    }

    return matrix;
}

module.exports = {
    hourglassSum,
    hourglassValue,
    getMatrices
};
