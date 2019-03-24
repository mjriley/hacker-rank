const arraySum = require('./solution');

test('empty array is 0', () => {
    expect(arraySum([])).toBe(0);
});

test('returns the sum of a single digit', () => {
    expect(arraySum([1])).toBe(1);
});

test('sums up all digits', () => {
    expect(arraySum([1, 2, 3])).toBe(6);
});
