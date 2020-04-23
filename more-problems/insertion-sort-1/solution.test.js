'use strict';

const { insertionSortGen } = require('./solution');

describe('insertionSortGen', () => {
    it('handles a single element', () => {
        expect(Array.from(insertionSortGen(1, [3]))).toEqual(['3']);
    });

    it('handles re-arranging elements', () => {
        expect(Array.from(insertionSortGen(5, [1, 2, 4, 5, 3]))).toEqual([
            '1 2 4 5 5',
            '1 2 4 4 5',
            '1 2 3 4 5',
        ]);
    });

    it('handles an already-sorted array', () => {
        expect(Array.from(insertionSortGen(5, [1, 2, 3, 4, 5]))).toEqual([
            '1 2 3 4 5',
        ]);
    });

    it('handles the unsorted number being the lowest value', () => {
        expect(
            Array.from(insertionSortGen(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]))
        ).toEqual([
            '2 3 4 5 6 7 8 9 10 10',
            '2 3 4 5 6 7 8 9 9 10',
            '2 3 4 5 6 7 8 8 9 10',
            '2 3 4 5 6 7 7 8 9 10',
            '2 3 4 5 6 6 7 8 9 10',
            '2 3 4 5 5 6 7 8 9 10',
            '2 3 4 4 5 6 7 8 9 10',
            '2 3 3 4 5 6 7 8 9 10',
            '2 2 3 4 5 6 7 8 9 10',
            '1 2 3 4 5 6 7 8 9 10',
        ]);
    });

    it('passes the example', () => {
        expect(Array.from(insertionSortGen(5, [2, 4, 6, 8, 3]))).toEqual([
            '2 4 6 8 8',
            '2 4 6 6 8',
            '2 4 4 6 8',
            '2 3 4 6 8',
        ]);
    });
});
