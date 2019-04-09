'use strict';

const {
    countApplesAndOranges,
    countApplesAndOrangesImpl,
    isFruitOnHouse
} = require('./solution');

describe('countApplesAndOranges', () => {
    test('it passes example 1', () => {
        expect(
            countApplesAndOrangesImpl(7, 11, 5, 15, [-2, 2, 1], [5, -6])
        ).toEqual({ apples: 1, oranges: 1 });
    });
});

describe('isFruitOnHouse', () => {
    test('fruit before the start is not on the house', () => {
        expect(isFruitOnHouse(2, 5, 1)).toBe(false);
    });

    test('fruit at the start of the house is on the house', () => {
        expect(isFruitOnHouse(2, 5, 2)).toBe(true);
    });

    test('fruit in the middle of the house is on the house', () => {
        expect(isFruitOnHouse(2, 5, 3)).toBe(true);
    });

    test('fruit at the end of the house is on the house', () => {
        expect(isFruitOnHouse(2, 5, 5)).toBe(true);
    });

    test('fruit beyond the end of the house is not on the house', () => {
        expect(isFruitOnHouse(2, 5, 6)).toBe(false);
    });
});
