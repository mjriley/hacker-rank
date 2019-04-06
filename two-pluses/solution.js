'use strict';

const BAD = 'B';
const GOOD = 'G';

// TODO -- consider storing the max size in the plus map, since we need to continually re-compute it

function twoPluses(grid) {
    const pluses = getPlusMap(grid);
    const maxSize = Math.max(
        ...Object.keys(pluses).map(key => parseInt(key, 10))
    );

    let maxArea = 0;

    for (
        let currentSize = maxSize, minSize = 0;
        currentSize > minSize;
        currentSize -= 2
    ) {
        // get all pluses of the current size
        const largestPluses = getPlusesOfSize(pluses, currentSize);

        for (let leftPlus of largestPluses) {
            let rightPlus = findLargestNonOverlappingPlus(leftPlus, pluses);
            if (rightPlus === null) {
                // it is possible to be unable to find a nonoverlapping plus, so just skip this left plus
                continue;
            }

            let area = getPlusProduct(sizedLeftPlus, rightPlus);
            if (area > maxArea) {
                maxArea = area;
                minSize = rightPlus.size;
            }
        }
    }

    return maxArea;
}

// using iterators for the lazy evaluation -- as soon as I find the maximum suitable plus, I'm not interested in the remaining pluses in these iterators
function* getPlusesOfSize(size, pluses) {
    const max = Math.max(...Object.keys(pluses).map(key => parseInt(key, 10)));
    for (let currentSize = max; currentSize >= size; currentSize -= 2) {
        const currentList = pluses[currentSize] || [];
        for (let i = 0; i < currentList.length; i++) {
            yield Object.assign({}, currentList[i], { size });
        }
    }
}

function* orderPlusesBySize(pluses, maxSize, minSize = 0) {
    for (let currentSize = maxSize; currentSize > minSize; currentSize -= 2) {
        let currentIt = getPlusesOfSize(currentSize, pluses);

        for (let plus of currentIt) {
            yield plus;
        }
    }
}

function findLargestNonOverlappingPlus(leftPlus, pluses) {
    const plusIt = orderPlusesBySize(pluses, leftPlus.size);

    for (rightPlus of plusIt) {
        if (!doesOverlap(leftPlus, rightPlus)) {
            return rightPlus;
        }
    }

    return null;
}

function getPlusMap(grid) {
    const height = grid.length;
    const width = grid[0].length;

    const pluses = {};

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const largestPlus = getLargestPlus(x, y, grid);

            pluses[largestPlus] = pluses[largestPlus] || [];
            pluses[largestPlus].push({ x, y });
        }
    }

    return pluses;
}

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

function getPlusProduct(leftPlus, rightPlus) {
    return getArea(leftPlus) * getArea(rightPlus);
}

module.exports = {
    twoPluses,
    getLargestPlus,
    getArea,
    doesOverlap,
    orderPlusesBySize,
    getPlusesOfSize
};
