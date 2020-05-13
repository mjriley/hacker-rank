'use strict';

const { alternatingCharacters } = require('./solution');

describe('alternatingCharacters', () => {
    it('needs no deletions on a minimum length string', () => {
        expect(alternatingCharacters('A')).toEqual(0);
    });

    it('requires a deletion for each repeated character', () => {
        expect(alternatingCharacters('AAA')).toEqual(2);
    });

    it('requires no deletions for alternating characters', () => {
        expect(alternatingCharacters('ABAB')).toEqual(0);
    });

    it('handles nested repeated characters', () => {
        expect(alternatingCharacters('ABBA')).toEqual(1);
    });

    it('handles example 1', () => {
        expect(alternatingCharacters('AAAA')).toEqual(3);
    });

    it('handles example 2', () => {
        expect(alternatingCharacters('BBBBB')).toEqual(4);
    });

    it('handles example 3', () => {
        expect(alternatingCharacters('ABABABAB')).toEqual(0);
    });

    it('handles example 4', () => {
        expect(alternatingCharacters('BABABA')).toEqual(0);
    });

    it('handles example 5', () => {
        expect(alternatingCharacters('AAABBB')).toEqual(4);
    });
});
