'use strict';

const { makingAnagrams } = require('./solution');

describe('makingAnagrams', () => {
    it('needs to delete the number of characters to make the lengths equal', () => {
        expect(makingAnagrams('a', 'ab')).toEqual(1);
    });

    it('deletes different characters', () => {
        expect(makingAnagrams('a', 'b')).toEqual(2);
    });

    it('can recognize anagrams', () => {
        expect(makingAnagrams('abc', 'cab')).toEqual(0);
    });

    it('handles example 1', () => {
        expect(makingAnagrams('cde', 'abc')).toEqual(4);
    });
});
