'use strict';

const { balancedSums } = require('./solution');

describe('balancedSums', () => {
    it('should not accept an empty array', () => {
        expect(balancedSums([])).toEqual('NO');
    });

    it('should accept a single element', () => {
        expect(balancedSums([3])).toEqual('YES');
    });

    it('should accept when the array is a palindrome', () => {
        expect(balancedSums([3, 1, 3])).toEqual('YES');
    });

    it('can add from the left side', () => {
        expect(balancedSums([1, 4, 9, 5])).toEqual('YES');
    });

    it('can add from the right side', () => {
        expect(balancedSums([5, 9, 4, 1])).toEqual('YES');
    });

    it('will reject if the sums are not equal', () => {
        expect(balancedSums([5, 9, 4, 2])).toEqual('NO');
    });

    it('passes example 1', () => {
        expect(balancedSums([1, 2, 3])).toEqual('NO');
    });

    it('passes example 2', () => {
        expect(balancedSums([1, 2, 3, 3])).toEqual('YES');
    });

    it('passes example 3', () => {
        expect(balancedSums([1, 1, 4, 1, 1])).toEqual('YES');
    });

    it('passes example 4', () => {
        expect(balancedSums([2, 0, 0, 0])).toEqual('YES');
    });

    it('passes example 5', () => {
        expect(balancedSums([0, 0, 2, 0])).toEqual('YES');
    });
});
