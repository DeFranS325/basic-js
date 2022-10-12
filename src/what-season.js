const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    console.log(Date.parse(date));
    if (date instanceof Date) {
        let month = date.getMonth();
        return month < 2 ? 'winter' : month < 5 ? 'spring' : month < 8 ? 'summer' : month < 11 ? 'autumn|fall' : 'winter';
    }
    else {
        if (date === undefined)
            return 'Unable to determine the time of year!';
            if ((Date.parse(date) > 0) ||
                (isNaN(date)) ||
                (date.toString() === new Date().toString()))
                throw new NotImplementedError("Invalid date!");
    }
}

module.exports = {
    getSeason
};
