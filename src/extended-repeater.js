const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (options === undefined) return str;
    if (options.separator === undefined) options.separator = '+';
    if (options.addition === undefined) options.addition = '';
    if (options.additionSeparator === undefined) options.additionSeparator = '|';

    str = typeof (str) === 'string' ? str : String(str);
    let rt = Number.isInteger(options.repeatTimes) ? options.repeatTimes : 1;
    let sep = typeof (options.separator) === 'string' ? options.separator : String(options.separator);
    let add = typeof (options.addition) === 'string' ? options.addition : String(options.addition);
    let addRT = Number.isInteger(options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
    let addSep = typeof (options.additionSeparator) === 'string' ? options.additionSeparator : String(options.additionSeparator);

    let res = '';
    let temp = '';
    for (let i = 0; i < addRT; i++) {
        temp += add + addSep;
    }
    if (addSep.length > 0)
        temp = temp.slice(0, (-1) * addSep.length);
    for (let i = 0; i < rt; i++) {
        res += str + temp + sep;
    }
    if (sep.length > 0)
        res = res.slice(0, (-1) * sep.length);
    return res;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
  repeater
};
