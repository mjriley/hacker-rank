'use strict';

const {
    organizingContainers,
    getNumBallsPerContainer,
    getNumBallsPerType,
    createContainerCapacityMap,
    IMPOSSIBLE,
    POSSIBLE
} = require('./solution');

describe('organizingContainers', () => {
    test('it handles a single container', () => {
        expect(organizingContainers([[5]])).toBe(POSSIBLE);
    });

    test('it fails when the same type of ball would be in different containers (even if those containers only contained that type)', () => {
        expect(organizingContainers([[5, 0], [5, 0]])).toBe(IMPOSSIBLE);
    });

    test('it can handle 3 containers', () => {
        expect(organizingContainers([[2, 3, 5], [1, 4, 2], [4, 5, 3]])).toBe(
            POSSIBLE
        );
    });

    test('it passes example 1', () => {
        expect(organizingContainers([[1, 1], [1, 1]])).toBe(POSSIBLE);
    });

    test('it passes example 2', () => {
        expect(organizingContainers([[0, 2], [1, 1]])).toBe(IMPOSSIBLE);
    });
});

describe('getNumBallsPerContainer', () => {
    test('it reduces the matrix into counts', () => {
        expect(
            getNumBallsPerContainer([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        ).toEqual([6, 15, 24]);
    });
});

describe('getNumBallsPerType', () => {
    test('it reduces the matrix into counts', () => {
        expect(getNumBallsPerType([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
            12,
            15,
            18
        ]);
    });
});

describe('createContainerCapacityMap', () => {
    test('it creates a valid map', () => {
        expect(createContainerCapacityMap([3, 2, 3, 4])).toEqual({
            2: 1,
            3: 2,
            4: 1
        });
    });
});
