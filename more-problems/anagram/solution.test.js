'use strict';

const { anagram } = require('./solution');

describe('anagram', () => {
    it('should return -1 when no solution is possible', () => {
        expect(anagram('a')).toEqual(-1);
    });

    it('should return 0 when the strings are the same', () => {
        expect(anagram('aa')).toEqual(0);
    });

    it('should return 0 when the strings are anagrams of each other', () => {
        expect(anagram('abba')).toEqual(0);
    });

    it('should return the number of changes needed to create anagrams', () => {
        expect(anagram('abxy')).toEqual(2);
    });

    it('should handle partial matches', () => {
        expect(anagram('abbi')).toEqual(1);
    });

    it('should handle example 1', () => {
        expect(anagram('aaabbb')).toEqual(3);
    });

    it('should handle example 2', () => {
        expect(anagram('ab')).toEqual(1);
    });

    it('should handle example 3', () => {
        expect(anagram('abc')).toEqual(-1);
    });

    it('should handle example 4', () => {
        expect(anagram('mnop')).toEqual(2);
    });

    it('should handle example 5', () => {
        expect(anagram('xyyx')).toEqual(0);
    });

    it('should handle example 6', () => {
        expect(anagram('xaxbbbxx')).toEqual(1);
    });
});
