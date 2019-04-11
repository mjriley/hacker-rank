'use strict';

/* Observations:
No number is a factor for a lesser product -- so our search should only include the numbers from the max of the factors to the min of the products, inclusive.
Given that the range for any of these numbers is only 1-100, brute-forcing this problems seems the most sensible approach:
- Find the max of the factors,
- Find the min of the products
- For each number between the two,
  - if every number in factors is not a factor of the current number, return false
  - if every product in products is not evenly divisible by the current number, return false
- return true
*/

// return the number of integers between the two sets -- numbers that are divisible by all the factors, and are factors in all the products.
function getTotalX(factors, products) {
    const min = Math.max(...factors);
    const max = Math.min(...products);

    let numFound = 0;

    for (let i = min; i <= max; i++) {
        if (isBetween(i, factors, products)) {
            numFound++;
        }
    }

    return numFound;
}

function isBetween(candidate, factors, products) {
    const factorsAreGood = factors.every(factor => candidate % factor === 0);
    const productsAreGood = products.every(
        product => product % candidate === 0
    );

    return factorsAreGood && productsAreGood;
}

module.exports = {
    getTotalX,
    isBetween
};
