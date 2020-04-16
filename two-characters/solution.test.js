'use strict';

const { alternate, getOccurenceMap } = require('./solution');

describe('alternate', () => {
    it('returns 0 when no alternating sequence can be found', () => {
        expect(alternate('aaaaa')).toEqual(0);
    });

    it('returns 2 on a minimum alternating sequence', () => {
        expect(alternate('ab')).toEqual(2);
    });

    it('skips other characters', () => {
        expect(alternate('abca')).toEqual(3);
    });

    it('handles repeated sequences', () => {
        expect(alternate('abcdefabsfreab')).toEqual(6);
    });

    it('handles sequences in the middle of a string', () => {
        expect(alternate('abcdcdcdcdcdab')).toEqual(10);
    });

    it('passes the example', () => {
        expect(alternate('beabeefeab')).toEqual(5);
    });

    it('identifies when no sequences are possible', () => {
        expect(alternate('abba')).toEqual(0);
    });

    it('passes the failing example', () => {
        expect(alternate('asvkugfiugsalddlasguifgukvsa')).toEqual(0);
    });

    it('passes a long example', () => {
        expect(
            alternate(
                'cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc'
            )
        ).toEqual(8);
    });
});

describe('getOccurenceMap', () => {
    it('returns 0 for a single character', () => {
        const map = getOccurenceMap('aaaaa');
        expect(map['a']).toEqual(0);
    });

    it('returns the left-most index for each character', () => {
        const map = getOccurenceMap('abcaabbcc');
        expect(map['a']).toEqual(0);
        expect(map['b']).toEqual(1);
        expect(map['c']).toEqual(2);
    });
});
