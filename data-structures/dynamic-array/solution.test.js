const { dynamicArray } = require('./solution');

describe('dynamicArray', () => {
    test('it works', () => {
        expect(
            dynamicArray(2, [
                [1, 0, 5],
                [1, 1, 7],
                [1, 0, 3],
                [2, 1, 0],
                [2, 1, 1]
            ])
        ).toEqual([7, 3]);
    });
});
