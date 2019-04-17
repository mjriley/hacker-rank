'use strict';

const { sockMerchant } = require('./solution');

describe('sockMerchant', () => {
    test('it can handle no pairs', () => {
        expect(sockMerchant(1, [1])).toBe(0);
    });

    test('it can handle a single match', () => {
        expect(sockMerchant(2, [1, 1])).toBe(1);
    });

    test('it removes excess socks', () => {
        expect(sockMerchant(3, [1, 1, 1])).toBe(1);
    });

    test('it can match unordered socks', () => {
        expect(sockMerchant(5, [2, 1, 2, 1, 3])).toBe(2);
    });

    test('it matches multiple pairs of the same type', () => {
        expect(sockMerchant(5, [1, 1, 1, 1, 1, 1])).toBe(3);
    });

    test('it passes example 1', () => {
        expect(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
    });
});
