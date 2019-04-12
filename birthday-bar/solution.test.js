'use strict';

const { birthday } = require('./solution');

describe('birthday', () => {
    test('it returns 1 when the month is 1, and the day matches the square', () => {
        expect(birthday([25], 25, 1)).toBe(1);
    });

    test('it returns 0 when no matching square is found', () => {
        expect(birthday([1, 2, 3, 4], 5, 1)).toBe(0);
    });

    test('it can sum squares', () => {
        expect(birthday([1, 2], 3, 2)).toBe(1);
    });

    test('it passes example 1', () => {
        expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
    });

    test('it passes example 2', () => {
        expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
    });
});
