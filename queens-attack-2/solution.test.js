'use strict';

const { queensAttack, getDirection, DIRECTIONS } = require('./solution');

describe('queensAttack', () => {
    test('it handles no obstacles', () => {
        expect(queensAttack(4, 0, 2, 2, [])).toBe(11);
    });

    test('it handles an obstacle', () => {
        expect(queensAttack(4, 1, 2, 2, [[1, 1]])).toBe(10);
    });

    test('it uses the closest obstacle', () => {
        expect(queensAttack(5, 2, 2, 2, [[5, 5], [3, 3]])).toBe(11);
    });

    test('it handles a single space', () => {
        expect(queensAttack(1, 0, 1, 1, [])).toBe(0);
    });

    test('it passes example 1', () => {
        expect(queensAttack(4, 0, 4, 4, [])).toBe(9);
    });

    test('it passes example 2', () => {
        expect(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])).toBe(10);
    });
});

describe('getDirection', () => {
    test('it returns north', () => {
        expect(getDirection([2, 1], [1, 1])).toBe(DIRECTIONS.NORTH);
    });

    test('it returns south', () => {
        expect(getDirection([1, 1], [2, 1])).toBe(DIRECTIONS.SOUTH);
    });

    test('it returns east', () => {
        expect(getDirection([1, 2], [1, 1])).toBe(DIRECTIONS.EAST);
    });

    test('it returns west', () => {
        expect(getDirection([1, 1], [1, 2])).toBe(DIRECTIONS.WEST);
    });

    test('it returns northeast', () => {
        expect(getDirection([2, 3], [1, 2])).toBe(DIRECTIONS.NORTHEAST);
    });

    test('it returns northwest', () => {
        expect(getDirection([2, 1], [1, 2])).toBe(DIRECTIONS.NORTHWEST);
    });

    test('it returns southeast', () => {
        expect(getDirection([1, 2], [2, 1])).toBe(DIRECTIONS.SOUTHEAST);
    });

    test('it returns southwest', () => {
        expect(getDirection([1, 2], [2, 3])).toBe(DIRECTIONS.SOUTHWEST);
    });

    test('it returns no direction', () => {
        expect(getDirection([1, 1], [2, 3])).toBe(DIRECTIONS.NONE);
    });
});
