const { numberToWord, timeInWords } = require('./solution');

describe('timeInWords', () => {
    test("treats 0 minutes as o'clock", () => {
        expect(timeInWords(5, 0)).toBe("five o' clock");
    });

    test('treats 1 <= minutes <= 30 as past', () => {
        expect(timeInWords(5, 1)).toBe('one minute past five');
        expect(timeInWords(5, 29)).toBe('twenty nine minutes past five');
    });

    test('handles quarter past', () => {
        expect(timeInWords(5, 15)).toBe('quarter past five');
    });

    test('handles half past', () => {
        expect(timeInWords(5, 30)).toBe('half past five');
    });

    test('treats 30 < minutes as to', () => {
        expect(timeInWords(5, 31)).toBe('twenty nine minutes to six');
        expect(timeInWords(5, 59)).toBe('one minute to six');
        expect(timeInWords(5, 45)).toBe('quarter to six');
    });

    test('passes the given example', () => {
        expect(timeInWords(5, 47)).toBe('thirteen minutes to six');
    });
});

describe('numberToWord', () => {
    test('single digits', () => {
        expect(numberToWord(1)).toBe('one');
        expect(numberToWord(2)).toBe('two');
        expect(numberToWord(3)).toBe('three');
        expect(numberToWord(4)).toBe('four');
        expect(numberToWord(5)).toBe('five');
        expect(numberToWord(6)).toBe('six');
        expect(numberToWord(7)).toBe('seven');
        expect(numberToWord(8)).toBe('eight');
        expect(numberToWord(9)).toBe('nine');
    });

    test('handles numbers divisible by 10', () => {
        expect(numberToWord(10)).toBe('ten');
        expect(numberToWord(20)).toBe('twenty');
    });

    test('handles 11-19', () => {
        expect(numberToWord(11)).toBe('eleven');
        expect(numberToWord(12)).toBe('twelve');
        expect(numberToWord(13)).toBe('thirteen');
        expect(numberToWord(14)).toBe('fourteen');
        expect(numberToWord(15)).toBe('fifteen');
        expect(numberToWord(16)).toBe('sixteen');
        expect(numberToWord(17)).toBe('seventeen');
        expect(numberToWord(18)).toBe('eighteen');
        expect(numberToWord(19)).toBe('nineteen');
    });

    test('handles 21-29', () => {
        expect(numberToWord(21)).toBe('twenty one');
        expect(numberToWord(29)).toBe('twenty nine');
    });
});
