const uppercaseAll = (...theArgs) => {
  let arr = []
  for (let word of theArgs) {
    arr.push(word.toUpperCase())
  } return arr
};

const destructureCoordinates = (coordinates) => {
  const x = coordinates[0];
  const y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
