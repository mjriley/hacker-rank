'use strict';

const { jumpingOnClouds } = require('./solution');

describe('jumpingOnClouds', () => {
    test('it handles when it is impossible to jump 2 clouds', () => {
        expect(jumpingOnClouds([0, 0])).toBe(1);
    });

    test('it jumps forward two clouds if there are no thunderheads', () => {
        expect(jumpingOnClouds([0, 0, 0])).toBe(1);
    });

    test('it always jumps forward two clouds if there are no thunderheads', () => {
        expect(jumpingOnClouds([0, 0, 0, 0, 0, 0, 0, 0])).toBe(4);
    });

    test('it will not use thunderheads', () => {
        expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0, 0])).toBe(5);
    });

    test('it passes example 1', () => {
        expect(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])).toBe(3);
    });

    test('it passes example 2', () => {
        expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4);
    });
});
