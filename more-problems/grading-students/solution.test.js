'use strict';

const { roundGrade, gradingStudents } = require('./solution');

describe('roundGrade', () => {
    it('rounds a passing grade up when the difference is less than 3', () => {
        expect(roundGrade(83)).toEqual(85);
    });

    it('does not round a passing grade up if the difference is 3 or greater', () => {
        expect(roundGrade(82)).toEqual(82);
    });

    it('does not change the number if it is already a multiple of 5', () => {
        expect(roundGrade(80)).toEqual(80);
    });

    it('rounds the minimum failing grade up to passing', () => {
        expect(roundGrade(38)).toEqual(40);
    });

    it('does not perform any rounding for failing grades below 38', () => {
        expect(roundGrade(28)).toEqual(28);
    });
});

describe('gradingStudents', () => {
    it('passes example 1', () => {
        expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
    });
});
