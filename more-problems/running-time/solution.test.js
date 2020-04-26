'use strict';

const { runningTime } = require('./solution');

describe('runningTime', () => {
    it('passes the example', () => {
        expect(runningTime([2, 1, 3, 1, 2])).toEqual(4);
    });
});
