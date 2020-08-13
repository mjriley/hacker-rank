'use strict';

/* The challenge of this problem is essentially a search problem. Because Sunny and Johnny need
to use all their money, when we know how much Sunny spends, we know how much Johnny will need to
by simple subtraction. At that point, it's just a matter of searching the cost array to determine
if anything is being sold with Johnny's price. If it is, we've found our pair, if not, then Sunny needs to buy something else.

If we were to brute-force this problem, the solution would take O(n^2) time, where n was the size of the cost array --
in the worst-case, we'd need to try every possible flavor for Sunny, only finding it at the end. Each flavor would analyze every other flavor,
so each falvor evaluated would require O(n) time. Since we would need to perform this for almost every flavor, we would wind up with O(n^2).

A faster way would be to first sort the cost array -- that would let us find whether or not a complementary cost existed in O(log n) time rather
than O(n) time. Sorting the full cost array would require O(n * log n) time. We still might need to run through half of the array to find
Sunny's choice (since more than half of a sorted array would make finding the complement impossible), but since each search would now only take
O(log n) time, we'd wind up with O(n * log n) + O(n/2 * log n), simplifying to O(n * log n).

Since our cost array isn't huge (10^4 elements), I think the best solution is likely to create a lookup array for each cost.
That way, given any cost for Sunny, we could check whether a corresponding price was available for Johnny in constant (O(1)) time.
Building the array (array, because our costs are only integers up to 10^4) would require O(n) time.
Looking up any element would take O(1) time, and since we may need to perform this for almost all elements, this entire process
would also take O(n) time. We end up with O(n) + O(n) which simplifies to O(n) total time.  One consideration to remember is that
multiple flavors can share the same cost. Because we are guaranteed to have a unique solution, that means that we don't really have to consider
any cost occurring more than twice. If a cost occurs more than two times and isn't part of a solution, then it doesn't matter.
If a cost occurs more than two times but is part of the solution, it means there are at least 3 separate flavors that could be selected,
which violates the idea of a unique solution. Because of this, we can get away with storing only the last instance of each cost.
If we iterate left-to-right through costs, the first instance of a cost will find the last instance of a cost, if the solution shares the same
cost.
*/

const icecreamParlor = (money, costs) => {
    // Construct a presence array
    const foundCosts = constructPresenceArray(costs);

    // For every cost element
    const length = costs.length;
    for (let i = 0; i < length; i++) {
        // compute the corresponding cost to search for
        const sunnyCost = costs[i];
        const johnnyCost = money - sunnyCost;

        if (typeof foundCosts[johnnyCost] !== 'undefined') {
            // the foundCosts arrray should contain the greatest index that contained the cost.
            // if the index we found matches the index for sunny's cost, then no separate flavor exited for johnny
            if (foundCosts[johnnyCost] !== i) {
                return [i + 1, foundCosts[johnnyCost] + 1];
            }
        }
    }

    throw new Exception('no index combination found');
};

const MAX_ELEMENTS = 10000;

const constructPresenceArray = (costs) => {
    const foundCosts = new Array(MAX_ELEMENTS);
    const length = costs.length;
    for (let i = 0; i < length; i++) {
        const cost = costs[i];
        foundCosts[cost] = i;
    }

    return foundCosts;
};

module.exports = {
    icecreamParlor,
};
