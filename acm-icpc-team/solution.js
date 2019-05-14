'use strict';

/* Observations:
I can't think of anything obvious to optimize this problem, so the straightforward approach 
is to brute-force the problem. We can iterate through each member, seeing how many topics it and every other 
possible member can handle, keeping track of the max and incrementing the total number found at that number.
To find the number of topics a team can handle, we can pseudo-binary OR together the two strings, which would take O(m) time,
and then iterate through that result to count the number of topics, also taking O(m) time.

Because we are comparing every element against every element, that iteration loop is O(n^2). Because we have to do that topic count
for every combination, the final complexity is O(n^2 * m). This seems like it can be lowered.

After some thought, I'm not sure there is a way to avoid comparing every element against every other.
When our runtime involves O(n^2), it makes me want to consider sorting the input. However, I don't think anything is really gained here.

We can achieve a possible optimization (although not in worst case), by keeping track of all the missing topics for each person
Then, when we create a team of two with this person, we can simply check the missing topics for their presence in the other team member.
Instead of looking at all m bits, now we look at all k bits, where k is the missing amount. Worst case, k is going to be m, but 
for practical inputs, this should be an improvement.
*/

const KNOWN = '1';
const UNKNOWN = '0';

function acmTeam(attendees) {
    const numTopics = attendees[0].length;

    // initialize with all topics missing
    let bestMissedCount = numTopics;
    let teamsWithBestCount = 0;

    const numAttendees = attendees.length;
    for (let i = 0; i < numAttendees; i++) {
        const missingTopics = getMissingTopics(attendees[i]);
        for (let j = i + 1; j < numAttendees; j++) {
            const missingCount = getMissingTeamTopics(
                missingTopics,
                attendees[j]
            );

            if (missingCount < bestMissedCount) {
                bestMissedCount = missingCount;
                teamsWithBestCount = 1;
            } else if (missingCount === bestMissedCount) {
                teamsWithBestCount++;
            }
        }
    }

    const totalTopicsKnown = numTopics - bestMissedCount;

    return [totalTopicsKnown, teamsWithBestCount];
}

function getMissingTopics(topics) {
    const missingTopics = [];

    const length = topics.length;
    for (let i = 0; i < length; i++) {
        if (topics[i] === UNKNOWN) {
            missingTopics.push(i);
        }
    }

    return missingTopics;
}

function getMissingTeamTopics(missingTopics, teammateTopics) {
    return missingTopics.reduce(
        (total, topicId) =>
            teammateTopics[topicId] === UNKNOWN ? total + 1 : total,
        0
    );
}

module.exports = {
    acmTeam,
    getMissingTopics,
    getMissingTeamTopics,
    KNOWN,
    UNKNOWN
};
