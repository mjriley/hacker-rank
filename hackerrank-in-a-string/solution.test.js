'use strict';

const { hackerrankInStringImpl: hackerrankInString } = require('./solution');

describe('hackerrankInString', () => {
    it('matches the base string', () => {
        expect(hackerrankInString('hackerrank')).toBe(true);
    });

    it('returns false when a match cannot be found', () => {
        expect(hackerrankInString('hackerran')).toBe(false);
    });

    it('passes example 1', () => {
        expect(hackerrankInString('hereiamstackerrank')).toBe(true);
    });

    it('passes example 2', () => {
        expect(hackerrankInString('hackerworld')).toBe(false);
    });
});
