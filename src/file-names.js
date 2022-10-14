const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let files = {};
    let res = [];

    names.forEach(el => {
        if (files[el] === undefined) {
            files[el] = 1;
            res.push(el);
        }
        else {
            let count = files[el] + 1;
            files[el] = count;
            res.push(`${el}(${count - 1})`);
            files[`${el}(${count - 1})`] = 1;
        }
    });

    return res;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
