'use strict';

const { twoStrings } = require('./solution');

describe('twoStrings', () => {
    it('returns YES when the strings share a common letter', () => {
        expect(twoStrings('ab', 'a')).toEqual('YES');
    });

    it('returns NO when the strings have no common letters', () => {
        expect(twoStrings('ab', 'c')).toEqual('NO');
    });

    it('returns YES when a multi-letter substring exists', () => {
        expect(twoStrings('abbb', 'cbb')).toEqual('YES');
    });

    it('handles example 1', () => {
        expect(twoStrings('hello', 'world')).toEqual('YES');
    });

    it('handles example 2', () => {
        expect(twoStrings('hi', 'world')).toEqual('NO');
    });
});
