// This is a recursive problem for each ladybug.
// The first ladybug needs to be made happy, and then that pair of ladybugs collapses into a single ladybug
function happyLadybugs(b) {}

const EMPTY = '_';

function findNextOpenSpace(bugs, startingPoint) {
    for (let i = startingPoint; i < b.length; i++) {
        if (bugs[i] === EMPTY) {
            return i;
        }
    }
}
