function zip(a, b) {
    return a.map((element, i) => [element, b[i]]);
}

function compareTriplets(a, b) {
    const pairs = zip(a, b);
    return pairs.reduce(
        (sum, current) => {
            const scores = compareScores(current[0], current[1]);
            return [sum[0] + scores[0], sum[1] + scores[1]];
        },
        [0, 0]
    );
}

function compareScores(a, b) {
    return [a > b ? 1 : 0, a < b ? 1 : 0];
}

module.exports = {
    compareTriplets,
    compareScores
};
