'use strict';

/* Observations:
This problem is essentially being able to wrap around a circular array.
Take the starting index, add the number of candies, and then modulus it by the number of prisoners to get the final seat number
*/

function saveThePrisoner(numPrisoners, numCandies, startingChair) {
    let normalizedSeat = (startingChair + (numCandies - 1)) % numPrisoners;

    if (normalizedSeat === 0) {
        normalizedSeat = numPrisoners;
    }

    return normalizedSeat;
}

module.exports = {
    saveThePrisoner
};
