// observations -- this is essentially a recursive problem
// the base case is a 2-element array. If both elements are even,
// then the number of loaves required is 0. If both are odd, the number of loaves required is 1.
// If they are mismatched, then the answer is 'NO'
// If there are more than 2 elements in the array, we can think of the array as head (the first element) and tail (the remainder of the array).
// If the head is even, we don't need to give him a loaf, so the problem now becomes fairRations(tail)
// If the head is odd, it will need to receive a loaf, at which point it will be satisfied, and giving that element a loaf will
// force his neighbor to have a loaf. Therefore, that problem can be restated as 2 + fairRations(modifiedTail),
// where modifiedTail has its first element increased by 1

function fairRations(loaves) {
    return fairRationsImpl(0, loaves, 0);
}

function fairRationsImpl(startIndex, loaves, loavesAdded) {
    if (loaves.length - startIndex === 2) {
        if (loaves[startIndex] % 2 === 0 && loaves[startIndex + 1] % 2 === 0) {
            return loavesAdded;
        }

        if (loaves[startIndex] % 2 === 1 && loaves[startIndex + 1] % 2 === 1) {
            return 2 + loavesAdded;
        }

        return 'NO';
    }

    if (loaves[startIndex] % 2 === 0) {
        return fairRationsImpl(startIndex + 1, loaves, loavesAdded);
    } else {
        startIndex++;
        loaves[startIndex]++;
        return fairRationsImpl(startIndex, loaves, loavesAdded + 2);
    }
}

module.exports = {
    fairRations
};
