const uppercaseAll = (...words) => {
let upperCaseWords = [];
  for (let word of words) {
    upperCaseWords.push(word.toUpperCase());
  }
  return upperCaseWords;
};

console.log(uppercaseAll("why", "did" ,'You', 'make', 'us', 'struggle', 'madhuri'))

const destructureCoordinates = (coordinates) => {

  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};
console.log(destructureCoordinates([1, 3]))
console.log(destructureCoordinates([2, 5]))

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
