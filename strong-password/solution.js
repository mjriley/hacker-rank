'use strict';

/* Strong criteria:
    length is at least 6
    contains at least one digit
    contains at least one lowercase character
    contains at least one uppercase character
    contains at least one special character: '!@#$%^&*()-+'

    Find the minimum number of characters needed to make her random password strong.

    NOTES:
    Each category is unique -- digits are not lowercase, are not uppercase, are not special.
    4 different 'character type' restrictions are required, with the length being a special case.
    So, for the character type restrictions, we iterate through the string, identifying how many
    character conditions are met. Once we reach 4, we're done with that check.
    Otherwise, store the number of characters needed to meet all checks

    Once that check is done, we look for the length of the string. If it is shorter than 6,
    calculate the difference needed to make it 6. 

    Return the greater number between satisfying the character checks and the length check

*/

const NUM_CHAR_REQUIREMENTS_NEEDED = 4;
const MIN_LENGTH = 6;

function minimumNumber(n, password) {
    // the password is at least 1 character long, so we know that at LEAST,
    // one requirement is fulfilled. The worst-case password needs 3 character
    // requirements satisfied. So, if we find a string that is shorter than 3 characters long
    // (6 - 3), then we can simply return the difference in length as our answer
    // -- because the number of characters needed to meet the length requirement
    // would allow us to fulfill any missing character requirements
    if (password.length < MIN_LENGTH - NUM_CHAR_REQUIREMENTS_NEEDED + 1) {
        return MIN_LENGTH - password.length;
    }

    // otherwise, we need to figure out what character requirements were met
    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (isUppercase(char)) {
            hasUppercase = true;
        } else if (isLowercase(char)) {
            hasLowercase = true;
        } else if (isDigit(char)) {
            hasDigit = true;
        } else {
            // because every character is one of the 4 types
            hasSpecial = true;
        }
    }

    let numCharacterRequirementsFound = 0;
    if (hasUppercase) {
        numCharacterRequirementsFound++;
    }
    if (hasLowercase) {
        numCharacterRequirementsFound++;
    }
    if (hasDigit) {
        numCharacterRequirementsFound++;
    }
    if (hasSpecial) {
        numCharacterRequirementsFound++;
    }

    const numRequirementsMissing =
        NUM_CHAR_REQUIREMENTS_NEEDED - numCharacterRequirementsFound;
    const charsMissing = MIN_LENGTH - password.length;

    return Math.max(numRequirementsMissing, charsMissing);
}

function isUppercase(char) {
    return char >= 'A' && char <= 'Z';
}

function isLowercase(char) {
    return char >= 'a' && char <= 'z';
}

function isDigit(char) {
    return char >= '0' && char <= '9';
}

module.exports = {
    minimumNumber,
};
