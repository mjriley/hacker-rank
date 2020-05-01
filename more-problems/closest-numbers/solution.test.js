'use strict';

const { closestNumbers } = require('./solution');

describe('closestNumbers', () => {
    it('should handle two numbers', () => {
        expect(closestNumbers([5, 3])).toEqual([3, 5]);
    });

    it('should handle three numbers', () => {
        expect(closestNumbers([7, 5, 1])).toEqual([5, 7]);
    });

    it('should handle multiple closest values', () => {
        expect(closestNumbers([9, 2, 7, 4])).toEqual([2, 4, 7, 9]);
    });

    it('should handle multiple closest values, reusing a number', () => {
        expect(closestNumbers([9, 4, 3, 2])).toEqual([2, 3, 3, 4]);
    });

    it('handles example 1', () => {
        expect(
            closestNumbers([
                -20,
                -3916237,
                -357920,
                -3620601,
                7374819,
                -7330761,
                30,
                6246457,
                -6461594,
                266854,
            ])
        ).toEqual([-20, 30]);
    });

    it('handles example 2', () => {
        expect(
            closestNumbers([
                -20,
                -3916237,
                -357920,
                -3620601,
                7374819,
                -7330761,
                30,
                6246457,
                -6461594,
                266854,
                -520,
                -470,
            ])
        ).toEqual([-520, -470, -20, 30]);
    });

    it('handles example 3', () => {
        expect(closestNumbers([5, 4, 3, 2])).toEqual([2, 3, 3, 4, 4, 5]);
    });
});
