'use strict';

// we are guaranteed from the problem definition that start_x1 < start_x2
// we are not guaranteed that velocity1 > velocity2
function kangaroo(start_x1, velocity1, start_x2, velocity2) {
    if (velocity1 <= velocity2) {
        return 'NO';
    }

    // otherwise, x1 will eventually be equal to, or larger, than x2
    // iterate until they're either equal, or x1 is larger

    let x1 = start_x1;
    let x2 = start_x2;
    while (x1 < x2) {
        x1 += velocity1;
        x2 += velocity2;
    }

    if (x1 === x2) {
        return 'YES';
    }

    return 'NO';
}

module.exports = {
    kangaroo
};
