'use strict';

/* Observations:
This problem is greatly simplified if we can sort the array first.
Once sorted, we can keep track of the current bird and the current bird's count until a new bird type is spotted.
At that point, we can determine whether the current bird is more common than previous birds, and update
our most common bird with the result. This solution would need O(n*lg(n)) time to sort the array, but then O(n) time to find our answer.

However, we can likely do better with additional storage, as the problem stipulates that there are only ever 5 different types of birds.
In that case, we can keep an array from 1-5 of each type of bird, and then iterate through the entire array updating our count array with
every bird we come across. Then, we simply find the max of our 5 element count array, and we'll have our answer.
This solution would be done in O(n) time with O(1) additional space required.
*/

function migratoryBirds(birds) {
    const counts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    for (let i = 0; i < birds.length; i++) {
        const birdType = birds[i];
        counts[birdType]++;
    }

    const mostCommon = {
        type: 1,
        count: counts[1]
    };

    for (let i = 2; i <= 5; i++) {
        if (counts[i] > mostCommon.count) {
            mostCommon.type = i;
            mostCommon.count = counts[i];
        }
    }

    return mostCommon.type;
}

module.exports = {
    migratoryBirds
};
