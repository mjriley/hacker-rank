'use strict';

const { camelcase } = require('./solution');

describe('camelcase', () => {
    it('return 1 for a single word', () => {
        expect(camelcase('abc')).toEqual(1);
    });

    it('identifies any capitalized words', () => {
        expect(camelcase('alphaBetaGamma')).toEqual(3);
    });

    it('identifies neighboring capital letters as separate words', () => {
        expect(camelcase('aBC')).toEqual(3);
    });

    it('handles example 1', () => {
        expect(camelcase('saveChangesInTheEditor')).toEqual(5);
    });
});
