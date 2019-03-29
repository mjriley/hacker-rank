const { stones, getLastStone } = require('./solution');

describe('stones', () => {
    test('it passes example 1', () => {
        expect(stones(3, 1, 2)).toEqual([2, 3, 4]);
    });

    test('it passes example 2', () => {
        expect(stones(4, 10, 100)).toEqual([30, 120, 210, 300]);
    });

    test('it sorts the increments', () => {
        expect(stones(3, 2, 1)).toEqual([2, 3, 4]);
    });

    test('it returns a single result when the increments match', () => {
        expect(stones(73, 25, 25)).toEqual([1800]);
    });
});

describe('getLastStone', () => {
    test('it returns 0 when no increments are used', () => {
        expect(getLastStone([1, 2], 0, 0)).toBe(0);
    });

    test('it can compute all of the first increment', () => {
        expect(getLastStone([1, 2], 5, 0)).toBe(5);
    });

    test('it can compute all of the second increment', () => {
        expect(getLastStone([1, 2], 0, 5)).toBe(10);
    });

    test('it can compute combinations of both', () => {
        expect(getLastStone([1, 2], 2, 3)).toBe(8);
    });
});
