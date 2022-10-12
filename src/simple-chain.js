const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 
 const chainMaker = {
  mass: [],
  getLength() {
    return this.mass.length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if(value === undefined)
      value = '';
    if (value == null)
      value = 'null';
    console.log(value.toString());
    this.mass.push(value.toString());
    return this
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if ((typeof (position) === 'number') && (position > 0)) {
      this.mass.splice(position-1, 1);
      return this;
    }
    else {
      this.mass = [];
      throw new NotImplementedError('You can\'t remove incorrect link!');
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.mass.reverse();
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let res = '';
    this.mass.forEach((el, index, arr) => {
      if (index < arr.length - 1)
        res += `( ${el} )~~`;
      else
        res += `( ${el} )`;
    })
    return res;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
