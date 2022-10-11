const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    if ((Array.isArray(matrix)) || (matrix.lenght > 0) || (matrix !== null)) {
        let i = 0;
        matrix.forEach(el => {
            el.forEach(elem => { if (elem === '^^') i++ });
        });
        return i;
    }
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
  countCats
};
