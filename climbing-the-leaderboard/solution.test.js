'use strict';

const { climbingLeaderboard } = require('./solution');

describe('climbingLeaderboard', () => {
    test('it can insert a new high score', () => {
        expect(climbingLeaderboard([100, 90, 80], [110])).toEqual([1]);
    });

    test('it will find a mid-rank score', () => {
        expect(climbingLeaderboard([100, 90, 80], [85])).toEqual([3]);
    });

    test('it will find the lowest score', () => {
        expect(climbingLeaderboard([100, 90, 80], [70])).toEqual([4]);
    });

    test('it will identify a tied score', () => {
        expect(climbingLeaderboard([100, 90, 80], [90])).toEqual([2]);
    });

    test('it combines tied scores in the score array', () => {
        expect(climbingLeaderboard([100, 90, 90, 80], [85])).toEqual([3]);
    });

    test('it can handle multiple scores', () => {
        expect(climbingLeaderboard([100, 90, 80], [70, 85, 90, 110])).toEqual([
            4,
            3,
            2,
            1
        ]);
    });

    test('it handles example 1', () => {
        expect(
            climbingLeaderboard(
                [100, 100, 50, 40, 40, 20, 10],
                [5, 25, 50, 120]
            )
        ).toEqual([6, 4, 2, 1]);
    });

    test('it handles example 2', () => {
        expect(
            climbingLeaderboard(
                [100, 90, 90, 80, 75, 60],
                [50, 65, 77, 90, 102]
            )
        ).toEqual([6, 5, 4, 2, 1]);
    });
});
