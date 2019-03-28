// return the maximum distance from any city to its nearest space station
// the distance from a city to its own station is 0

// Observations:
// If there is only 1 station, then the maximum distance to the station is from the first or the last city
// If there are the same number of stations as cities, then the maximum distance is always 0, because every city has access to its own station
// If two stations exist, then the maximum distance to a station for any city between them will always be floor((c2 - c1) / 2)
// So, if we refuse to sort the station indices, I think we are forced to find the nearest station to every city, which would cost O(stationIndices) time.
// Doing this for every city would therefore be O(numCities * stationIndices)
// However, if we instead pay the cost to sort stationIndices (O(stationIndices * log(stationIndices))), we can find the maximum distance between 2 stations
// with 1 iteration through stationIndices (O(stationIndices). Returning the max of this value or the distances to the two endpoints can be done in constant time.
// So, this approach is faster, as it can be computed in O(stationIndices * log(stationIndices)) time, and the number of stations is guaranteed to be less
// than the number of cities.

// NOTE -- my first submission failed due to javascript sorting lexically, by default.
function flatlandSpaceStations(numCities, stationIndices) {
    stationIndices.sort((x, y) => x - y);
    const distanceToFirstStation = getDistanceToFirstStation(stationIndices);
    const distanceToLastStation = getDistanceToLastStation(
        numCities,
        stationIndices
    );

    const distances = [distanceToFirstStation, distanceToLastStation];
    if (stationIndices.length >= 2) {
        const maxDistance = getMaxDistanceBetweenStations(stationIndices);
        distances.push(getFurthestCity(maxDistance));
    }

    return Math.max(...distances);
}

function getMaxDistanceBetweenStations(stationLocations) {
    return getDistanceBetweenStations(stationLocations).reduce((max, current) =>
        Math.max(max, current)
    );
}

function getDistanceBetweenStations(stationLocations) {
    return stationLocations
        .map((element, index) => {
            return index === 0 ? 0 : element - stationLocations[index - 1];
        })
        .slice(1);
}

function getFurthestCity(distanceBetweenStations) {
    return Math.floor(distanceBetweenStations / 2);
}

function getDistanceToFirstStation(stations) {
    return stations[0];
}

function getDistanceToLastStation(numCities, stations) {
    const lastStation = stations[stations.length - 1];
    return numCities - lastStation - 1;
}

module.exports = {
    flatlandSpaceStations,
    getDistanceBetweenStations,
    getMaxDistanceBetweenStations,
    getFurthestCity,
    getDistanceToFirstStation,
    getDistanceToLastStation
};
