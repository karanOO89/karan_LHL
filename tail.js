const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  let m = [];
  for (let i = 1; i < arr.length; i++) {
    m.push(arr[i]);
  }
  return (m);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0],"Lighthouse"); // => will always fail!
assertEqual(result[1],"Labs");
