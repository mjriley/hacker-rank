function getMinAndMax(input) {
    let [min, max] = [input[0], input[0]];

    for (let i = 1; i < input.length; i++) {
        if (input[i] < min) {
            min = input[i];
        }

        if (input[i] > max) {
            max = input[i];
        }
    }

    return [min, max];
}

function sum(input) {
    return input.reduce((sum, element) => element + sum);
}

function getMiniMaxSum(input) {
    const total = sum(input);
    const [min, max] = getMinAndMax(input);

    return [total - max, total - min];
}

// NOTE -- the actual challenge requires outputting the results to stdout.
// I briefly thought about mocking console.log, but considered testing it outside
// the scope for this challenge.

function miniMaxSum(input) {
    const [min, max] = getMiniMaxSum(input);
    console.log(`${min} ${max}`);
}

module.exports = {
    getMinAndMax,
    sum,
    getMiniMaxSum
};
