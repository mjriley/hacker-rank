const { birthdayCakeCandles } = require('./solution');

describe('birthdayCakeCandles', () => {
    test('handles example', () => {
        expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2);
    });
});
