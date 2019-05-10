'use strict';

/* Observations:
This seems like a simple problem. We can only go forward, and our task is to get the minimum number of movements.
We can jump forward 1 or 2 clouds, but if jumping 2 clouds forward is safe, there would be no reason to only jump
one cloud. Given that we're assured that there is always a way through all clouds, the algorithm should simply be:
Try to jump forward 2 clouds. If it fails, jump forward 1 cloud. Repeat until the last cloud is reached/passed.
Return the total number of jumps used. At the worst case, where thunderheads are every 2 squares (so we're forced
to effectively jump 1 cloud at a time), we still only examine any cloud once, so the runtime would be O(n)
*/

const THUNDERHEAD = 1;

function jumpingOnClouds(clouds) {
    let currentIndex = 0;
    let numJumps = 0;
    let lastCloud = clouds.length - 1;

    while (currentIndex < lastCloud) {
        // test jumping 2 squares
        if (clouds[currentIndex + 2] !== THUNDERHEAD) {
            currentIndex += 2;
        } else {
            // We could check that this cloud is safe, but it has to be, because there is always a solution
            currentIndex += 1;
        }

        numJumps++;
    }

    return numJumps;
}

module.exports = {
    jumpingOnClouds
};
