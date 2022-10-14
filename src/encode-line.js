const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if (str === '') return '';
    let res = '';
    let count = 0;
    char = str[0];
    for (let i of str) {
        if (i === char)
            count++;
        else {
            if (count > 1)
                res += count + char;
            else
                res += char;
            count = 1;
            char = i;
        }
    }
    if (count > 1)
        res += count + char;
    else
        res += char;
    return res;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
