const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let res = {};
    let subDomain = [];

    domains.forEach(el => {
        let temp = el.split('.').reverse();
        let dns = '';
        let dnsReverse = '';
        temp.forEach(elem => {
            dns = elem + '.' + dns;
            dnsReverse += '.' + elem;
            if (subDomain.indexOf(dns.substring(0, dns.length - 1)) < 0) {
                subDomain.push(dns.substring(0, dns.length - 1));
                res[dnsReverse] = (domains.filter(function (elem) {
                    return elem.includes(dns.substring(0, dns.length - 1));
                })).length;
            }
        });
    });
    return res;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
