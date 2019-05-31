'use strict';

const { leftRotate } = require('./solution');

describe('leftRotate', () => {
    test('it handles rotating by 1', () => {
        expect(leftRotate([1, 2, 3], 1)).toEqual([2, 3, 1]);
    });

    test('it handles rotating by 2', () => {
        expect(leftRotate([1, 2, 3], 2)).toEqual([3, 1, 2]);
    });

    test('it handles rotating by the length of the array', () => {
        expect(leftRotate([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });
});
