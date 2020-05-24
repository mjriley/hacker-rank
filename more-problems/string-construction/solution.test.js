'use strict';

const { stringConstruction } = require('./solution');

describe('stringConstruction', () => {
    it('requires a payment for each new character', () => {
        expect(stringConstruction('abc')).toEqual(3);
    });

    it('charges nothing for previously encountered strings', () => {
        expect(stringConstruction('aaaaaa')).toEqual(1);
    });

    it('handles example 1', () => {
        expect(stringConstruction('abcd')).toEqual(4);
    });

    it('handles example 2', () => {
        expect(stringConstruction('abab')).toEqual(2);
    });
});
