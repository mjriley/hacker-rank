'use strict';

const { weightedUniformStrings } = require('./solution');

describe('weightedUniformStrings', () => {
    it('handles a single character', () => {
        expect(weightedUniformStrings('a', [1])).toEqual(['Yes']);
    });

    it('handles two characters', () => {
        expect(weightedUniformStrings('bb', [4])).toEqual(['Yes']);
    });

    it('recognizes the boundaries for a uniform string', () => {
        expect(weightedUniformStrings('bba', [5])).toEqual(['No']);
    });

    it('handles multiple queries', () => {
        expect(weightedUniformStrings('abbba', [1, 4, 5])).toEqual([
            'Yes',
            'Yes',
            'No',
        ]);
    });

    it('passes the example', () => {
        expect(
            weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10])
        ).toEqual(['Yes', 'Yes', 'Yes', 'Yes', 'No', 'No']);
    });
});
