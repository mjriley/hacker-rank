'use strict';

/* Observations:
If we iterate through alice's scores in order without modifying the scores array, we end up doing repeated work -- any tie score will need
to be detected for each of alice's scores. However, if we save the current rank, and process her scores in reverse order,
we can avoid this. We can iterate through the scores array, keeping track of order, until we find where her new score fits.
For her next score, we can restart the search where the previous one left off. With this approach, we never need to examine any element
within the scores array more than once, so we can finish this entire problem in O(n + m) time, requiring only O(1) storage to keep track of the current rank.

It should be noted that the storage sizes for both of the scores array can be quite large, and so it might make sense to try to re-use alice's scores
in the result rather than creating a new array. Since we return the rank of each of her scores, we could just replace each score with its corresponding rank,
in-place. However, this tends to create programmer error, especially if the function definition doesn't hint at this behavior, so I'd prefer
to generate a new array to return until requirements dictate otherwise.
*/

function climbingLeaderboard(scores, newScores) {
    const numNewScores = newScores.length;
    const numScores = scores.length;

    const result = new Array(numNewScores);

    let searchIndex = 0;
    let currentRank = 1;

    // iterate in reverse order
    for (let i = numNewScores - 1; i >= 0; i--) {
        const newScore = newScores[i];
        for (
            ;
            searchIndex < numScores && newScore < scores[searchIndex];
            searchIndex++
        ) {
            if (
                searchIndex === 0 ||
                scores[searchIndex] !== scores[searchIndex - 1]
            ) {
                // this is a new score, the rank should increase
                currentRank++;
            }
        }

        result[i] = currentRank;
    }

    return result;
}

module.exports = {
    climbingLeaderboard
};
