const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};
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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);
