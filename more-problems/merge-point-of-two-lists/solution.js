'use strict';

/* Observations:
At the most basic level, we could brute force this solution --
start with headA, and for each node in that list, try to find it in headB.
That would work, but would take O(n^2) time.

We can turn this into O(n) time if we keep track of which nodes we've visited.
However, because the data values are not unique, we need to track visits by node, rather than data.
In javascript, native hashmaps do not really support object keys (all objects map to the same thing),
so I'm using a more hacky approach, where we modify the nodes themselves.

While any form of this algorithm would have worst-case run-time O(n), I'm using a toggle to alternate between
which list we're looking at, because it allows us to detect the merge node before we iterate through an entire list.

Runtime: O(n)
Storage: O(n)
*/

const findMergeNode = (headA, headB) => {
    let toggle = false;
    while (headA !== null || headB !== null) {
        let testNode = null;
        if ((toggle && headA !== null) || headB === null) {
            testNode = headA;
            headA = headA.next;
        } else {
            testNode = headB;
            headB = headB.next;
        }

        if (testNode.visited) {
            return testNode.data;
        }

        testNode.visited = true;

        toggle = !toggle;
    }

    throw new Error('no merge found');
};

module.exports = {
    findMergeNode,
};
