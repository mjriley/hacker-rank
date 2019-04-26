'use strict';

function designerPdfViewer(heights, word) {
    if (word.length === 0) {
        return 0;
    }

    // map each character in the word to the corresponding height
    const charHeights = word.split('').map(char => heights[getCharIndex(char)]);

    // then take the maximum of those heights
    const height = Math.max(...charHeights);
    const width = word.length;

    return width * height;
}

function getCharIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

module.exports = {
    getCharIndex,
    designerPdfViewer
};
