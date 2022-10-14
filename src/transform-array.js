const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (Array.isArray(arr)){
    let copyArr = arr.slice();
    let resArr = new Array();
    arr.forEach((el, index) => {
      if(!Array.isArray(el)){
          switch(el){
              case '--discard-next':
                  if (copyArr[index + 1] != undefined)
                      delete copyArr[index + 1];
                  delete copyArr[index];
                  break;
              case '--discard-prev': 
                  if (copyArr[index - 1] != undefined)
                      delete copyArr[index - 1];
                  delete copyArr[index];
                  break;
              case '--double-next':
                  if (copyArr[index + 1] != undefined)
                      copyArr.splice(index, 1, arr[index + 1]);
                  else
                      copyArr.splice(index, 1);                    
                  break;
              case '--double-prev': 
                  if (copyArr[index - 1] != undefined)
                      copyArr.splice(index, 1, arr[index - 1]);
                  else
                      copyArr.splice(index, 1);
                  break;
          }
      }
      else {
          transform(el);
      }
    });
    copyArr.forEach(elem => {
      if (elem != undefined)
          resArr.push(elem);
    })
    return resArr;
  }
  else
      throw new Error("'arr' parameter must be an instance of the Array!");
  // remove line with error and write your code here
}

module.exports = {
  transform
};
