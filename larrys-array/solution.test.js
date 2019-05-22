'use strict';

const {
    larrysArray,
    canBeSorted,
    rotateToLeft,
    YES,
    NO
} = require('./solution');

describe('larrysArray', () => {
    test('it handles example 1', () => {
        expect(larrysArray([3, 1, 2])).toBe(YES);
    });

    test('it handles example 2', () => {
        expect(larrysArray([1, 3, 4, 2])).toBe(YES);
    });

    test('it handles example 3', () => {
        expect(larrysArray([1, 2, 3, 5, 4])).toBe(NO);
    });

    test('it handles example 4', () => {
        expect(larrysArray([1, 6, 5, 2, 3, 4])).toBe(NO);
    });

    test('it handles example 5', () => {
        expect(larrysArray([7, 11, 8, 13])).toBe(NO);
    });
});

describe('canBeSorted', () => {
    test('rotation 1', () => {
        expect(canBeSorted([1, 2, 3], 0)).toBe(true);
    });

    test('rotation 2', () => {
        expect(canBeSorted([2, 3, 1], 0)).toBe(true);
    });

    test('rotation 3', () => {
        expect(canBeSorted([3, 1, 2], 0)).toBe(true);
    });

    test('cannot sort', () => {
        expect(canBeSorted([1, 3, 2], 0)).toBe(false);
    });
});

describe('rotateToLeft', () => {
    test('it rotates the element from the last position', () => {
        const array = [1, 4, 3, 2];
        rotateToLeft(array, 1, 2);
        expect(array).toEqual([1, 2, 4, 3]);
    });

    test('it rotates the mid element', () => {
        const array = [1, 3, 2, 4];
        rotateToLeft(array, 1, 2);
        expect(array).toEqual([1, 2, 4, 3]);
    });

    test('it leaves the starting element alone', () => {
        const array = [1, 2, 4, 3];
        rotateToLeft(array, 1, 2);
        expect(array).toEqual([1, 2, 4, 3]);
    });
});
