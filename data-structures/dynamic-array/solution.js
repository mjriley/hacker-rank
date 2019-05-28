'use strict';

/* Observations:
I wasn't a fan of this problem description or what its even trying to do. Because it was relying on side effects
(and read like it was trying to print the commands), I went with a class-based approach for the processor.

There is likely a better way to phrase this problem that would make the testing strategy more straight-forward.
As-is, I was confident enough based on the simplicity of the problem that I didn't feel the need
to mock up the test data.
*/

class QueryProcessor {
    constructor(n) {
        this.lastAnswer = 0;

        this.sequences = [];
        for (let i = 0; i < n; i++) {
            this.sequences.push([]);
        }
    }

    process([queryType, x, y]) {
        if (!this.isValidQuery(queryType)) {
            throw new Exception(`invalid query type: ${queryType}`);
        }

        const sequence = this.getSequence(x);
        if (queryType === 1) {
            return this.appendElement(sequence, y);
        } else {
            return this.findAndAssign(sequence, y);
        }
    }

    isValidQuery(queryType) {
        return queryType === 1 || queryType === 2;
    }

    appendElement(sequence, y) {
        sequence.push(y);
    }

    findAndAssign(sequence, y) {
        const element = sequence[y % sequence.length];
        this.lastAnswer = element;
        return this.lastAnswer;
    }

    getSequence(x) {
        const length = this.sequences.length;
        const index = (x ^ this.lastAnswer) % length;
        return this.sequences[index];
    }
}

function dynamicArray(n, queries) {
    const processor = new QueryProcessor(n);
    return queries
        .map(query => processor.process(query))
        .filter(x => typeof x !== 'undefined');
}

module.exports = {
    dynamicArray
};
