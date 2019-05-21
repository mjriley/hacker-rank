'use strict';

const { beautifulTriplets, sortedExists } = require('./solution');

describe('beautifulTriplets', () => {
    test('it returns 0 when the array has fewer than 3 elements', () => {
        expect(beautifulTriplets(1, [7])).toBe(0);
    });

    test('it finds the single triplet', () => {
        expect(beautifulTriplets(1, [1, 2, 3])).toBe(1);
    });

    test('it handles example 1', () => {
        expect(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])).toBe(3);
    });
});

describe('sortedExists', () => {
    test('it returns the index of the first matching value found', () => {
        expect(sortedExists([1, 2, 3], 2, 0)).toBe(1);
    });

    test('it returns -1 when it cannot find the value', () => {
        expect(sortedExists([1, 2, 3], 5, 0)).toBe(-1);
    });

    test('it stops the search when the next value searched is greater than the value', () => {
        expect(sortedExists([1, 2, 6, 5], 5, 0)).toBe(-1);
    });

    test('it uses the starting index', () => {
        expect(sortedExists([1, 1], 1, 1)).toBe(1);
    });
});
