'use strict';

const { hurdleRace } = require('./solution');

describe('hurdleRace', () => {
    test('it returns 0 when no potions are necessary', () => {
        expect(hurdleRace(5, [4, 5, 1, 3])).toBe(0);
    });

    test('it returns the difference between the maximum obstacle and the current jump ability', () => {
        expect(hurdleRace(2, [2, 3, 9, 5, 4])).toBe(7);
    });

    test('it passes example 1', () => {
        expect(hurdleRace(4, [1, 6, 3, 5, 2])).toBe(2);
    });

    test('it passes example 2', () => {
        expect(hurdleRace(7, [2, 5, 4, 5, 2])).toBe(0);
    });
});
