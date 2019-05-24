'use strict';

/* Observations:
The solution can be thought of as a series of onion layers. We can create an algorithm to rotate
the outermost layer, then the problem becomes rotating the remaining matrix with the outer layer peeled off.

For each layer, we can notice that there are only 2*m + 2*(n-2) squares to rotate through.
Therefore, if we are asked to rotate this layer that amount, we won't have rotated at all.
The total number of rotations that needs to be performed is simply numRotations % layerSquares

Next, we need a basic function to rotate the provided coordinates 1 square.
If we perform the modulated rotations starting from the northwest-most coordinate, we'll wind up
with where that initial square will be rotated to.

We can use that rotation function to generate an ordered sequence of values.
Finally, we start with the destination square from the previous step. Extract the head value from the sequence of values.
Rotate the current square by 1, and fill it with the next head of the sequence. Continue until we're out of values.

We'll then start on the next layer, i.e. using (x-1, y-1) as the starting coordinate, with width: width - 2 and height: height - 2
We continue peeling layers until our starting coordinate is >= initialWidth / 2, or >= initialHeight / 2.
*/

function matrixRotation(matrix, numRotations) {
    matrixRotationImpl(matrix, numRotations);

    const height = matrix.length;

    for (let i = 0; i < height; i++) {
        console.log(matrix[i].join(' '));
    }
}

function matrixRotationImpl(matrix, numRotations) {
    const height = matrix.length;
    const width = matrix[0].length;

    const numRings = Math.min(height, width) / 2;
    for (let i = 0; i < numRings; i++) {
        rotateRing(matrix, i, numRotations);
    }
}

function rotateRing(matrix, ringIndex, numRotations) {
    const height = matrix.length - ringIndex * 2;
    const width = matrix[0].length - ringIndex * 2;

    const values = [...getRingSquares(matrix, ringIndex)];

    let rawCoord = { x: 0, y: 0 };

    rawCoord = rotateCoordinateTimes(rawCoord, width, height, numRotations);

    for (let value of values) {
        // store the value in the desination square
        let destinationCoord = offsetCoordinate(rawCoord, ringIndex);
        matrix[destinationCoord.y][destinationCoord.x] = value;

        // rotate the destination square
        rawCoord = rotateCoordinate(rawCoord, width, height);
    }
}

function* getRingSquares(matrix, ringOffset) {
    const height = matrix.length - ringOffset * 2;
    const width = matrix[0].length - ringOffset * 2;

    const numSquares = width * 2 + (height - 2) * 2;

    let rawCoord = { x: 0, y: 0 };
    let realCoord = offsetCoordinate(rawCoord, ringOffset);

    yield matrix[realCoord.y][realCoord.x];

    for (let i = 1; i < numSquares; i++) {
        rawCoord = rotateCoordinate(rawCoord, width, height);
        realCoord = offsetCoordinate(rawCoord, ringOffset);
        yield matrix[realCoord.y][realCoord.x];
    }
}

function rotateCoordinateTimes(coord, width, height, numRotations) {
    let result = coord;
    const numSquares = width * 2 + (height - 2) * 2;
    const normalizedRotations = numRotations % numSquares;

    for (let i = 0; i < normalizedRotations; i++) {
        result = rotateCoordinate(result, width, height);
    }

    return result;
}

function rotateCoordinate(coord, width, height) {
    if (coord.y === 0 && coord.x > 0) {
        // attempt to rotate to the left
        return {
            x: coord.x - 1,
            y: coord.y
        };
    } else if (coord.x === 0 && coord.y < height - 1) {
        // attempt to rotate down
        return {
            x: coord.x,
            y: coord.y + 1
        };
    } else if (coord.y === height - 1 && coord.x < width - 1) {
        // attempt to rotate right
        return {
            x: coord.x + 1,
            y: coord.y
        };
    } else if (coord.x === width - 1 && coord.y > 0) {
        // attempt to rotate up
        return {
            x: coord.x,
            y: coord.y - 1
        };
    } else {
        throw new Exception(
            `no rotation found for (${coord.x}, ${
                coord.y
            }) with width: ${width} and height: ${height}`
        );
    }
}

function offsetCoordinate(coord, offset) {
    return { x: coord.x + offset, y: coord.y + offset };
}

module.exports = {
    matrixRotationImpl,
    rotateCoordinate,
    rotateCoordinateTimes,
    getRingSquares,
    rotateRing
};
