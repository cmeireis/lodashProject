
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
  has
}



// Do not write or modify code below this line.
module.exports = _;