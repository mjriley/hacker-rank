'use strict';

/* Observations
The easiest thing to do would be to simply brute-force this solution. With n keyboard prices and m drive prices,
to find the maximum under the budget would take O(n*m) time. Given n and m are both, at worst, 1000, that seems reasonable.

We can do better if we first sort the smaller of the two price lists -- drives for the sake of argument here.
Sorting drives would take O(m*log m), but would then let us find the maximum pairing for any given keyboard in log m time.
Therefore, we could find the maximum pairing in O(n*log m + m*log m), or essentially O(n * log m), since m is the smaller of the two.
However, given our search space, I think the brute force solution is probably better suited here.
*/

function getMoneySpent(keyboards, drives, budget) {
    let maximumTotal = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const potentialCost = keyboards[i] + drives[j];
            if (potentialCost > maximumTotal && potentialCost <= budget) {
                maximumTotal = potentialCost;
            }
        }
    }

    return maximumTotal;
}

module.exports = {
    getMoneySpent
};
