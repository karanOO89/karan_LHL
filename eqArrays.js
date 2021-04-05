const assertEqual = require('./assertEqual');
const eqArrays = (arr1, arr2) => {
  let verifyArr = [];

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i <= arr1.length - 1; i++) {
    

    if (arr1[i] !== arr2[i]) {
      verifyArr.push(false);
    } else {
      verifyArr.push(true);
    }
  }

  if (verifyArr.includes(false)) {
    return false;}

  return true;
};
module.exports = eqArrays;

// console.log(eqArrays([1,  3], [1,  3])); // => should PASS
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

// console.log(
//   eqArrays(
//     [[2, 3], [4]],
//     [
//       [2, 3],
//       [4, 5],
//     ]
//   )
// ); // => false
// eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
