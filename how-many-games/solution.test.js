const { howManyGames } = require('./solution');

describe('howManyGames', () => {
    test('it purchases 0 games if insufficient funds are available', () => {
        expect(howManyGames(20, 3, 6, 19)).toBe(0);
    });

    test('it will purchase exactly 1 game if it has the initial cost in funds', () => {
        expect(howManyGames(20, 3, 6, 20)).toBe(1);
    });

    test('it will apply the discount to subsequence purchases', () => {
        expect(howManyGames(20, 3, 6, 37)).toBe(2);
    });

    test('it will respect the minimum purchase cost', () => {
        expect(howManyGames(20, 3, 19, 39)).toBe(2);
        expect(howManyGames(20, 3, 19, 37)).toBe(1);
    });

    test('it passes the example', () => {
        expect(howManyGames(20, 3, 6, 80)).toBe(6);
    });
});
