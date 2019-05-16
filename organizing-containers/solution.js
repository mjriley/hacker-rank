'use strict';

/* Observations:
The problem is a little vague, but after looking at the final set of examples, it seems that each container does not necessarily
contain the same amount of balls. However, given that our swap operation maintains the ball counts in the two affected containers,
there is no way to increase or decrease the number of balls in a given container. Thus, this problem seems deceptively simple:
- sum the number of each type of ball across all containers
- if a container exists with a capacity equal to the number of a ball type, consider that ball type satisfied.
- repeat with all ball types. If all ball types are satisfied, the answer is 'Possible'. Otherwise,
  the answer is 'Impossible'.

Algorithmically, this doesn't seem too bad.
Start by mapping the containers to an array containing their total counts -- O(n^2)
Create a hashmap that contains the number of containers at each count -- O(n)
Next, map the rows of the container matrix to a sum of each ball type -- O(n^2)
For each ball type, subtract 1 from the hashmap entry for the ball sum -- O(n)
If the sum doesn't exist in our hashmap, return Impossible
Otherwise, return Possible

Final runtime is O(n^2), with O(n) extra space.
*/

const POSSIBLE = 'Possible';
const IMPOSSIBLE = 'Impossible';

function organizingContainers(containers) {
    const ballsPerContainer = getNumBallsPerContainer(containers);
    const capacityMap = createContainerCapacityMap(ballsPerContainer);

    const ballsPerType = getNumBallsPerType(containers);
    const numTypes = ballsPerType.length;

    for (let i = 0; i < numTypes; i++) {
        const typeCount = ballsPerType[i];

        if (!(typeCount in capacityMap) || capacityMap[typeCount] === 0) {
            return IMPOSSIBLE;
        }

        capacityMap[typeCount]--;
    }

    return POSSIBLE;
}

function createContainerCapacityMap(ballsPerContainer) {
    const length = ballsPerContainer.length;

    const containerCapacity = {};

    ballsPerContainer.forEach(capacity => {
        containerCapacity[capacity] = (containerCapacity[capacity] || 0) + 1;
    });

    return containerCapacity;
}

function getNumBallsPerType(containers) {
    const numContainers = containers.length;
    const numTypes = containers[0].length;

    const ballsPerContainer = new Array(numContainers);
    ballsPerContainer.fill(0);

    for (let i = 0; i < numContainers; i++) {
        for (let j = 0; j < numTypes; j++) {
            ballsPerContainer[i] += containers[j][i];
        }
    }

    return ballsPerContainer;
}

function getNumBallsPerContainer(containers) {
    return containers.map(row => row.reduce((sum, value) => sum + value));
}

module.exports = {
    organizingContainers,
    getNumBallsPerContainer,
    getNumBallsPerType,
    createContainerCapacityMap,
    POSSIBLE,
    IMPOSSIBLE
};
