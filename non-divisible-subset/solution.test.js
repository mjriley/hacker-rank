'use strict';

const { nonDivisibleSubset } = require('./solution');

describe('nonDivisibleSubset', () => {
    test('it passes example 1', () => {
        expect(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])).toEqual(3);
    });

    test('it passes example 2', () => {
        expect(nonDivisibleSubset(3, [1, 7, 2, 4])).toBe(3);
    });

    test('it only includes a single number mod 0', () => {
        expect(nonDivisibleSubset(3, [0, 6, 3])).toBe(1);
    });

    test('it will include all numbers from a nonconflicting category', () => {
        expect(nonDivisibleSubset(3, [1, 4, 7, 10])).toBe(4);
    });

    test('it will take the greatest of two slots', () => {
        expect(nonDivisibleSubset(3, [1, 4, 7, 10, 2])).toBe(4);
        expect(nonDivisibleSubset(3, [1, 2, 5, 8, 11])).toBe(4);
    });

    test('it will only include a single element from divisor/2', () => {
        expect(nonDivisibleSubset(4, [2, 6, 10, 14])).toBe(1);
    });
});

// 0: 12, 24
// 1: 25
// 2: 10, 10, 22
// 3: 19,
