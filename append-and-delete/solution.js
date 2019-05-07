'use strict';

/* Observations:
- Identify a common start between the two strings. That commonality doesn't need any work done to change it.
- Get the length of the remaining characters from the source and target strings. If num steps is less than that total,
it's impossible. 
- If the length of those two remaining strings is less than the number of steps we have, then we have some possibilities:
1) If the number of excess steps is greater than 2 * length of commonality, then it's yes, because we can reinsert the entire
commonality, and burn excess steps on empty deletes
2) Otherwise, the answer is only Yes if the number of excess steps is a multiple of 2. 
We need a delete followed by an insert to consume extra steps.

*/

const YES = 'Yes';
const NO = 'No';

function appendAndDelete(source, target, numSteps) {
    const commonStart = findCommonStartingString(source, target);

    const differingSourceLength = source.length - commonStart.length;
    const differingTargetLength = target.length - commonStart.length;

    const totalReplacementsRequired =
        differingSourceLength + differingTargetLength;

    if (numSteps < totalReplacementsRequired) {
        return NO;
    }

    const excessSteps = numSteps - totalReplacementsRequired;

    if (excessSteps >= 2 * commonStart.length) {
        // could just delete the entire common start, then burn steps on empty deletes, and finally insert back the common start
        return YES;
    }

    // otherwise we need to perform 2 operations (delete then insert) to consume our extra steps
    return excessSteps % 2 === 0 ? YES : NO;
}

function findCommonStartingString(source, target) {
    const sourceLength = source.length;
    const targetLength = target.length;

    let result = '';

    for (let i = 0; i < sourceLength; i++) {
        if (i >= targetLength) {
            break;
        }

        if (source[i] !== target[i]) {
            break;
        }

        result += source[i];
    }

    return result;
}

module.exports = {
    appendAndDelete
};
