'use strict';

const { matchingStrings } = require('./solution');

describe('matchingStrings', () => {
    test("it doesn't matches a substring", () => {
        expect(matchingStrings(['abc'], ['ab'])).toEqual([0]);
    });

    test('it matches an exact string', () => {
        expect(matchingStrings(['abc'], ['abc'])).toEqual([1]);
    });

    test('it handles example 1', () => {
        expect(
            matchingStrings(
                ['aba', 'baba', 'aba', 'xzxb'],
                ['aba', 'xzxb', 'ab']
            )
        ).toEqual([2, 1, 0]);
    });

    test('it handles example 2', () => {
        expect(
            matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh'])
        ).toEqual([1, 0, 1]);
    });

    test('it handles example 3', () => {
        expect(
            matchingStrings(
                [
                    'abcde',
                    'sdaklfj',
                    'asdjf',
                    'na',
                    'basdn',
                    'sdaklfj',
                    'asdjf',
                    'na',
                    'asdjf',
                    'na',
                    'basdn',
                    'sdaklfj',
                    'asdjf'
                ],
                ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']
            )
        ).toEqual([1, 3, 4, 3, 2]);
    });
});
