'use strict';

module.exports = function countStrings(string: String) {
    const arrayOfStrings = string.split('');

    const charCounted = arrayOfStrings.reduce((total, char) => {
        return total[char] ? total[char]++ : total[char] = 1;
    }, {});
}