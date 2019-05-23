'use strict';

const {
    almostSortedImpl: almostSorted,
    isSorted,
    identifyReversedSegment,
    identifySwappedElements
} = require('./solution');

describe('almostSorted', () => {
    test('it handles when an array is already sorted', () => {
        expect(almostSorted([1, 2, 3, 4])).toEqual(['yes']);
    });

    test('it handles when the array has a reversed segment', () => {
        expect(almostSorted([1, 2, 5, 4, 3, 6, 7, 8])).toEqual([
            'yes',
            'reverse 3 5'
        ]);
    });

    test('it handles when the array has swapped elements', () => {
        expect(almostSorted([1, 5, 3, 4, 2, 6, 7])).toEqual([
            'yes',
            'swap 2 5'
        ]);
    });

    test('it prefers swaps when both are possible', () => {
        expect(almostSorted([1, 3, 2, 4])).toEqual(['yes', 'swap 2 3']);
    });

    test('it handles when no ordering is possible', () => {
        expect(almostSorted([1, 5, 3, 4, 2, 6, 10, 7])).toEqual(['no']);
    });
});

describe('isSorted', () => {
    test('identifies a sorted array', () => {
        expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
    });

    test('identifies an unsorted array', () => {
        expect(isSorted([1, 2, 3, 4, 6, 5])).toBe(false);
    });
});

describe('identifySwappedElements', () => {
    test('it handles 2 elements in the middle of the array', () => {
        expect(identifySwappedElements([1, 5, 3, 4, 2, 6])).toEqual({
            found: true,
            left: 2,
            right: 5
        });
    });

    test('it handles elements at the ends', () => {
        expect(identifySwappedElements([5, 2, 3, 4, 1])).toEqual({
            found: true,
            left: 1,
            right: 5
        });
    });

    test('it returns false when there is only 1 unsorted element', () => {
        const result = identifySwappedElements([1, 2, 7, 4, 5]);
        expect(result.found).toBe(false);
    });

    test('it returns false when there are more than 2 unsorted elements', () => {
        const result = identifySwappedElements([1, 4, 3, 2, 5, 8, 7]);
        expect(result.found).toBe(false);
    });
});

describe('identifyReversedSegment', () => {
    test('it handles just the reversed segment', () => {
        expect(identifyReversedSegment([5, 4, 3, 2, 1])).toEqual({
            found: true,
            start: 1,
            end: 5
        });
    });

    test('it handles when the reversed segment is at the start', () => {
        expect(identifyReversedSegment([5, 4, 3, 2, 1, 6])).toEqual({
            found: true,
            start: 1,
            end: 5
        });
    });

    test('it handles when the reversed segment is at the end', () => {
        expect(identifyReversedSegment([1, 5, 4, 3, 2])).toEqual({
            found: true,
            start: 2,
            end: 5
        });
    });

    test('it handles when the reversed segment is nested', () => {
        expect(identifyReversedSegment([1, 5, 4, 3, 2, 6])).toEqual({
            found: true,
            start: 2,
            end: 5
        });
    });

    test('it handles when the reversed segment has an extra sorted sequence', () => {
        expect(identifyReversedSegment([1, 2, 5, 4, 3, 6, 7, 8])).toEqual({
            found: true,
            start: 3,
            end: 5
        });
    });

    test('it rejects a reversed sequence which wont be sorted', () => {
        const result = identifyReversedSegment([1, 7, 6, 5, 2, 3]);
        expect(result.found).toBe(false);
    });

    test('it rejects a valid reversed sequence which has an additional unsorted sequence', () => {
        const result = identifyReversedSegment([1, 5, 4, 3, 2, 9, 6]);
        expect(result.found).toBe(false);
    });
});
