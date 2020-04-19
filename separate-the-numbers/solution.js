'use strict';

/* A string is beautiful if you can create a sequence (of at least 2 numbers) of ascending numbers, where each number is one greater than the previous.
No number can have a leading zero.
The task is to identify, given an input string, whether we can make it beautiful or not.

Because this isn't about identifying a substring, all numbers must be increments of the previous.
That means that the first number we split off forces what we expect the rest of the numbers to be.
So, I think the easiest approach would be to start with only 1 digit, and see if the string is beautiful from that root.
If not, we can iterate the number of digits of our first number until the number of digits being processed
is greater than half the string length (because then we can't generate a second digit).

One of the edge cases to look out for is that, just because we start with a single digit,
it doesn't mean we will always parse single digits.
For example, '91011' is a pretty string, but only the first number involves a single digit.
*/

/* Given a starting number, the runtime of determining whether a sequence is pretty is O(n).
Because, at worst, we must do this for n/2 sequences, our final runtime is O(n^2/2), or O(n^2)
*/

function separateNumbers(input) {
    const result = separateNumbersImpl(input);
    if (result.pretty) {
        console.log(`YES ${result.first}`);
    } else {
        console.log('NO');
    }
}

function separateNumbersImpl(input) {
    const result = {
        pretty: false,
    };

    if (input[0] === '0') {
        // no strings with a leading zero can be beautiful, because they violate the second condition
        return result;
    }

    for (
        let currentLength = 1;
        currentLength <= input.length / 2;
        currentLength++
    ) {
        // const firstNumber = parseInt(input.substring(0, currentLength), 10);
        const firstNumber = BigInt(input.substring(0, currentLength));
        if (isPrettySequenceStartingWith(firstNumber, input)) {
            result.pretty = true;
            result.first = firstNumber.toString();
            return result;
        }
    }

    return result;
}

function isPrettySequenceStartingWith(num, input) {
    let numberLength = num.toString().length;

    for (
        let i = numberLength, currentNumber = num + BigInt(1);
        i < input.length;
        i += numberLength, currentNumber++
    ) {
        const numberString = currentNumber.toString();
        numberLength = numberString.length;

        if (input.substring(i, i + numberLength) !== numberString) {
            return false;
        }
    }

    return true;
}

module.exports = {
    separateNumbersImpl,
};
