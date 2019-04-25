'use strict';

function hurdleRace(jumpHeight, obstacleHeights) {
    const maximumObstacleHeight = Math.max(...obstacleHeights);
    if (jumpHeight >= maximumObstacleHeight) {
        return 0;
    }

    return maximumObstacleHeight - jumpHeight;
}

module.exports = {
    hurdleRace
};
