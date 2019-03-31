const {
    getTopBottomArea,
    getRowArea,
    getColumnArea,
    surfaceArea
} = require('./solution');

describe('surfaceArea', () => {
    test('it passes the example', () => {
        const grid = [[1, 3, 4], [2, 2, 3], [1, 2, 4]];
        expect(surfaceArea(grid)).toBe(60);
    });
});

describe('getTopBottomArea', () => {
    test('it handles a 1x1 cell', () => {
        expect(getTopBottomArea([[1]])).toBe(2);
    });

    test('it handles uneven grids', () => {
        expect(getTopBottomArea([[5, 1, 2], [8, 2, 1]])).toBe(12);
    });
});

describe('getRowArea', () => {
    test('it handles a 1x1 cell', () => {
        expect(getRowArea([1])).toBe(2);
    });

    test('it handles a row of the same height', () => {
        expect(getRowArea([2, 2])).toBe(4);
    });

    test('it handles a divit', () => {
        expect(getRowArea([2, 1, 2])).toBe(6);
    });
});

describe('getColumnArea', () => {
    test('it handles a 1x1 cell', () => {
        expect(getColumnArea([[1]], 0)).toBe(2);
    });

    test('it handles the first column of the example', () => {
        const grid = [[1, 3, 4], [2, 2, 3], [1, 2, 4]];
        expect(getColumnArea(grid, 0)).toBe(4);
    });
});
