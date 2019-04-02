const { bomberMan } = require('./solution');

describe('bomberMan', () => {
    const grid = ['.....', '.....', '.....', 'O....', '.....'];

    test('returns the original grid when time = 1', () => {
        expect(bomberMan(1, grid)).toEqual([
            '.....',
            '.....',
            '.....',
            'O....',
            '.....'
        ]);
    });

    test('returns all cells with a bomb whenever the time is even', () => {
        expect(bomberMan(4, grid)).toEqual([
            'OOOOO',
            'OOOOO',
            'OOOOO',
            'OOOOO',
            'OOOOO'
        ]);
    });

    test('it detonates the bombs at time 3', () => {
        expect(bomberMan(3, grid)).toEqual([
            'OOOOO',
            'OOOOO',
            '.OOOO',
            '..OOO',
            '.OOOO'
        ]);
    });

    test('it resets back on the first detonation', () => {
        expect(bomberMan(5, grid)).toEqual([
            '.....',
            '.....',
            '.....',
            'O....',
            '.....'
        ]);
    });

    test('it repeats the cycle', () => {
        expect(bomberMan(7, grid)).toEqual([
            'OOOOO',
            'OOOOO',
            '.OOOO',
            '..OOO',
            '.OOOO'
        ]);
    });

    test('it handles empty squares surrounded by bombs', () => {
        const grid = ['.....', '.....', 'O....', '.O...', 'O....'];

        expect(bomberMan(5, grid)).toEqual([
            '.....',
            '.....',
            'O....',
            'OO...',
            'O....'
        ]);
    });

    test('it passes the example', () => {
        const grid = [
            '.......',
            '...O...',
            '....O..',
            '.......',
            'OO.....',
            'OO.....'
        ];

        expect(bomberMan(3, grid)).toEqual([
            'OOO.OOO',
            'OO...OO',
            'OOO...O',
            '..OO.OO',
            '...OOOO',
            '...OOOO'
        ]);
    });
});
