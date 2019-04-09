'use strict';

/* Observations:
The same rules apply for whether an apple or orange is considered to have fallen on the house,
so we can create a function to determine whether a piece of fruit has fallen on the house.
If we translate the apple distances and orange distances into absolute positions, we can then filter those arrays
by the fruit that fell on the house, and return their lengths
*/

function countApplesAndOranges(...args) {
    const { apples, oranges } = countApplesAndOrangesImpl(...args);
    console.log(apples);
    console.log(oranges);
}

function countApplesAndOrangesImpl(
    houseStart,
    houseEnd,
    appleTreePosition,
    orangeTreePosition,
    fallenAppleDistances,
    fallenOrangeDistances
) {
    const applePositions = fallenAppleDistances.map(
        apple => appleTreePosition + apple
    );
    const orangePositions = fallenOrangeDistances.map(
        orange => orangeTreePosition + orange
    );

    const isOnHouseBound = fruitPosition =>
        isFruitOnHouse(houseStart, houseEnd, fruitPosition);

    const applesOnHouse = applePositions.filter(isOnHouseBound).length;
    const orangesOnHouse = orangePositions.filter(isOnHouseBound).length;

    return { apples: applesOnHouse, oranges: orangesOnHouse };
}

function isFruitOnHouse(houseStart, houseEnd, fruitPosition) {
    return fruitPosition >= houseStart && fruitPosition <= houseEnd;
}

module.exports = {
    countApplesAndOranges,
    countApplesAndOrangesImpl,
    isFruitOnHouse
};
