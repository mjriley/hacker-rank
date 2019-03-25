function birthdayCakeCandles(input) {
    let max = input[0];
    let maxCount = 1;

    for (let i = 1; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];
            maxCount = 1;
        } else if (input[i] === max) {
            maxCount++;
        }
    }

    return maxCount;
}

module.exports = {
    birthdayCakeCandles
};
