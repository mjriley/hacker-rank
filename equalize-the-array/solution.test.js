'use strict';

const { equalizeArray } = require('./solution');

describe('equalizeArray', () => {
    test('it returns 0 when the array is already equalized', () => {
        expect(equalizeArray([1, 1, 1])).toBe(0);
    });

    test('it handles when all the elements are different', () => {
        expect(equalizeArray([1, 2, 3])).toBe(2);
    });

    test('it only keeps the most populous element', () => {
        expect(equalizeArray([1, 2, 2, 3, 3, 3])).toBe(3);
    });

    test('it passes example 1', () => {
        expect(equalizeArray([1, 2, 2, 3])).toBe(2);
    });

    test('it passes example 2', () => {
        expect(equalizeArray([3, 3, 2, 1, 3])).toBe(2);
    });
});
