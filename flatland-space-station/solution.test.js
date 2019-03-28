const {
    getDistanceBetweenStations,
    flatlandSpaceStations,
    getMaxDistanceBetweenStations,
    getStationDistanceFromCityDistance,
    getFurthestCity,
    getDistanceToFirstStation,
    getDistanceToLastStation
} = require('./solution');

test('getDistanceToFirstStation', () => {
    expect(getDistanceToFirstStation([2, 3])).toBe(2);
});

test('getDistanceToLastStation', () => {
    expect(getDistanceToLastStation(10, [2, 3])).toBe(6);
});

test('getFurthestCity', () => {
    expect(getFurthestCity(1)).toBe(0);
    expect(getFurthestCity(2)).toBe(1);
    expect(getFurthestCity(3)).toBe(1);
    expect(getFurthestCity(4)).toBe(2);
});

test('getDistancesBetweenStations', () => {
    expect(getDistanceBetweenStations([1, 3, 7])).toEqual([2, 4]);
});

test('getMaxDistanceBetweenStations', () => {
    expect(getMaxDistanceBetweenStations([1, 3, 7])).toEqual(4);
});

describe('flatlandSpaceStations', () => {
    test('it can return the distance to the first city', () => {
        expect(flatlandSpaceStations(3, [2])).toBe(2);
    });

    test('it can return the distance to the last city', () => {
        expect(flatlandSpaceStations(3, [0])).toBe(2);
    });

    test('it can return the distance between stations', () => {
        expect(flatlandSpaceStations(6, [1, 6])).toBe(2);
    });

    test('it handles every city having a station', () => {
        expect(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5])).toBe(0);
    });

    test('it handles the failing scenario', () => {
        expect(flatlandSpaceStations(20, [13, 1, 11, 10, 6])).toBe(6);
    });
});
