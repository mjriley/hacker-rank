'use strict';

/* Observations:
The simplest way to approach this problem is to just brute-force it. Use a while loop, keep track of the current cloud index
and energy level, and keep jumping until our cloud index is once again 0, then return the energy level. I can't think of a way to prove it,
but it seems reasonable to think this approach will be O(n), where n is the number of clouds. If that is true, that is efficient enough, 
so it seems like a good approach.

Update:
The problem description is misleading. The task ends when the player has wrapped around the array, not simply when they reach the 1st cloud again.
In that case, the brute-force approach is absolutely correct, because we will loop around the array exactly one time.
The maximum clouds visited, then, occurs when the jump size is 1, and in that case, the run time is O(n).
 */

const STARTING_ENERGY = 100;
const THUNDERHEAD = 1;
const THUNDERHEAD_COST = 2;

function jumpingOnClouds(clouds, jumpDistance) {
    const length = clouds.length;

    let energy = STARTING_ENERGY;
    let index = 0;

    let hasPassedStart = false;

    do {
        // pay the cost for a jump
        energy--;

        let oldIndex = index;

        // calculate the destination
        index = (index + jumpDistance) % length;

        if (index <= oldIndex) {
            hasPassedStart = true;
        }

        // pay any costs for landing on a thunderhead
        if (clouds[index] === THUNDERHEAD) {
            energy -= THUNDERHEAD_COST;
        }
    } while (!hasPassedStart);

    return energy;
}

module.exports = {
    jumpingOnClouds
};
