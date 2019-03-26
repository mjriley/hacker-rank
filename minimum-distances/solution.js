// Strategy:
// iterate through the array, keeping a table recording when we've seen the most recent entry
// When we encounter an entry that is already in our table, compute the 'distance' between the current entry and previous one.
// if that distance is shorter than the previous distance, it becomes our new distance
// return the final distance value
// If no value matches, return -1
// If at any point the distance is 1, there cannot be a smaller distance, so we can immediately return

function getDistanceBetweenIndices(index1, index2) {
    // assumes index2 > index 1
    return index2 - index1;
}

function minimumDistances(input) {
    let currentMin = -1;

    const lastFoundEntry = {};

    for (let i = 0; i < input.length; i++) {
        const currentValue = input[i];
        if (currentValue in lastFoundEntry) {
            const distance = getDistanceBetweenIndices(
                lastFoundEntry[currentValue],
                i
            );
            if (currentMin === -1 || distance < currentMin) {
                currentMin = distance;

                if (currentMin === 1) {
                    // can short-circuit operation, because there won't be a smaller min
                    break;
                }
            }
        }

        lastFoundEntry[currentValue] = i;
    }

    return currentMin;
}

module.exports = {
    getDistanceBetweenIndices,
    minimumDistances
};
