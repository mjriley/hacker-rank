'use strict';

const { catAndMouse } = require('./solution');

describe('catAndMouse', () => {
    test('it returns Cat A when the first cat is closer', () => {
        expect(catAndMouse(2, 5, 3)).toBe('Cat A');
    });

    test('it returns Cat B when the second cat is closer', () => {
        expect(catAndMouse(2, 5, 4)).toBe('Cat B');
    });

    test('it returns Mouse C when the cats are equidistance from the mouse', () => {
        expect(catAndMouse(2, 6, 4)).toBe('Mouse C');
    });

    test('it does not care about the relative position of the cats', () => {
        expect(catAndMouse(2, 5, 3)).toBe('Cat A');
        expect(catAndMouse(5, 2, 3)).toBe('Cat B');
    });

    test('it handles when the cats start at the same location', () => {
        expect(catAndMouse(2, 2, 3)).toBe('Mouse C');
    });

    test('it passes example 1', () => {
        expect(catAndMouse(2, 5, 4)).toBe('Cat B');
    });
});
