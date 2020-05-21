'use strict';

const makingAnagrams = (left, right) => {
    const leftCounts = letterCounts(left);
    const rightCounts = letterCounts(right);

    const leftKeys = Object.keys(leftCounts);
    const rightKeys = Object.keys(rightCounts);
    const allKeys = [...new Set([...leftKeys, ...rightKeys])];

    let totalRemoved = 0;

    allKeys.forEach((key) => {
        const leftCount = leftCounts[key] || 0;
        const rightCount = rightCounts[key] || 0;
        totalRemoved += Math.abs(leftCount - rightCount);
    });

    return totalRemoved;
};

const letterCounts = (word) => {
    const counts = {};
    word.split('').forEach((letter) => {
        counts[letter] = counts[letter] || 0;
        counts[letter]++;
    });

    return counts;
};

module.exports = {
    makingAnagrams,
};
