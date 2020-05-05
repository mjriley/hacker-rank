'use strict';

const gradingStudents = (grades) => grades.map(roundGrade);

const roundGrade = (grade) => {
    if (grade < 38) {
        return grade;
    }

    // get closest multiple of 5
    let multiple = Math.floor(grade / 5) * 5;
    if (multiple !== grade) {
        multiple += 5;
    }

    // if the difference between those is less than 3, return the rounded number
    const difference = multiple - grade;
    // otherwise return the original
    return difference < 3 ? multiple : grade;
};

module.exports = {
    roundGrade,
    gradingStudents,
};
