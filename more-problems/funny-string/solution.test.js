'use strict';

const { funnyStringImpl, funnyString } = require('./solution');

describe('funnyString', () => {
    it('should label funny strings as funny', () => {
        expect(funnyString('abc')).toEqual('Funny');
    });

    it('should label unfunny strings as not funny', () => {
        expect(funnyString('abd')).toEqual('Not Funny');
    });
});

describe('funnyStringImpl', () => {
    it('should handle the trivial case of 2 characters', () => {
        expect(funnyStringImpl('ab')).toBe(true);
    });

    it('should handle uniform differences', () => {
        expect(funnyStringImpl('abcdefg')).toBe(true);
    });

    it('should handle mirrored differences', () => {
        expect(funnyStringImpl('efxfg')).toBe(true);
    });

    it('should return false for non-mirrored strings', () => {
        expect(funnyStringImpl('efxgf')).toBe(false);
    });

    it('should handle example 1', () => {
        expect(funnyStringImpl('acxz')).toBe(true);
    });

    it('should handle example 2', () => {
        expect(funnyStringImpl('bcxz')).toBe(false);
    });
});
