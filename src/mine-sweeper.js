const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let res = new Array(n);
    for (let i = 0; i < n; i++) { //stroke
        let mineArr = new Array(m);
        for (let j = 0; j < m; j++) { //stolbec
            let tempArr = [];
            tempArr.push(matrix?.[i - 1]?.[j - 1]);
            tempArr.push(matrix?.[i - 1]?.[j]);
            tempArr.push(matrix?.[i - 1]?.[j + 1]);
            tempArr.push(matrix?.[i]?.[j - 1]);
            tempArr.push(matrix?.[i]?.[j + 1]);
            tempArr.push(matrix?.[i + 1]?.[j - 1]);
            tempArr.push(matrix?.[i + 1]?.[j]);
            tempArr.push(matrix?.[i + 1]?.[j + 1]);
            mineArr[j] = tempArr.filter(Boolean).length;
        }
        res[i] = mineArr;
    }
    return res;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
