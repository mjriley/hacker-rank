'use strict';

const { beautifulDays, reverseNumber } = require('./solution');

describe('beautifulDays', () => {
    test('it passes example 1', () => {
        expect(beautifulDays(20, 23, 6)).toBe(2);
    });
});

describe('reverseNumber', () => {
    test('it returns itself when it is only a single digit', () => {
        expect(reverseNumber(7)).toBe(7);
    });

    test('it can reverse two digits', () => {
        expect(reverseNumber(21)).toBe(12);
    });

    test('it removes a leading 0', () => {
        expect(reverseNumber(20)).toBe(2);
    });

    test('it handles 3 digits', () => {
        expect(reverseNumber(123)).toBe(321);
    });
});
