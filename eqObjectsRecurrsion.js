const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};
const eqArrays = function (arr1, arr2) {
  let verifyArr = [];
  let x = false;
  if (arr1.length !== arr2.length) {
    return x;
  }

  for (let i in arr1) {
    console.log(arr1[i]);
    console.log(arr2[i]);
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      console.log("csdc");
      eqArrays(arr1[i], arr2[i]);
    } 
      if (arr1[i] !== arr2[i]) {
        return x;
      }
    
  }
  x = true;
  return x;
};
const isObject = function (prop) {
  if (prop == null) {
    return false;
  }

  return typeof prop === "object";
};
const eqObjectsRecurrsion = function (object1, object2) {
  let k1 = Object.keys(object1);
  let k2 = Object.keys(object2);
  x = false;

  if (k1.length !== k2.length) {
    return x;
  }

  for (let prop in object1) {
    if (isObject(object1[prop]) || isObject(object2[prop])) {
      eqObjects(object1[prop], object2[prop]);
      if (eqObjects(object1[prop], object2[prop])) {
        eqObjects(object1[prop], object2[prop]);
      } else {
        return false;
      }
    }
    // if (Array.isArray(object1[prop]) && Array.isArray(object2[prop])) {
      
    //   if (!eqArrays(object1[prop], object2[prop])) 
    //   return x;
    // }

    if (object1[prop] !== object2[prop]) {
      return x;
    }
  }
  x = true;
  return x;
};
module.exports = eqObjectsRecurrsion
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(
//   eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
//   false
// ); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), true);
// console.log(eqObjects([[2, 3], [4]], [[2, 3], [4]])) // => true

// console.log(
//   eqObjects(
//     [[2, 3], [4]],
//     [
//       [2, 3],
//       [4, 5],
//     ]
//   )
// ); // => false
// eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false
