const assert = require("./assertEqual")
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};
assert(head([5, 6, 7]), 5);
assert(head(["Hello", "Lighthouse", "Labs"]), "Hello");