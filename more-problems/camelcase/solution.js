'use strict';

const camelcase = (input) => {
    return input.split('').filter(isUppercase).length + 1;
};

const CODE_A = 'A'.charCodeAt(0);
const CODE_Z = 'Z'.charCodeAt(0);

const isUppercase = (char) => {
    const code = char.charCodeAt(0);
    return code >= CODE_A && code <= CODE_Z;
};

module.exports = {
    camelcase,
};
