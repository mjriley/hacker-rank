'use strict';

const { theLoveLetterMystery } = require('./solution');

describe('theLoveLetterMystery', () => {
    it('shows no changes on a single character string', () => {
        expect(theLoveLetterMystery('b')).toEqual(0);
    });

    it('handles the right being larger than the left', () => {
        expect(theLoveLetterMystery('ad')).toEqual(3);
    });

    it('handles the left being larger than the right', () => {
        expect(theLoveLetterMystery('da')).toEqual(3);
    });

    it('ignores an odd-length middle character', () => {
        expect(theLoveLetterMystery('abc')).toEqual(2);
    });

    it('sums all differences', () => {
        expect(theLoveLetterMystery('axbpc')).toEqual(10);
    });

    it('handles something that is already a palindrome', () => {
        expect(theLoveLetterMystery('abcba')).toEqual(0);
    });

    it('handles example 1', () => {
        expect(theLoveLetterMystery('abc')).toEqual(2);
    });

    it('handles example 2', () => {
        expect(theLoveLetterMystery('abcba')).toEqual(0);
    });

    it('handles example 3', () => {
        expect(theLoveLetterMystery('abcd')).toEqual(4);
    });

    it('handles example 4', () => {
        expect(theLoveLetterMystery('cba')).toEqual(2);
    });
});
