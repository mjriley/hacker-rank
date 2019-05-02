'use strict';

const { circularArrayRotation, getRotatedElement } = require('./solution');

describe('circularArrayRotation', () => {
    test('it passes example 1', () => {
        expect(circularArrayRotation([3, 4, 5], 2, [1, 2])).toEqual([5, 3]);
    });

    test('it passes example 2', () => {
        expect(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])).toEqual([
            2,
            3,
            1
        ]);
    });
});

describe('getRotatedElement', () => {
    test('rotating by 0 returns the initial element', () => {
        expect(getRotatedElement(1, [1, 2, 3], 0)).toBe(2);
    });

    test('it can handle rotating by 1', () => {
        expect(getRotatedElement(1, [1, 2, 3], 1)).toBe(1);
    });

    test('it can wrap around', () => {
        expect(getRotatedElement(0, [1, 2, 3], 1)).toBe(3);
    });

    test('it can rotate beyond the length of the array', () => {
        expect(getRotatedElement(0, [1, 2, 3], 8)).toBe(2);
    });
});
