'use strict';

const { separateNumbersImpl: separateNumbers } = require('./solution');

describe('separateNumbers', () => {
    test('it returns true for a sequence of two numbers', () => {
        expect(separateNumbers('12')).toEqual({ pretty: true, first: '1' });
    });

    test('it returns true for a sequnce of two-digit numbers', () => {
        expect(separateNumbers('1314')).toEqual({ pretty: true, first: '13' });
    });

    it('it returns true for a long sequence', () => {
        expect(separateNumbers('123456789')).toEqual({
            pretty: true,
            first: '1',
        });
    });

    it('it can move from single digit to double digit', () => {
        expect(separateNumbers('91011')).toEqual({ pretty: true, first: '9' });
    });

    it('reject leading zeroes', () => {
        expect(separateNumbers('012345')).toEqual({ pretty: false });
    });

    it('does not accept leading zeroes mid string', () => {
        expect(separateNumbers('12034')).toEqual({ pretty: false });
    });

    it('passes example 1', () => {
        expect(separateNumbers('1234')).toEqual({ pretty: true, first: '1' });
        expect(separateNumbers('91011')).toEqual({ pretty: true, first: '9' });
        expect(separateNumbers('99100')).toEqual({ pretty: true, first: '99' });
        expect(separateNumbers('101103')).toEqual({ pretty: false });
        expect(separateNumbers('010203')).toEqual({ pretty: false });
        expect(separateNumbers('13')).toEqual({ pretty: false });
        expect(separateNumbers('1')).toEqual({ pretty: false });
    });

    it('passes example 2', () => {
        expect(separateNumbers('99910001001')).toEqual({
            pretty: true,
            first: '999',
        });
        expect(separateNumbers('7891011')).toEqual({
            pretty: true,
            first: '7',
        });
        expect(separateNumbers('9899100')).toEqual({
            pretty: true,
            first: '98',
        });
        expect(separateNumbers('999100010001')).toEqual({ pretty: false });
    });

    it('passes the failing example', () => {
        expect(separateNumbers('90071992547409929007199254740993')).toEqual({
            pretty: true,
            first: '9007199254740992',
        });
    });
});
