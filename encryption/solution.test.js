'use strict';

const {
    encryption,
    getRowAndColumnCount,
    removeSpaces,
    createCharacterGrid,
    getColString
} = require('./solution');

describe('encryption', () => {
    test('it passes example 1', () => {
        expect(encryption('have a nice day')).toBe('hae and via ecy');
    });

    test('it passes example 2', () => {
        expect(encryption('feedthedog')).toBe('fto ehg ee dd');
    });

    test('it passes example 3', () => {
        expect(encryption('chillout')).toBe('clu hlt io');
    });
});

describe('getRowAndColumnCount', () => {
    test('it handles an integer sqrt', () => {
        expect(getRowAndColumnCount(9)).toEqual({ rows: 3, cols: 3 });
    });

    test('it identifies when the floor is usable', () => {
        expect(getRowAndColumnCount(5)).toEqual({ rows: 2, cols: 3 });
    });

    test('it identifies when it needs to use the ceiling', () => {
        expect(getRowAndColumnCount(8)).toEqual({ rows: 3, cols: 3 });
    });
});

describe('removeSpaces', () => {
    test('it removes all spaces', () => {
        expect(removeSpaces(' hello world ')).toBe('helloworld');
    });
});

describe('createCharacterGrid', () => {
    test('it produces the correct output', () => {
        expect(createCharacterGrid('helloworld')).toEqual([
            ['h', 'e', 'l', 'l'],
            ['o', 'w', 'o', 'r'],
            ['l', 'd', undefined, undefined]
        ]);
    });
});

describe('getColString', () => {
    const matrix = [
        ['h', 'e', 'l', 'l'],
        ['o', 'w', 'o', 'r'],
        ['l', 'd', undefined, undefined]
    ];

    test('it returns the first column', () => {
        expect(getColString(matrix, 0)).toBe('hol');
    });

    test('it removes undefineds', () => {
        expect(getColString(matrix, 3)).toBe('lr');
    });
});
