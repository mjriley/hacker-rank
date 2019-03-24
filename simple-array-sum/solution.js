function simpleArraySum(input) {
    if (input.length === 0) {
        return 0;
    }

    return input.reduce((sum, current) => sum + current);
}

module.exports = simpleArraySum;
