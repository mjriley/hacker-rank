'use strict';

const { countingSortImpl: countingSort } = require('./solution');

describe('countingSort', () => {
    it('counts the numbers in an array', () => {
        expect(countingSort([1, 1, 3, 2, 1], 3)).toEqual([0, 3, 1, 1]);
    });
});
