'use strict';

const { icecreamParlor } = require('./solution');

describe('icecreamParlor', () => {
    it('can find the two indices', () => {
        expect(icecreamParlor(5, [2, 3])).toEqual([1, 2]);
    });

    it('can find the indices in the middle of the array', () => {
        expect(icecreamParlor(5, [1, 9, 3, 7, 10, 2])).toEqual([3, 6]);
    });

    it('can handle duplicate costs', () => {
        expect(icecreamParlor(8, [9, 4, 2, 7, 4, 5])).toEqual([2, 5]);
    });

    it('handles example 1', () => {
        expect(icecreamParlor(4, [1, 4, 5, 3, 2])).toEqual([1, 4]);
    });

    it('handles example 2', () => {
        expect(icecreamParlor(4, [2, 2, 4, 3])).toEqual([1, 2]);
    });

    it('throws an exception if unable to find a solution', () => {
        expect(() => icecreamParlor(4, [1, 2])).toThrow();
    });
});
