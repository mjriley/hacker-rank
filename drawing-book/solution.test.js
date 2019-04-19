'use strict';

const { pageCount } = require('./solution');

describe('pageCount', () => {
    test('returns 0 when flipping to the first page', () => {
        expect(pageCount(5, 1)).toBe(0);
    });

    test('returns 1 for the 2nd page', () => {
        expect(pageCount(5, 2)).toBe(1);
    });

    test('returns 1 for the 3rd page', () => {
        expect(pageCount(5, 3)).toBe(1);
    });

    test('returns the pages from the back, when that is fewer', () => {
        expect(pageCount(9, 6)).toBe(1);
    });
});
