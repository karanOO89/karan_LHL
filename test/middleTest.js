const assertArraysEq = require('../assertArraysEq');
const middle= require('../middle');
// const assertArraysEq = require('../assertArraysEq');
console.log(middle([])); // => []
// console.log(assertArraysEq (middle([1]),[])); // => []
// console.log(middle([1, 2])); // => []
// console.log(assertArraysEq (middle([1, 2, 3]),[2])); // => [2]
// assertArraysEq(middle([1, 2, 3, 4, 5]), [3]); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEq(middle([1, 2, "a", 4, 5]), ["a"]);
// // console.log(assertArraysEq (middle([1, 2, 'a', 4, 5 ]),['b']));