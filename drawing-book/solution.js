'use strict';

/*
Observations:
The number of flips from the front is going to be Math.floor(pageNum / 2)
To find out the number of flips from the back, I think it's easiest to just think about the number of flips from the front
required to view either page. If we then subtract the number of flips to the target page from the number of flips to the back page,
we'll have our answer for the flips required from the back.

There are certainly shortcuts to avoid computing the front of the back, based on the target page number,
but I think given the search space, it is fine to simplify for now and avoid these shortcuts
*/

function pageCount(pagesInBook, pageNum) {
    const pagesFromFront = getFlipsFromFront(pageNum);
    const pagesToBack = getFlipsFromFront(pagesInBook);
    const pagesFromBack = pagesToBack - pagesFromFront;

    return Math.min(pagesFromFront, pagesFromBack);
}

function getFlipsFromFront(pageNum) {
    return Math.floor(pageNum / 2);
}

module.exports = {
    pageCount
};
