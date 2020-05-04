'use strict';

const { superReducedString } = require('./solution');

describe('superReducedString', () => {
    it('identifies a single character as trivially reduced', () => {
        expect(superReducedString('e')).toEqual('e');
    });

    it('replaces an empty result with empty string', () => {
        expect(superReducedString('aa')).toEqual('Empty String');
    });

    it('removes a set of adjacent duplicate characters', () => {
        expect(superReducedString('abbc')).toEqual('ac');
    });

    it('handles nested pairs of duplicate characters', () => {
        expect(superReducedString('abbac')).toEqual('c');
    });

    it('handles example 1', () => {
        expect(superReducedString('aaabccddd')).toEqual('abd');
    });

    it('handles example 2', () => {
        expect(superReducedString('aa')).toEqual('Empty String');
    });

    it('handles example 3', () => {
        expect(superReducedString('baab')).toEqual('Empty String');
    });
});
