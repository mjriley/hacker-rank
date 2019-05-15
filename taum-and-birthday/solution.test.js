'use strict';

const {
    taumBday,
    stringAddition,
    stringMultiplication
} = require('./solution');

describe('taumBday', () => {
    test('it uses the two costs if the conversion cost is prohibitive', () => {
        expect(taumBday(5, 9, 4, 6, 8)).toBe('74');
    });

    test('it uses the white cost + conversion if lower than the black cost', () => {
        expect(taumBday(2, 6, 8, 2, 1)).toBe('18');
    });

    test('it uses the black cost + conversion if lower than the white cost', () => {
        expect(taumBday(2, 6, 2, 8, 1)).toBe('22');
    });

    test('it passes example 1', () => {
        expect(taumBday(3, 5, 3, 4, 1)).toBe('29');
    });

    test('it passes example 2', () => {
        expect(taumBday(10, 10, 1, 1, 1)).toBe('20');
    });

    test('it passes example 3', () => {
        expect(taumBday(5, 9, 2, 3, 4)).toBe('37');
    });

    test.each`
        numBlack     | numWhite     | blackCost    | whiteCost    | convCost     | expectedCost
        ${5}         | ${9}         | ${4}         | ${6}         | ${8}         | ${'74'}
        ${742407782} | ${90529439}  | ${847666641} | ${8651519}   | ${821801924} | ${'617318315833461267'}
        ${142640749} | ${652432197} | ${701695848} | ${936714099} | ${324221606} | ${'711232858900355655'}
    `(
        'passes failing example',
        ({
            numBlack,
            numWhite,
            blackCost,
            whiteCost,
            convCost,
            expectedCost
        }) => {
            expect(
                taumBday(numBlack, numWhite, blackCost, whiteCost, convCost)
            ).toBe(expectedCost);
        }
    );
});

describe('stringAddition', () => {
    test('it can add two numbers', () => {
        expect(stringAddition('3', '4')).toBe('7');
    });

    test('it can add multiple digits', () => {
        expect(stringAddition('34', '52')).toBe('86');
    });

    test('it can handle carrying a digit over', () => {
        expect(stringAddition('39', '53')).toBe('92');
    });

    test('it can handle numbers of different length', () => {
        expect(stringAddition('39', '2')).toBe('41');
    });

    test('it will add the carry when it runs out of digits', () => {
        expect(stringAddition('8', '4')).toBe('12');
    });
});

describe('stringMultiplication', () => {
    test('it can multiply two numbers', () => {
        expect(stringMultiplication(3, 2)).toBe('6');
    });

    test('it can handle multiple digits', () => {
        expect(stringMultiplication(59, 168)).toBe('9912');
    });
});
