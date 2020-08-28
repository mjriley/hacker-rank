'use strict';

const { insertNodeAtTail, listToArray, arrayToList } = require('./solution');

describe('insertNodeAtTail', () => {
    it('should insert into an empty list', () => {
        expect(insertNodeAtTail(null, 5)).toEqual({ data: 5, next: null });
    });

    it('inserts at the tail of an existing list', () => {
        const list = arrayToList([5, 2]);
        const result = insertNodeAtTail(list, 9);
        expect(listToArray(result)).toEqual([5, 2, 9]);
    });
});

describe('listToArray', () => {
    it('converts a single element', () => {
        expect(listToArray({ data: 4, next: null })).toEqual([4]);
    });

    it('maintains order', () => {
        expect(
            listToArray({
                data: 4,
                next: { data: 5, next: { data: 1, next: null } },
            })
        ).toEqual([4, 5, 1]);
    });
});

describe('arrayToList', () => {
    it('converts a single element', () => {
        expect(arrayToList([7])).toEqual({ data: 7, next: null });
    });

    it('converts the entire array', () => {
        expect(arrayToList([7, 9, 2])).toEqual({
            data: 7,
            next: { data: 9, next: { data: 2, next: null } },
        });
    });
});
