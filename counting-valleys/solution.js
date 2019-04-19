'use strict';

/* Observations
I don't see a reason to overcomplicate this.
If we step through the terrain string, character by character, we can determine when a new valley exists, and then increment the total number of valleys
encountered. Because the terrain starts at sea level and ends at sea-level, we can increment the valley count as soon as we descend below sea-level, because
it's guaranteed we will return to sea-level before the end of the terrain.
If we go through like this, we'll find our answer in O(n) time, which is going to be required regardless.
*/

const DOWN = 'D';

function countingValleys(numSteps, terrain) {
    let seaLevel = 0;
    let numValleys = 0;

    for (let i = 0; i < numSteps; i++) {
        if (terrain[i] === DOWN) {
            if (seaLevel === 0) {
                // this is a new valley
                numValleys++;
            }

            seaLevel--;
        } else {
            seaLevel++;
        }
    }

    return numValleys;
}

module.exports = {
    countingValleys
};
