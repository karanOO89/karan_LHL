const assertEqual = require('./assertEqual');
const tail = function(arr) {
  let m = [];
  for (let i = 1; i < arr.length; i++) {
    m.push(arr[i]);
  }
  return (m);
};
module.exports = tail;
// console.log(tail(["Hello", "Lighthouse", "Labs"]));
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0],"Lighthouse"); // => will always fail!
// assertEqual(result[1],"Labs");
