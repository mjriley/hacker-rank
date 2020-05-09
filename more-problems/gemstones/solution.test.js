'use strict';

const { gemstones } = require('./solution');

describe('gemstones', () => {
    it('labels all characters in a single rock as gemstones', () => {
        expect(gemstones(['abc'])).toEqual(3);
    });

    it('only includes minerals that occur in all rocks', () => {
        expect(gemstones(['def', 'abcdef', 'dre'])).toEqual(2);
    });

    it('should return no minerals if none occur in all rocks', () => {
        expect(gemstones(['abc', 'def', 'xyz'])).toEqual(0);
    });

    it('handles duplicate minerals', () => {
        expect(gemstones(['aab', 'xy'])).toEqual(0);
    });

    it('handles example 1', () => {
        expect(gemstones(['abcdde', 'baccd', 'eeabg'])).toEqual(2);
    });
});
