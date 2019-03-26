/* Observations:
Unless the number of problems per page is 1, the maximum number of 'special problems' per chapter is 2.
That would occur when the first special problem occurs as the last problem of the page, 
allowing the next problem to also count as a special problem on the next page.

The strategy will be to iterate through the chapters, keeping track of which page we're currently on.
Determine how many pages this chapter will consume, and then input the page numbers and number of problems into a function to determine how many special problems
the chapter contains
Return the sum of all chapters
*/

function workbook(numChapters, problemsPerPage, problemsPerChapter) {
    let totalFound = 0;
    let currentPage = 1;

    for (
        let currentChapter = 0;
        currentChapter < numChapters;
        currentChapter++
    ) {
        totalFound += getSpecialProblemsInChapter(
            currentPage,
            problemsPerChapter[currentChapter],
            problemsPerPage
        );
        currentPage += getPagesInChapter(
            problemsPerChapter[currentChapter],
            problemsPerPage
        );
    }
    return totalFound;
}

function getSpecialProblemsInChapter(pageStart, numProblems, problemsPerPage) {
    let currentPage = pageStart;
    let remainingProblems = numProblems;

    let firstProblemOnPage = 1;
    let numFound = 0;

    while (firstProblemOnPage <= numProblems) {
        let lastProblemOnPage = Math.min(
            firstProblemOnPage + problemsPerPage - 1,
            numProblems
        );

        if (
            pageContainsSpecialProblem(
                currentPage,
                firstProblemOnPage,
                lastProblemOnPage
            )
        ) {
            numFound++;
        }

        currentPage++;
        firstProblemOnPage = lastProblemOnPage + 1;
    }

    return numFound;
}

function pageContainsSpecialProblem(page, firstProblem, lastProblem) {
    return firstProblem <= page && page <= lastProblem;
}

function getPagesInChapter(numProblems, problemsPerPage) {
    return Math.ceil(numProblems / problemsPerPage);
}

module.exports = {
    workbook,
    getSpecialProblemsInChapter
};
