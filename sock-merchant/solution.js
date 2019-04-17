'use strict';

/*
This can be done in O(n) time, provided O(1) additional storage.
There are only 100 possible sock colors, so if we create an array to store all possible sock color counts,
we can iterate once through the sock array to count colors. We can then iterate through the sock colors,
dividing each color count by 2, and summing the floors of each division
*/

function sockMerchant(numberOfSocks, socks) {
    const colorCounts = getColorCounts(socks);
    const numPairs = Object.values(colorCounts).reduce(
        (total, count) => total + Math.floor(count / 2),
        0
    );
    return numPairs;
}

function getColorCounts(socks) {
    const colorCounts = {};

    for (let i = 0; i < socks.length; i++) {
        const color = socks[i];
        colorCounts[color] = colorCounts[color] || 0;
        colorCounts[color]++;
    }

    return colorCounts;
}

module.exports = {
    sockMerchant
};
