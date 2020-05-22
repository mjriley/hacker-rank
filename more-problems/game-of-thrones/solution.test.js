'use strict';

const { gameOfThrones } = require('./solution');

describe('gameOfThrones', () => {
    it('should return YES on a palindrome', () => {
        expect(gameOfThrones('aba')).toEqual('YES');
    });

    it('should return YES on an anagram of a palindrome', () => {
        expect(gameOfThrones('aab')).toEqual('YES');
    });

    it('should return NO if no palindrome is possible', () => {
        expect(gameOfThrones('abc')).toEqual('NO');
    });

    it('should consider a single character as a palindrome', () => {
        expect(gameOfThrones('a')).toEqual('YES');
    });

    it('should handle even-length palindromes', () => {
        expect(gameOfThrones('aabb')).toEqual('YES');
    });

    it('should handle odd-length palindromes', () => {
        expect(gameOfThrones('aabbc')).toEqual('YES');
    });

    it('should handle example 1', () => {
        expect(gameOfThrones('aaabbbb')).toEqual('YES');
    });

    it('should handle example 2', () => {
        expect(gameOfThrones('cdefghmnopqrstuvw')).toEqual('NO');
    });

    it('should handle example 3', () => {
        expect(gameOfThrones('cdcdcdcdeeeef')).toEqual('YES');
    });
});
