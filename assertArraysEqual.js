// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ ${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
//   }
// };
const eqArrays = (arr1, arr2) => {
  let verifyArr = [];
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length - 1; i++) {
      if (arr1[i] !== arr2[i]) {
        verifyArr.push(false);
      } else {
        verifyArr.push(true);
      }
    }
    if (verifyArr.includes(false)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
const assertArraysEq = (ar1, ar2) => {
  if (eqArrays(ar1, ar2) === true) {
    return console.log(`✅✅✅ ${ar1} === ${ar2}`);
  } else {
    return console.log(`🛑🛑🛑 ${ar1} !== ${ar2}`);
  }
};

assertArraysEq([1, 2, 3], [1, 2, 3]);
