const uppercaseAll = (...word) => {
  let arr = []
  for (let letter of word) {
    arr.push(letter.toUpperCase())
  } return arr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
