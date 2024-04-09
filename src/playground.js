// const { clearArr, getFirstItem } = require('./debug');
// const {
//   addToFrontOrBack,
const addToFrontOrBack = (arr, value, isFront) => {
    if (isFront) {
        console.log((arr.unshift(num)))
    } else {
        console.log((arr.push(num)))
    }
};
//   reverseString,
const reverseString = (str) => {
    const strCopy = str.split('');
    //console.log(strCopy)

    return strCopy.reverse().join('')
};
//console.log(reverseString('Cindy'))
//   newArrayFullOf,
const newArrayFullOf = (value, numOfValue) => {
    const arr = Array(numOfValue).fill(value)
    return arr

};
console.log(newArrayFullOf(1, 5))
console.log(newArrayFullOf(true, 2))
//   insertIntoMiddle,
//   deleteFromMiddle,
//   isRightIndex,
//   roundAllNumsDown,
//   getAllYCoordinates,
// } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');
