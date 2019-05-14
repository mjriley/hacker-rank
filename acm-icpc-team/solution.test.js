'use strict';

const {
    acmTeam,
    getMissingTopics,
    getMissingTeamTopics
} = require('./solution');

describe('acmTeam', () => {
    test('it passes example 1', () => {
        expect(acmTeam(['10101', '11110', '00010'])).toEqual([5, 1]);
    });

    test('it passes example 2', () => {
        expect(acmTeam(['10101', '11100', '11010', '00101'])).toEqual([5, 2]);
    });
});

describe('getMissingTopics', () => {
    test('it returns an empty array when all topics are known', () => {
        expect(getMissingTopics('111')).toEqual([]);
    });

    test('it handles missing topics at the start', () => {
        expect(getMissingTopics('001')).toEqual([0, 1]);
    });

    test('it handles missing topics at the end', () => {
        expect(getMissingTopics('100')).toEqual([1, 2]);
    });
});

describe('getMissingTeamTopics', () => {
    test('it returns the count of the missing topics when the teammember knowns none', () => {
        expect(getMissingTeamTopics([0, 1], '000')).toBe(2);
    });

    test('it returns 0 when the other team member knows the remaining topics', () => {
        expect(getMissingTeamTopics([0, 1], '110')).toBe(0);
    });

    test('it can handle partial knowledge of topics', () => {
        expect(getMissingTeamTopics([0, 1], '010')).toBe(1);
    });
});
