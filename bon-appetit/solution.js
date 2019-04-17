'use strict';

/* Observations:
This problem appears straight-forward --
sum up the entire array, then subtract the skipped item.
If the difference between the sum and the amountPayed is 0, print 'Bon Appetit', otherwise print the difference.
The only real issue with this approach could be a bounds issue, as the potential number of items in the array is large.
However, the sum is the sum -- they need to pay essentially half of that sum, so if we can't store at least half in memory,
we'll have an issue. We could first divide each element of the array by 2, and then remove the skipped element,
so the eventual sum we deal with is smaller, but it seems unnecessary. The runtime of the algorithm is O(n).
*/

function bonAppetit(bills, skippedIndex, amountCharged) {
    console.log(bonAppetitImpl(bills, skippedIndex, amountCharged));
}

function bonAppetitImpl(bills, skippedIndex, amountCharged) {
    const difference = amountCharged - getSplitAmount(bills, skippedIndex);

    if (difference === 0) {
        return 'Bon Appetit';
    } else {
        return difference;
    }
}

function getSplitAmount(bills, skippedIndex) {
    return (getTotalBill(bills) - bills[skippedIndex]) / 2;
}

function getTotalBill(bills) {
    return bills.reduce((sum, addend) => sum + addend);
}

module.exports = {
    bonAppetitImpl
};
