'use strict';

const { getMoneySpent } = require('./solution');

describe('getMoneySpent', () => {
    test('it should return -1 when no combination is under budget', () => {
        expect(getMoneySpent([10], [10], 10)).toBe(-1);
    });

    test('it returns the price of the keyboard and drive used', () => {
        expect(getMoneySpent([2], [5], 10)).toBe(7);
    });

    test('it returns the maximum pairing', () => {
        expect(getMoneySpent([2, 5], [1, 5], 10)).toBe(10);
    });

    test('it will not go over budget', () => {
        expect(getMoneySpent([2, 5], [1, 5], 9)).toBe(7);
    });

    test('it passes example 1', () => {
        expect(getMoneySpent([3, 1], [5, 2, 8], 10)).toBe(9);
    });

    test('it passes example 2', () => {
        expect(getMoneySpent([4], [5], 5)).toBe(-1);
    });
});
