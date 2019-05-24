'use strict';

const {
    rotateCoordinate,
    rotateCoordinateTimes,
    getRingSquares,
    rotateRing
} = require('./solution');

describe('rotateCoordinate', () => {
    test('it rotates a left-most point down', () => {
        expect(rotateCoordinate({ x: 0, y: 0 }, 4, 5)).toEqual({
            x: 0,
            y: 1
        });
    });

    test('it rotates the bottom-most point right', () => {
        expect(rotateCoordinate({ x: 0, y: 4 }, 4, 5)).toEqual({
            x: 1,
            y: 4
        });
    });

    test('it rotates the right-most point up', () => {
        expect(rotateCoordinate({ x: 3, y: 4 }, 4, 5)).toEqual({
            x: 3,
            y: 3
        });
    });

    test('it rotates the top-most point left', () => {
        expect(rotateCoordinate({ x: 3, y: 0 })).toEqual({
            x: 2,
            y: 0
        });
    });
});

describe('rotateCoordinateTimes', () => {
    test('it rotates a coordinate', () => {
        expect(rotateCoordinateTimes({ x: 0, y: 0 }, 4, 5, 12)).toEqual({
            x: 2,
            y: 0
        });
    });

    test('it rotates a coordinate back to the start', () => {
        expect(rotateCoordinateTimes({ x: 0, y: 0 }, 4, 5, 14)).toEqual({
            x: 0,
            y: 0
        });
    });
});

describe('getRingSquares', () => {
    const matrix = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
    ];

    test('it returns the outer squares', () => {
        expect([...getRingSquares(matrix, 0)]).toEqual([
            1,
            6,
            11,
            16,
            17,
            18,
            19,
            20,
            15,
            10,
            5,
            4,
            3,
            2
        ]);
    });

    test('it returns an offset ring', () => {
        expect([...getRingSquares(matrix, 1)]).toEqual([7, 12, 13, 14, 9, 8]);
    });
});

describe('rotateRing', () => {
    test('it can rotate the outer ring', () => {
        let matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20]
        ];

        rotateRing(matrix, 0, 5);

        expect(matrix).toEqual([
            [10, 15, 20, 19, 18],
            [5, 7, 8, 9, 17],
            [4, 12, 13, 14, 16],
            [3, 2, 1, 6, 11]
        ]);
    });

    test('it can rotate an inner ring', () => {
        let matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20]
        ];

        rotateRing(matrix, 1, 5);

        expect(matrix).toEqual([
            [1, 2, 3, 4, 5],
            [6, 12, 7, 8, 10],
            [11, 13, 14, 9, 15],
            [16, 17, 18, 19, 20]
        ]);
    });
});
