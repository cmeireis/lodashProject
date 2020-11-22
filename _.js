
const _ = {
  clamp(num, lowerNum, upperNum) {
    var lowerClampedValue = Math.max(num, lowerNum);
    var clampedValue = Math.min(lowerClampedValue, upperNum);
    return clampedValue;
    },

  inRange(num, startNum, endNum) {
    if (endNum === undefined) {
      endNum = startNum;
      startNum = 0;
    }
    if (startNum > endNum) {
      var temp = endNum;
      endNum = startNum;
      startNum = temp;
    }
    var isInRange = startNum <= num && num < endNum;
        return isInRange;
    },
  words(str) {
    var words = str.split(' ');
    return words;
  },
  pad(str, length) {
    if(length <= str.length) {
      return str;
    }
    var startPaddingLength = Math.floor((length - str.length) / 2);
    var endPaddingLength = length - str.length - startPaddingLength;
    var paddedString = " ".repeat(startPaddingLength) + `${str}` + " ".repeat(endPaddingLength);
    return paddedString;
  },
  has(obj, key) {
    var hasValue = obj[key] !== undefined
      return hasValue;
  },

  invert(object) {
    let invertedObject = {};
    for (let key in object){
      invertedObject[object[key]] = key;
    } return invertedObject
  },

  findKey(object, predicate){
    for(let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      };
    };
    return undefined;
  },

  drop(array, n) {
    let droppedArray = array.slice(n);
    if(n) {
      n = 1;
    };
    return droppedArray;
  },

  dropWhile(array, predicate) {
    const callBack = (element, index) => {
      return !predicate(element, index, array);
    }; 
    let dropNumber = array.findIndex(callBack);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size=1) {
    let arrayChunks = [];
    for(let i = 0;i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
      return arrayChunks;
  }

};

module.exports = _;