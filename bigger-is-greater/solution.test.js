'use strict';

const { biggerIsGreater } = require('./solution');

describe('biggerIsGreater', () => {
    test('it handles switching characters', () => {
        expect(biggerIsGreater('ab')).toBe('ba');
    });

    test('it handles when no switch is possible', () => {
        expect(biggerIsGreater('cba')).toBe('no answer');
    });

    test('it passes example 1', () => {
        expect(biggerIsGreater('hefg')).toBe('hegf');
    });

    test('it passes example 2', () => {
        expect(biggerIsGreater('dhck')).toBe('dhkc');
    });

    test('it passes example 3', () => {
        expect(biggerIsGreater('dkhc')).toBe('hcdk');
    });
});
