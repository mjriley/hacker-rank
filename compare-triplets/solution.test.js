const { compareTriplets, compareScores } = require('./solution');

test('no points are awarded when the scores match', () => {
    const [a, b] = compareScores(1, 1);

    expect([a, b]).toEqual([0, 0]);
});

test('a gets a point when his score is higher', () => {
    const [a, b] = compareScores(2, 1);
    expect([a, b]).toEqual([1, 0]);
});

test('b gets a point when his score is higher', () => {
    const [a, b] = compareScores(1, 2);
    expect([a, b]).toEqual([0, 1]);
});

test('all scores are summed together', () => {
    expect(compareTriplets([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
});
