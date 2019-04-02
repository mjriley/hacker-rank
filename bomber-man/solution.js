'use explicit';

/* Observations:
I think I should handle this in segments.
Bombs detonate after 3 seconds, but on step 3, no bombs detonate. On step 4, bombs detonate. So the question is,
is it possible for bombs to last indefinitely, because they would detonate on step 3?
The answer is no, because we alternate between bomb planting and detonating.
If bomb planting is done on even turns, and detonating is done on odd turns...and we only detonate bombs 3 turns later, which is odd
it means every detonation step will cover bombs that need detonating.

I'll need a function that can process the grid to detonate all bombs
Even though the input format represents bombs in a binary fashion (. or O), I think it makes more sense to store bombs
as their age -- . for missing, 0 for just planted, 2 for having lasted 2 turns, etc. That way we can iterate through the grid each turn,
incrementing the time on each bomb. When we increment to 3, we know the bomb should detonate, so we can handle the detonation then.
This does mean we'll need a function to convert the input format to a numeric representation,
and a second function to convert the numeric representation back to the initial format.

One hitch when detonating bombs, is that all the detonations occur simultaneously. That means if two detonating bombs are adjacent to each other,
the first bomb we process for detonation cannot remove the 2nd bomb, or we'll miss processing the neighbors for that bomb.
The easiest way to handle that is likely to only remove bombs that are not ready to detonate. We can then iterate through each cell
and process each detonation in order, without missing detonations that should have occurred.

This does mean that we need to iterate over the entire grid every second. Given that the number of seconds can be as large as 10^9, this might not be practical.
Therefore, we'll need to have a function to figure out the given value for a cell at any given second
At t = 0 or 1, the a cell's value is equal to it's initial state
At t = 2, all cells are bombs
At t = 3, all cells that were initially bombs are now empty, as well as all neighbors of those squares. Everything else is a bomb
At t =4, all cells are once again bombs
*/

/* The patterns appear to be cyclical. Whenever a cell that started with a bomb contains a new bomb, that bombs will detonate itself, rather than 
be detonated by its neighbors.
This is because, when the bomb is originally detonated, it clears its neighbors, so both the bomb square and its neighbors (which are the only squares which can
    detonate the original square) are cleared of bombs. In the next step, where we fill all empty squares with bombs, the original square and its neighbors
    will now be filled with bombs. Because there are no chain reactions, and because the only squares that could detonate the original square now have bombs
    that detonate on their own at the same time as the original square, we can be sure that the original square will detonate by itself.

Squares that are 2+ squares from the closest original bomb, will not start with a bomb, but will detonate by themselves when bombs are placed into them.
This is because squares that are further from a bomb cannot detonate this square, since they will have bombs placed in them at the same time as this square.
Squares that are only 1 square from a bomb could detonate a square 2 squares away, but that means they will be detonated by the original bomb squares early on,
so bombs in those squares will have detonation timers in sync with the original bombs. That means their 2+ square neighbors will ensure that they never detonate on their own.

The exception are squares that neighbor a cell with a starting bomb, but have no non-bomb neighbors themselves. After the first bomb detonation, they will be filled with
bombs and function exactly like the original bomb squares.
*/

const BOMB = 'O';
const EMPTY = '.';

function bomberMan(numSeconds, grid) {
    if (numSeconds === 1) {
        // do nothing, so we just return the original grid
        return grid;
    } else if (numSeconds % 2 === 0) {
        return createFilledGrid(grid);
    } else {
        const bombCycle = ((numSeconds - 3) / 2) % 2;
        if (bombCycle === 0) {
            return detonateBombs(grid);
        } else {
            return handleOddDetonation(grid);
        }
    }

    return grid;
}

function createFilledGrid(grid) {
    const height = grid.length;
    const width = grid[0].length;

    const result = [];

    const line = BOMB.repeat(width);

    for (let y = 0; y < height; y++) {
        result.push(line);
    }

    return result;
}

function handleOddDetonation(grid) {
    const height = grid.length;
    const width = grid[0].length;

    const result = [];

    for (let y = 0; y < height; y++) {
        let row = [];
        for (let x = 0; x < width; x++) {
            if (grid[y][x] === BOMB) {
                row[x] = BOMB;
            } else if (isSurroundedByBombs(x, y, grid)) {
                row[x] = BOMB;
            } else {
                row[x] = EMPTY;
            }
        }
        result.push(row.join(''));
    }

    return result;
}

function detonateBombs(grid) {
    const result = [];

    const height = grid.length;
    const width = grid[0].length;

    for (let y = 0; y < height; y++) {
        let row = [];
        for (let x = 0; x < width; x++) {
            let char = EMPTY;
            if (grid[y][x] === BOMB) {
                row[x] = EMPTY;
            } else if (neighborHasBomb(x, y, grid)) {
                row[x] = EMPTY;
            } else {
                // the entire grid is always filled up prior to detonation, so as this doesn't have a detonating bomb as neighbor,
                // it'll still contain a bomb
                row[x] = BOMB;
            }
        }
        result.push(row.join(''));
    }

    return result;
}

function isSurroundedByBombs(x, y, grid) {
    const neighbors = getNeighbors(x, y, grid);
    return neighbors.every(coord => grid[coord.y][coord.x] === BOMB);
}

function neighborHasBomb(x, y, grid) {
    const neighbors = getNeighbors(x, y, grid);
    return neighbors.some(coord => grid[coord.y][coord.x] === BOMB);
}

function getNeighbors(x, y, grid) {
    const height = grid.length;
    const width = grid[0].length;

    const coords = [];
    if (x > 0) {
        coords.push({ x: x - 1, y });
    }

    if (x < width - 1) {
        coords.push({ x: x + 1, y });
    }

    if (y > 0) {
        coords.push({ x, y: y - 1 });
    }

    if (y < height - 1) {
        coords.push({ x, y: y + 1 });
    }

    return coords;
}

module.exports = {
    bomberMan
};
