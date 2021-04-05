const assertEqual = require('./assertEqual');
const tail = function(arr) {
  let m = [];
  for (let i = 1; i < arr.length; i++) {
    m.push(arr[i]);
  }
  return (m);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
