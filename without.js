const without = (arr1, arr2) => {
  let dummyArr = [];
  for (i = 0; i <= arr1.length - 1; i++) {
    if (!arr2.includes(arr1[i])) {
      dummyArr.push(arr1[i]);
    }
  }
  return dummyArr;
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
  const assertArraysEq = (ar1, ar2) => {
    if (eqArrays(ar1, ar2) === true) {
      return console.log(`✅✅✅ ${ar1} === ${ar2}`);
    } else {
      return console.log(`🛑🛑🛑 ${ar1} !== ${ar2}`);
    }
  };

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse5"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
assertArraysEq(words, ["hello", "world", "lighthouse"]);
