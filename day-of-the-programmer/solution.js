'use strict';

/*
This seems to have a number of subproblems:
1) Get the 256th day of the year during a non-leap year
2) Get the 256th day of the year in a leap year
3) Get the 256th day of the year for 1918

Additionally, it also means we need a formula for determining whether a given year is a leap year.

If efficiency was a concern, we could definitely pre-compute the anwers to this question, as there are only 3 relevant answers:
1) the 256th day when it's a non-leap year
2) the 256th day when it's a leap year
3) the 256th day during 1918
However, finding those answers and then removing the code to calculate dates seems to defeat the purpose of the question
*/

const DAYS_IN_MONTH = [
    undefined, // placeholder to make this 1-indexed
    31, // Jan
    28, // Feb
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31 // December
];

const FEB = 2;
const PROGRAMMER_DAY = 256;

function dayOfProgrammer(year) {
    const date = getDate(PROGRAMMER_DAY, year);
    return formatDate(date);
}

function getDaysInMonth(month, year) {
    if (month === FEB) {
        return daysInFeb(year);
    }

    return DAYS_IN_MONTH[month];
}

function daysInFeb(year) {
    if (isLeapYear(year)) {
        return 29;
    } else if (year === TRANSITION_YEAR) {
        return 28 - 14 + 1;
    }

    return 28;
}

function formatDate({ day, month, year }) {
    const paddedDay = String(day).padStart(2, '0');
    const paddedMonth = String(month).padStart(2, '0');

    return `${paddedDay}.${paddedMonth}.${year}`;
}

// NOTE -- this isn't correct for dates in february during 1918. This algorithm essentially views february as 1-14, rather than 14-28.
// In both cases, however, the number of days in that month is correct -- 15. As the 256th day of the year will never fall in february,
// I found it more practical to consume months in a similar manner rather than put in an unnecessary edge-case.
function getDate(day, year) {
    let remainingDays = day;
    let currentMonth = 1;
    let daysInMonth = getDaysInMonth(currentMonth, year);

    while (remainingDays > daysInMonth) {
        remainingDays -= daysInMonth;
        currentMonth++;
        daysInMonth = getDaysInMonth(currentMonth, year);
    }

    return {
        month: currentMonth,
        day: remainingDays,
        year: year
    };
}

const TRANSITION_YEAR = 1918;

function isLeapYear(year) {
    if (year < TRANSITION_YEAR) {
        return year % 4 === 0;
    }

    if (year % 400 === 0) {
        return true;
    }

    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }

    return false;
}

module.exports = {
    dayOfProgrammer,
    isLeapYear,
    getDate,
    formatDate
};
