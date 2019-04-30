'use strict';

/* Observations:
The first thing that stands out is that domain for the number of days is actually very small/restrictive.
I don't see an immediate pattern to shortcut generating the days, in order, but when the maximum number
of days is only 50, it seems like a brute-force approach is sensible here.
For every day, simply determine the number of people who received it, compute the number that will like it, 
and then add that to the total number of likes.
*/

function viralAdvertising(numDays) {
    let numReceivers = 5;
    let totalLiked = 0;

    for (let day = 1; day <= numDays; day++) {
        const numLiked = getNumLiked(numReceivers);
        numReceivers = numLiked * 3;
        totalLiked += numLiked;
    }

    return totalLiked;
}

function getNumLiked(numReceived) {
    return Math.floor(numReceived / 2);
}

module.exports = {
    viralAdvertising
};
