'use strict';

const { findMedian } = require('./solution');

describe('findMedian', () => {
    it('should find the median element of a single length array', () => {
        expect(findMedian([5])).toEqual(5);
    });

    it('should find the median element of a longer array', () => {
        expect(findMedian([0, 1, 2, 4, 6, 5, 3])).toEqual(3);
    });

    it('should ensure numerical sorting', () => {
        expect(findMedian([0, 5, 17, 25, 9])).toEqual(9);
    });
});
