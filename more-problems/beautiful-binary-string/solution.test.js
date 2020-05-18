'use strict';

const { beautifulBinaryString } = require('./solution');

describe('beautifulBinaryString', () => {
    it('requires no changes if no beautiful strings are present', () => {
        expect(beautifulBinaryString('111')).toEqual(0);
    });

    it('requires a single change for the non-beautiful string', () => {
        expect(beautifulBinaryString('010')).toEqual(1);
    });

    it('handles overlapping patterns', () => {
        expect(beautifulBinaryString('01010')).toEqual(1);
    });

    it('can handle multiple changes', () => {
        expect(beautifulBinaryString('101010101')).toEqual(2);
    });

    it('handles example 1', () => {
        expect(beautifulBinaryString('0101010')).toEqual(2);
    });

    it('handles example 2', () => {
        expect(beautifulBinaryString('01100')).toEqual(0);
    });

    it('handles example 3', () => {
        expect(beautifulBinaryString('0100101010')).toEqual(3);
    });
});
