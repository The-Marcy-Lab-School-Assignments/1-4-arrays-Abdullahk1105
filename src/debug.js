/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
  return arr;
}
// const arr1 = [1, 2, 3, 4, 5]
// console.log(clearArr(arr1))


const getFirstItem = (array) => {
  let newArray = array.slice()
  return newArray.shift();
};
const arr01 = [1, 2, 3, 4, 5]
console.log(getFirstItem(arr01))
console.log(arr01)
const arr2 = ['a', 'b', 'c'];
console.log(getFirstItem(arr2))

module.exports = {
  clearArr,
  getFirstItem,
};
