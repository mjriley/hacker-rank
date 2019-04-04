'use strict';
/*
Observations:
The grid is, at worst, 15x15, which means, to me, that brute-forcing the problem by finding 
the largest plus from any given square is a reasonable approach. However, finding the next largest,
non-overlapping plus for every square would then be an order of magnitude worse for the search space, 
which is not ideal.
Ideally, I would like to find the largest plus, label those squares as bad, and then find the next largest plus, but the issue is that
it is possible to have the largest plus its next largest non-overlapping plus be smaller than if we had found a smaller initial plus
(i.e. we might get a 5 plus with a 1 plus = 9 rather than using 2 3-pluses = 25)

One situation to keep in mind is the scenario where two 'largest' pluses exist, say 2 p5s, but they'll overlap each other only when p5s.
A p5 is trivially also a p3, and that p3 may not overlap


We will need functions:
- getLargestPlusAtSquare()
- createNonOverlappedGrid(x, y, plusSize, grid)
- doesPlusOverlap(x, y, plusSize, nonOverlappedGrid)
*/

/* New approach:
- Find the largest plus for each square. Create a hashmap, and store a list for each size of plus
- Iterate through the largest plus size list
- For each of these pluses, check any other plus in the list doesn't overlap. If so, this becomes our pair of pluses
- If not, check each of these pluses against the list of pluses with n-1 size. Remember to include the pluses with n size in that list too
- That becomes the largest product for a plus with N size.
- Now repeat the process for pluses with N-1 size. If we ever find a pair with a greater product, then return it, because that is the largest we'll find
- Otherwise, when we start checking against plues with a certain size (equal to the second plus in the initial search), return our original value.

function twoPluses(grid) {
    return 0;
}
*/

function twoPluses() {}

const BAD = 'B';
const GOOD = 'G';

function getLargestPlus(x, y, grid) {
    // expand out-ward from the center, checking each neighbor until we find a bad neighbor
    let currentSize = 1;
    let radius = 1;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (true) {
        for (let i = 0; i < directions.length; i++) {
            const direction = directions[i];
            const [newX, newY] = [
                x + direction[0] * radius,
                y + direction[1] * radius
            ];

            // actually don't need to check the edges of the grid, as accessing those squares
            // will return undefined
            if (grid[newX][newY] !== GOOD) {
                return currentSize;
            }
        }
        currentSize += 2;
        radius++;
    }

    return 1;
}

function getArea(plusSize) {
    return plusSize * 2 - 1;
}

// plus format is:
// { size, x, y}
function doesOverlap(plusLeft, plusRight) {
    if (plusLeft.x === plusRight.x && plusLeft.y === plusRight.y) {
        return true;
    }

    const leftEdgeSize = Math.floor(plusLeft.size / 2);
    const rightEdgeSize = Math.floor(plusRight.size / 2);

    const verticalDistanceBetweenCenters = Math.abs(plusLeft.y - plusRight.y);
    const horizontalDistanceBetweenCenters = Math.abs(plusLeft.x - plusRight.x);

    if (plusLeft.y === plusRight.y) {
        return horizontalDistanceBetweenCenters < leftEdgeSize + rightEdgeSize;
    }

    if (plusLeft.x === plusRight.x) {
        return verticalDistanceBetweenCenters < leftEdgeSize + rightEdgeSize;
    }

    // for a collison to exist, there needs to be a horizonal overlap.
    // Only when a horizontal overlap has been found, we can then check for a vertical overlap
    // from the opposing plus
    if (leftEdgeSize > horizontalDistanceBetweenCenters) {
        return rightEdgeSize > verticalDistanceBetweenCenters;
    }

    if (rightEdgeSize > horizontalDistanceBetweenCenters) {
        return leftEdgeSize > verticalDistanceBetweenCenters;
    }

    return false;
}

module.exports = {
    twoPluses,
    getLargestPlus,
    getArea,
    doesOverlap
};
