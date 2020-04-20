'use strict';

const { sortBig, bigSorting } = require('./solution');

describe('bigSorting', () => {
    it('passes example 1', () => {
        expect(
            bigSorting([
                '31415926535897932384626433832795',
                '1',
                '3',
                '10',
                '3',
                '5',
            ])
        ).toEqual([
            '1',
            '3',
            '3',
            '5',
            '10',
            '31415926535897932384626433832795',
        ]);
    });

    it('passes example 2', () => {
        expect(
            bigSorting([
                '1',
                '2',
                '100',
                '12303479849857341718340192371',
                '3084193741082937',
                '3084193741082938',
                '111',
                '200',
            ])
        ).toEqual([
            '1',
            '2',
            '100',
            '111',
            '200',
            '3084193741082937',
            '3084193741082938',
            '12303479849857341718340192371',
        ]);
    });
});

// Leaving this commented, because it seems to mess up the jest plugin, but all tests are passing

// describe('sortBig', () => {
//     describe('basic small numbers', () => {
//         describe('of same length', () => {
//             it('handles less than', () => {
//                 expect(sortBig('1', '2')).toBeLessThan(0);
//             });

//             it('handles equality', () => {
//                 expect(sortBig('1', '1')).toEqual(0);
//             });

//             it('handles greater than', () => {
//                 expect(sortBig('2', '1')).toBeGreaterThan(0);
//             });
//         });

//         describe('of different length', () => {
//             it('handles greater than', () => {
//                 expect(sortBig('12', '2')).toBeGreaterThan(0);
//             });

//             it('handles less than', () => {
//                 expect(sortBig('2', '12')).toBeLessThan(0);
//             });
//         });
//     });

//     describe('huge numbers', () => {
//         describe('of same length', () => {
//             it('handles less than', () => {
//                 expect(
//                     sortBig(
//                         '44444444444444444444444444',
//                         '44444444444444444444444445'
//                     )
//                 ).toBeLessThan(0);
//             });

//             it('handles greater than', () => {
//                 expect(
//                     sortBig(
//                         '44444444444444444444444445',
//                         '44444444444444444444444444'
//                     )
//                 ).toBeGreaterThan(0);
//             });

//             it('handles equality', () => {
//                 expect(
//                     sortBig(
//                         '44444444444444444444444445',
//                         '44444444444444444444444445'
//                     )
//                 ).toEqual(0);
//             });
//         });
//     });

//     describe('mixed numbers', () => {
//         it('handles less than', () => {
//             expect(sortBig('7', '2222222222222222222222232222')).toBeLessThan(
//                 0
//             );
//         });

//         it('handles greater than', () => {
//             expect(
//                 sortBig('2222222222222222222222232222', '7')
//             ).toBeGreaterThan(0);
//         });
//     });
// });
