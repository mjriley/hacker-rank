'use strict';

const gemstones = (rockStrings) => {
    const numRocks = rockStrings.length;
    const mineralCounts = {};

    rockStrings.forEach((rock) => {
        const uniqueMinerals = {};
        rock.split('').forEach((mineral) => {
            uniqueMinerals[mineral] = true;
        });

        for (const mineral in uniqueMinerals) {
            mineralCounts[mineral] = mineralCounts[mineral] || 0;
            mineralCounts[mineral]++;
        }
    });

    let mineralsFound = 0;
    for (const mineral in mineralCounts) {
        if (mineralCounts[mineral] === numRocks) {
            mineralsFound++;
        }
    }

    return mineralsFound;
};

module.exports = {
    gemstones,
};
