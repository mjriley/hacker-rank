'use strict';

/* Observations:
The crux of this problem is determining how to generate a number's reverse.
The easiest and most straight-forward way, to me, is to split the number into it's characters,
reverse that array, join them together, and then parse that back into a number.
Once we can generate the reverse, it's straight-forward how to solve the problem:
Loop through the integers, find the absolute value of the the number with its difference, and then check if that total, mod k, is 0.
If so, increment the total number of beautiful days

Transitioning a number to and from a string is likely not the most efficient way to generate its reverse,
but by encapsulating it behind its own function, we can substitute the formula out for one more efficient if required.
*/

function beautifulDays(dayStart, dayEnd, divisor) {
    let daysFound = 0;

    for (let day = dayStart; day <= dayEnd; day++) {
        if (isDayBeautiful(day, divisor)) {
            daysFound++;
        }
    }

    return daysFound;
}

function isDayBeautiful(day, divisor) {
    const reverse = reverseNumber(day);
    const difference = Math.abs(day - reverse);

    return difference % divisor === 0;
}

function reverseNumber(number) {
    const digits = number.toString().split('');
    digits.reverse();
    const reversedString = digits.join('');
    return parseInt(reversedString, 10);
}

module.exports = {
    beautifulDays,
    reverseNumber
};
