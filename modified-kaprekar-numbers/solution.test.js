'use strict';

const {
    kaprekarNumbersImpl: kaprekarNumbers,
    isKaprekar
} = require('./solution');

describe('isKaprekar', () => {
    test('it handles 1', () => {
        expect(isKaprekar(1)).toBe(true);
    });

    test('it handles non-kaprekar numbers', () => {
        expect(isKaprekar(5)).toBe(false);
    });

    test('it handles a single digit kaprekar number', () => {
        expect(isKaprekar(9)).toBe(true);
    });

    test('it handles multiple digits', () => {
        expect(isKaprekar(45)).toBe(true);
    });
});

describe('kaprekarNumbers', () => {
    test('it handles example 1', () => {
        expect(kaprekarNumbers(1, 100)).toEqual([1, 9, 45, 55, 99]);
    });
});
