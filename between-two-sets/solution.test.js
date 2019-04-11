const { getTotalX, isBetween } = require('./solution');

describe('isBetween', () => {
    test('a number that can be evenly divided by all the factors, and which divides all the products returns true', () => {
        expect(isBetween(2, [2], [4])).toBe(true);
    });

    test('a number that is only evenly divided by all the factors but not the products returns false', () => {
        expect(isBetween(2, [2], [3])).toBe(false);
    });

    test('a number that only divides all the products evenly (but not the factors) returns false', () => {
        expect(isBetween(3, [2], [3])).toBe(false);
    });

    test('a number is never a factor of a smaller number', () => {
        expect(isBetween(2, [4], [4])).toBe(false);
    });
});

describe('getTotalX', () => {
    test('it treats the arrays inclusively', () => {
        expect(getTotalX([4], [4])).toBe(1);
    });

    test('it passes example 1', () => {
        expect(getTotalX([2, 4], [16, 32, 96])).toBe(3);
    });
});
