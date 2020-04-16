'use strict';

const { marsExploration } = require('./solution');

describe('marsExploration', () => {
    it('should return 0 on the base SOS message', () => {
        expect(marsExploration('SOS')).toEqual(0);
    });

    it('should return 0 on repeated SOS', () => {
        expect(marsExploration('SOSSOSSOS')).toEqual(0);
    });

    it('should return 1 when the first letter is changed', () => {
        expect(marsExploration('TOS')).toEqual(1);
    });

    it('should return 1 when the second letter is changed', () => {
        expect(marsExploration('SSS')).toEqual(1);
    });

    it('should return 1 when the third letter is changed', () => {
        expect(marsExploration('SOO')).toEqual(1);
    });

    it('should sum errors', () => {
        expect(marsExploration('SOSXXXSOS')).toEqual(3);
    });

    it('should pass the first example', () => {
        expect(marsExploration('SOSSPSSQSSOR')).toEqual(3);
    });

    it('should pass the second example', () => {
        expect(marsExploration('SOSSOT')).toEqual(1);
    });
});
