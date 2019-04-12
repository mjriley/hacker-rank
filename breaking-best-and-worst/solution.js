'use strict';
// Observations:
// we are guaranteed to have at least one game score, but it's important to not consider that initial score
// as breaking a record.
// We also want to make sure that we don't count a new score that is equal to the current min or max as creating a new min/max.
// So, we should create variables to hold the current min and current, and variables to hold the number of times each has updated
// Then, we can iterate through all the scores, processing each new score against our current bests

function breakingRecords(scores) {
    const { min, max } = breakingRecordsImpl(scores);

    return [max, min];
}

function breakingRecordsImpl(scores) {
    let currentMin = scores[0];
    let currentMax = scores[0];

    let minChanges = 0;
    let maxChanges = 0;

    for (let i = 1; i < scores.length; i++) {
        const currentScore = scores[i];
        if (currentScore < currentMin) {
            currentMin = currentScore;
            minChanges++;
        } else if (currentScore > currentMax) {
            currentMax = currentScore;
            maxChanges++;
        }
    }

    return { min: minChanges, max: maxChanges };
}

module.exports = {
    breakingRecordsImpl
};
