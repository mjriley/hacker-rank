const { fairRations } = require('./solution');

describe('fairRations', () => {
    test('it gives out no loafs when the line already has an even number of loaves', () => {
        expect(fairRations([2, 4])).toBe(0);
    });

    test('it gives out 2 loaves when 2 odd members remain', () => {
        expect(fairRations([1, 3])).toBe(2);
    });

    test('it returns NO if the 2 remaining members mismatch', () => {
        expect(fairRations([1, 2])).toBe('NO');
    });

    test('the first element does not add to the loaf count if it even', () => {
        expect(fairRations([2, 1, 3])).toBe(2);
    });

    test('the first element adds 2 and increments the remaining head if it is odd', () => {
        expect(fairRations([3, 0, 3])).toBe(4);
    });

    test('it passes the provided example', () => {
        expect(fairRations([2, 3, 4, 5, 6])).toBe(4);
    });

    test('it can return no if there are more than 2 elements', () => {
        expect(fairRations([3, 3, 3])).toBe('NO');
    });
});
