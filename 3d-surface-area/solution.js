'use strict';

// Observations:
// This problem can be divided into 2 sub-problems:
// 1) finding the surface area of the top and bottom
// 2) finding teh surface area of the side faces

// The top and bottom is easy: because the problem definition states that every cell
// has a value that is at least 1, the top and bottom would have the same surface areas: H x W

// The sides are harder. I initially thought each side could be discovered by finding the maximum
//  along any given row/column, but that doesn't account for the 'divits' that occur along those rows or columns.
// For example, if a row looks like: 2 1 2, my initial approach saw that the surface on was 2 on each direction.
// The area is actually 3 on each direction, because of the middle divit. So the entire area for the front/back is 3*2, or 6, not 4.
// It's easier to think of both sides at once -- progress from front to back, keeping track of the current height.
// When the height increases, add the difference between the current height and the new height. When the height decreases,
// add that difference as well. When the end is reached, add the height of the last cell.

function surfaceArea(grid) {
    const topBottomArea = getTopBottomArea(grid);

    const numRows = grid.length;
    let totalRowArea = 0;
    for (let i = 0; i < numRows; i++) {
        totalRowArea += getRowArea(grid[i]);
    }

    const numColumns = grid[0].length;
    let totalColumnArea = 0;
    for (let i = 0; i < numColumns; i++) {
        totalColumnArea += getColumnArea(grid, i);
    }

    return topBottomArea + totalRowArea + totalColumnArea;
}

function getTopBottomArea(grid) {
    const height = grid.length;
    const width = grid[0].length;

    // double the value, as the top is the same as the bottom
    return 2 * width * height;
}

function getRowArea(row) {
    const length = row.length;

    let currentHeight = row[0];
    let totalArea = currentHeight;

    for (let i = 1; i < length; i++) {
        const cellHeight = row[i];
        const difference = Math.abs(currentHeight - cellHeight);
        totalArea += difference;
        currentHeight = cellHeight;
    }

    totalArea += currentHeight;

    return totalArea;
}

// NOTE -- I should revisit this. The duplication between this and getRowArea is terrible.
// I could essentially rotate the grid to use the row algorithm for the columns as well,
// but then I'm using extra processing to create another array or mutate the existing one in place.
// Alternatively, I could make this column one more generic, and then specify whether I wanted it to process 'rows' or 'columns',
// but that seems clunky
function getColumnArea(grid, colId) {
    const length = grid.length;

    let currentHeight = grid[0][colId];
    let totalArea = currentHeight;

    for (let i = 1; i < length; i++) {
        const cellHeight = grid[i][colId];
        const difference = Math.abs(currentHeight - cellHeight);
        totalArea += difference;
        currentHeight = cellHeight;
    }

    totalArea += currentHeight;

    return totalArea;
}

module.exports = {
    getTopBottomArea,
    getRowArea,
    getColumnArea,
    surfaceArea
};
