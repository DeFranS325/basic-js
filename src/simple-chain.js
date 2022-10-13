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
    console.log('\'' + value.toString() + '\'');
    this.mass.push(value.toString());
    return this
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
     removeLink(position) {
         if ((Number.isInteger(position)) && (position > 0) && (position < this.mass.length)) {
          this.mass.splice(position - 1, 1);
          return this;
    }
    else {
      this.mass = [];
      throw new Error("You can't remove incorrect link!");
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
      this.mass.forEach(el => {res += `( ${el} )~~` });
      this.mass = [];
      return res.slice(0, -2);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
