'use strict';

const {
    dayOfProgrammer,
    isLeapYear,
    getDate,
    formatDate
} = require('./solution');

describe('dayOfProgrammer', () => {
    test('it finds the correct day for a non-leap year', () => {
        expect(dayOfProgrammer(2019)).toBe('13.09.2019');
    });

    test('it finds the correct day for a leap year', () => {
        expect(dayOfProgrammer(2020)).toBe('12.09.2020');
    });

    test('it finds the correct day for the transition year', () => {
        expect(dayOfProgrammer(1918)).toBe('26.09.1918');
    });

    test('it finds the correct day for a gregorian leap year', () => {
        expect(dayOfProgrammer(1900)).toBe('12.09.1900');
    });
});

describe('isLeapYear', () => {
    test('it should return false for a non-leap year', () => {
        expect(isLeapYear(2001)).toBe(false);
    });

    test('it should return true for a year less than 1918 that is divisible by 4', () => {
        expect(isLeapYear(1900)).toBe(true);
    });

    test('it should return true for a 1918+ year divisible by 400', () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    test('it should return true for a 1918+ year divisible by 4, but not 100', () => {
        expect(isLeapYear(2004)).toBe(true);
    });

    test('it should return false for a 1918+ year that is divisible by both 4 and 400 (but not 400)', () => {
        expect(isLeapYear(2100)).toBe(false);
    });
});

describe('getDate', () => {
    test('it returns a day in january', () => {
        expect(getDate(10, 2019)).toEqual({ month: 1, day: 10, year: 2019 });
    });

    test('it consumes months correctly', () => {
        expect(getDate(32, 2019)).toEqual({ month: 2, day: 1, year: 2019 });
    });

    test('it handles february as a non-leap year', () => {
        expect(getDate(60, 2019)).toEqual({ month: 3, day: 1, year: 2019 });
    });

    test('it handles february in a leap year', () => {
        expect(getDate(60, 2000)).toEqual({ month: 2, day: 29, year: 2000 });
    });

    test('it handles february during the transition year', () => {
        expect(getDate(47, 1918)).toEqual({ month: 3, day: 1, year: 1918 });
    });
});

describe('formatDate', () => {
    test('it prints the date in day, month, year order', () => {
        expect(formatDate({ month: 10, day: 20, year: 2019 })).toBe(
            '20.10.2019'
        );
    });

    test('it pads the month and day, if necessary', () => {
        expect(formatDate({ month: 2, day: 5, year: 2019 })).toBe('05.02.2019');
    });
});
