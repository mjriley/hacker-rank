'use strict';

const {
    highestValuePalindrome: highestValuePalindromeRaw,
} = require('./solution');

// no reason to give us the possibility to mess up the length
const highestValuePalindrome = (input, changes) =>
    highestValuePalindromeRaw(input, input.length, changes);

describe('highestValuePalindrome', () => {
    it('returns not possible if the number of changes is insufficient to produce a palindrome', () => {
        expect(highestValuePalindrome('8124', 1)).toEqual(-1);
    });

    it('elevates the minimum digit in a pair to match the maximum digit', () => {
        expect(highestValuePalindrome('81', 1)).toEqual('88');
        expect(highestValuePalindrome('18', 1)).toEqual('88');
    });

    it('can maximize a single digit', () => {
        expect(highestValuePalindrome('5', 1)).toEqual('9');
    });

    it('replaces both digits if excess changes exist', () => {
        expect(highestValuePalindrome('81', 2)).toEqual('99');
    });

    it('changes matching digits with extra changes', () => {
        expect(highestValuePalindrome('7137', 3)).toEqual('9339');
    });

    it('does not change if not enough changes available', () => {
        expect(highestValuePalindrome('7137', 2)).toEqual('7997');
    });

    it('throws away excess changes', () => {
        expect(highestValuePalindrome('8118', 3)).toEqual('9119');
    });

    it('handles example 1', () => {
        expect(highestValuePalindrome('3943', 1)).toEqual('3993');
    });

    it('handles example 2', () => {
        expect(highestValuePalindrome('092282', 3)).toEqual('992299');
    });

    it('handles exmaple 3', () => {
        expect(highestValuePalindrome('0011', 1)).toEqual(-1);
    });
});
