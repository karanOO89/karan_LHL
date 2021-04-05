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
const isObject = function (prop) {
  if (prop == null) {
    return false;
  }

  return typeof prop === "object";
};
const eqObjects = function (object1, object2) {
  let k1 = Object.keys(object1);
  let k2 = Object.keys(object2);
  x = false;

  if (k1.length !== k2.length) {
    return x;
  }

  for (let prop in object1) {
    if (isObject(object1[prop]) && isObject(object2[prop])) {
      eqObjects(object1[prop], object2[prop]);
    }
    if (Array.isArray(object1[prop]) && Array.isArray(object2[prop])) {
      if (!eqArrays(object1[prop], object2[prop])) return x;
    }

    if (object1[prop] !== object2[prop]) {
      return x;
    }
  }
  x = true;
  return x;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), true);
