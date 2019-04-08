const {
    getLargestPlus,
    getArea,
    doesOverlap,
    orderPlusesBySize,
    getPlusesOfSize,
    twoPluses
} = require('./solution');

describe('twoPluses', () => {
    test('it handles all bad squares', () => {
        const grid = ['BB', 'BB'];
        expect(twoPluses(grid)).toBe(0);
    });

    test('it handles a plus with no overlap', () => {
        const grid = ['BG', 'BB'];
        expect(twoPluses(grid)).toBe(0);
    });

    test('it handles the situations where 2 non-max-size pluses are better', () => {
        // prettier-ignore
        const grid = [
            'BBGBBB',
            'BGGBGB',
            'GGGGGG',
            'BGGBGB',
            'BBGBBB'
        ];

        expect(twoPluses(grid)).toBe(25);
    });

    test('it passes example 1', () => {
        // prettier-ignore
        const grid = [
            'GGGGGG',
            'GBBBGB',
            'GGGGGG',
            'GGBBGB',
            'GGGGGG'
        ];

        expect(twoPluses(grid)).toBe(5);
    });

    test('it passes example 2', () => {
        // prettier-ignore
        const grid = [
            'BGBBGB',
            'GGGGGG',
            'BGBBGB',
            'GGGGGG',
            'BGBBGB',
            'BGBBGB'
        ];

        expect(twoPluses(grid)).toBe(25);
    });

    test('it passes failing case', () => {
        // prettier-ignore
        const grid = [
            'GBGBGGB',
            'GBGBGGB',
            'GBGBGGB',
            'GGGGGGG',
            'GGGGGGG',
            'GBGBGGB',
            'GBGBGGB'
        ];

        expect(twoPluses(grid)).toBe(45);
    });

    test('it passes another failing case', () => {
        // prettier-ignore
        const grid =[
            'BBBBBGGBGG',
            'GGGGGGGGGG',
            'GGGGGGGGGG',
            'BBBBBGGBGG',
            'BBBBBGGBGG',
            'GGGGGGGGGG',
            'BBBBBGGBGG',
            'GGGGGGGGGG',
            'BBBBBGGBGG',
            'GGGGGGGGGG'
        ];

        expect(twoPluses(grid)).toBe(85);
    });

    test('it passes the last failing test case', () => {
        // prettier-ignore
        const grid = [
            'GGGGGGGGGGGGGG',
            'GGBBBBGBBBBBGG',
            'GGBBBBGBBBBBGG',
            'GGBBBBGBBBBBGG',
            'GGGGGGGGGGGGGG',
            'GGGGGGGGGGGGGG',
            'GGGGGGGGGGGGGG',
            'GGGGGGGGGGGGGG',
            'GGBBBBGBBBBBGG',
            'GGBBBBGBBBBBGG',
            'GGGGGGGGGGGGGG',
            'GGBBBBGBBBBBGG',
            'GGBBBBGBBBBBGG',
            'GGGGGGGGGGGGGG'
        ];

        expect(twoPluses(grid)).toBe(125);
    });
});

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

    test('it handles testing the bottom edge', () => {
        // prettier-ignore
        const input = [
            'BBGBB',
            'BBGBB',
            'GGGGG',
            'BBGBB',
        ];

        expect(getLargestPlus(2, 2, input)).toBe(3);
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

    test('horizontal touching overlaps', () => {
        expect(
            doesOverlap({ size: 3, x: 2, y: 2 }, { size: 3, x: 4, y: 2 })
        ).toBe(true);
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

    test('vertical touching overlaps', () => {
        expect(
            doesOverlap(
                { size: 3, x: 2, y: 2 },
                {
                    size: 3,
                    x: 2,
                    y: 4
                }
            )
        ).toBe(true);
    });

    test('detects vertical and horizontal overlap', () => {
        expect(
            doesOverlap({ size: 5, x: 3, y: 3 }, { size: 5, x: 2, y: 2 })
        ).toBe(true);
    });

    test('handles when pluses touch', () => {
        expect(
            doesOverlap({ size: 5, x: 3, y: 3 }, { size: 3, x: 1, y: 1 })
        ).toBe(false);
    });

    test('it detects the right overlapping the left horizontally', () => {
        expect(
            doesOverlap({ size: 9, x: 5, y: 5 }, { size: 5, x: 6, y: 2 })
        ).toBe(true);
    });
});

describe('orderPlusesBySize', () => {
    test('it returns an empty list', () => {
        const pluses = {};
        pluses.max = 0;
        expect([...orderPlusesBySize(pluses, 5)]).toEqual([]);
    });

    test('it will re-use pluses', () => {
        const pluses = {
            5: [{ x: 1, y: 1 }]
        };
        pluses.max = 5;

        expect([...orderPlusesBySize(pluses, 5)]).toEqual([
            { x: 1, y: 1, size: 5 },
            { x: 1, y: 1, size: 3 },
            { x: 1, y: 1, size: 1 }
        ]);
    });
});

describe('getPlusesOfSize', () => {
    test('it handles an empty map', () => {
        const pluses = {};
        pluses.max = 0;
        expect([...getPlusesOfSize(5, pluses)]).toEqual([]);
    });

    test('it handles the max level', () => {
        const pluses = {
            5: [{ x: 1, y: 1 }, { x: 2, y: 2 }]
        };
        pluses.max = 5;

        expect([...getPlusesOfSize(5, pluses)]).toEqual([
            { x: 1, y: 1, size: 5 },
            { x: 2, y: 2, size: 5 }
        ]);
    });

    test('it shrinks larger pluses', () => {
        const pluses = {
            5: [{ x: 1, y: 1 }, { x: 2, y: 2 }]
        };
        pluses.max = 5;

        expect([...getPlusesOfSize(3, pluses)]).toEqual([
            { x: 1, y: 1, size: 3 },
            { x: 2, y: 2, size: 3 }
        ]);
    });

    test('it can handle a map with multiple sizes', () => {
        const pluses = {
            5: [{ x: 1, y: 1 }],
            3: [{ x: 2, y: 2 }],
            1: [{ x: 3, y: 3 }]
        };
        pluses.max = 5;

        expect([...getPlusesOfSize(1, pluses)]).toEqual([
            { x: 1, y: 1, size: 1 },
            { x: 2, y: 2, size: 1 },
            { x: 3, y: 3, size: 1 }
        ]);
    });

    test('it skips smaller pluses', () => {
        const pluses = {
            5: [{ x: 1, y: 1 }],
            3: [{ x: 2, y: 2 }]
        };
        pluses.max = 5;

        expect([...getPlusesOfSize(5, pluses)]).toEqual([
            { x: 1, y: 1, size: 5 }
        ]);
    });

    test('it can skip empty sizes', () => {
        const pluses = {
            5: [{ x: 1, y: 1 }],
            1: [{ x: 3, y: 3 }]
        };
        pluses.max = 5;

        expect([...getPlusesOfSize(1, pluses)]).toEqual([
            { x: 1, y: 1, size: 1 },
            { x: 3, y: 3, size: 1 }
        ]);
    });
});
