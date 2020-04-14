const { minimumNumber } = require('./solution');

describe('minimumNumber', () => {
    it('identifies situations where length is all that matters', () => {
        expect(minimumNumber(1, 'a')).toEqual(5);
    });

    it('identifies situation where the characters all all that matters', () => {
        expect(minimumNumber(6, 'XXXXXX')).toEqual(3);
    });

    it('takes the larger of the two category differences', () => {
        expect(minimumNumber(5, 'XyXyX')).toEqual(2);
    });

    it('passes example 1', () => {
        expect(minimumNumber(3, 'Ab1')).toEqual(3);
    });

    it('passes example 2', () => {
        expect(minimumNumber(11, '#HackerRank')).toEqual(1);
    });
});
