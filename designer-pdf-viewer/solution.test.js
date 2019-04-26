'use strict';

const { designerPdfViewer, getCharIndex } = require('./solution');

function createHeightArray(height) {
    const heights = new Array(26);
    heights.fill(height);

    return heights;
}

describe('designerPdfViewer', () => {
    test('it returns 0 for an empty string', () => {
        const heights = createHeightArray(4);
        expect(designerPdfViewer(heights, '')).toBe(0);
    });

    test('it returns the correct area for a single character', () => {
        const heights = createHeightArray(4);
        expect(designerPdfViewer(heights, 'a')).toBe(4);
    });

    test('it returns the area for multiple characters', () => {
        const heights = createHeightArray(4);
        expect(designerPdfViewer(heights, 'abc')).toBe(12);
    });

    test('it uses the maximum height', () => {
        const heights = createHeightArray(4);
        heights[1] = 5; // b is now the tallest character
        expect(designerPdfViewer(heights, 'abc')).toBe(15);
    });
});

describe('getCharIndex', () => {
    test('it returns 0 for a', () => {
        expect(getCharIndex('a')).toBe(0);
    });

    test('it returns 25 for z', () => {
        expect(getCharIndex('z')).toBe(25);
    });
});
