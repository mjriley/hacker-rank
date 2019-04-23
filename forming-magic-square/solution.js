'use strict';

/* Observations:
It appears that all 3x3 magic squares share the same magic number -- 15.
If this is the case, then the problem simplifies a bit -- for each row, column, and diagonal, we'll need to find the cheapest way 
to modify it to sum to 15, if it doesn't already do so.

If a given row, column, or diagonal does not sum to 15, it will require X cost, where X is the difference between the current sum of that row/column/diagonal
and 15. This cost is unavoidable.

However, costs can be rolled into each other. If a row will need to be modified at cost X, and a column also would need to be modified, at cost Y,
the minimum cost will try to roll as of Y into X or X into Y as possible.

It also seems that are some invariants that need to enforced to create a perfect square.
One of those is the magic number of 15. The other seems to be that the center square needs to be 5. That's because any number in the center
needs 4 different ways to create 15. After removing the center number, we'll only have 8 numbers to generate those 4 different ways, 
and each must satisfy X + Y + center = Z. Since center and Z cannot change, X + Y must be the same for all 4 combinations, and that requires using all numbers.
With only 8 numbers, that requires using 5 as the center, because then we have 4 different ways to create 10.

Another requirement is that not every number can be used a corner. Each corner square needs to have 3 ways to create 15 -- a vertical, horizontal, and vertical path.
The side squares need only 2 -- it's own row/column and a path through the center. Looking at the numbers:
1: 1 + 5 + 9, 1 + 6 + 8 -- only 2 ways. So neither 1 nor 9 can be used a corner square
2: 2 + 5 + 8, 2 + 4 + 9, 2 + 6 + 7 -- 3 ways
3: 3 + 5 + 7, 3 + 4 + 8 -- only 2 ways
4: 4 + 5 + 6, 4 + 2 + 9, 4 + 3 + 8 -- 3 ways

So, there are only 4 viable corner numbers, and once one is chosen, 
there are only 2 numbers for the corner on its same row (because the complement is used on the diagonal).
And once that 2nd corner is locked in, it locks in all 4 corner squares (once again due to the complement), 
which in turn locks in every other number, because each row/column will now need a specific number to sum to 15.
In other words, 4 possibilities for the first corner, 2 possibilities for the next corner, and then 1 choice for everything else:
4 * 2 * 1 = 8 total magic squares.

With that limited of a search space, we can brute force this problem by taking each magic square and determining the cost needed to
transform the input square into the target one. Keep track of the minimum and return it.
*/

//prettier-ignore
const magicSquares = [
    [
        [2, 9, 4],
        [7, 5, 3],
        [6, 1, 8]
    ],
    [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ],
    [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
    ],
    [
        [4, 3, 8],
        [9, 5, 1],
        [2, 7, 6]
    ],
    [
        [6, 7, 2],
        [1, 5, 9],
        [8, 3, 4]
    ],
    [
        [6, 1, 8],
        [7, 5, 3],
        [2, 9, 4]
    ],
    [
        [8, 3, 4],
        [1, 5, 9],
        [6, 7, 2]
    ],
    [
        [8, 1, 6],
        [3, 5, 7],
        [4, 9, 2]
    ]
];

function formingMagicSquare(inputSquare) {
    const costs = magicSquares.map(target => getCost(inputSquare, target));

    return Math.min(...costs);
}

function getCost(inputSquare, targetSquare) {
    const height = inputSquare.length;
    const width = inputSquare[0].length;

    let total = 0;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            total += Math.abs(inputSquare[y][x] - targetSquare[y][x]);
        }
    }

    return total;
}

// Below this is all unnecessary. This was included to verify that the magic squares I was testing with
// were all valid magic squares, and that I didn't create a typo, as that would have been very difficult to debug
function isMagicSquare(candidate) {
    if (!hasUniqueKeys(candidate)) {
        return false;
    }

    const magicNumber = candidate[0].reduce((sum, current) => sum + current);

    // verify rows
    for (let y = 1; y < 3; y++) {
        if (sumRow(candidate, y) !== magicNumber) {
            return false;
        }
    }

    // verify columns
    for (let x = 0; x < 3; x++) {
        if (sumColumn(candidate, x) !== magicNumber) {
            return false;
        }
    }

    // verify diagonals
    const diagDownSum = candidate[0][0] + candidate[1][1] + candidate[2][2];
    const diagUpSum = candidate[2][0] + candidate[1][1] + candidate[0][2];

    if (diagDownSum !== magicNumber || diagUpSum !== magicNumber) {
        return false;
    }

    return true;
}

function sumRow(square, rowNum) {
    return square[rowNum].reduce((sum, current) => sum + current);
}

function sumColumn(square, colNum) {
    return square[0][colNum] + square[1][colNum] + square[2][colNum];
}

function hasUniqueKeys(square) {
    const keys = {};

    for (let y = 0; y < square.length; y++) {
        for (let x = 0; x < square[y].length; x++) {
            const value = square[y][x];
            if (value in keys) {
                return false;
            }

            keys[value] = true;
        }
    }

    return true;
}

module.exports = {
    formingMagicSquare,
    getCost,
    isMagicSquare,
    magicSquares
};
