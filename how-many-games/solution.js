function howManyGames(
    initialCost,
    discountPerPurchase,
    minimumCost,
    fundsAvailable
) {
    let fundsRemaining = fundsAvailable;
    let gamesPurchased = 0;
    let currentCost = initialCost;

    while (fundsRemaining >= currentCost) {
        fundsRemaining -= currentCost;
        currentCost = Math.max(currentCost - discountPerPurchase, minimumCost);
        gamesPurchased++;
    }

    return gamesPurchased;
}

module.exports = {
    howManyGames
};
