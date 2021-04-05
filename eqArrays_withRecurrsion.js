const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};
// const isArray = function (ele) {
//   if (ele == null) {
//     return false;
//   }

//   return typeof ele === "array";
// };
const eqArrays = (arr1, arr2) => {
  // let verifyArr = [];
  x = false;
  if (arr1.length !== arr2.length) return x;
  
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])) {
            // console.log(arr1[i] ,arr2[i])
      if (arr1[i] !== arr2[i]) {
        console.log(arr1[i],arr2[i])
        return x
        
      } 
      // else {
      //   verifyArr.push(true);
      //   // console.log(verifyArr)
      // }
    } 
    else {
      eqArrays(arr1[i],arr2[i]);
    }
  }
  x = true;
  return x
};


console.log(
  eqArrays( [[2, 3], [4]],[[2, 3],[5]]  )
); // => false
// eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
// console.log(eqArrays([1,  3], [1,  3])); // => should PASS
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true