'use strict';

const { migratoryBirds } = require('./solution');

describe('migratoryBirds', () => {
    test('it returns the most common type of bird', () => {
        expect(migratoryBirds([1, 1, 2, 2, 2])).toBe(2);
    });

    test('it returns the lowest type if there is a tie', () => {
        expect(migratoryBirds([1, 1, 1, 2, 2, 2])).toBe(1);
    });

    test('it passes example 1', () => {
        expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
    });

    test('it passes example 2', () => {
        expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
    });
});
