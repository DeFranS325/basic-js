const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(direct) {
        if (direct === false)
            this.direct = false;
        else
            this.direct = true;
    }

    a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	

    encrypt(msg, key) {
        if ((msg === undefined) || (key === undefined))
            throw new Error('Incorrect arguments!');

        if (key.length < msg.length)
            key = key.padEnd(msg.length, key);

        for (let i = 0; i < msg.length; i++) {
            if (!this.a.includes(msg[i].toUpperCase())) {
                key = key.substring(0, i) + msg[i] + key.substring(i, key.length);
            }
        }

        key = key.substring(0, msg.length);

        let codeA = 'A'.charCodeAt(0);
        let abcCount = 26;

        let result = [];

        for (let i = 0; i < msg.length; i++) {
            if (!this.a.includes(msg[i].toUpperCase())) {
                result.push(msg[i]);
            } else {
                let letterIdx = msg.toUpperCase().charCodeAt(i) - codeA;
                let shift = key.toUpperCase().charCodeAt(i) - codeA;

                result.push(
                    String.fromCharCode(codeA + (letterIdx + shift) % abcCount)
                );
            }
        }

        if (!this.direct)
            return result.reverse().join('');
        return result.join('');
    }

    decrypt(msg, key) {        
        if ((msg === undefined) || (key === undefined))
            throw new Error('Incorrect arguments!');

        if (key.length < msg.length)
            key = key.padEnd(msg.length, key);

        for (let i = 0; i < msg.length; i++) {
            if (!this.a.includes(msg[i].toUpperCase())) {
                key = key.substring(0, i) + msg[i] + key.substring(i, key.length);
            }
        }

        key = key.substring(0, msg.length);

        let codeA = 'A'.charCodeAt(0);
        let abcCount = 26;

        let result = [];

        for (let i = 0; i < msg.length; i++) {
            if (!this.a.includes(msg[i].toUpperCase())) {
                result.push(msg[i]);
            } else {
                result.push(this.getDecryptChar(msg[i], key[i]));
            }
        }

        if (!this.direct)
            return result.reverse().join('');
        return result.join('');
    }

    getCryptoChar(charMsg, charKey) {
        let res;
        let posCharMsg = this.a.indexOf(charMsg.toUpperCase()) + 1;
        let posCharKey = this.a.indexOf(charKey.toUpperCase()) + 1;
        if ((posCharMsg + posCharKey) % 26 === 0)
            res = this.a[24];
        else
            res = this.a[((posCharMsg + posCharKey) % 26) - 2];
        
        return res;
    }

    getDecryptChar(charMsg, charKey) {
        let res;
        let posCharMsg = this.a.indexOf(charMsg.toUpperCase()) + 1;
        let posCharKey = this.a.indexOf(charKey.toUpperCase()) + 1;
        let index = /*(posCharMsg - posCharKey) < 0 ? (((posCharMsg - posCharKey) % 26) + 26) % 26 :*/ (posCharMsg - posCharKey + 26) % 26;
        res = this.a[index];

        return res;
    }
}

module.exports = {
  VigenereCipheringMachine
};
