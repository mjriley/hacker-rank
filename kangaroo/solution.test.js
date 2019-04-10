const { kangaroo } = require('./solution');

describe('kangaroo', () => {
    test('it returns YES when the first jump of each would land at the same location', () => {
        expect(kangaroo(0, 2, 1, 1)).toBe('YES');
    });

    test('it returns NO when the jump distance will never catch up', () => {
        expect(kangaroo(0, 1, 1, 1)).toBe('NO');
    });

    test('it returns NO when x1 will skip over x2', () => {
        expect(kangaroo(0, 3, 1, 1)).toBe('NO');
    });

    test('it passes example 1', () => {
        expect(kangaroo(0, 3, 4, 2)).toBe('YES');
    });

    test('it passes example 2', () => {
        expect(kangaroo(0, 2, 5, 3)).toBe('NO');
    });
});
