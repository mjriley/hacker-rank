'use strict';

const { hourglassSum, hourglassValue, getMatrices } = require('./solution');

describe('hourglassSum', () => {
    test('it finds the maximum hourglass in a row', () => {
        const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

        expect(hourglassSum(matrix)).toBe(49);
    });

    test('it finds the maximum hourglass in a column', () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

        expect(hourglassSum(matrix)).toBe(56);
    });
});

describe('hourglassValue', () => {
    test('it sums each element in the hourglass', () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

        expect(hourglassValue(matrix)).toBe(35);
    });
});

describe('getMatrices', () => {
    test('it handles the first row of matrices', () => {
        const matrices = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15]
        ];

        expect([...getMatrices(matrices)]).toEqual([
            [[1, 2, 3], [6, 7, 8], [11, 12, 13]],
            [[2, 3, 4], [7, 8, 9], [12, 13, 14]],
            [[3, 4, 5], [8, 9, 10], [13, 14, 15]]
        ]);
    });

    test('it handles the first column of matrices', () => {
        const matrices = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12],
            [13, 14, 15]
        ];

        expect([...getMatrices(matrices)]).toEqual([
            [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            [[4, 5, 6], [7, 8, 9], [10, 11, 12]],
            [[7, 8, 9], [10, 11, 12], [13, 14, 15]]
        ]);
    });
});
