'use strict';

const { jumpingOnClouds } = require('./solution');

describe('jumpingOnClouds', () => {
    test('it will iterate through the clouds until it reaches the start again', () => {
        expect(jumpingOnClouds([0, 0, 0], 1)).toBe(97);
    });

    test('it will pay the cost for hitting thunderheads', () => {
        expect(jumpingOnClouds([0, 1, 0], 1)).toBe(95);
    });

    test('it can handle jumping multiple squares', () => {
        expect(jumpingOnClouds([0, 0, 0, 0], 2)).toBe(98);
    });

    test('it stops as soon as it loops over the starting location', () => {
        expect(jumpingOnClouds([0, 0, 0, 0], 3)).toBe(98);
    });

    test('it will handle a thunderhead on the starting square', () => {
        expect(jumpingOnClouds([1, 0, 0, 0], 2)).toBe(96);
    });

    test('it passes example 1', () => {
        expect(jumpingOnClouds([0, 0, 1, 0], 2)).toBe(96);
    });

    test('it passes example 2', () => {
        expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)).toBe(92);
    });

    test('it passes example 3', () => {
        expect(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3)).toBe(94);
    });
});
