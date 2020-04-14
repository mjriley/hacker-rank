'use strict';

/* Given a grid containing open and blocked squares, and a starting and destination position,
determine the fewest number of moves needed to move from the start to the destination.
A 'move' in this case is any number of squares along one cardinal direction, until an edge
or blocked square is hit */

/*
Thoughts: I'm trying to determine if there is a heuristic about this.
The shortest path between two points is always a straight line, so we should test that first.
If that path is blocked, the challenge becomes figuring out what is actually shortest.
I suppose we could brute force the solution by working backwards from the destination
and assigning each square the shortest number of moves required to reach that destination.
You could then just keep expanding out to neighbors until you reached the source square.
Since direction doesn't really matter here, what we're really searching for is just a path between
two points, we could also start the search from the source, and then end when the square
we are analyzing is the destination.

This solution would involve, at worst, visiting every square in the grid. If the grid is n by n, then
our run time is O(n^2), which seems optimal. To do it faster would seem to imply some kind of wisdom
that I don't think we have. We could try this as a depth first search, for example -- immediately try to
make a straight line (or two lines at a 90 degree angle) to reach the destination, and then backtrack
once an obstacle was hit, but I think this shares the same worst-case time complexity.

One thing to take into consideration is that we can't just stop when we reach the destination square.
There might be multiple ways to reach the destination, so we actually need to visit all squares,
and just record the minimum number of moves needed to reach that square. That then means we might
visit squares multiple times, which affects our runtime.

I guess to solve that issue, if we do a breadth-first search from the source, we can know immediately
whether we're on the shortest path or not. For example, if we reach a square that hasn't been hit yet,
we can update it with the current move count. If that path is used to reach the destination,
then I believe it is impossible for a future search, from an alternate point, to end up using fewer moves.

For example, we start our search from the source, doing breadth-first-search in all 4 cardinal directions.
We label all squares along the search path with the number of moves needed to hit them (1 in this case).
If we hit valid squares, we add these nodes to our search list, and up the move count for that search.
If we hit the edge or a blocked square, we stop the search for this source.
When we reach the destination, in this system, we can immediately return the number of moves,
because all future searches will involve at least the same number of moves.
*/
const OPEN = '.';
const BLOCKED = 'X';

const DIRECTIONS = {
    NORTH: 'north',
    SOUTH: 'south',
    EAST: 'east',
    WEST: 'west',
};

const OFFSETS = {
    [DIRECTIONS.NORTH]: { x: 0, y: -1 },
    [DIRECTIONS.EAST]: { x: 1, y: 0 },
    [DIRECTIONS.SOUTH]: { x: 0, y: 1 },
    [DIRECTIONS.WEST]: { x: -1, y: 0 },
};

function create2DArray(width, height) {
    const result = new Array(height);
    for (let i = 0; i < height; i++) {
        result[i] = new Array(width);
    }

    return result;
}

function minimumMoves(grid, startX, startY, goalX, goalY) {
    // create a copy of the grid that contains the number of moves needed to reach each square
    const gridHeight = grid.length;
    const gridWidth = grid[0].length;

    const movesNeeded = create2DArray(gridWidth, gridHeight);

    let point = { x: startX, y: startY };
    movesNeeded[point.y][point.x] = 0; // no moves needed to reach the start
    // construct a breadth-first search list, starting from our initial point
    const searchList = [point];

    const directions = [
        DIRECTIONS.NORTH,
        DIRECTIONS.SOUTH,
        DIRECTIONS.EAST,
        DIRECTIONS.WEST,
    ];

    // while there are still points in our breadth-first-search list...
    while ((point = searchList.shift())) {
        const searchDepth = movesNeeded[point.y][point.x];
        for (let i = 0; i < directions.length; i++) {
            const direction = directions[i];
            const reachableSquares = getReachableSquares(
                point,
                direction,
                grid,
                movesNeeded
            );

            for (let j = 0; j < reachableSquares.length; j++) {
                const squareToExamine = reachableSquares[j];
                movesNeeded[squareToExamine.y][squareToExamine.x] =
                    searchDepth + 1;
                if (
                    squareToExamine.x === goalX &&
                    squareToExamine.y === goalY
                ) {
                    return movesNeeded[squareToExamine.y][squareToExamine.x];
                }

                searchList.push(squareToExamine);
            }
        }
    }

    throw 'no path found!';
}

/* follow a given direction until we run into an edge or the square has already been visited,
  then return the squares found */
function getReachableSquares(start, direction, grid, visitedSquares) {
    const { x: xDiff, y: yDiff } = OFFSETS[direction];

    const reachableSquares = [];
    let nextPoint = { x: start.x + xDiff, y: start.y + yDiff };
    for (
        ;
        isOpenSquare(nextPoint, grid);
        nextPoint = { x: nextPoint.x + xDiff, y: nextPoint.y + yDiff }
    ) {
        // to prevent extra computation, we could keep track of 4 visited grids -- one for each direction
        // and stop checking squares when the direction was already search.
        // The tradeoff is 4x the storage, but it could save processsing time.

        if (!isVisited(nextPoint, visitedSquares)) {
            // do not search from squares we've already found the shortest path to
            reachableSquares.push(nextPoint);
        }
    }

    return reachableSquares;
}

function isVisited(square, visitedSquares) {
    return typeof visitedSquares[square.y][square.x] !== 'undefined';
}

function isOpenSquare(point, grid) {
    const HEIGHT = grid.length;
    const WIDTH = grid[0].length;

    if (point.x < 0 || point.x >= WIDTH) {
        return false;
    }

    if (point.y < 0 || point.y >= HEIGHT) {
        return false;
    }

    return grid[point.y][point.x] !== BLOCKED;
}

module.exports = {
    getReachableSquares,
    minimumMoves,
};

console.log('test');
