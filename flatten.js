// const eqArrays = (arr1, arr2) => {
//     let verifyArr = [];
//     if (arr1.length === arr2.length) {
//       for (let i = 0; i <= arr1.length - 1; i++) {
//         if (arr1[i] !== arr2[i]) {
//           verifyArr.push(false);
//         } else {
//           verifyArr.push(true);
//         }
//       }
//       if (verifyArr.includes(false)) {
//         return false;
//       } else {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   };

//   const assertArraysEq = (ar1, ar2) => {
//     if (eqArrays(ar1, ar2) === true) {
//       return console.log(`✅✅✅ ${ar1} === ${ar2}`);
//     } else {
//       return console.log(`🛑🛑🛑 ${ar1} !== ${ar2}`);
//     }
//   };
const flatten = (arr) => {
  const extractArr = [];
  // const extractArr= arr.reduce((acc, val) => acc.concat(val), []);
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let ele of arr[i]) {
        extractArr.push(ele);
        break;
      }
    } else {
      extractArr.push(arr[i]);
    }
  }

  console.log(extractArr);
  // for (ele of arr )
};

flatten([1, 2, [3, 4], 5, [6], ["a"]]);
