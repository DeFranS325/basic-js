const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let res = [];
    arr.forEach(el => { (el === -1) ? res.push(1) : res.push(0); });
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++)
        (arr[i] === -1) ? res[res.indexOf(1)] = arr[i] : res[res.indexOf(0)] = arr[i];
    return res;
}

module.exports = {
  sortByHeight
};
