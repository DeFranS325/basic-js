const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if ((Array.isArray(members) == true) && (members != null) && (members.length > 0)) {
        members = members.map(a => { return typeof (a) === 'string' ? a.trim().toUpperCase() : a; }).sort();
        let res = '';
        members.map(el => {
            if (typeof (el) === 'string')
                res += el.substring(0, 1);
        });
        return res;
    }
    else return false;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
