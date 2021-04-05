const assert = require("chai").assert;
const middle = require("../middle");
describe("#middle", () => {
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
  it("returns ['a'] for [1, 2, 'a', 4, 5]", () => {
    assert.deepEqual(middle([1, 2, "a", 4, 5]), ["a"]);
  });
  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(["5"]), "5");
  // });
  // it("returns 5 for [5 ,6 ,7]", () => {
  //   assert.strictEqual(head([5, 6, 7]), 5);
  // });
  // it("returns 'Hello' for ['Hello','Lighthouse', 'Labs']", () => {
  //   assert.strictEqual(head(['Hello','Lighthouse', 'Labs']), 'Hello');
  // });
});
// const assertArraysEq = require('../assertArraysEq');
// console.log(middle([])); // => []
// console.log(assertArraysEq (middle([1]),[])); // => []
// console.log(middle([1, 2])); // => []
// console.log(assertArraysEq (middle([1, 2, 3]),[2])); // => [2]
// assertArraysEq(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// assertArraysEq(middle([1, 2, "a", 4, 5]), ["a"]);
// // console.log(assertArraysEq (middle([1, 2, 'a', 4, 5 ]),['b']));
