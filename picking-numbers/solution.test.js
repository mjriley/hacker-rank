'use strict';

const { pickingNumbers } = require('./solution');

describe('pickingNumbers', () => {
    test('it counts the numbers within 1 of each other', () => {
        expect(pickingNumbers([1, 2])).toBe(2);
    });

    test('it will count an array with all the same number', () => {
        expect(pickingNumbers([1, 1])).toBe(2);
    });

    test('it will pick the largest of multiple possibilities', () => {
        expect(pickingNumbers([1, 2, 3, 3, 4, 4])).toBe(4);
    });

    test('it passes example 1', () => {
        expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toBe(3);
    });

    test('it passes example 2', () => {
        expect(pickingNumbers([1, 2, 2, 3, 1, 2])).toBe(5);
    });
});
