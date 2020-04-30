'use strict';

const { countingSortImpl: countingSort } = require('./solution');

describe('countingSort', () => {
    it('sorts an empty array', () => {
        expect(countingSort([])).toEqual([]);
    });

    it('sorts a unique array', () => {
        expect(countingSort([3, 2, 1])).toEqual([1, 2, 3]);
    });

    it('sorts an array with repeated numbers', () => {
        expect(countingSort([3, 3, 2, 1, 2, 2, 1, 3])).toEqual([
            1,
            1,
            2,
            2,
            2,
            3,
            3,
            3,
        ]);
    });

    it('sorts an array with value gaps', () => {
        expect(countingSort([89, 50, 7, 10])).toEqual([7, 10, 50, 89]);
    });
});
