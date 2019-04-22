'use strict';

function catAndMouse(cat1, cat2, mouse) {
    const distanceToCat1 = Math.abs(cat1 - mouse);
    const distanceToCat2 = Math.abs(cat2 - mouse);

    if (distanceToCat1 === distanceToCat2) {
        return 'Mouse C';
    }

    return distanceToCat1 < distanceToCat2 ? 'Cat A' : 'Cat B';
}

module.exports = {
    catAndMouse
};
