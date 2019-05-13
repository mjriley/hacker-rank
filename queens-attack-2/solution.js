'use strict';

/* Observations:
The major concern with this problem is the input size. the width and height of the board can each be 100,000,
which means the full board has 10^10 possible squares. If each square was stored as a bit, then we'd need 10^10 bits to 
store the board in memory. With 8 bits in a byte, 1024 bytes in a kb, and 1024 kb in a mb, we'd have:
10^10 / 8 / 1024 / 1024 = roughly 1192 megabytes -- in other words, a max size board would require over a gigabyte of memory to store.
That is not practical for this kind of question.

By the same token, it seems likely that best runtime we can achieve will be greater than or equal to O(numObstacles).
I don't see a way to compute the number of attackable squares without considering every possible obstacle.
Depending on the attack vector we were looking at, we could ignore many obstacles by sorting them somehow, but:
1) they're not sorted
2) sorting is itself O(n lg n), which is already greater than our O(n) lower bound.

I think a reasonable approach would be to iterate through all the obstacles, effecively keeping a 'min' in the 8 possible directions of attack.
For example, if we were keeping track of squares to attack north, we'd want to know the southmost square, north of the queen, which contains an obstacle.
Once we have that square, the number of attackable squares in that direction is the difference among the y axis between that min and the queen, minus 1.
If no obstacle is found along that path, then we can find the number of attackable squares by using 0 or the size of the grid.

Because an obstacle will, at most, block one vector of attack, updating our minimums can be done as a big if/else or switch block. 
Once the obstacle has been found to block a particular vector, it will not block any other vectors.

For each obstacle, then, we'd be performing, worst-case, 8 checks to determine if it was blocking any vector. O(8) is still constant, so it becomes O(1).
Since we perform this check for every obstacle, we multiply O(1) * numObstacles and wind up with O(numObstacles) runtime.

The spacial requirements are also constant -- O(8). We are maintaining the closest obstacle in the 8 directions.
*/

const ROW = 0;
const COL = 1;

const DIRECTIONS = {
    NORTH: 'n',
    SOUTH: 's',
    EAST: 'e',
    WEST: 'w',
    NORTHEAST: 'ne',
    NORTHWEST: 'nw',
    SOUTHEAST: 'se',
    SOUTHWEST: 'sw',
    NONE: 'none'
};

function queensAttack(
    gridSize,
    numObstacles,
    queenRow,
    queenColumn,
    obstacles
) {
    const attackableSquares = initializeAttackableSquares(
        queenRow,
        queenColumn,
        gridSize
    );

    const queenSquare = [queenRow, queenColumn];

    obstacles.forEach(obstacle =>
        updateObstacleDistance(obstacle, queenSquare, attackableSquares)
    );

    return Object.values(attackableSquares).reduce(
        (sum, element) => sum + element
    );
}

function updateObstacleDistance(obstacle, queenSquare, attackableSquares) {
    const [queenRow, queenColumn] = queenSquare;

    const direction = getDirection(obstacle, queenSquare);
    if (direction === DIRECTIONS.NONE) {
        return;
    }

    const yDiff = Math.abs(obstacle[ROW] - queenRow);
    const xDiff = Math.abs(obstacle[COL] - queenColumn);

    const distance = Math.max(yDiff, xDiff) - 1; // subtract 1 because an obstacle is not itself attackable
    attackableSquares[direction] = Math.min(
        attackableSquares[direction],
        distance
    );
}

// NOTE -- square should never be equal to the queen square
function getDirection(square, queenSquare) {
    const [row, column] = square;
    const [queenRow, queenColumn] = queenSquare;

    if (column === queenColumn) {
        return row > queenRow ? DIRECTIONS.NORTH : DIRECTIONS.SOUTH;
    } else if (row === queenRow) {
        return column > queenColumn ? DIRECTIONS.EAST : DIRECTIONS.WEST;
    } else {
        // detect diagonals
        const yDiff = row - queenRow;
        const xDiff = column - queenColumn;

        if (Math.abs(xDiff) !== Math.abs(yDiff)) {
            return DIRECTIONS.NONE;
        }

        if (yDiff > 0) {
            return xDiff > 0 ? DIRECTIONS.NORTHEAST : DIRECTIONS.NORTHWEST;
        } else {
            return xDiff > 0 ? DIRECTIONS.SOUTHEAST : DIRECTIONS.SOUTHWEST;
        }
    }

    return 0;
}

function initializeAttackableSquares(queenRow, queenColumn, gridSize) {
    const attackableSquares = {};
    attackableSquares[DIRECTIONS.NORTH] = gridSize - queenRow;
    attackableSquares[DIRECTIONS.SOUTH] = queenRow - 1;
    attackableSquares[DIRECTIONS.EAST] = gridSize - queenColumn;
    attackableSquares[DIRECTIONS.WEST] = queenColumn - 1;

    attackableSquares[DIRECTIONS.NORTHEAST] = Math.min(
        attackableSquares[DIRECTIONS.NORTH],
        attackableSquares[DIRECTIONS.EAST]
    );
    attackableSquares[DIRECTIONS.NORTHWEST] = Math.min(
        attackableSquares[DIRECTIONS.NORTH],
        attackableSquares[DIRECTIONS.WEST]
    );
    attackableSquares[DIRECTIONS.SOUTHEAST] = Math.min(
        attackableSquares[DIRECTIONS.SOUTH],
        attackableSquares[DIRECTIONS.EAST]
    );
    attackableSquares[DIRECTIONS.SOUTHWEST] = Math.min(
        attackableSquares[DIRECTIONS.SOUTH],
        attackableSquares[DIRECTIONS.WEST]
    );

    return attackableSquares;
}

module.exports = {
    queensAttack,
    getDirection,
    DIRECTIONS
};
