const { absolutePermutation } = require('./solution');

describe('absolutePermutation', () => {
    test('it returns an ordered permutation when the difference is 0', () => {
        expect(absolutePermutation(3, 0)).toEqual([1, 2, 3]);
    });

    test('it returns -1 when the difference asked for is greater than half the size of the permutation', () => {
        expect(absolutePermutation(3, 2)).toEqual([-1]);
    });

    test('it identifies when values conflict', () => {
        expect(absolutePermutation(3, 1)).toEqual([-1]);
    });

    test('it produces a correct permutation', () => {
        expect(absolutePermutation(2, 1)).toEqual([2, 1]);
    });

    test('it handles a larger example', () => {
        expect(absolutePermutation(4, 2)).toEqual([3, 4, 1, 2]);
    });

    test('error case', () => {
        expect(absolutePermutation(10, 1)).toEqual([
            2,
            1,
            4,
            3,
            6,
            5,
            8,
            7,
            10,
            9
        ]);
    });
});
