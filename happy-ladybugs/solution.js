'use strict';
// there are 2 possibilities:
// 1) there are no open spaces. In this case, if the ladybugs are not already happy, then we return 'NO'
// 2) there is at least one open space. With even a single open space, we can rearrange the ladybugs any way we want.
// thus, the only thing that prevents the ladybugs from being happy is if there aren't 2 or more of each color
const EMPTY = '_';

function happyLadybugs(bugs) {
    if (getNumEmpty(bugs) === 0) {
        return isHappy(bugs) ? 'YES' : 'NO';
    }

    return areAnyBugsAlone(bugs) ? 'NO' : 'YES';
}

function getNumEmpty(bugs) {
    return bugs.split('').filter(x => x === EMPTY).length;
}

function areAnyBugsAlone(bugs) {
    let colorCount = {};

    for (let i = 0; i < bugs.length; i++) {
        let currentBug = bugs[i];
        if (currentBug !== EMPTY) {
            colorCount[currentBug] = (colorCount[currentBug] || 0) + 1;
        }
    }

    for (let color in colorCount) {
        if (colorCount[color] === 1) {
            return true;
        }
    }

    return false;
}

function isHappy(bugs) {
    if (bugs.length === 0) {
        return true;
    }

    if (bugs.length === 1) {
        if (bugs[0] === EMPTY) {
            return true;
        } else {
            return false;
        }
    }

    let prevBug = bugs[0];
    let isHappy = false;

    for (let i = 1; i < bugs.length; i++) {
        if (prevBug === EMPTY) {
            // make sure any new bug starts off unhappy
            isHappy = false;
        } else {
            // previous bug is a color
            if (bugs[i] !== prevBug) {
                // if the previous bug wasn't happy, we're not happy
                if (!isHappy) {
                    return false;
                }

                // otherwise, the previous bug is taken care of, but we need to start over with this current bug
                isHappy = false;
            } else {
                isHappy = true;
            }
        }

        prevBug = bugs[i];
    }

    return isHappy;
}

module.exports = {
    happyLadybugs
};
