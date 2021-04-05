// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ ${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
//   }
// };
const eqArrays = require('./eqArrays')

const assertArraysEq = (actual, expected) => {
  if (eqArrays(actual, expected) === true) {
    console.log(
      "✅✅✅ " + JSON.stringify(actual) + " === " + JSON.stringify(expected)
    );
  } else {
    console.log(
      "🛑🛑🛑 " + JSON.stringify(actual) + " !== " + JSON.stringify(expected)
    );
  }
  return undefined;
};

module.exports = assertArraysEq
// assertArraysEq([1, 2, 3], [1, 2, 3]);
