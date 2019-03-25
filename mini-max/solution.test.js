const { getMiniMaxSum, sum, getMinAndMax } = require('./solution');

describe('getMinAndMax', () => {
    test('retrieves minimum element', () => {
        expect(getMinAndMax([2, 4, 3, 1, 2])).toEqual([1, 4]);
    });
});

describe('sum', () => {
    test('correctly identifies sum', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });
});

describe('getMiniMaxSum', () => {
    test('handles the input example', () => {
        expect(getMiniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
    });
});
