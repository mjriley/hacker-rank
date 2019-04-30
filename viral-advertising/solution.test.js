'use strict';

const { viralAdvertising } = require('./solution');

describe('viralAdvertising', () => {
    test('it returns the number liked on the first day', () => {
        expect(viralAdvertising(1)).toBe(2);
    });

    test('it can compound the number liked', () => {
        expect(viralAdvertising(2)).toBe(5);
    });

    test('it passes example 1', () => {
        expect(viralAdvertising(3)).toBe(9);
    });
});
