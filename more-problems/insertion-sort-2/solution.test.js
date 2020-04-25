'use strict';

const { sortLastElement, insertionSort2Gen } = require('./solution');

describe('sortLastElement', () => {
    it('does nothing to an already sorted array', () => {
        const presorted = [1, 2, 3, 4, 5];
        sortLastElement(5, presorted);
        expect(presorted).toEqual([1, 2, 3, 4, 5]);
    });

    it('properly inserts an element', () => {
        const array = [1, 2, 4, 5, 3];
        sortLastElement(5, array);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('can insert at the front', () => {
        const array = [2, 3, 4, 5, 1];
        sortLastElement(5, array);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('can partially sort an array', () => {
        const array = [1, 2, 5, 4, 3];
        sortLastElement(4, array);
        expect(array).toEqual([1, 2, 4, 5, 3]);
    });
});

describe('insertionSort2Gen', () => {
    it('outputs all steps', () => {
        expect(Array.from(insertionSort2Gen(5, [5, 4, 3, 2, 1]))).toEqual([
            '4 5 3 2 1',
            '3 4 5 2 1',
            '2 3 4 5 1',
            '1 2 3 4 5',
        ]);
    });

    it('passes example 1', () => {
        expect(Array.from(insertionSort2Gen(6, [1, 4, 3, 5, 6, 2]))).toEqual([
            '1 4 3 5 6 2',
            '1 3 4 5 6 2',
            '1 3 4 5 6 2',
            '1 3 4 5 6 2',
            '1 2 3 4 5 6',
        ]);
    });
});
