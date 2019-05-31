'use strict';

/* Observations:
The brute-force approach is obvious:
For each query, determine if the query is present in each of the input strings.
Do that for each query.
Determining whether one string exists in another would take approximately O(m + n) time, where m and n are the lengths of the words
Call that z.
If there are x input strings, finding the occurrences of a query would take O(x * z).
Repeating that for each query, with y queries, would take O(x * y * z)
As the restrictions of the total number of input strings and queries is identical, we could
simplify to: O(x^2 * z).

Given that the worst case is 1000 input strings and 1000 queries, that seems tractable.

One way to shortcut the process would be to realize that the problem is asking only whether a query
occurs in an input string, not how many times. So, a query that is itself contained in another query
would not need to be tested. I'm not sure if this gains us very much, however.
If we queried 'abc' and found it occurred 3 times, while we would know 'ab' would occur at least 3 times,
we would still need to determine if 'ab' occurred in any of the strings that didn't contain 'abc'.
Determining a way to do that while not using lots of space isn't immediately obvious to me.
We would also need to spend additional time determing whether one query string was a substring of another.


UPDATE: I misinterpreted the problem. The queries only match if they are exact copies of the input string,
so rather than testing for a substring, we test for an exact match.
If we just brute force this, then the analysis becomes:
- test whether one string is equivalent to another: O(n), where n is the length of the two strings
- doing this for each input string, if there are x input strings: O(x*n)
- doing this for each query string, if there are y query strings: O(x*y*n). Since x and y are worst case the same, we're back to O(x^2*n).

However, if we lexically sort all the words first, then finding whether a query string is included in the list of input string is only O(lg x * n)
Sorting all the words lexically is O(x lg x)
Collapsing identical, sorted words into each other, and increasing the count (so we only have to search for one occurrence) would take O(x) time.
So, finding each occurence is therefore O(lg x * n * y).
With the extra initial overhead, we get:
O(lg x * n * y) + O(x * lg x) + O(x).
Substituting y for x, and simplified, we end up with:
O(x * lg x * n)
 */

function matchingStrings(strings, queries) {
    const sortedString = strings.slice().sort();
    const sortedOccurences = [];
    const length = sortedString.length;
    for (let i = 0; i < length; i++) {
        let word = sortedString[i];

        let copies = 0;
        for (let j = i + 1; j < length; j++) {
            if (sortedString[j] === word) {
                copies++;
            } else {
                break;
            }
        }

        sortedOccurences.push({
            word,
            count: copies + 1
        });

        i += copies;
    }

    return queries.map(query => {
        // NOTE: I would use binary search rather than the generic javascript find here,
        // as sortedOccurences is a sorted array. However, I felt implementing binary search was beyond
        // the scope of this problem. In a real-world example, I'd leverage lodash rather than implementing it myself
        const occurences = sortedOccurences.find(
            element => element.word === query
        );
        return occurences ? occurences.count : 0;
    });
}

module.exports = {
    matchingStrings
};
