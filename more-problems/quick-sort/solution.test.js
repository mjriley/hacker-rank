'use strict';

const { quickSort } = require('./solution');

describe('quickSort', () => {
    it('separates by the pivot', () => {
        expect(quickSort([4, 5, 3, 7, 2])).toEqual([3, 2, 4, 5, 7]);
    });
});
