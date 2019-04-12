'use strict';

const { breakingRecordsImpl } = require('./solution');

describe('breakingRecordsImpl', () => {
    test('it indicates no changes for a single score', () => {
        expect(breakingRecordsImpl([2])).toEqual({ min: 0, max: 0 });
    });

    test('it handles a single max change', () => {
        expect(breakingRecordsImpl([2, 3])).toEqual({ min: 0, max: 1 });
    });

    test('it handles a single min change', () => {
        expect(breakingRecordsImpl([2, 1])).toEqual({ min: 1, max: 0 });
    });

    test('it does not consider the same number to create a new maximum or minimum', () => {
        expect(breakingRecordsImpl([2, 1, 3, 1, 3])).toEqual({
            min: 1,
            max: 1
        });
    });

    test('it passes example 1', () => {
        expect(breakingRecordsImpl([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual({
            min: 4,
            max: 2
        });
    });

    test('it passes example 2', () => {
        expect(
            breakingRecordsImpl([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])
        ).toEqual({ min: 0, max: 4 });
    });
});
