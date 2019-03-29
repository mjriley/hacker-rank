const { gridSearch, findLine } = require('./solution');

describe('gridSearch', () => {
    test('it returns NO when a pattern cannot be found', () => {
        const grid = [[2, 2], [2, 2]];

        const pattern = [[1, 1]];

        expect(gridSearch(grid, pattern)).toBe('NO');
    });

    test('it returns YES when the pattern is found', () => {
        const grid = [[2, 2], [2, 2]];

        const pattern = [[2, 2]];

        expect(gridSearch(grid, pattern)).toBe('YES');
    });

    test('it returns YES when the grid is the pattern', () => {
        const grid = [[2, 2], [2, 2]];

        const pattern = [[2, 2], [2, 2]];

        expect(gridSearch(grid, pattern)).toBe('YES');
    });

    test('it returns NO when the pattern is taller than the grid', () => {
        const grid = [];

        const pattern = [[2, 2], [2, 2]];

        expect(gridSearch(grid, pattern)).toBe('NO');
    });

    test('it returns NO when the pattern is wider than the grid', () => {
        const grid = [[1], [2]];
        const pattern = [[2, 2], [2, 2]];

        expect(gridSearch(grid, pattern)).toBe('NO');
    });

    test('it finds the pattern when the first line has multiple matches', () => {
        const grid = [[1, 1, 1, 1], [0, 0, 2, 2]];

        const pattern = [[1, 1], [2, 2]];

        expect(gridSearch(grid, pattern)).toBe('YES');
    });

    test('it passes example 1', () => {
        const grid = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        ];

        const pattern = [
            [8, 7, 6, 5, 4, 3],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1]
        ];

        expect(gridSearch(grid, pattern)).toBe('YES');
    });
});

describe('findLine', () => {
    test('it returns -1 if the line is not found', () => {
        expect(findLine([1, 2], [])).toBe(-1);
    });

    test('it finds the pattern at the start of a line', () => {
        expect(findLine([1, 2], [1, 2, 3])).toBe(0);
    });

    test('it finds the pattern at the end of the line', () => {
        expect(findLine([1, 2], [3, 1, 2])).toBe(1);
    });

    test('it respects the starting index', () => {
        expect(findLine([1, 2], [1, 2, 1, 2], 1)).toBe(2);
    });

    test('it finds the pattern within a line', () => {
        expect(
            findLine([8, 7, 6, 5, 4, 3], [0, 9, 8, 7, 6, 5, 4, 3, 2, 1])
        ).toBe(2);
    });
});
