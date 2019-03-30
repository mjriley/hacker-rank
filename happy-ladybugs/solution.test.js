const { happyLadybugs } = require('./solution');

describe('happyLadybugs', () => {
    test('it passes example 1', () => {
        expect(happyLadybugs('RBY_YBR')).toBe('YES');
    });

    test('it passes example 2', () => {
        expect(happyLadybugs('X_Y___X')).toBe('NO');
    });

    test('it passes example 3', () => {
        expect(happyLadybugs('__')).toBe('YES');
    });

    test('it passes example 4', () => {
        expect(happyLadybugs('B_RRBR')).toBe('YES');
    });

    test('it is happy with an empty string', () => {
        expect(happyLadybugs('')).toBe('YES');
    });

    test('it fails a single ladybug', () => {
        expect(happyLadybugs('A')).toBe('NO');
    });

    test('it passes a single empty space', () => {
        expect(happyLadybugs('_')).toBe('YES');
    });

    test('it is happy when there are no empty spaces, but the bugs are already happy', () => {
        expect(happyLadybugs('AA')).toBe('YES');
    });

    test('it is not happy when there are no spaces, and the initial bugs are not happy', () => {
        expect(happyLadybugs('ABBA')).toBe('NO');
    });
});
