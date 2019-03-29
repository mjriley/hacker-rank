// Observations:
// This feels like a nightmare to test, because the outputs are going to be rather unreadable.
// But, in order to tell if a given pattern is present in a grid, we'd first need to know whether
// a given line in that pattern is present in the grid,
// and that, in turn requires knowing whether a given line is present in another line.
// The brute force solution would be, for each line in the grid, to find all occurrences where the first line of the pattern appears in the grid
// for each of these occurences, we can then check whether the remaining lines of the pattern occur directly beneath the found line in the grid
// I believe there are more refined algorithms to find where a string occurs in another string, but if the searched line contains N characters,
// and the pattern has M characters, then the worst-case would be O((N-M)*M), or O(NM - M^2). Once we've found a candidate,
// checking whether one string of M characters matches another string of M characters is done in O(M).
// we do this for the height of the pattern, which we'll call H. Therefore the runtime would be O(NM - M^2 + M * H)

function gridSearch(grid, pattern) {
    const gridHeight = grid.length;
    const patternHeight = pattern.length;

    if (patternHeight > gridHeight) {
        return 'NO';
    }

    const gridWidth = grid[0].length;
    const patternWidth = pattern[0].length;

    for (let rowIndex = 0; rowIndex <= gridHeight - patternHeight; rowIndex++) {
        for (
            let columnIndex = 0;
            columnIndex <= gridWidth - patternWidth;
            columnIndex++
        ) {
            if (blockMatches(grid, pattern, rowIndex, columnIndex)) {
                return 'YES';
            }
        }
    }

    return 'NO';
}

function blockMatches(grid, pattern, rowIndex, columnIndex) {
    const patternHeight = pattern.length;

    for (let matchedRows = 0; matchedRows < patternHeight; matchedRows++) {
        if (
            !lineStartsWithPattern(
                pattern[matchedRows],
                grid[matchedRows + rowIndex],
                columnIndex
            )
        ) {
            return false;
        }
    }

    return true;
}

function findLine(pattern, fullLine, start = 0) {
    const patternLength = pattern.length;
    const lineLength = fullLine.length;

    for (
        let startingIndex = start;
        startingIndex < lineLength - patternLength + 1;
        startingIndex++
    ) {
        if (lineStartsWithPattern(pattern, fullLine, startingIndex)) {
            return startingIndex;
        }
    }

    return -1;
}

function lineStartsWithPattern(pattern, fullLine, startingIndex) {
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        if (fullLine[startingIndex + i] !== pattern[i]) {
            return false;
        }
    }

    return true;
}

module.exports = {
    gridSearch,
    findLine,
    blockMatches
};
