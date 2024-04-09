const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    console.log((arr.unshift(value)))
  } else {
    console.log((arr.push(value)))
  }
};
const reverseString = (str) => {
  const strCopy = str.split('');
  //console.log(strCopy)

  return strCopy.reverse().join('')
};

const newArrayFullOf = (value, numOfValue) => {
  const arr = Array(numOfValue).fill(value)
  return arr

};

const insertIntoMiddle = (arr, value) => {
  let middle = Math.floor(arr.length / 2)
  // console.log(middle)
  arr.splice(middle, 0, value)
  console.log(arr)
}
const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(middle, 1)
  console.log(arr)
};

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

const roundAllNumsDown = (arr) => {
  const arr2 = []
  for (let num of arr) {
    arr2.push(Math.floor(num))
  } return arr2

};

const getAllYCoordinates = (arrOfCoords) => {
  let arr2 = []
  for (let i = 0; i < arrOfCoords.length; i++) {
    for (let j = 0; j < arrOfCoords[i].length; j++) {
      if (j === 1) {
        arr2.push(arrOfCoords[i][j])
      }
    }
  } return arr2
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
