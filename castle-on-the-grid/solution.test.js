'use strict';

const { getReachableSquares, minimumMoves } = require('./solution');

function createGrid(size) {
    const storage = new Array(size);
    for (let y = 0; y < storage.length; y++) {
        storage[y] = '.'.repeat(size);
    }

    return storage;
}

function createVisitedGrid(size) {
    const storage = new Array(size);
    for (let y = 0; y < storage.length; y++) {
        storage[y] = new Array(size);
    }

    return storage;
}

describe('minimumMoves', () => {
    it('passes the example', () => {
        const grid = ['.X.', '.X.', '...'];

        expect(minimumMoves(grid, 0, 0, 2, 0)).toBe(3);
    });

    it('passes the minimum example', () => {
        const grid = ['...', '..X', 'X..'];

        expect(minimumMoves(grid, 0, 0, 1, 2)).toBe(2);
    });

    it('passes failing example', () => {
        const grid = [
            '.X..X.X..X..X.......XX..XX....X.X...X........X.....XX.X.X...X.X...X..X',
            '...X.....XX.........XX......X.X.......X......X..XX.X..X..X.....X.X....',
            '............X.......X........X..X.X......X.......X...X.X.....X.X...X..',
            '.........X....XX.X.X.X......X..X......X.....X.........X..X.......XX...',
            '.....X.......X.X.....XX.....X.XXX.........X.....X.X....XX......XX.....',
            '..X....X..........................X...X.........XX.....X..............',
            '......X.......X...XX.....X.X....X.......X.............X........X.X....',
            '...X.X.XX.XX...X............XX...X.....X..X..X....X.........X.........',
            'X.XX........X..........XX..X.X..X.XX.XXX..X........X..X.....XX......X.',
            '......X..XXX.......X..XX.XX...........X.....XX..X..X.X......X.X...X...',
            'X........X.X....X..X..................XX......X..X.......X.....X..X...',
            '...X......X....XX.......X.....X...........X..X....X.....XXX...X...X.X.',
            '......X..X....X.XXX.X.....X..X....XX.....X....X.....X...X...........X.',
            '....X..X.X...XX..X.X.X..X.....X......X..X......X.X.X.X......X......X..',
            '..X..............X...X.........X........X...........X..X.X......X....X',
            '.X....X..X......X.........X.....XX....XX............XX..X...X...X.....',
            '...........X....X.X...XX...X......X...............X....XX..........X..',
            '.X..X..XX..X...X.....XX...XX...........X.....X..XXX.........XX..X....X',
            '.XX........XX.XX..........XX............X.........X.XXXX.X.X.........X',
            '.....X........X......X.............X.......X............X....X...X..X.',
            'X..X.X..X...........XX..X.....X......X...XXX........XX...........X....',
            '..X....X.XX.X.....X..X..X...........X......X..........X.....X.......X.',
            '..........X.X...X.....X....XX.XX.......XX...X.............XXX..X..X..X',
            'X.....X....XX...X.X...X.X.X..X.X..X....X..X..XXX...X...........X.X.X..',
            '...XX.X....X...X.....XX...X.....X..XXX.......XX......X....XX......X.XX',
            'X..X......X.....X......X.X...X............X.X..........X.X.X..X......X',
            '..X....X..X.X....XX....X.XXX..X.XX.....X........X..X...X...X.X......X.',
            '.......X...............XX..........X...X......XX...X.X........X.......',
            'XXX....X.....X..X.....X.X.....XX..X.......X..X.....XX.......X..X.....X',
            '.......X......X.......X..X.......X.........X...X.........X...X.....XXX',
            '...X..X....X....X.X..XX......X.......X............X...................',
            '.X.....X............X...............X.....X.X...X...X.XXX..X....X..XXX',
            '..........X........X...........XX..........X..............X.....XX.X..',
            '.X...............XX..X.X......................X..X...X......X.....X...',
            'XX..X.X..XXXX..X..........XX..XX..X.............X................XX...',
            '......X.XX..X...............X.X....X....X......X.....X..XX............',
            '..X.X..X..X......X..X................X......X...X......X.XX...X..X....',
            '.........X............X......X......XX.X..................X.....X.....',
            'X..X....X...........X.....XX..X.......XXX.....XXX.......X....X.....X.X',
            'XX..............XXX....X.X......XX..........X....X.....X......X.......',
            '.......X.XX.......X......X..XXX.............X.......XX.....X.XX.......',
            '..X.X.....XXX.X.......X.X.........X..X...X...X..X.....X.....XX.......X',
            '..XX........XX....X..XX..X...XXX.................X..X...........X.....',
            '...X........X..X.....X......X.X...XXX..X..XX.X..X...X........X.XXXX...',
            '...X.X....X.....X.X.......X..............X...X.X.XX...X...XX.X.......X',
            '......X...........X.......X.....XXXX...........X.X.XX......X...X......',
            '....X......X......XXX..XX.X.......X.............X.......X.........X..X',
            '..X..X..X......X.....X............XX....X..........X......X..X..X.X...',
            'X.........X..X..XX........X.X.X......................X.X....X.....X...',
            '.....X.X...X.X..X...X...XX...X...X............X..............X...X....',
            '......................X....X...X....X.X..............XX.....X.........',
            '.................X..X.....X.....XX......X.......X......X.........X.X..',
            '...........X..X...X.....X..X.............X............X..X..XX.X......',
            'X..........X.X..X..X..........X.XX.............X...X.XX........X......',
            '..XX.XX.....X.....X..X.....X.....X...X...........X..X..X....X.........',
            '..X.XX...X.X....X.X....X..X.X...X..X.........X..X.....................',
            '............X...................X....X.X......X.XX..X...X....X..XX.XX.',
            '...X..X.X....X..............X..X.....X.X.........X..........X.......X.',
            '..X...........................X......X.X...X........X.................',
            '.........X..X...............X...........X..X.X......X.................',
            '..XX.............XX.X.........X....XX........X..X...X........X.....X..',
            '.............X.X....X.X...X...X.....X...X.....X.....X..X......X......X',
            '.....X....X.X.X...XXX...X.X.X.X...X...X.X.....X..X...........X.X.X...X',
            '...XX.X...XX......X..........X.......XX..X.......X...X..X.X......X....',
            '.......X.......X....................X..........XX.....XXXX..X.X.......',
            '.....X...XX...X........X..X...X.X...X..........X...X.........X........',
            'XXX..XX.....X...................X.....X.X.......X.X.X..X..............',
            '....X.........X.....X.X...XX.....XX......X..........XX..X.XXX...X.X...',
            '..X...............X.XX.......X....X......X......X.X.X.......X.......X.',
            '..X.X.......XXX..X....X...X....X.....X.X......X..X......X.............',
        ];

        expect(minimumMoves(grid, 42, 2, 12, 68)).toEqual(13);
    });
});

describe('getReachableSquares', () => {
    it('gets the reachable squares to the south', () => {
        const grid = createGrid(4);
        const visitedGrid = createVisitedGrid(4);

        const reachableSquares = getReachableSquares(
            { x: 0, y: 0 },
            'south',
            grid,
            visitedGrid
        );
        expect(reachableSquares).toEqual([
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
        ]);
    });

    it('gets the reachable squares to the north', () => {
        const grid = createGrid(4);
        const visitedGrid = createVisitedGrid(4);

        const reachableSquares = getReachableSquares(
            { x: 1, y: 1 },
            'north',
            grid,
            visitedGrid
        );
        expect(reachableSquares).toEqual([{ x: 1, y: 0 }]);
    });

    it('gets the reachable squares to the east', () => {
        const grid = createGrid(4);
        const visitedGrid = createVisitedGrid(4);

        const reachableSquares = getReachableSquares(
            { x: 1, y: 1 },
            'east',
            grid,
            visitedGrid
        );
        expect(reachableSquares).toEqual([
            { x: 2, y: 1 },
            { x: 3, y: 1 },
        ]);
    });

    it('gets the reachable squares to the west', () => {
        const grid = createGrid(4);
        const visitedGrid = createVisitedGrid(4);

        const reachableSquares = getReachableSquares(
            { x: 1, y: 1 },
            'west',
            grid,
            visitedGrid
        );
        expect(reachableSquares).toEqual([{ x: 0, y: 1 }]);
    });
});
