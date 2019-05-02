'use strict';

const { permutationEquation, createLookupArray } = require('./solution');

describe('permutationEquation', () => {
    test('it passes example 1', () => {
        expect(permutationEquation([5, 2, 1, 3, 4])).toEqual([4, 2, 5, 1, 3]);
    });

    test('it passes example 2', () => {
        expect(permutationEquation([2, 3, 1])).toEqual([2, 3, 1]);
    });

    test('it passes example 3', () => {
        expect(permutationEquation([4, 3, 5, 1, 2])).toEqual([1, 3, 5, 4, 2]);
    });
});

describe('createLookupArray', () => {
    test('it stores the indices where the values are found in the lookup array', () => {
        expect(createLookupArray([3, 1, 2])).toEqual([2, 3, 1]);
    });

    test('it handles an array that is perfectly ordered', () => {
        expect(createLookupArray([1, 2, 3])).toEqual([1, 2, 3]);
    });
});
