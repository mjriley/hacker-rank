const { getLargestPlus, getArea, doesOverlap } = require('./solution');

describe('getLargestPlus', () => {
    test('it returns 1 when the cell is surrounded by bad cells', () => {
        const input = ['BBB', 'BGB', 'BBB'];

        expect(getLargestPlus(1, 1, input)).toBe(1);
    });

    test('it expands on all sides to the first bad block', () => {
        const input = ['BBBBB', 'BBGBB', 'GGGGG', 'BBGBB', 'BBGBB'];
        expect(getLargestPlus(2, 2, input)).toBe(3);
    });

    test('it recognizes the edges as invalid', () => {
        const input = ['BBGB', 'BBGB', 'GGGG', 'BBGB', 'BBGB'];

        expect(getLargestPlus(2, 2, input)).toBe(3);
    });

    test('it handles when the edges are even', () => {
        const input = ['BBGBB', 'BBGBB', 'GGGGG', 'BBGBB', 'BBGBB'];

        expect(getLargestPlus(2, 2, input)).toBe(5);
    });
});

describe('getArea', () => {
    test('handles a single square', () => {
        expect(getArea(1)).toBe(1);
    });

    test('handles multi-cell pluses', () => {
        expect(getArea(5)).toBe(9);
    });
});

describe('doesOverlap', () => {
    test('it handles no overlaps', () => {
        expect(
            doesOverlap({ size: 3, x: 2, y: 2 }, { size: 3, x: 5, y: 2 })
        ).toBe(false);

        expect(
            doesOverlap({ size: 3, x: 5, y: 2 }, { size: 3, x: 2, y: 2 })
        ).toBe(false);
    });

    test('detects overlaps when they share a center', () => {
        expect(
            doesOverlap({ size: 3, x: 2, y: 2 }, { size: 1, x: 2, y: 2 })
        ).toBe(true);
    });

    test('detects when they overlap horizontally', () => {
        expect(
            doesOverlap({ size: 3, x: 2, y: 2 }, { size: 3, x: 3, y: 2 })
        ).toBe(true);
        expect(
            doesOverlap({ size: 3, x: 3, y: 2 }, { size: 3, x: 2, y: 2 })
        ).toBe(true);
    });

    test('horizontal touching does not overlap', () => {
        expect(
            doesOverlap({ size: 3, x: 2, y: 2 }, { size: 3, x: 4, y: 2 })
        ).toBe(false);
    });

    test('detects when they do not overlap vertically', () => {
        expect(
            doesOverlap({ size: 3, x: 2, y: 2 }, { size: 3, x: 2, y: 5 })
        ).toBe(false);
        expect(
            doesOverlap({ size: 3, x: 2, y: 5 }, { size: 3, x: 2, y: 2 })
        ).toBe(false);
    });

    test('detects when they overlap vertically', () => {
        expect(
            doesOverlap({ size: 3, x: 2, y: 2 }, { size: 3, x: 2, y: 3 })
        ).toBe(true);
    });

    test('vertical touching does not overlap', () => {
        expect(
            doesOverlap(
                { size: 3, x: 2, y: 2 },
                {
                    size: 3,
                    x: 2,
                    y: 4
                }
            )
        ).toBe(false);
    });

    test('detects vertical and horizontal overlap', () => {
        expect(
            doesOverlap({ size: 5, x: 3, y: 3 }, { size: 5, x: 2, y: 2 })
        ).toBe(true);
    });

    test('handles when pluses touch', () => {
        expect(
            doesOverlap({ size: 5, x: 3, y: 3 }, { size: 3, x: 2, y: 2 })
        ).toBe(false);
    });
});
