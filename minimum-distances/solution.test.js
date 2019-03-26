const { getDistanceBetweenIndices, minimumDistances } = require('./solution');

describe('mimumumDistances', () => {
    test('if no matches elements are found, it returns -1', () => {
        expect(minimumDistances([])).toBe(-1);
    });

    test('it passes the example', () => {
        expect(minimumDistances([7, 1, 3, 4, 1, 7])).toBe(3);
    });
});

describe('getDistanceBetweenIndices', () => {
    test('it computes distance correctly', () => {
        expect(getDistanceBetweenIndices(0, 4)).toBe(4);
    });
});
