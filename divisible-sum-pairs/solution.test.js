'use strict';

const { divisibleSumPairs } = require('./solution');

describe('divisibleSumPairs', () => {
    test('it handles no pairs', () => {
        expect(divisibleSumPairs(2, 4, [1, 2])).toBe(0);
    });

    test('it handles a single pair', () => {
        expect(divisibleSumPairs(2, 3, [1, 2])).toBe(1);
    });

    test('it passes example 1', () => {
        expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
    });
});
