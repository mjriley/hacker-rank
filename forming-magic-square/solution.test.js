'use strict';

const {
    formingMagicSquare,
    getCost,
    isMagicSquare,
    magicSquares
} = require('./solution');

describe('formingMagicSquare', () => {
    test('it returns 0 when already a magic square', () => {
        //prettier-ignore
        const square = [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4]
        ];

        expect(formingMagicSquare(square)).toBe(0);
    });

    test('it passes example 1', () => {
        //prettier-ignore
        const square = [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 5]
        ];

        expect(formingMagicSquare(square)).toBe(1);
    });

    test('is passes example 2', () => {
        //prettier-ignore
        const square = [
            [4, 8, 2],
            [4, 5, 7],
            [6, 1, 6]
        ];

        expect(formingMagicSquare(square)).toBe(4);
    });
});

describe('getCost', () => {
    test('it returns 0 when the squares are the same', () => {
        //prettier-ignore
        const input = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        //prettier-ignore
        const target = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        expect(getCost(input, target)).toBe(0);
    });

    test('it returns the difference between a single square', () => {
        //prettier-ignore
        const input = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        //prettier-ignore
        const target = [
            [2, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        expect(getCost(input, target)).toBe(1);
    });

    test('it sums all differences', () => {
        //prettier-ignore
        const input = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        //prettier-ignore
        const target = [
            [2, 2, 2],
            [2, 2, 2],
            [2, 2, 2]
        ];

        expect(getCost(input, target)).toBe(9);
    });
});

describe('isMagicSquare', () => {
    test('returns true for a magic square', () => {
        //prettier-ignore
        const square = [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8]
        ];
        expect(isMagicSquare(square)).toBe(true);
    });

    test('returns false for repeated numbers', () => {
        //prettier-ignore
        const square = [
            [5, 5, 5], 
            [5, 5, 5], 
            [5, 5, 5]
        ];

        expect(isMagicSquare(square)).toBe(false);
    });

    test('returns false when isnt magic square', () => {
        //prettier-ignore
        const square = [
            [9, 8, 3],
            [2, 5, 6],
            [4, 7, 1]
        ];

        expect(isMagicSquare(square)).toBe(false);
    });

    test('returns true for all used magic squares', () => {
        expect(magicSquares.every(isMagicSquare)).toBe(true);
    });
});
