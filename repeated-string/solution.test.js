'use strict';

const { repeatedString } = require('./solution');

describe('repeatedString', () => {
    test('it passes example 1', () => {
        expect(repeatedString('abcac', 10)).toBe(4);
    });

    test('it passes example 2', () => {
        expect(repeatedString('aba', 10)).toBe(7);
    });

    test('it passes example 3', () => {
        expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
    });
});
