'use strict';

const { countingSortImpl: countingSort } = require('./solution');

describe('countingSort', () => {
    it('handles two elements', () => {
        expect(
            countingSort([
                ['0', 'a'],
                ['1', 'b'],
            ])
        ).toEqual('- b');
    });

    it('sorts the elements', () => {
        expect(
            countingSort([
                ['4', 'a'],
                ['3', 'b'],
                ['2', 'c'],
                ['1', 'd'],
            ])
        ).toEqual('d c - -');
    });

    it('handles duplicate values', () => {
        expect(
            countingSort([
                ['4', 'v'],
                ['1', 'b'],
                ['4', 'k'],
                ['1', 'o'],
            ])
        ).toEqual('- o - k');
    });

    it('passes the example', () => {
        expect(
            countingSort([
                ['0', 'ab'],
                ['6', 'cd'],
                ['0', 'ef'],
                ['6', 'gh'],
                ['4', 'ij'],
                ['0', 'ab'],
                ['6', 'cd'],
                ['0', 'ef'],
                ['6', 'gh'],
                ['0', 'ij'],
                ['4', 'that'],
                ['3', 'be'],
                ['0', 'to'],
                ['1', 'be'],
                ['5', 'question'],
                ['1', 'or'],
                ['2', 'not'],
                ['4', 'is'],
                ['2', 'to'],
                ['4', 'the'],
            ])
        ).toEqual(
            '- - - - - to be or not to be - that is the question - - - -'
        );
    });
});
