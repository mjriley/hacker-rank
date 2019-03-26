const { workbook, getSpecialProblemsInChapter } = require('./solution');

describe('getSpecialProblemsInChapter', () => {
    test('it includes the starting page', () => {
        expect(getSpecialProblemsInChapter(1, 10, 3)).toBe(1);
    });

    test('it identifies a special problem when it occurs at the end of a page', () => {
        expect(getSpecialProblemsInChapter(5, 5, 5)).toBe(1);
    });

    test('it identifies a special problem that occurs in the middle of a page', () => {
        expect(getSpecialProblemsInChapter(3, 5, 5)).toBe(1);
    });

    test('it identifies the case where a chapter contains 2 special problems', () => {
        expect(getSpecialProblemsInChapter(3, 4, 3)).toBe(2);
    });

    test('it handles page sizes of 1', () => {
        expect(getSpecialProblemsInChapter(1, 10, 1)).toBe(10);
    });
});

describe('workbook', () => {
    test('it passes the example', () => {
        const problemsPerChapter = [4, 2, 6, 1, 10];
        expect(workbook(5, 3, problemsPerChapter)).toBe(4);
    });
});
