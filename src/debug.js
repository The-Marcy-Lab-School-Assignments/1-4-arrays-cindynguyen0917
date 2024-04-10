/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  return arr.splice(0, Infinity)
};
console.log(clearArr([1, 2, 3, 4, 5]))
console.log(clearArr(['a', 'b', 'c']))
console.log(clearArr([]))

const getFirstItem = (array) => {
  let arr2 = array.slice()
  let first = arr2.shift()
  return first
};
getFirstItem([1, 2, 3, 4, 5])
getFirstItem(['a', 'b', 'c'])
getFirstItem([])


module.exports = {
  clearArr,
  getFirstItem,
};
