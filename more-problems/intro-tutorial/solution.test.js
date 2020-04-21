'use strict';

const { introTutorial } = require('./solution');

describe('introTutorial', () => {
    it('can find a value from a single element', () => {
        expect(introTutorial(5, [5])).toEqual(0);
    });

    it('can handle two elements', () => {
        expect(introTutorial(2, [2, 3])).toEqual(0);
        expect(introTutorial(2, [1, 2])).toEqual(1);
    });

    it('can handle odd length arrays', () => {
        expect(introTutorial(5, [1, 5, 2])).toEqual(1);
    });

    it('passes example 1', () => {
        expect(introTutorial(4, [1, 4, 5, 7, 9, 12])).toEqual(1);
    });

    it('passes failing test', () => {
        expect(introTutorial(23, [1, 3, 21, 23])).toEqual(3);
    });
});
