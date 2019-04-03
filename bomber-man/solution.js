'use explicit';

/* Observations:
This was tricky. It was not intuitive to me that, because there are no chain reactions, that the grid quickly settles into an 'off' and 'on' state.
It may have been best to manually inspect the results to find this out, rather than try to deduce it mathematically. We need to generate 4 grids.
The first for detonation is the one that will contain the least bombs detonating. The second one is the reverse of this. The third finally picks up
the second set of 'initial' bombs -- squares that did not touch any bombs from the previous detonation. The fourth is just like the 2nd, only now it accounts for that 2nd set of initial bombs.
These sets of bombs will never again overlap, so we can always alterate between returning the 3rd and 4th detonations.
*/

const BOMB = 'O';
const EMPTY = '.';

function bomberMan(numSeconds, grid) {
    if (numSeconds === 1) {
        // do nothing, so we just return the original grid
        return grid;
    } else if (numSeconds % 2 === 0) {
        return createFilledGrid(grid);
    }

    const initialDetonation = detonate(grid);
    if (numSeconds === 3) {
        return initialDetonation;
    }

    const secondaryDetonation = detonate(initialDetonation);
    if (numSeconds === 5) {
        return secondaryDetonation;
    }

    const evenDetonation = detonate(secondaryDetonation);

    const bombCycle = ((numSeconds - 3) / 2) % 2;

    if (bombCycle === 0) {
        return evenDetonation;
    } else {
        const oddDetonation = detonate(evenDetonation);
        return oddDetonation;
    }
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

function detonate(grid) {
    const result = [];

    const height = grid.length;
    const width = grid[0].length;

    for (let y = 0; y < height; y++) {
        let row = [];
        for (let x = 0; x < width; x++) {
            if (grid[y][x] === BOMB) {
                row[x] = EMPTY;
            } else if (neighborHasBomb(x, y, grid)) {
                row[x] = EMPTY;
            } else {
                row[x] = BOMB;
            }
        }
        result[y] = row.join('');
    }

    return result;
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
