'use strict';

const { appendAndDelete } = require('./solution');

describe('appendAndDelete', () => {
    test('it passes example 1', () => {
        expect(appendAndDelete('abc', 'def', 6)).toBe('Yes');
    });

    test('it passes example 2', () => {
        expect(appendAndDelete('hackerhappy', 'hackerrank', 9)).toBe('Yes');
    });

    test('it passes example 3', () => {
        expect(appendAndDelete('aba', 'aba', 7)).toBe('Yes');
    });

    test('it passes example 4', () => {
        expect(appendAndDelete('ashley', 'ash', 2)).toBe('No');
    });
});
