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
const deleteFromMiddle = () => {
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
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
