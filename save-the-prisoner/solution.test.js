'use strict';

const { saveThePrisoner } = require('./solution');

describe('saveThePrisoner', () => {
    test('it returns the starting seat when only a single candy is distributed', () => {
        expect(saveThePrisoner(5, 2, 1)).toBe(2);
    });

    test('it increments within the first set of chairs', () => {
        expect(saveThePrisoner(5, 1, 3)).toBe(3);
    });

    test('it correctly wraps around the chairs', () => {
        expect(saveThePrisoner(5, 1, 7)).toBe(2);
    });

    test('it can return the end chair', () => {
        expect(saveThePrisoner(5, 1, 5)).toBe(5);
    });

    test('it passes example 1', () => {
        expect(saveThePrisoner(5, 2, 1)).toBe(2);
        expect(saveThePrisoner(5, 2, 2)).toBe(3);
    });

    test('it passes example 2', () => {
        expect(saveThePrisoner(7, 19, 2)).toBe(6);
        expect(saveThePrisoner(3, 7, 3)).toBe(3);
    });
});
