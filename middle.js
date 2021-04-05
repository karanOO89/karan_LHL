// const eqArrays = (arr1, arr2) => {
//   let verifyArr = [];
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i <= arr1.length - 1; i++) {
//       if (arr1[i] !== arr2[i]) {
//         verifyArr.push(false);
//       } else {
//         verifyArr.push(true);
//       }
//     }
//     if (verifyArr.includes(false)) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// };

const assertArraysEq = require('./assertArraysEq')
const middle = (input) => {
  let midIndex = input.length / 2;
  const midArr = [];
  if (midIndex === 0.5 || midIndex === 1 || midIndex == []) {
    return midArr;
  } else if (input.length % 2 === 0) {
    midArr.push(input[midIndex - 1]);
    midArr.push(input[midIndex]);
    return midArr;
  } else if (input.length % 2 !== 0) {
    midArr.push(input[Math.floor(midIndex)]);
    return midArr;
  }
};

// assertArraysEq(middle([]), []); // => []
// // console.log(assertArraysEq (middle([1]),[])); // => []
// // console.log(middle([1, 2])); // => []
// // console.log(assertArraysEq (middle([1, 2, 3]),[2])); // => [2]
// assertArraysEq(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// // console.log(middle([1, 2, 3, 4])); // => [2, 3]
// // console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// assertArraysEq(middle([1, 2, "a", 4, 5]), ["a"]);
// // console.log(assertArraysEq (middle([1, 2, 'a', 4, 5 ]),['b']));

module.exports=middle;
