const assert = require("./assertArraysEqual");
const letterPositions = (str) => {
  let arr = str.split("").filter((x) => x !== " ");
  let dumArr = [];
  let result = {};

  for (i = 0; i < arr.length; i++) {
    // let ky =Object.keys(result)
    // // console.log(ky)
    // if(ky.length === 0){
    if (!result[arr[i]]) {
      result[arr[i]] = [i];
    } else {
      result[arr[i]].push(i);
    }
  }
  return result;
};

assert(letterPositions("lighthouse in the house").i, [1, 10]);
