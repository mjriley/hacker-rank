'use strict';

/* Observations:
I have to admit, despite this being labelled as a 'hard' problem, it leaves me questioning where the difficulty is.
The instructions are pretty imperative in terms of how everything would be carried out. If I were to just apply
the queries in order, it doesn't seem like it would present much of a challenge.

That said, the size of the array (10^7) as well as the number of queries (2*10^5) are quite large,
so that is where the difficulty might lie.

Another observation would be that addition is commutative -- order doesn't matter. We're asked to add a specific value
to a range of array elements, but that order can be processed in any order. If we were to first sort all the queries,
by first the starting value, and then the ending value, we could greatly reduce the total number of queries.
For example, if we had 2 queries:
1 5 2 (add 2 to the first 5 elements)
1 3 3 (add 3 to the first 3 elements)

We could first sort them by start and end:
1 3 3
1 5 2

We encounter 1 3 3, and it doesn't overlap any previous ranges, so we leave it be.
Processing 1 5 2, however, it overlaps the 1 3 range we have, so we build it into that range:
1 3 5
4 5 2

Continually combining queries into distinct ranges makes it easy to find the maximum among them -- here, it would be 5.
The other real benefit is that we don't need to keep much in memory.
Once we start processing a range that starts with 2, for example, we know that the value at index 1 will never change.
We can compare it against our current maximum, and then remove that range from memory.

I think the above approach is probably going to be best, but I'd like to start with the straight-forward approach of processing the queries in order
to determine if keeping an array of 10^7 elements in memory will be a problem.


UPDATE:
As expected, many of the test cases failed submission due to timeout. I think sorting the queries and then combining will probably
meet the time requirements.
*/

function arrayManipulation(n, queries) {
    const array = allocateArrayOfSize(n);
    applyQueries(array, queries);

    return Math.max(...array);
}

function allocateArrayOfSize(n) {
    const array = new Array(n).fill(0);
    return array;
}

function applyQueries(array, queries) {
    queries.forEach(query => applyQuery(array, query));

    return array;
}

// Mutating array here -- with such a large potential array, it would be very expensive to constantly create a new one for each query
function applyQuery(array, query) {
    const [start, end, value] = query;
    for (let i = start - 1; i < end; i++) {
        array[i] += value;
    }

    return array;
}

const START = 0;
const END = 1;
const VALUE = 2;

function compareQueries(left, right) {
    const startComparison = left[START] - right[START];

    if (startComparison !== 0) {
        return startComparison;
    }

    const endComparison = left[END] - right[END];
    return endComparison;
}

function combineQueries(left, right) {
    let result = null;

    if (left[START] === right[START] && left[END] === right[END]) {
        result = [[left[START], left[END], left[VALUE] + right[VALUE]]];
    } else {
        result = [left, right];
    }

    return result;
}

function createRanges(n, queries) {
    // create a query array to hold all ranges that start at the same number
    const ranges = new Array(n);

    for (var query of queries) {
        let combined = undefined,
            post = undefined;

        do {
            const result = combine(query, ranges[query[START] - 1]);
            combined = result.combined;
            post = result.post;

            ranges[query[START] - 1] = combined;

            query = post;
        } while (typeof post !== 'undefined');
    }

    return ranges;
}

function processRanges(ranges) {
    // get rid of the unused ranges
    // TODO -- can't use usedRanges because post needs to be re-inserted back into the ranges
    const usedRanges = ranges.filter(range => typeof range !== 'undefined');
    const length = usedRanges.length;

    let currentQuery = usedRanges[0];
    let currentMax = currentQuery[VALUE];
    for (let i = 1; i < length; i++) {
        const { pre, combined, post } = combine(usedRanges[i], currentQuery);
        if (typeof pre !== 'undefined') {
            // can consider this against the existing max
        }
    }
}

function combine(newQuery, existing) {
    const result = {
        pre: undefined,
        combined: undefined,
        post: undefined
    };

    if (typeof existing === 'undefined') {
        result.combined = newQuery;
    } else {
        const [left, right] =
            compareQueries(newQuery, existing) < 0
                ? [newQuery, existing]
                : [existing, newQuery];

        // check for distinct ranges
        if (left[END] < right[START]) {
            result.pre = left;
            result.combined = right;
            return result;
        }

        // pre
        if (left[START] !== right[START]) {
            const preEnd = Math.min(left[END], right[START] - 1);
            result.pre = [left[START], preEnd, left[VALUE]];
        }

        // combined
        const end = Math.min(left[END], right[END]);
        result.combined = [right[START], end, left[VALUE] + right[VALUE]];

        // post
        if (left[END] !== right[END]) {
            const postStart = Math.min(left[END] + 1, right[END] + 1);
            const postEnd = Math.max(left[END], right[END]);
            const value = postEnd === left[END] ? left[VALUE] : right[VALUE];

            result.post = [postStart, postEnd, value];
        }
    }

    return result;
}

// function processQueries(queries) {
// assume the queries are sorted
// peel off the first query, store it in 'current query'
// for each query in queries:
// combine the first query with the current query.
// 1 of 3 possibilities exist:
// 1) the range is the same. In this case, simply sum the two values, and that becomes our current query
// 2) the ranges are completely distinct. In this case, the value in the current query becomes our potential max.
//      Compare it to the best max we've found so far, and update accordingly. The 2nd query becomes our current query
// 3) the ranges overlap, but the first ends before the 2nd (because we've sorted them). In this case, it gets broken down further:
// - they have the same start. In this case, combine the two as appropriate, and we'll end up with an extra 'end'
// insert that end back into the list of queries we need to process
// - they have different starts. In this case, extract the first segment and compare it to our best max.
//     the middle segment is combined and becomes our current query.
//     the final segment should be inserted back into the queries
// }

module.exports = {
    arrayManipulation,
    applyQuery,
    applyQueries,
    allocateArrayOfSize,
    compareQueries,
    combineQueries,
    createRanges,
    combine
};
