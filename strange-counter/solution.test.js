const { strangeCounter } = require('./solution');

describe('strangeCounter', () => {
    test('it handles time 1', () => {
        expect(strangeCounter(1)).toBe(3);
    });

    test('it handles time 2', () => {
        expect(strangeCounter(2)).toBe(2);
    });

    test('it handles the second cycle', () => {
        expect(strangeCounter(4)).toBe(6);
    });

    test('it handles a value within the second cycle', () => {
        expect(strangeCounter(9)).toBe(1);
    });

    test('it handles the third cycle', () => {
        expect(strangeCounter(10)).toBe(12);
    });
});
