const { bonAppetitImpl } = require('./solution');

describe('bonAppetitImpl', () => {
    test('It passes example 1', () => {
        expect(bonAppetitImpl([3, 10, 2, 9], 1, 12)).toBe(5);
    });

    test('It passes example 2', () => {
        expect(bonAppetitImpl([3, 10, 2, 9], 1, 7)).toBe('Bon Appetit');
    });
});
