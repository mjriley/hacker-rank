'use strict';

const { countingValleys } = require('./solution');

describe('countingValleys', () => {
    test('it returns 0 when no valleys exist', () => {
        expect(countingValleys(2, 'UD')).toBe(0);
    });

    test('it returns 1 when it finds a single valley', () => {
        expect(countingValleys(2, 'DU')).toBe(1);
    });

    test('it handles multi-level valleys', () => {
        expect(countingValleys(4, 'DDUU')).toBe(1);
    });

    test('it handles multiple valleys and mountains', () => {
        expect(countingValleys(8, 'DUUDDUUD')).toBe(2);
    });

    test('it passes example 1', () => {
        expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
    });
});
