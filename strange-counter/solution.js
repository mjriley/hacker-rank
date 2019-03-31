// Observations:
// Given a current timer, we can find the current value by continually subtracting the value of the current cycle start
// until the current cycle start is greater than the remaining timer.
// At that point, we can subtract the remaining timer from the cycle start, and we should have our answer

function strangeCounter(time) {
    // convert to 0-based indexing
    time -= 1;

    let numCycles = 0;

    let cycleStart = 3;

    while (time >= cycleStart) {
        time -= cycleStart;
        cycleStart *= 2;
    }

    return cycleStart - time;
}

module.exports = {
    strangeCounter
};
