// Observations:
// This problem can be restated as:
// Given total count T and numbers A and B,
// find all numbers of the form:
// x * A + (T - x) * B, where 0 <= x <= T
// If we sort A and B first, then we can iterate x downwards, from T to 0,
// to produce values in increasing order.

// This is because, if A < B, then x * A + (T - x) * b must be less than (x - 1) * A + (T - x + 1) * b.
// If that were not the case, we'd have x * A + (T - x) * b >= (x - 1) * A + (T - x + 1) * b
// Simplifying it down...
// x * A + T * B - x * B >= x * A - A  + T * B - x * B + B
// -x * B >= -A - x * B + B
// 0 >= -A + B
// A >= B -- which cannot be true

function stones(numStones, incrementOne, incrementTwo) {
    // the first stone is always 0, so it doesn't factor in
    const totalStonesToCount = numStones - 1;

    const results = [];

    if (incrementOne === incrementTwo) {
        return [getLastStone([incrementOne, 0], totalStonesToCount, 0)];
    }

    const increments = [incrementOne, incrementTwo].sort((a, b) => a - b);

    for (let i = 0; i <= totalStonesToCount; i++) {
        const numOne = totalStonesToCount - i;
        const numTwo = i;

        results.push(getLastStone(increments, numOne, numTwo));
    }

    return results;
}

function getLastStone([incrementOne, incrementTwo], numOne, numTwo) {
    return incrementOne * numOne + incrementTwo * numTwo;
}

module.exports = {
    getLastStone,
    stones
};
