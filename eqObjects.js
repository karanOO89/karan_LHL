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
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let x = false;
  if (keys1.length !== keys2.length) return x;

  for (const key1 of keys1) {
    value1 = object1[key1];
    value2 = object2[key1];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) return x;
    } else {
      if (value1 !== value2) return x;
    }
  }

  x = true;
  return x;
};
module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
