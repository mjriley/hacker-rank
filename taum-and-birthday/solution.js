'use strict';

/* Observations:
So, the task is to spend the least amount of money to purchase all black and white gifts.
It doesn't seem like there's any subtlety to this -- the minimum cost will be found by finding
the minimum costs for each black gift, and each white gift.
Either the providing color cost is the minimum, or the opposite cost + conversion cost is the minimum.
Find the min cost for each gift, multiply by the num required, and we have our answer.
This should be achieved in O(1) time with O(1) space

Update after failing submission:
The one hitch to this problem is integer overflow. Each argument could, at worst, be 10^9. If we have 10^9 * 10^9,
we wind up with 10^18, which is outside the realm that javascript can represent natively (Javascript uses 53 bits for its numbers,
    which loses precision around 10^16). As the equation I used involves both addition and multiplication, it means both of those
    need to be implemented for numbers stored as strings. Thankfully, the arguments passed to Math.min only involve addition on arguments
    that will, at worst, be 10^9, so javascript should be able to safely handle that.
*/

function taumBday(
    numBlackGifts,
    numWhiteGifts,
    blackCost,
    whiteCost,
    conversionCost
) {
    const minBlackCost = Math.min(blackCost, whiteCost + conversionCost);
    const minWhiteCost = Math.min(whiteCost, blackCost + conversionCost);

    const totalBlackCost = stringMultiplication(numBlackGifts, minBlackCost);
    const totalWhiteCost = stringMultiplication(numWhiteGifts, minWhiteCost);

    return stringAddition(totalBlackCost, totalWhiteCost);
}

function stringAddition(addend, augend) {
    const addendLength = addend.length;
    const augendLength = augend.length;

    const maxLength = Math.max(addendLength, augendLength);

    let result = '';
    let carry = 0;

    for (let i = 0; i < maxLength; i++) {
        const leftDigitIndex = addendLength - 1 - i;
        const rightDigitIndex = augendLength - 1 - i;
        const leftDigit = parseInt(addend[leftDigitIndex] || '0', 10);
        const rightDigit = parseInt(augend[rightDigitIndex] || '0', 10);

        const sum = leftDigit + rightDigit + carry;
        const newDigit = sum % 10;
        carry = Math.floor(sum / 10);

        result = newDigit.toString() + result;
    }

    if (carry !== 0) {
        result = carry.toString() + result;
    }

    return result;
}

// expect the numbers as numbers, not strings
function stringMultiplication(left, right) {
    let sum = '0';

    const rightString = right.toString();
    const rightLength = rightString.length;

    for (let i = 0; i < rightLength; i++) {
        let digitIndex = rightLength - 1 - i;
        const digit = rightString[digitIndex];
        const product = digit * left;
        const stringProduct = product.toString() + '0'.repeat(i);
        sum = stringAddition(sum, stringProduct);
    }

    return sum;
}

module.exports = {
    taumBday,
    stringAddition,
    stringMultiplication
};
