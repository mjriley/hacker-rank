'use strict';

const { isValid } = require('./solution');

describe('isValid', () => {
    it('views a single character as valid', () => {
        expect(isValid('a')).toEqual('YES');
    });

    it('views multiple characters as valid', () => {
        expect(isValid('aaa')).toEqual('YES');
    });

    it('views equally balanced characters as valid', () => {
        expect(isValid('abc')).toEqual('YES');
    });

    it('is valid when only a single character occurs an extra time', () => {
        expect(isValid('abcb')).toEqual('YES');
    });

    it('is not valid when we would need multiple deletions for a character', () => {
        expect(isValid('abcbb')).toEqual('NO');
    });

    it('is valid when a letter can be removed to not count', () => {
        expect(isValid('aaabbbc')).toEqual('YES');
    });

    it('is not valid when the outlier in counts is less than the others', () => {
        expect(isValid('aaabbbcc')).toEqual('NO');
    });

    it('handles example 1', () => {
        expect(isValid('aabbccddeefghi')).toEqual('NO');
    });

    it('handles example 2', () => {
        expect(isValid('abcdefghhgfedecba')).toEqual('YES');
    });
});
