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
const deleteFromMiddle = (arr) => {
    let middle = Math.floor(arr.length / 2)
    arr.splice(middle, 1)
    console.log(arr)
};
deleteFromMiddle([1, 2, 3, 4, 5])
//   isRightIndex,
const isRightIndex = (arr, value, index) => {
    let arr2 = arr.slice()
    for (let element of arr2) {
        if (element === arr[index]) {
            return true
        } else {
            return false
        }
    }
};
//   roundAllNumsDown,
//   getAllYCoordinates,
// } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');
