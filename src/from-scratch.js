// Question 1
const addToFrontOrBack = (arr , value, isFront) => {
  if (isFront) {
    arr.unshift(value); // Adds value to the front of the array
  } else {
    arr.push(value); // Adds value to the back of the array
  }
  return arr; // Return the modified array
};
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1]
const arr3 = []
// console.log(addToFrontOrBack(arr1, 6, false))
// console.log(addToFrontOrBack(arr2, 0, true));
// console.log(addToFrontOrBack(arr3, 1, false))

// Question 2
const reverseString = (str ) => {
  return str.split('').reverse().join('')
};
// console.log(reverseString("hello"))

// Question 3
const newArrayFullOf = (val, numOfVal) => {
   return new Array(numOfVal).fill(val)
};

// Question 4 

const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [1, 2, 3];

const insertIntoMiddle = (arr, val) => {
  let array = Math.floor(arr.length / 2)
  arr.splice(array, 0, val)   
  return arr      
};
// console.log(insertIntoMiddle(arrOne, 6))
// console.log(insertIntoMiddle(arrTwo, 5));

// Question 5

const deleteFromMiddle = (arr) => {
  let array = Math.floor(arr.length / 2)
  arr.splice(array, 1)  
  return arr     
};
// console.log(deleteFromMiddle(arrOne))
// console.log(deleteFromMiddle(arrTwo));

// Question 6

const arr = ['a', 'b', 'c', 'd', 'e'];
const isRightIndex = (arr, val, index) => {
  if (arr[index] === val ){
    return true; 
  }else {
    return false;
  }
};
// console.log((isRightIndex(arr, 'a', 0)));
// console.log((isRightIndex(arr, 'a', 1)));
// console.log((isRightIndex(arr, 'WOW', 1)));

// Question 7
const arr01 = [1.1, 2.2, 3.3];
const roundAllNumsDown = (arr) => {
 let array = arr.map((arr) => Math.floor(arr));
 return array
};
// console.log(arr01)
// console.log(roundAllNumsDown(arr01))

// Question 8
const arr001 = [[1, 2], [3, 4], [5, 6]];
const arr002 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const getAllYCoordinates = (arr) => {
  let yCoordinates = [];
  for (let i = 0; i < arr.length; i++){
   yCoordinates.push(arr[i][1])
  }
  return yCoordinates
};
console.log(arr001)
console.log(arr002)
console.log(getAllYCoordinates(arr001))
console.log(getAllYCoordinates(arr002))

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
