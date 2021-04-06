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
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }
  module.exports=map;
// const words = ["ground", "control", "to", "major", "tom"];
// const words2 = ["land", "sea", "air", "space", "star"];
// const words3 = ["hello", "namaste", "hola", "ciao"];

// const results1 = map(words, word => word[0]);
// const results2 = map(words2, word => word[0]);
// const results3 = map(words3, word => word[0]);
// assertArraysEq(results2,[ 'l', 's', 'a', 's', 's' ]);
// assertArraysEq(results1,[ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEq(results3,[ 'h', 'n', 'k', 'c' ]);