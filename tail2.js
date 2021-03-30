const assertEqual = function(actual, expected) {
  for (let i = 0; i <= expected.length - 1; i++) {
    if (actual[i] === expected[i]) {
      console.log(`✅✅✅ ${actual[i]} === ${expected[i]}`);
    } else {
      console.assert(actual[i] === expected[i], `🛑🛑🛑 ${actual[i]} !== ${expected[i]}`);
    }
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
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
