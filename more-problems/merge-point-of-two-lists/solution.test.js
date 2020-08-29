'use strict';

const { findMergeNode } = require('./solution');

describe('findMergeNode', () => {
    it('should handle when the left list is a child of the right', () => {
        const shared = { data: 5, next: null };
        const left = shared;
        const right = { data: 1, next: shared };
        expect(findMergeNode(left, right)).toEqual(5);
    });

    it('should handle when the right list is a child of the left', () => {
        const shared = { data: 5, next: null };
        const left = { data: 1, next: shared };
        const right = shared;
        expect(findMergeNode(left, right)).toEqual(5);
    });

    it('should not get tricked by the same data values, but different nodes', () => {
        const shared = { data: 5, next: null };
        const left = { data: 1, next: shared };
        const right = { data: 1, next: shared };
        expect(findMergeNode(left, right)).toEqual(5);
    });

    it('passes example 1', () => {
        const shared = { data: 3, next: null };
        const left = { data: 1, next: { data: 2, next: shared } };
        const right = { data: 1, next: shared };
        expect(findMergeNode(left, right)).toEqual(3);
    });
});
