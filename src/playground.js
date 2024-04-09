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
const insertIntoMiddle = (arr, value) => {
    let middle = Math.floor(arr.length / 2)
    // console.log(middle)
    arr.splice(middle, 0, value)
    console.log(arr)
}
insertIntoMiddle([1, 2, 3, 4, 5], 6)
//   deleteFromMiddle,
//   isRightIndex,
//   roundAllNumsDown,
//   getAllYCoordinates,
// } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');
