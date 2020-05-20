'use strict';

const { palindromeIndex } = require('./solution');

describe('palindromeIndex', () => {
    it('should return -1 if the string is already a palindrome', () => {
        expect(palindromeIndex('aa')).toEqual(-1);
    });

    it('should return the index of a removeable character', () => {
        expect(palindromeIndex('aac')).toEqual(2);
    });

    it('should return -1 if no index can be found', () => {
        expect(palindromeIndex('abc')).toEqual(-1);
    });

    it('handles example 1', () => {
        expect(palindromeIndex('aaab')).toEqual(3);
    });

    it('handles example 2', () => {
        expect(palindromeIndex('baa')).toEqual(0);
    });

    it('handles example 3', () => {
        expect(palindromeIndex('aaa')).toEqual(-1);
    });

    it('handles left-processing', () => {
        expect(palindromeIndex('caaca')).toEqual(4);
    });

    it('handles right-processing', () => {
        expect(palindromeIndex('acaac')).toEqual(0);
    });
});
