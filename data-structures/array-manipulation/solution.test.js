'use strict';

const {
    arrayManipulation,
    applyQueries,
    applyQuery,
    allocateArrayOfSize,
    compareQueries,
    combineQueries,
    createRanges,
    combine
} = require('./solution');

describe('applyQuery', () => {
    test('it adds the value to the start and end of the range, inclusive', () => {
        const array = [0, 0, 0, 0, 0];
        expect(applyQuery(array, [2, 4, 5])).toEqual([0, 5, 5, 5, 0]);
    });
});

describe('allocateArrayOfSize', () => {
    test('it allocates the array correctly', () => {
        expect(allocateArrayOfSize(5)).toEqual([0, 0, 0, 0, 0]);
    });
});

describe('applyQueries', () => {
    test('it processes multiple queries', () => {
        const queries = [[1, 5, 2], [1, 5, 4]];

        expect(applyQueries([0, 0, 0, 0, 0], queries)).toEqual([6, 6, 6, 6, 6]);
    });

    test('it handles overlapping queries', () => {
        const queries = [[1, 4, 2], [3, 5, 6]];

        expect(applyQueries([0, 0, 0, 0, 0], queries)).toEqual([2, 2, 8, 8, 6]);
    });
});

describe('arrayManipulation', () => {
    test('it returns the maximum of the result', () => {
        const queries = [[1, 4, 2], [3, 5, 6]];
        expect(arrayManipulation(5, queries)).toBe(8);
    });

    test('it passes example 1', () => {
        const queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]];
        expect(arrayManipulation(10, queries)).toBe(10);
    });

    test('it passes example 2', () => {
        const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
        expect(arrayManipulation(5, queries)).toBe(200);
    });
});

describe('compareQueries', () => {
    test('it sorts based on the start of each query', () => {
        expect(compareQueries([1, 2], [2, 3])).toBe(-1);
        expect(compareQueries([2, 3], [1, 2])).toBe(1);
    });

    test('it sorts based on the end when the starts are equal', () => {
        expect(compareQueries([1, 2], [1, 3])).toBe(-1);
        expect(compareQueries([1, 3], [1, 2])).toBe(1);
    });

    test('it handles equal ranges', () => {
        expect(compareQueries([1, 3], [1, 3])).toBe(0);
    });
});

describe('combine', () => {
    test('it handles combining two equal ranges', () => {
        const { pre, combined } = combine([1, 4, 2], [1, 4, 6]);
        expect(pre).toBe(undefined);
        expect(combined).toEqual([1, 4, 8]);
    });

    describe('it handles combining combining ranges with equal starts', () => {
        test('when right is greater than left', () => {
            const { combined, post } = combine([1, 4, 2], [1, 6, 6]);
            expect(combined).toEqual([1, 4, 8]);
            expect(post).toEqual([5, 6, 6]);
        });

        test('when left is greater than left', () => {
            const { combined, post } = combine([1, 6, 6], [1, 4, 2]);
            expect(combined).toEqual([1, 4, 8]);
            expect(post).toEqual([5, 6, 6]);
        });
    });

    describe('it handles combining ranges with unequal starts', () => {
        test('when right is greater than left', () => {
            const { pre, combined } = combine([1, 4, 2], [2, 4, 4]);
            expect(pre).toEqual([1, 1, 2]);
            expect(combined).toEqual([2, 4, 6]);
        });

        test('when left is greater than right', () => {
            const { pre, combined } = combine([2, 4, 4], [1, 4, 2]);
            expect(pre).toEqual([1, 1, 2]);
            expect(combined).toEqual([2, 4, 6]);
        });
    });

    describe('it handles distinct ranges', () => {
        test('when the right is greater than the left', () => {
            const { pre, combined } = combine([1, 4, 2], [6, 8, 1]);
            expect(pre).toEqual([1, 4, 2]);
            expect(combined).toEqual([6, 8, 1]);
        });

        test('when the left is greater than the right', () => {
            const { pre, combined } = combine([6, 8, 1], [1, 4, 2]);
            expect(pre).toEqual([1, 4, 2]);
            expect(combined).toEqual([6, 8, 1]);
        });
    });

    describe('it handles combining ranges with unequal starts and ends', () => {
        test('when left is contained in right', () => {
            const { pre, combined, post } = combine([2, 4, 4], [1, 6, 2]);
            expect(pre).toEqual([1, 1, 2]);
            expect(combined).toEqual([2, 4, 6]);
            expect(post).toEqual([5, 6, 2]);
        });

        test('when right is contained in left', () => {
            const { pre, combined, post } = combine([1, 6, 2], [2, 4, 4]);
            expect(pre).toEqual([1, 1, 2]);
            expect(combined).toEqual([2, 4, 6]);
            expect(post).toEqual([5, 6, 2]);
        });

        test('when the left and right overlap', () => {
            const { pre, combined, post } = combine([1, 6, 2], [3, 8, 1]);
            expect(pre).toEqual([1, 2, 2]);
            expect(combined).toEqual([3, 6, 3]);
            expect(post).toEqual([7, 8, 1]);
        });
    });
});

describe('combineQueries', () => {
    test('it handles distinct ranges', () => {
        expect(combineQueries([1, 4, 2], [5, 6, 1])).toEqual([
            [1, 4, 2],
            [5, 6, 1]
        ]);
    });

    test('it adds equal ranges', () => {
        expect(combineQueries([1, 4, 2], [1, 4, 3])).toEqual([[1, 4, 5]]);
    });

    test.skip('it separates overlapped ranges', () => {
        expect(combineQueries([1, 4, 2], [3, 6, 5])).toEqual([
            [1, 2, 2],
            [3, 4, 7],
            [5, 6, 5]
        ]);
    });
});

describe('createRanges', () => {
    test('it handles adding two ranges', () => {
        const queries = [[1, 4, 2], [1, 4, 6]];
        expect(createRanges(5, queries)).toEqual([
            [1, 4, 8],
            undefined,
            undefined,
            undefined,
            undefined
        ]);
    });

    test('it handles different ranges', () => {
        const queries = [[1, 3, 2], [1, 5, 6]];
        expect(createRanges(5, queries)).toEqual([
            [1, 3, 8],
            undefined,
            undefined,
            [4, 5, 6],
            undefined
        ]);
    });

    test('it handles 3 queries', () => {
        const queries = [[1, 5, 6], [1, 3, 2], [1, 2, 9]];

        expect(createRanges(5, queries)).toEqual([
            [1, 2, 17],
            undefined,
            [3, 3, 8],
            [4, 5, 6],
            undefined
        ]);
    });
});
